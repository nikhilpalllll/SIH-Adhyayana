import React from 'react';
import { Button } from './ui/button';
import { Card } from './ui/card';
import { CheckCircle, User, GraduationCap, ArrowLeft, BookOpen, Users, BarChart3, Target } from 'lucide-react';
import { LanguageContent, LanguageCode } from '../utils/languages';
import { LanguageSelector } from './LanguageSelector';

interface RoleSelectionScreenProps {
  onRoleSelect: (role: 'student' | 'teacher') => void;
  onBack: () => void;
  t: LanguageContent;
  currentLanguage: LanguageCode;
  onLanguageChange: (language: LanguageCode) => void;
}

export function RoleSelectionScreen({ onRoleSelect, onBack, t, currentLanguage, onLanguageChange }: RoleSelectionScreenProps) {
  const [selectedRole, setSelectedRole] = React.useState<'student' | 'teacher' | null>(null);

  const roles = [
    {
      id: 'student' as const,
      name: t.roleSelection.student,
      description: 'Access interactive lessons, rewards, and gamified learning experiences',
      icon: User,
      gradient: 'from-cyan-100 to-cyan-200',
      iconBg: 'from-cyan-400 to-cyan-600',
      features: [
        { icon: BookOpen, text: t.auth.features.interactive + ' Lessons' },
        { icon: Target, text: 'Gamified Learning' },
        { icon: '🏆', text: 'Earn Rewards & Badges' },
        { icon: BarChart3, text: 'Track Progress' }
      ],
      accessNote: 'Students can only access student features'
    },
    {
      id: 'teacher' as const,
      name: t.roleSelection.teacher,
      description: 'Manage classes, create lessons, and track student progress with full analytics access',
      icon: GraduationCap,
      gradient: 'from-emerald-100 to-emerald-200',
      iconBg: 'from-emerald-400 to-emerald-600',
      features: [
        { icon: Users, text: 'Manage Classes' },
        { icon: BookOpen, text: 'Create Lessons' },
        { icon: BarChart3, text: 'View Analytics' },
        { icon: Target, text: 'Track Student Progress' }
      ],
      accessNote: 'Teachers can access both teacher and student features'
    }
  ];

  const handleRoleSelect = (roleId: 'student' | 'teacher') => {
    setSelectedRole(roleId);
  };

  const handleContinue = () => {
    if (selectedRole) {
      onRoleSelect(selectedRole);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-cyan-50 to-yellow-50 p-4 relative">
      {/* Language Selector */}
      <LanguageSelector 
        currentLanguage={currentLanguage}
        onLanguageChange={onLanguageChange}
        position="fixed"
      />

      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <Button 
          variant="ghost" 
          size="sm"
          onClick={onBack}
          className="text-emerald-600 hover:text-emerald-700"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          {t.back}
        </Button>
      </div>

      {/* Title Section */}
      <div className="text-center mb-12">
        <div className="w-24 h-24 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
          <User className="w-12 h-12 text-white" />
        </div>
        <h1 className="text-4xl mb-3 text-gray-800">{t.roleSelection.title}</h1>
        <p className="text-gray-600 text-lg">{t.roleSelection.subtitle}</p>
      </div>

      {/* Role Options */}
      <div className="space-y-6 mb-8 max-w-2xl mx-auto">
        {roles.map((role) => (
          <Card
            key={role.id}
            className={`p-8 cursor-pointer transition-all duration-300 border-2 rounded-2xl ${
              selectedRole === role.id
                ? 'border-yellow-400 bg-yellow-50 shadow-2xl scale-[1.02]'
                : 'border-gray-200 hover:border-yellow-300 hover:shadow-xl bg-white/80'
            }`}
            onClick={() => handleRoleSelect(role.id)}
          >
            <div className="flex items-start gap-6">
              {/* Role Icon */}
              <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${role.iconBg} flex items-center justify-center flex-shrink-0 shadow-lg`}>
                <role.icon className="w-10 h-10 text-white" />
              </div>
              
              {/* Role Info */}
              <div className="flex-1">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h3 className="text-2xl text-gray-800 mb-2">{role.name}</h3>
                    <p className="text-gray-600 text-base leading-relaxed">{role.description}</p>
                  </div>
                  
                  {/* Selection Indicator */}
                  <div className="flex items-center ml-4">
                    {selectedRole === role.id ? (
                      <div className="w-10 h-10 bg-yellow-500 rounded-full flex items-center justify-center shadow-lg">
                        <CheckCircle className="w-6 h-6 text-white" />
                      </div>
                    ) : (
                      <div className="w-10 h-10 border-3 border-gray-300 rounded-full hover:border-yellow-400 transition-colors"></div>
                    )}
                  </div>
                </div>
                
                {/* Features */}
                <div className="grid grid-cols-2 gap-3 mb-4">
                  {role.features.map((feature, index) => (
                    <div key={index} className="text-gray-700 flex items-center gap-2">
                      {typeof feature.icon === 'string' ? (
                        <span className="text-lg">{feature.icon}</span>
                      ) : (
                        <feature.icon className="w-5 h-5 text-gray-600" />
                      )}
                      <span className="text-sm font-medium">{feature.text}</span>
                    </div>
                  ))}
                </div>

                {/* Access Note */}
                <div className={`text-sm px-4 py-2 rounded-lg ${
                  role.id === 'teacher' 
                    ? 'bg-green-100 text-green-700' 
                    : 'bg-blue-100 text-blue-700'
                }`}>
                  <span className="font-medium">Access Level:</span> {role.accessNote}
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>

      {/* Continue Button */}
      <div className="fixed bottom-6 left-4 right-4 max-w-2xl mx-auto">
        <Button
          onClick={handleContinue}
          disabled={!selectedRole}
          className="w-full bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 disabled:from-gray-300 disabled:to-gray-400 disabled:text-gray-500 text-white py-4 rounded-2xl shadow-xl text-lg font-medium transition-all duration-200"
          size="lg"
        >
          {t.next}
        </Button>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-10 left-10 w-8 h-8 bg-yellow-300 rounded-full opacity-60 animate-pulse"></div>
      <div className="absolute top-32 right-16 w-6 h-6 bg-emerald-300 rounded-full opacity-40 animate-pulse" style={{animationDelay: '0.5s'}}></div>
      <div className="absolute bottom-32 left-8 w-10 h-10 bg-cyan-300 rounded-full opacity-50 animate-pulse" style={{animationDelay: '1s'}}></div>
      <div className="absolute bottom-16 right-12 w-4 h-4 bg-purple-300 rounded-full opacity-60 animate-pulse" style={{animationDelay: '1.5s'}}></div>
    </div>
  );
}