
import React, { useState } from 'react';
import { Layout } from './components/Layout';
import { Home } from './pages/Home';
import { Salesforce } from './pages/Salesforce';
import { About } from './pages/About';
import { Consulting } from './pages/Consulting';
import { Services } from './pages/Services';
import { ChatBot } from './components/ChatBot';
import { ContactModal } from './components/ContactModal';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState('home');
  const [isContactOpen, setIsContactOpen] = useState(false);

  const openContact = () => setIsContactOpen(true);
  const closeContact = () => setIsContactOpen(false);

  const renderContent = () => {
    switch (activeTab) {
      case 'home':
        return <Home onConsultClick={openContact} />;
      case 'services':
        return <Services onConsultClick={openContact} />;
      case 'consulting':
        return <Consulting onConsultClick={openContact} />;
      case 'salesforce':
        return <Salesforce onConsultClick={openContact} />;
      case 'about':
        return <About />;
      default:
        return <Home onConsultClick={openContact} />;
    }
  };

  return (
    <Layout activeTab={activeTab} setActiveTab={setActiveTab} onGetStarted={openContact}>
      {renderContent()}
      <ChatBot />
      <ContactModal isOpen={isContactOpen} onClose={closeContact} />
    </Layout>
  );
};

export default App;
