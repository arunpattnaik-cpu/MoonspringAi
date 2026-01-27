
import React, { useState } from 'react';
import { GoogleGenAI } from "@google/genai";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');
  const [aiAnalysis, setAiAnalysis] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'AI Consulting Inquiry',
    message: ''
  });

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('submitting');
    
    // Prepare data for Web3Forms
    const submissionData = new FormData(e.currentTarget);
    submissionData.append("access_key", "1c447079-9d3b-4f59-b968-93f3570e77df");

    try {
      // 1. Trigger AI Triage in parallel for better UX
      const aiPromise = (async () => {
        try {
          const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
          const response = await ai.models.generateContent({
            model: 'gemini-3-flash-preview',
            contents: `Analyze this inquiry for MoonspringAI and provide a 1-sentence professional confirmation of how we can help. 
            Name: ${formData.name}
            Subject: ${formData.subject}
            Message: ${formData.message}`,
            config: {
              systemInstruction: "You are a professional triage assistant for MoonspringAI. Categorize the user's request and provide a reassuring, high-tech response about their specific needs.",
            }
          });
          return response.text || "Our specialists are reviewing your request details.";
        } catch (err) {
          return "Our team is analyzing your request for immediate prioritization.";
        }
      })();

      // 2. Submit to Web3Forms
      const web3Promise = fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: submissionData
      });

      // Wait for both (or at least the submission)
      const [aiText, response] = await Promise.all([aiPromise, web3Promise]);
      const data = await response.json();

      if (data.success) {
        setAiAnalysis(aiText);
        setStatus('success');
        // Reset form
        setFormData({ name: '', email: '', subject: 'AI Consulting Inquiry', message: '' });
      } else {
        throw new Error(data.message || "Submission failed");
      }
    } catch (error) {
      console.error("Submission error:", error);
      alert("There was an error sending your message. Please try again or contact us directly at hello@moonspringai.com");
      setStatus('idle');
    }
  };

  return (
    <div className="fixed inset-0 z-[110] flex items-center justify-center px-4 py-6 overflow-y-auto">
      {/* Overlay */}
      <div 
        className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm transition-opacity animate-in fade-in duration-300"
        onClick={onClose}
      ></div>

      {/* Modal */}
      <div className="relative bg-white w-full max-w-lg rounded-3xl shadow-2xl overflow-hidden animate-in zoom-in-95 duration-300">
        <div className="p-8">
          <div className="flex justify-between items-start mb-6">
            <div>
              <h2 className="text-2xl font-bold text-slate-900">Get in Touch</h2>
              <p className="text-slate-500 text-sm mt-1">Our experts usually respond within 24 hours.</p>
            </div>
            <button 
              onClick={onClose}
              className="p-2 hover:bg-slate-100 rounded-full transition-colors"
            >
              <svg className="w-6 h-6 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {status === 'success' ? (
            <div className="py-8 text-center animate-in fade-in slide-in-from-bottom-4 duration-500">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6 text-green-600">
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Message Dispatched!</h3>
              <p className="text-slate-500 mb-6 px-4">
                Your inquiry has been successfully sent to the MoonspringAI team.
              </p>
              
              {aiAnalysis && (
                <div className="mb-8 p-4 bg-blue-50 border border-blue-100 rounded-2xl text-left">
                  <div className="text-[10px] font-bold text-blue-600 uppercase tracking-widest mb-1">Instant AI Triage</div>
                  <p className="text-sm text-slate-700 leading-relaxed italic">"{aiAnalysis}"</p>
                </div>
              )}

              <button 
                onClick={onClose}
                className="w-full bg-slate-900 text-white py-4 rounded-xl font-bold hover:bg-slate-800 transition-all"
              >
                Done
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Name</label>
                  <input 
                    required
                    type="text" 
                    name="name"
                    placeholder="Jane Doe"
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all text-sm"
                    value={formData.name}
                    onChange={e => setFormData({...formData, name: e.target.value})}
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Email</label>
                  <input 
                    required
                    type="email" 
                    name="email"
                    placeholder="jane@company.com"
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all text-sm"
                    value={formData.email}
                    onChange={e => setFormData({...formData, email: e.target.value})}
                  />
                </div>
              </div>
              
              <div className="space-y-1">
                <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Subject</label>
                <select 
                  name="subject"
                  className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all text-sm appearance-none"
                  value={formData.subject}
                  onChange={e => setFormData({...formData, subject: e.target.value})}
                >
                  <option value="AI Consulting Inquiry">AI Consulting Inquiry</option>
                  <option value="Salesforce Einstein Integration">Salesforce Einstein Integration</option>
                  <option value="Custom AI Product Development">Custom AI Product Development</option>
                  <option value="Other / General">Other / General</option>
                </select>
              </div>

              <div className="space-y-1">
                <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Message</label>
                <textarea 
                  required
                  name="message"
                  rows={4}
                  placeholder="Tell us about your project or business needs..."
                  className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all text-sm resize-none"
                  value={formData.message}
                  onChange={e => setFormData({...formData, message: e.target.value})}
                ></textarea>
              </div>

              <button 
                type="submit"
                disabled={status === 'submitting'}
                className="w-full mt-4 bg-blue-600 text-white py-4 rounded-xl font-bold hover:bg-blue-700 transition-all shadow-xl shadow-blue-100 flex items-center justify-center disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {status === 'submitting' ? (
                  <div className="flex items-center gap-2">
                    <svg className="animate-spin h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    <span>Submitting...</span>
                  </div>
                ) : (
                  "Send Message"
                )}
              </button>
              
              <p className="text-[10px] text-center text-slate-400 mt-4 leading-relaxed">
                By submitting this form, you agree to our privacy policy. Your information is securely handled via Web3Forms and routed to our solutions team.
              </p>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
