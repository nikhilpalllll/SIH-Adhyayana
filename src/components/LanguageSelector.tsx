import React from 'react';
import { LanguageCode } from '../utils/languages';
import { ChevronDown, Globe } from 'lucide-react';

interface LanguageSelectorProps {
  currentLanguage: LanguageCode;
  onLanguageChange: (language: LanguageCode) => void;
  position?: 'fixed' | 'relative';
}

const languageOptions = [
  { code: 'hi' as LanguageCode, name: 'Hindi', flag: '🇮🇳', country: 'IN' },
  { code: 'en' as LanguageCode, name: 'English', flag: '🇺🇸', country: 'US' },
  { code: 'od' as LanguageCode, name: 'Odia', flag: '🇮🇳', country: 'IN' },
];

export function LanguageSelector({ 
  currentLanguage, 
  onLanguageChange, 
  position = 'fixed' 
}: LanguageSelectorProps) {
  const [isOpen, setIsOpen] = React.useState(false);
  const currentLang = languageOptions.find(lang => lang.code === currentLanguage);

  const handleLanguageSelect = (language: LanguageCode) => {
    onLanguageChange(language);
    setIsOpen(false);
    // Store in localStorage for persistence
    localStorage.setItem('selectedLanguage', language);
  };

  const positionClasses = position === 'fixed' 
    ? 'fixed top-4 right-4 z-50' 
    : 'relative';

  return (
    <div className={`${positionClasses} min-w-[140px]`}>
      <div className="relative">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center gap-2 px-3 py-2 bg-white/90 backdrop-blur-sm border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition-all duration-200 min-w-[140px]"
        >
          <Globe className="w-4 h-4 text-gray-600" />
          <span className="text-sm font-medium text-gray-800">
            {currentLang?.flag} {currentLang?.name}
          </span>
          <ChevronDown 
            className={`w-4 h-4 text-gray-500 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} 
          />
        </button>

        {isOpen && (
          <>
            {/* Backdrop */}
            <div 
              className="fixed inset-0 z-40" 
              onClick={() => setIsOpen(false)}
            />
            
            {/* Dropdown */}
            <div className="absolute top-full mt-2 right-0 w-full bg-white border border-gray-200 rounded-xl shadow-lg overflow-hidden z-50">
              {languageOptions.map((language) => (
                <button
                  key={language.code}
                  onClick={() => handleLanguageSelect(language.code)}
                  className={`w-full flex items-center gap-3 px-3 py-3 hover:bg-gray-50 transition-colors duration-150 ${
                    currentLanguage === language.code 
                      ? 'bg-yellow-50 border-l-3 border-l-yellow-400' 
                      : ''
                  }`}
                >
                  <span className="text-lg">{language.flag}</span>
                  <div className="flex-1 text-left">
                    <div className="text-sm font-medium text-gray-800">
                      {language.name}
                    </div>
                    <div className="text-xs text-gray-500">
                      {language.country}
                    </div>
                  </div>
                  {currentLanguage === language.code && (
                    <div className="w-2 h-2 bg-yellow-400 rounded-full" />
                  )}
                </button>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}