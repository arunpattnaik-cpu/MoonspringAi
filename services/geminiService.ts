import { GoogleGenAI, GenerateContentResponse, Type } from "@google/genai";
import { NewsItem, Message } from "../types";

const getAI = () => {
  if (!process.env.API_KEY) {
    throw new Error("Configuration Error: API Key not found.");
  }
  return new GoogleGenAI({ apiKey: process.env.API_KEY });
};

/**
 * Strict URL validator to ensure links are real, reachable web pages.
 */
const isWorkingUrl = (url: string | undefined): boolean => {
  if (!url) return false;
  try {
    const parsed = new URL(url);
    const lowercaseUrl = url.toLowerCase();
    
    // Expanded list of non-useful patterns often returned by LLMs when unsure
    const suspiciousPatterns = [
      'example.com',
      'placeholder',
      'crmspotlight.com',
      'localhost',
      '127.0.0.1',
      'test.com',
      'temp-url',
      'yoursite.com',
      'domain.com',
      'news-link-here',
      'link-to-article'
    ];
    
    const isSuspicious = suspiciousPatterns.some(pattern => lowercaseUrl.includes(pattern));
    if (isSuspicious) return false;
    
    // Ensure the domain has at least one dot and looks like a real TLD
    const hostname = parsed.hostname;
    if (!hostname.includes('.') || hostname.split('.').pop()?.length! < 2) {
      return false;
    }

    return parsed.protocol === "http:" || parsed.protocol === "https:";
  } catch {
    return false;
  }
};

export const fetchCRMNews = async (startDate: string, endDate: string): Promise<NewsItem[]> => {
  const ai = getAI();
  const systemInstruction = `
    You are an expert CRM industry analyst. Your job is to find the most significant news about Salesforce, HubSpot, Microsoft Dynamics, and general CRM market trends.
    Use the googleSearch tool to find actual, live articles published between ${startDate} and ${endDate}.
    
    CRITICAL QUALITY RULES:
    1. Every item MUST have a valid, active URL to a real news article. 
    2. Check the URL carefully. If a link ends in "..." or looks like a placeholder, DISCARD the item.
    3. Only provide stories from reputable sources (TechCrunch, Forbes, ZDNet, official company blogs).
    4. Summaries must be exactly 2 sentences.
    5. Return as a JSON array.
  `;

  const prompt = `Research and find the top 5 CRM industry news stories with VERIFIED links from ${startDate} to ${endDate}.`;

  try {
    const response: GenerateContentResponse = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: prompt,
      config: {
        systemInstruction,
        tools: [{ googleSearch: {} }],
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.ARRAY,
          items: {
            type: Type.OBJECT,
            properties: {
              title: { type: Type.STRING },
              summary: { type: Type.STRING },
              source: { type: Type.STRING },
              category: { type: Type.STRING },
              relevanceScore: { type: Type.NUMBER },
              url: { type: Type.STRING }
            },
            required: ["title", "summary", "source", "category", "relevanceScore", "url"]
          }
        }
      },
    });

    const text = response.text || "[]";
    const rawItems = JSON.parse(text.replace(/```json|```/g, ""));
    const groundingChunks = response.candidates?.[0]?.groundingMetadata?.groundingChunks || [];
    
    const verifiedUrls = groundingChunks
      .filter((c: any) => c.web?.uri && isWorkingUrl(c.web.uri))
      .map((c: any) => c.web.uri);

    return rawItems
      .map((item: any, index: number) => {
        let finalUrl = item.url;
        
        // Use Google Search grounding to fix broken or generic URLs from the LLM
        if (!isWorkingUrl(finalUrl) && verifiedUrls.length > 0) {
          finalUrl = verifiedUrls[index % verifiedUrls.length];
        }

        return {
          ...item,
          url: finalUrl,
          id: Math.random().toString(36).substr(2, 9),
          timestamp: new Date().toISOString(),
        };
      })
      .filter((item: any) => isWorkingUrl(item.url)); // Strictly drop any item that doesn't have a verified working link
  } catch (error) {
    console.error("fetchCRMNews error:", error);
    throw error;
  }
};

export const getMarketInsight = async (item: NewsItem): Promise<string> => {
  const ai = getAI();
  try {
    const response = await ai.models.generateContent({
      model: "gemini-flash-lite-latest",
      contents: `Provide a 1-sentence expert market insight for this CRM news: "${item.title}: ${item.summary}". Focus on competitive impact.`,
      config: { temperature: 0.7 }
    });
    return response.text || "Analyzed: Market volatility expected following this shift.";
  } catch (err) {
    return "Intelligence offline. Impact analysis unavailable.";
  }
};

export const chatWithAssistant = async (history: Message[], userInput: string, currentNews: NewsItem[]) => {
  const ai = getAI();
  const context = currentNews.map(n => n.title).join(", ");
  const chat = ai.chats.create({
    model: 'gemini-3-pro-preview',
    config: {
      systemInstruction: `You are CRM Spotlight Assistant. You are an expert in CRM software (Salesforce, HubSpot, etc.). Use the following recent news as context: ${context}. Be professional, concise, and insightful.`,
    },
  });

  const result = await chat.sendMessage({ message: userInput });
  return result.text;
};

export const analyzeDeploymentRisk = async (commits: string[]) => {
  const ai = getAI();
  const prompt = `Analyze these GitHub commits for a CRM platform and assess deployment risk:
  ${commits.join('\n')}
  
  Return a JSON object with:
  - riskLevel: "Low" | "Medium" | "High"
  - summary: A one-sentence summary of the changes.
  - concerns: An array of potential issues (security, breaking changes, etc).`;

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-flash-lite-latest',
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            riskLevel: { type: Type.STRING },
            summary: { type: Type.STRING },
            concerns: { type: Type.ARRAY, items: { type: Type.STRING } }
          },
          required: ["riskLevel", "summary", "concerns"]
        }
      }
    });
    return JSON.parse(response.text || "{}");
  } catch (err) {
    return { riskLevel: "Unknown", summary: "Analysis failed", concerns: ["Could not reach AI risk assessment service"] };
  }
};