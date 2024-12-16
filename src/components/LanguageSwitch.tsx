import React from 'react';
import { Languages } from 'lucide-react';

interface LanguageSwitchProps {
  currentLanguage: string;
  onLanguageChange: (lang: string) => void;
}

export function LanguageSwitch({ currentLanguage, onLanguageChange }: LanguageSwitchProps) {
  return (
    <button
      onClick={() => onLanguageChange(currentLanguage === 'en' ? 'es' : 'en')}
      className="fixed top-4 left-4 flex items-center space-x-2 bg-white px-3 py-2 rounded-md shadow-sm hover:bg-gray-50 transition-colors"
    >
      <Languages className="h-5 w-5 text-blue-500" />
      <span className="text-sm font-medium text-gray-700">
        {currentLanguage === 'en' ? 'ES' : 'EN'}
      </span>
    </button>
  );
}