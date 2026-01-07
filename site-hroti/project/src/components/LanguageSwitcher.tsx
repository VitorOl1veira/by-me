import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

export default function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();

  return (
    <button
      onClick={() => setLanguage(language === 'pt' ? 'en' : 'pt')}
      className="flex items-center space-x-2 px-3 py-1 rounded-md bg-gray-100 hover:bg-gray-200 transition-colors"
    >
      <img
        src={language === 'pt' 
          ? 'https://raw.githubusercontent.com/lipis/flag-icons/main/flags/4x3/br.svg'
          : 'https://raw.githubusercontent.com/lipis/flag-icons/main/flags/4x3/us.svg'
        }
        alt={language === 'pt' ? 'Bandeira do Brasil' : 'US Flag'}
        className="w-6 h-4 object-cover rounded"
      />
      <span className="text-sm font-medium">{language === 'pt' ? 'PT' : 'EN'}</span>
    </button>
  );
}