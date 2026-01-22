
import React, { useState, useEffect, useCallback, useMemo } from 'react';
import Sidebar from './components/Sidebar';
import NewsCard from './components/NewsCard';
import AboutPage from './components/AboutPage';
import ChatBot from './components/ChatBot';
import { NewsItem, CRMCategory, User, AppView } from './types';
import { fetchCRMNews } from './services/geminiService';
import { getIntervalsSince } from './utils/dateUtils';
import { saveNewsToDatabase, checkDbConnection, fetchNewsFromDatabase } from './services/persistenceService';

const START_DATE = new Date('2025-01-06T00:00:00');
const CATEGORIES = ['All News', ...Object.values(CRMCategory)];

const DynamicLogo = () => (
  <div className="relative w-14 h-14 flex items-center justify-center group">
    {/* Animated background rings */}
    <div className="absolute inset-0 bg-indigo-600 rounded-[1.2rem] shadow-[0_10px_30px_rgba(79,70,229,0.3)] transition-all duration-500 group-hover:rotate-12 group-hover:scale-110"></div>
    <div className="absolute inset-0 bg-white/10 rounded-[1.2rem] scale-90 group-hover:scale-100 transition-transform duration-700 animate-[pulse_3s_infinite]"></div>
    
    <svg className="w-8 h-8 text-white relative z-10 transform transition-transform duration-700 group-hover:rotate-[360deg]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
    </svg>
  </div>
);

const App: React.FC = () => {
  const [items, setItems] = useState<NewsItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [dbStatus, setDbStatus] = useState<'connected' | 'error' | 'connecting'>('connecting');
  const [error, setError] = useState<string | null>(null);
  const [activeCategory, setActiveCategory] = useState('All News');
  const [searchQuery, setSearchQuery] = useState('');
  const [refreshing, setRefreshing] = useState(false);
  const [currentView, setCurrentView] = useState<AppView>('home');
  const [user, setUser] = useState<User | null>(null);

  const handleManualRefresh = useCallback(async (isInitialBackfill = false) => {
    setRefreshing(true);
    setError(null);
    try {
      const searchStart = isInitialBackfill 
        ? '2025-01-06' 
        : new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString().split('T')[0];
      
      const newItems = await fetchCRMNews(searchStart, new Date().toISOString().split('T')[0]);
      
      if (newItems.length > 0) {
        const intervals = getIntervalsSince(START_DATE, 6);
        const hydrated = newItems.map((item, idx) => ({
          ...item,
          timestamp: intervals[idx % intervals.length].toISOString()
        }));

        await saveNewsToDatabase(hydrated);
        const updatedItems = await fetchNewsFromDatabase();
        setItems(updatedItems);
      } else if (isInitialBackfill) {
        setError("Market scan complete. No new signals detected.");
      }
    } catch (err: any) {
      console.error("Crawl failed", err);
      setError(err.message || "Intelligence services temporarily unavailable.");
    } finally {
      setRefreshing(false);
      setLoading(false);
    }
  }, []);

  const loadData = useCallback(async () => {
    setLoading(true);
    setDbStatus('connecting');
    setError(null);
    try {
      const isOk = await checkDbConnection();
      if (isOk) {
        setDbStatus('connected');
        const dbItems = await fetchNewsFromDatabase();
        if (dbItems.length === 0) {
          await handleManualRefresh(true);
        } else {
          setItems(dbItems);
          setLoading(false);
        }
      } else {
        setDbStatus('error');
        setError("Cloud persistence disconnected.");
        setLoading(false);
      }
    } catch (err: any) {
      setDbStatus('error');
      setError('System integrity check failed.');
      setLoading(false);
    }
  }, [handleManualRefresh]);

  useEffect(() => {
    loadData();
  }, [loadData]);

  const handleSignIn = () => {
    setUser({
      name: "Intelligence Admin",
      email: "admin@crmspotlight.com",
      photo: `https://api.dicebear.com/7.x/shapes/svg?seed=AdminSpotlight`,
      isAdmin: true
    });
  };

  const filteredItems = useMemo(() => {
    return items.filter(item => {
      const matchesCategory = activeCategory === 'All News' || item.category === activeCategory;
      const matchesSearch = item.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                            item.summary.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [items, activeCategory, searchQuery]);

  const renderContent = () => {
    switch (currentView) {
      case 'about':
        return <AboutPage />;
      default:
        return (
          <div className="p-8 md:p-12 max-w-[1600px] mx-auto w-full">
            {currentView === 'home' && (
               <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
                <div>
                  <h2 className="text-4xl md:text-5xl font-black text-zinc-900 tracking-tightest mb-4">
                    Intelligence <span className="text-indigo-600">Feed</span>
                  </h2>
                  <p className="text-zinc-500 font-medium max-w-md">
                    Live signals and market shifts across the global CRM ecosystem.
                  </p>
                </div>
                
                <div className="flex items-center space-x-3 overflow-x-auto pb-2 md:pb-0 scrollbar-hide">
                  {CATEGORIES.map((cat) => (
                    <button
                      key={cat}
                      onClick={() => setActiveCategory(cat)}
                      className={`whitespace-nowrap px-5 py-2.5 rounded-2xl text-[10px] font-black uppercase tracking-widest transition-all duration-300 border ${
                        activeCategory === cat 
                          ? 'bg-zinc-900 text-white border-zinc-900 shadow-xl' 
                          : 'bg-white text-zinc-400 border-zinc-200 hover:border-zinc-400 hover:text-zinc-600'
                      }`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {loading || (refreshing && items.length === 0) ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[1,2,3,4,5,6].map(i => (
                  <div key={i} className="h-80 bg-white/50 backdrop-blur-sm rounded-[2rem] border border-zinc-100 animate-pulse p-8">
                    <div className="h-4 bg-zinc-100 rounded-full w-1/4 mb-6"></div>
                    <div className="h-8 bg-zinc-100 rounded-xl w-3/4 mb-4"></div>
                    <div className="h-8 bg-zinc-100 rounded-xl w-1/2 mb-8"></div>
                    <div className="space-y-3">
                      <div className="h-3 bg-zinc-50 rounded-full w-full"></div>
                      <div className="h-3 bg-zinc-50 rounded-full w-5/6"></div>
                    </div>
                  </div>
                ))}
              </div>
            ) : error ? (
              <div className="flex flex-col items-center justify-center min-h-[50vh] text-center px-4 bg-white/60 backdrop-blur rounded-[3rem] border border-zinc-200">
                <div className="w-24 h-24 bg-red-50 text-red-500 rounded-[2.5rem] flex items-center justify-center mb-8 shadow-inner">
                  <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-black text-zinc-900 mb-3">{error}</h3>
                <p className="text-zinc-500 text-sm max-w-sm mb-10 font-medium">Grid connection lost.</p>
                <button onClick={loadData} className="px-10 py-4 bg-zinc-900 text-white rounded-[1.5rem] font-black text-[10px] uppercase tracking-widest shadow-2xl hover:bg-indigo-600 transition-all active:scale-95">Reconnect</button>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pb-32">
                {filteredItems.map(item => (
                  <NewsCard key={item.id} item={item} />
                ))}
              </div>
            )}
          </div>
        );
    }
  };

  return (
    <div className="flex min-h-screen relative">
      <Sidebar updateCount={items.length} />

      <main className="flex-grow flex flex-col min-w-0">
        <header className="sticky top-0 z-40 bg-white/80 backdrop-blur-2xl border-b border-zinc-200/50">
          <div className="px-8 py-6 flex items-center justify-between gap-6">
            <div className="flex items-center space-x-12">
              <div className="flex items-center space-x-5 cursor-pointer group" onClick={() => setCurrentView('home')}>
                <DynamicLogo />
                <div>
                  <h1 className="text-2xl font-black tracking-tightest leading-none mb-1.5 transition-colors group-hover:text-indigo-600">
                    CRM<span className="text-indigo-600 group-hover:text-zinc-900">Spotlight</span>
                  </h1>
                  <p className="text-[9px] font-black text-zinc-400 uppercase tracking-[0.2em] leading-none">
                    Architecting Clarity in the CRM Ecosystem
                  </p>
                </div>
              </div>
              
              <nav className="hidden lg:flex items-center space-x-10">
                {(['home', 'about'] as AppView[]).map((view) => (
                  <button 
                    key={view}
                    onClick={() => setCurrentView(view)}
                    className={`text-[10px] font-black uppercase tracking-widest transition-all relative py-2 ${
                      currentView === view ? 'text-indigo-600' : 'text-zinc-400 hover:text-zinc-900'
                    }`}
                  >
                    {view}
                    {currentView === view && <span className="absolute bottom-0 left-0 w-full h-0.5 bg-indigo-600 rounded-full animate-in fade-in slide-in-from-left-2"></span>}
                  </button>
                ))}
              </nav>
            </div>

            <div className="flex items-center space-x-8">
              <div className="relative hidden xl:block">
                <input
                  type="text"
                  placeholder="Analyze market..."
                  className="w-72 pl-12 pr-6 py-3.5 bg-zinc-100 border-none rounded-2xl text-[11px] font-bold focus:ring-2 focus:ring-indigo-600 transition-all placeholder:text-zinc-400"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <svg className="absolute left-4 top-4 h-4 w-4 text-zinc-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>

              {user?.isAdmin && currentView === 'home' && (
                <button 
                  onClick={() => handleManualRefresh()}
                  disabled={refreshing}
                  className="px-6 py-3.5 bg-zinc-900 text-white rounded-2xl text-[10px] font-black uppercase tracking-widest hover:bg-indigo-600 disabled:opacity-50 transition-all flex items-center space-x-3 shadow-xl shadow-zinc-200"
                >
                  {refreshing ? <div className="w-3 h-3 border-2 border-white/30 border-t-white rounded-full animate-spin"></div> : (
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                    </svg>
                  )}
                  <span>{refreshing ? 'Scanning' : 'Market Scan'}</span>
                </button>
              )}

              <div className="flex items-center">
                {user ? (
                  <div className="flex items-center space-x-5 pl-8 border-l border-zinc-200">
                    <div className="text-right hidden sm:block">
                      <div className="text-[10px] font-black text-zinc-900 uppercase tracking-tightest leading-none mb-1">{user.name}</div>
                      <div className="text-[8px] font-bold text-indigo-600 uppercase tracking-widest">Global Admin</div>
                    </div>
                    <img src={user.photo} className="w-12 h-12 rounded-2xl border-2 border-white shadow-xl shadow-zinc-100" alt="Admin" />
                  </div>
                ) : (
                  <button onClick={handleSignIn} className="px-6 py-3.5 bg-white border border-zinc-200 text-zinc-900 rounded-2xl text-[10px] font-black uppercase tracking-widest hover:border-zinc-900 transition-all shadow-sm">
                    Auth Portal
                  </button>
                )}
              </div>
            </div>
          </div>
        </header>

        <div className="flex-grow overflow-y-auto">
          {renderContent()}
        </div>
      </main>

      <ChatBot currentNews={items} />
    </div>
  );
};

export default App;
