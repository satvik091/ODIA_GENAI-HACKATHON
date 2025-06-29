import React from 'react';
import ChatBox from '../components/ChatBox';
import { useTranslation } from 'react-i18next';
import SectionHeader from '../components/SectionHeader';

const Home = () => {
  const { t } = useTranslation();

  return (
    <>
      <div className="hero">
        <h1>SkillMate+</h1>
        <p>{t('welcome')}</p>
      </div>

      <div className="container">
        <SectionHeader 
          title="Ask anything about careers, skills & jobs" 
          subtitle="Type or speak your query and let our AI guide you" 
        />
        <ChatBox />
      </div>
    </>
  );
};

export default Home;
