import React from 'react';
import { Button } from './ui/button';
import { Card } from './ui/card';
import { Volume2, ArrowRight, BookOpen, Users, Trophy } from 'lucide-react';
import { LanguageContent } from '../utils/languages';

interface OnboardingScreenProps {
  onComplete: () => void;
  t: LanguageContent;
}

export function OnboardingScreen({ onComplete, t }: OnboardingScreenProps) {
  const [currentStep, setCurrentStep] = React.useState(0);

  // Validate language content exists
  if (!t.onboarding) {
    console.error('Onboarding content not found in language data');
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="text-center">
          <h1 className="text-xl font-semibold mb-2">Loading...</h1>
          <p className="text-gray-600">Setting up your experience...</p>
          <Button onClick={onComplete} className="mt-4">
            Continue
          </Button>
        </div>
      </div>
    );
  }

  const steps = [
    {
      icon: <BookOpen className="w-20 h-20 text-yellow-500" />,
      title: t.onboarding.step1?.title || 'Welcome!',
      description: t.onboarding.step1?.description || 'Let\'s get started',
      audioHint: t.lesson?.voiceHint || 'Audio instructions'
    },
    {
      icon: <Users className="w-20 h-20 text-emerald-500" />,
      title: t.onboarding.step2?.title || 'Learn Together',
      description: t.onboarding.step2?.description || 'Join our learning community',
      audioHint: t.lesson?.voiceHint || 'Audio instructions'
    },
    {
      icon: <Trophy className="w-20 h-20 text-yellow-500" />,
      title: t.onboarding.step3?.title || 'Ready to Go!',
      description: t.onboarding.step3?.description || 'You\'re all set to start learning',
      audioHint: t.lesson?.voiceHint || 'Audio instructions'
    }
  ];

  const nextStep = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      onComplete();
    }
  };

  const skipToEnd = () => {
    onComplete();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-cyan-50 p-4 flex flex-col">
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <div className="flex space-x-2">
          {steps.map((_, index) => (
            <div
              key={index}
              className={`w-3 h-3 rounded-full ${
                index <= currentStep ? 'bg-yellow-500' : 'bg-yellow-200'
              }`}
            />
          ))}
        </div>
        <Button variant="ghost" onClick={skipToEnd} className="text-emerald-600">
          {t.skip}
        </Button>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col items-center justify-center text-center">
        <Card className="w-full max-w-sm p-8 bg-white/90 backdrop-blur-sm border-0 shadow-lg">
          <div className="mb-6">
            {steps[currentStep].icon}
          </div>
          
          <h1 className="text-2xl mb-2 text-gray-800">
            {steps[currentStep].title}
          </h1>
          
          <p className="text-gray-700 mb-4">
            {steps[currentStep].description}
          </p>
          
          {/* Audio Hint */}
          <div className="flex items-center justify-center gap-2 mb-6 p-3 bg-cyan-50 rounded-lg">
            <Volume2 className="w-5 h-5 text-cyan-600" />
            <span className="text-sm text-cyan-700">
              {steps[currentStep].audioHint}
            </span>
          </div>
        </Card>
      </div>

      {/* Navigation */}
      <div className="flex justify-center">
        <Button 
          onClick={nextStep}
          className="bg-yellow-500 hover:bg-yellow-600 text-white px-8 py-3 rounded-full shadow-lg text-lg"
          size="lg"
        >
          {currentStep < steps.length - 1 ? (
            <>
              {t.next} <ArrowRight className="ml-2 w-5 h-5" />
            </>
          ) : (
            t.start
          )}
        </Button>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-10 left-10 w-8 h-8 bg-yellow-300 rounded-full opacity-60"></div>
      <div className="absolute top-32 right-16 w-6 h-6 bg-emerald-300 rounded-full opacity-40"></div>
      <div className="absolute bottom-32 left-8 w-10 h-10 bg-cyan-300 rounded-full opacity-50"></div>
      <div className="absolute bottom-16 right-12 w-4 h-4 bg-purple-300 rounded-full opacity-60"></div>
    </div>
  );
}