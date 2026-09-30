import React from 'react';
import { Button } from './ui/button';
import { Card } from './ui/card';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { BookOpen, Eye, EyeOff, GraduationCap } from 'lucide-react';
import { LanguageContent, LanguageCode } from '../utils/languages';
import { LanguageSelector } from './LanguageSelector';
import { InteractiveStudentBackground } from './InteractiveStudentBackground';

interface StudentLoginScreenProps {
  onLogin: () => void;
  onNavigateToSignUp: () => void;
  onNavigateToTeacher: () => void;
  t: LanguageContent;
  currentLanguage: LanguageCode;
  onLanguageChange: (language: LanguageCode) => void;
}

export function StudentLoginScreen({ onLogin, onNavigateToSignUp, onNavigateToTeacher, t, currentLanguage, onLanguageChange }: StudentLoginScreenProps) {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [showPassword, setShowPassword] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false);
  const [errors, setErrors] = React.useState<{[key: string]: string}>({});

  const validateForm = () => {
    const newErrors: {[key: string]: string} = {};
    
    if (!email) {
      newErrors.email = t.auth.emailRequired;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = t.auth.emailInvalid;
    }
    
    if (!password) {
      newErrors.password = t.auth.passwordRequired;
    } else if (password.length < 6) {
      newErrors.password = t.auth.passwordMinLength;
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setIsLoading(true);
    
    // Simple validation and quick login
    setTimeout(() => {
      setIsLoading(false);
      onLogin();
    }, 800);
  };

  return (
    <InteractiveStudentBackground>
      <div className="min-h-screen flex flex-col justify-center p-4 relative">
        {/* Language Selector */}
        <LanguageSelector 
          currentLanguage={currentLanguage}
          onLanguageChange={onLanguageChange}
          position="fixed"
        />

        {/* Header */}
        <div className="text-center mb-8">
          <div className="w-20 h-20 bg-gradient-to-br from-cyan-400 to-cyan-600 rounded-full mx-auto mb-4 flex items-center justify-center shadow-lg">
            <GraduationCap className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-3xl text-gray-800 mb-2">{t.auth.studentLogin}</h1>
          <p className="text-gray-600">{t.auth.studentLoginSubtitle}</p>
        </div>

        {/* Login Form */}
        <Card className="p-8 mx-auto w-full max-w-md bg-white/95 border-0 shadow-xl rounded-2xl">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="email" className="text-gray-700">{t.auth.email}</Label>
              <Input
                id="email"
                type="email"
                placeholder={t.auth.emailPlaceholder}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={`h-12 rounded-xl border-2 ${errors.email ? 'border-red-300 focus:border-red-500' : 'border-gray-200 focus:border-cyan-500'}`}
                required
              />
              {errors.email && <p className="text-sm text-red-500 mt-1">{errors.email}</p>}
            </div>

            <div className="space-y-2">
              <Label htmlFor="password" className="text-gray-700">{t.auth.password}</Label>
              <div className="relative">
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder={t.auth.passwordPlaceholder}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className={`h-12 rounded-xl border-2 pr-12 ${errors.password ? 'border-red-300 focus:border-red-500' : 'border-gray-200 focus:border-cyan-500'}`}
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
              {errors.password && <p className="text-sm text-red-500 mt-1">{errors.password}</p>}
            </div>

            <Button
              type="submit"
              disabled={isLoading}
              className="w-full h-12 bg-gradient-to-r from-cyan-500 to-cyan-600 hover:from-cyan-600 hover:to-cyan-700 text-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-200"
            >
              {isLoading ? t.auth.loggingIn : t.auth.login}
            </Button>

            <div className="text-center">
              <button
                type="button"
                className="text-sm text-cyan-600 hover:text-cyan-700 hover:underline"
              >
                {t.auth.forgotPassword}
              </button>
            </div>
          </form>
        </Card>

        {/* Sign Up Link */}
        <div className="text-center mt-8">
          <p className="text-gray-600 mb-4">{t.auth.noStudentAccount}</p>
          <Button
            onClick={onNavigateToSignUp}
            variant="outline"
            className="border-2 border-cyan-400 text-cyan-600 hover:bg-cyan-50 rounded-xl px-8 py-3 shadow-lg hover:shadow-xl transition-all duration-200 mb-4"
          >
            {t.auth.createStudentAccount}
          </Button>
        </div>

        {/* Teacher Login Link */}
        <div className="text-center mt-4">
          <p className="text-gray-600 mb-2">{t.auth.areYouTeacher}</p>
          <Button
            onClick={onNavigateToTeacher}
            variant="ghost"
            className="text-emerald-600 hover:text-emerald-700 hover:underline"
          >
            {t.auth.teacherLogin}
          </Button>
        </div>

        {/* Security Notice */}
        <div className="text-center mt-6 max-w-md mx-auto">
          <p className="text-xs text-gray-500">{t.auth.securityNotice}</p>
        </div>
      </div>
    </InteractiveStudentBackground>
  );
}