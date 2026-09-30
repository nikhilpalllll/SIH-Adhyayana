import React from 'react';
import { Button } from './ui/button';
import { Card } from './ui/card';
import { Progress } from './ui/progress';
import { ChevronLeft, ChevronRight, Users, BookOpen, BarChart3, Target } from 'lucide-react';
import { LanguageContent } from '../utils/languages';

interface TeacherOnboardingProps {
  onComplete: () => void;
  t: LanguageContent;
}

export function TeacherOnboarding({ onComplete, t }: TeacherOnboardingProps) {
  const [currentStep, setCurrentStep] = React.useState(0);

  const onboardingSteps = [
    {
      title: 'Manage Your Classes',
      description: 'Create and organize classes, add students, and track their progress all in one place.',
      icon: Users,
      gradient: 'from-blue-400 to-blue-600',
      features: ['👥 Add Students', '📋 Create Classes', '📊 Track Attendance', '🎯 Set Learning Goals']
    },
    {
      title: 'Create Interactive Lessons',
      description: 'Design engaging lessons with multimedia content, quizzes, and interactive activities.',
      icon: BookOpen,
      gradient: 'from-emerald-400 to-emerald-600',
      features: ['📝 Lesson Builder', '🎮 Interactive Content', '📹 Video Integration', '✏️ Custom Quizzes']
    },
    {
      title: 'Monitor Progress',
      description: 'Get detailed insights into student performance and identify areas that need attention.',
      icon: BarChart3,
      gradient: 'from-yellow-400 to-yellow-600',
      features: ['📈 Performance Analytics', '🎯 Progress Tracking', '📊 Detailed Reports', '⚠️ Early Alerts']
    },
    {
      title: 'Achieve Learning Goals',
      description: 'Set objectives for your students and help them achieve their full potential.',
      icon: Target,
      gradient: 'from-purple-400 to-purple-600',
      features: ['🎯 Goal Setting', '🏆 Achievement Badges', '📅 Milestone Tracking', '🌟 Celebrate Success']
    }
  ];

  const handleNext = () => {
    if (currentStep < onboardingSteps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      onComplete();
    }
  };

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const currentStepData = onboardingSteps[currentStep];
  const StepIcon = currentStepData.icon;

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-cyan-50 p-4 flex flex-col">
      {/* Progress Header */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-4">
          <Button 
            variant="ghost" 
            size="sm" 
            onClick={handlePrevious}
            disabled={currentStep === 0}
            className="text-emerald-600"
          >
            <ChevronLeft className="w-4 h-4" />
          </Button>
          <div className="text-center">
            <p className="text-sm text-gray-600">Teacher Portal</p>
            <p className="text-xs text-gray-500">{currentStep + 1} of {onboardingSteps.length}</p>
          </div>
          <div className="w-12"></div>
        </div>
        <Progress value={(currentStep + 1) / onboardingSteps.length * 100} className="h-2" />
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col justify-center">
        <Card className="p-8 text-center mb-8">
          {/* Icon */}
          <div className={`w-24 h-24 mx-auto mb-6 rounded-full bg-gradient-to-br ${currentStepData.gradient} flex items-center justify-center`}>
            <StepIcon className="w-12 h-12 text-white" />
          </div>

          {/* Title and Description */}
          <h2 className="text-2xl mb-4 text-gray-800">{currentStepData.title}</h2>
          <p className="text-gray-600 mb-8 leading-relaxed">{currentStepData.description}</p>

          {/* Features */}
          <div className="grid grid-cols-2 gap-4 mb-8">
            {currentStepData.features.map((feature, index) => (
              <div key={index} className="flex items-center justify-start text-left">
                <span className="text-lg mr-3">{feature.split(' ')[0]}</span>
                <span className="text-sm text-gray-700">{feature.split(' ').slice(1).join(' ')}</span>
              </div>
            ))}
          </div>
        </Card>

        {/* Step Indicators */}
        <div className="flex justify-center gap-2 mb-8">
          {onboardingSteps.map((_, index) => (
            <div
              key={index}
              className={`w-2 h-2 rounded-full transition-colors ${
                index === currentStep
                  ? 'bg-yellow-500'
                  : index < currentStep
                  ? 'bg-emerald-500'
                  : 'bg-gray-300'
              }`}
            />
          ))}
        </div>

        {/* Navigation */}
        <div className="flex justify-between gap-4">
          <Button
            variant="outline"
            onClick={() => onComplete()}
            className="flex-1"
          >
            {t.skip}
          </Button>
          <Button
            onClick={handleNext}
            className="flex-1 bg-yellow-500 hover:bg-yellow-600 text-white"
          >
            {currentStep === onboardingSteps.length - 1 ? t.start : t.next}
            <ChevronRight className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-10 left-10 w-8 h-8 bg-yellow-300 rounded-full opacity-60"></div>
      <div className="absolute top-32 right-16 w-6 h-6 bg-emerald-300 rounded-full opacity-40"></div>
      <div className="absolute bottom-32 left-8 w-10 h-10 bg-cyan-300 rounded-full opacity-50"></div>
      <div className="absolute bottom-16 right-12 w-4 h-4 bg-purple-300 rounded-full opacity-60"></div>
    </div>
  );
}