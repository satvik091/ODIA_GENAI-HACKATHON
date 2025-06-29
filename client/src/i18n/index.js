import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      welcome: "Welcome to SkillMate+",
      voicePrompt: "Press mic and speak..."
    }
  },
  hi: {
    translation: {
      welcome: "SkillMate+ में आपका स्वागत है",
      voicePrompt: "माइक दबाएँ और बोलें..."
    }
  }
};

i18n.use(initReactI18next).init({
  resources,
  lng: 'en',
  interpolation: { escapeValue: false }
});

export default i18n;
