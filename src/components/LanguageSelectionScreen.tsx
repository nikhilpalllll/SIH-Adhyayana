import React from 'react';
import { Button } from './ui/button';
import { Card } from './ui/card';
import { CheckCircle, Globe } from 'lucide-react';
import { LanguageCode } from '../utils/languages';

interface LanguageSelectionScreenProps {
  onLanguageSelect: (language: LanguageCode) => void;
}

export function LanguageSelectionScreen({ onLanguageSelect }: LanguageSelectionScreenProps) {
  const [selectedLanguage, setSelectedLanguage] = React.useState<LanguageCode | null>(null);

  const languages = [
    {
      code: 'hi' as LanguageCode,
      name: 'हिंदी',
      nativeName: 'Hindi',
      flag: '🇮🇳',
      gradient: 'from-orange-100 to-orange-200'
    },
    {
      code: 'en' as LanguageCode,
      name: 'English',
      nativeName: 'English',
      flag: '🇺🇸',
      gradient: 'from-blue-100 to-blue-200'
    },
    {
      code: 'od' as LanguageCode,
      name: 'ଓଡ଼ିଆ',
      nativeName: 'Odia',
      flag: '🇮🇳',
      gradient: 'from-green-100 to-green-200'
    }
  ];

  const handleLanguageSelect = (language: LanguageCode) => {
    setSelectedLanguage(language);
  };

  const handleContinue = () => {
    if (selectedLanguage) {
      onLanguageSelect(selectedLanguage);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-cyan-50 p-4 flex flex-col items-center justify-center">
      {/* Header */}
      <div className="text-center mb-8">
        <div className="w-20 h-20 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center mx-auto mb-4">
          <Globe className="w-10 h-10 text-white" />
        </div>
        <h1 className="text-3xl mb-2 text-gray-800">Choose Language</h1>
        <h2 className="text-2xl mb-2 text-gray-800">भाषा चुनें</h2>
        <h3 className="text-2xl mb-4 text-gray-800">ଭାଷା ବାଛ</h3>
        <p className="text-gray-600">Select your preferred language</p>
      </div>

      {/* Language Options */}
      <div className="w-full max-w-md space-y-4 mb-8">
        {languages.map((language) => (
          <Card
            key={language.code}
            className={`p-4 cursor-pointer transition-all duration-200 border-2 ${
              selectedLanguage === language.code
                ? 'border-yellow-400 bg-yellow-50 shadow-lg scale-105'
                : 'border-gray-200 hover:border-yellow-300 hover:shadow-md'
            }`}
            onClick={() => handleLanguageSelect(language.code)}
          >
            <div className="flex items-center gap-4">
              {/* Flag/Icon */}
              <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${language.gradient} flex items-center justify-center text-2xl`}>
                {language.flag}
              </div>
              
              {/* Language Info */}
              <div className="flex-1">
                <h3 className="text-xl text-gray-800">{language.name}</h3>
                <p className="text-sm text-gray-600">{language.nativeName}</p>
              </div>
              
              {/* Selection Indicator */}
              <div className="flex items-center">
                {selectedLanguage === language.code ? (
                  <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center">
                    <CheckCircle className="w-5 h-5 text-white" />
                  </div>
                ) : (
                  <div className="w-8 h-8 border-2 border-gray-300 rounded-full"></div>
                )}
              </div>
            </div>
          </Card>
        ))}
      </div>

      {/* Continue Button */}
      <Button
        onClick={handleContinue}
        disabled={!selectedLanguage}
        className="bg-yellow-500 hover:bg-yellow-600 disabled:bg-gray-300 disabled:text-gray-500 text-white px-8 py-3 rounded-full shadow-lg text-lg"
        size="lg"
      >
        {selectedLanguage === 'hi' && 'आगे बढ़ें'}
        {selectedLanguage === 'en' && 'Continue'}
        {selectedLanguage === 'od' && 'ଆଗକୁ ବଢ଼'}
        {!selectedLanguage && 'Continue'}
      </Button>

      {/* Decorative Elements */}
      <div className="absolute top-10 left-10 w-8 h-8 bg-yellow-300 rounded-full opacity-60"></div>
      <div className="absolute top-32 right-16 w-6 h-6 bg-emerald-300 rounded-full opacity-40"></div>
      <div className="absolute bottom-32 left-8 w-10 h-10 bg-cyan-300 rounded-full opacity-50"></div>
      <div className="absolute bottom-16 right-12 w-4 h-4 bg-purple-300 rounded-full opacity-60"></div>
    </div>
  );
}