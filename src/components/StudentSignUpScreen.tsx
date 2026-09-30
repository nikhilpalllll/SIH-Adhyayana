import React from 'react';
import { Button } from './ui/button';
import { Card } from './ui/card';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Checkbox } from './ui/checkbox';
import { ArrowLeft, GraduationCap, Eye, EyeOff } from 'lucide-react';
import { LanguageContent, LanguageCode } from '../utils/languages';
import { LanguageSelector } from './LanguageSelector';
import { InteractiveStudentBackground } from './InteractiveStudentBackground';

interface StudentSignUpScreenProps {
  onSignUp: (grade: string) => void;
  onNavigateToLogin: () => void;
  onNavigateToTeacher: () => void;
  t: LanguageContent;
  currentLanguage: LanguageCode;
  onLanguageChange: (language: LanguageCode) => void;
}

export function StudentSignUpScreen({ onSignUp, onNavigateToLogin, onNavigateToTeacher, t, currentLanguage, onLanguageChange }: StudentSignUpScreenProps) {
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [confirmPassword, setConfirmPassword] = React.useState('');
  const [grade, setGrade] = React.useState('');
  const [agreeToTerms, setAgreeToTerms] = React.useState(false);
  const [showPassword, setShowPassword] = React.useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false);
  const [errors, setErrors] = React.useState<{[key: string]: string}>({});

  const validateForm = () => {
    const newErrors: {[key: string]: string} = {};
    
    if (!name) {
      newErrors.name = t.auth.nameRequired;
    }
    
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
    
    if (!confirmPassword) {
      newErrors.confirmPassword = t.auth.confirmPasswordRequired;
    } else if (password !== confirmPassword) {
      newErrors.confirmPassword = t.auth.passwordsNoMatch;
    }
    
    if (!grade) {
      newErrors.grade = t.auth.gradeRequired;
    }
    
    if (!agreeToTerms) {
      newErrors.terms = t.auth.termsRequired;
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
    
    // Simple validation and quick signup
    setTimeout(() => {
      setIsLoading(false);
      onSignUp(grade);
    }, 1000);
  };

  return (
    <InteractiveStudentBackground>
      <div className="min-h-screen flex flex-col justify-center p-4 py-8 relative">
        {/* Language Selector */}
        <LanguageSelector 
          currentLanguage={currentLanguage}
          onLanguageChange={onLanguageChange}
          position="fixed"
        />

        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <Button 
            variant="ghost" 
            size="sm"
            onClick={onNavigateToLogin}
            className="text-gray-600 hover:text-gray-800"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            {t.back}
          </Button>
          <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-cyan-600 rounded-full flex items-center justify-center shadow-lg">
            <GraduationCap className="w-6 h-6 text-white" />
          </div>
          <div className="w-10"></div>
        </div>

        <div className="text-center mb-6">
          <h1 className="text-3xl text-gray-800 mb-2">{t.auth.createStudentAccount}</h1>
          <p className="text-gray-600">{t.auth.studentSignUpSubtitle}</p>
        </div>

        {/* Sign Up Form */}
        <Card className="p-8 mx-auto w-full max-w-md bg-white/95 border-0 shadow-xl rounded-2xl">
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="space-y-2">
              <Label htmlFor="name" className="text-gray-700">{t.auth.fullName}</Label>
              <Input
                id="name"
                type="text"
                placeholder={t.auth.namePlaceholder}
                value={name}
                onChange={(e) => setName(e.target.value)}
                className={`h-12 rounded-xl border-2 ${errors.name ? 'border-red-300 focus:border-red-500' : 'border-gray-200 focus:border-cyan-500'}`}
                required
              />
              {errors.name && <p className="text-sm text-red-500 mt-1">{errors.name}</p>}
            </div>

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
              <Label className="text-gray-700">{t.auth.grade}</Label>
              <Select value={grade} onValueChange={setGrade}>
                <SelectTrigger className={`h-12 rounded-xl border-2 ${errors.grade ? 'border-red-300 focus:border-red-500' : 'border-gray-200 focus:border-cyan-500'}`}>
                  <SelectValue placeholder={t.auth.selectGrade} />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="grade6">{t.grades.grade6}</SelectItem>
                  <SelectItem value="grade7">{t.grades.grade7}</SelectItem>
                  <SelectItem value="grade8">{t.grades.grade8}</SelectItem>
                  <SelectItem value="grade9">{t.grades.grade9}</SelectItem>
                  <SelectItem value="grade10">{t.grades.grade10}</SelectItem>
                  <SelectItem value="grade11">{t.grades.grade11}</SelectItem>
                  <SelectItem value="grade12">{t.grades.grade12}</SelectItem>
                </SelectContent>
              </Select>
              {errors.grade && <p className="text-sm text-red-500 mt-1">{errors.grade}</p>}
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
                  minLength={6}
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

            <div className="space-y-2">
              <Label htmlFor="confirmPassword" className="text-gray-700">{t.auth.confirmPassword}</Label>
              <div className="relative">
                <Input
                  id="confirmPassword"
                  type={showConfirmPassword ? "text" : "password"}
                  placeholder={t.auth.confirmPasswordPlaceholder}
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className={`h-12 rounded-xl border-2 pr-12 ${errors.confirmPassword ? 'border-red-300 focus:border-red-500' : 'border-gray-200 focus:border-cyan-500'}`}
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
                >
                  {showConfirmPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
              {errors.confirmPassword && <p className="text-sm text-red-500 mt-1">{errors.confirmPassword}</p>}
            </div>

            <div className="flex items-center space-x-2">
              <Checkbox 
                id="terms" 
                checked={agreeToTerms}
                onCheckedChange={(checked) => setAgreeToTerms(checked as boolean)}
              />
              <Label htmlFor="terms" className="text-sm text-gray-700">
                {t.auth.agreeToTerms}
              </Label>
            </div>
            {errors.terms && <p className="text-sm text-red-500 mt-1">{errors.terms}</p>}

            <Button
              type="submit"
              disabled={isLoading}
              className="w-full h-12 bg-gradient-to-r from-cyan-500 to-cyan-600 hover:from-cyan-600 hover:to-cyan-700 text-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-200"
            >
              {isLoading ? t.auth.creatingAccount : t.auth.createStudentAccount}
            </Button>
          </form>
        </Card>

        {/* Login Link */}
        <div className="text-center mt-8">
          <p className="text-gray-600 mb-4">{t.auth.alreadyHaveStudentAccount}</p>
          <Button
            onClick={onNavigateToLogin}
            variant="ghost"
            className="text-cyan-600 hover:text-cyan-700 hover:underline mb-4"
          >
            {t.auth.studentLogin}
          </Button>
        </div>

        {/* Teacher Sign Up Link */}
        <div className="text-center mt-4">
          <p className="text-gray-600 mb-2">{t.auth.areYouTeacher}</p>
          <Button
            onClick={onNavigateToTeacher}
            variant="ghost"
            className="text-emerald-600 hover:text-emerald-700 hover:underline"
          >
            {t.auth.createTeacherAccount}
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