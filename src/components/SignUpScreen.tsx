import React from 'react';
import { Button } from './ui/button';
import { Card } from './ui/card';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Checkbox } from './ui/checkbox';
import { ArrowLeft, BookOpen, Eye, EyeOff } from 'lucide-react';
import { LanguageContent, LanguageCode } from '../utils/languages';
import { LanguageSelector } from './LanguageSelector';

interface SignUpScreenProps {
  onSignUp: () => void;
  onNavigateToLogin: () => void;
  t: LanguageContent;
  currentLanguage: LanguageCode;
  onLanguageChange: (language: LanguageCode) => void;
}

export function SignUpScreen({ onSignUp, onNavigateToLogin, t, currentLanguage, onLanguageChange }: SignUpScreenProps) {
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [confirmPassword, setConfirmPassword] = React.useState('');
  const [role, setRole] = React.useState('');
  const [grade, setGrade] = React.useState('');
  const [schoolName, setSchoolName] = React.useState('');
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
    
    if (!role) {
      newErrors.role = t.auth.roleRequired;
    }
    
    if (role === 'student' && !grade) {
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
      onSignUp();
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-cyan-50 to-yellow-50 flex flex-col justify-center p-4 py-8 relative">
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
        <div className="w-12 h-12 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-full flex items-center justify-center shadow-lg">
          <BookOpen className="w-6 h-6 text-white" />
        </div>
        <div className="w-10"></div>
      </div>

      <div className="text-center mb-6">
        <h1 className="text-3xl text-gray-800 mb-2">{t.auth.createAccount}</h1>
        <p className="text-gray-600">{t.auth.signUpSubtitle}</p>
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
              className={`h-12 rounded-xl border-2 ${errors.name ? 'border-red-300 focus:border-red-500' : 'border-gray-200 focus:border-emerald-500'}`}
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
              className={`h-12 rounded-xl border-2 ${errors.email ? 'border-red-300 focus:border-red-500' : 'border-gray-200 focus:border-emerald-500'}`}
              required
            />
            {errors.email && <p className="text-sm text-red-500 mt-1">{errors.email}</p>}
          </div>

          <div className="space-y-2">
            <Label className="text-gray-700">{t.auth.role}</Label>
            <Select value={role} onValueChange={setRole}>
              <SelectTrigger className={`h-12 rounded-xl border-2 ${errors.role ? 'border-red-300 focus:border-red-500' : 'border-gray-200 focus:border-emerald-500'}`}>
                <SelectValue placeholder={t.auth.selectRole} />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="student">{t.student}</SelectItem>
                <SelectItem value="teacher">{t.teacher}</SelectItem>
              </SelectContent>
            </Select>
            {errors.role && <p className="text-sm text-red-500 mt-1">{errors.role}</p>}
          </div>

          {role === 'student' && (
            <div className="space-y-2">
              <Label className="text-gray-700">{t.auth.grade}</Label>
              <Select value={grade} onValueChange={setGrade}>
                <SelectTrigger className={`h-12 rounded-xl border-2 ${errors.grade ? 'border-red-300 focus:border-red-500' : 'border-gray-200 focus:border-emerald-500'}`}>
                  <SelectValue placeholder={t.auth.selectGrade} />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="grade1">{t.grades.grade1}</SelectItem>
                  <SelectItem value="grade2">{t.grades.grade2}</SelectItem>
                  <SelectItem value="grade3">{t.grades.grade3}</SelectItem>
                  <SelectItem value="grade4">{t.grades.grade4}</SelectItem>
                  <SelectItem value="grade5">{t.grades.grade5}</SelectItem>
                </SelectContent>
              </Select>
              {errors.grade && <p className="text-sm text-red-500 mt-1">{errors.grade}</p>}
            </div>
          )}

          {role === 'teacher' && (
            <div className="space-y-2">
              <Label htmlFor="school" className="text-gray-700">{t.auth.schoolName}</Label>
              <Input
                id="school"
                type="text"
                placeholder={t.auth.schoolPlaceholder}
                value={schoolName}
                onChange={(e) => setSchoolName(e.target.value)}
                className="h-12 rounded-xl border-2 border-gray-200 focus:border-emerald-500"
              />
            </div>
          )}

          <div className="space-y-2">
            <Label htmlFor="password" className="text-gray-700">{t.auth.password}</Label>
            <div className="relative">
              <Input
                id="password"
                type={showPassword ? "text" : "password"}
                placeholder={t.auth.passwordPlaceholder}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className={`h-12 rounded-xl border-2 pr-12 ${errors.password ? 'border-red-300 focus:border-red-500' : 'border-gray-200 focus:border-emerald-500'}`}
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
                className={`h-12 rounded-xl border-2 pr-12 ${errors.confirmPassword ? 'border-red-300 focus:border-red-500' : 'border-gray-200 focus:border-emerald-500'}`}
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
            className="w-full h-12 bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-200"
          >
            {isLoading ? t.auth.creatingAccount : t.auth.createAccount}
          </Button>
        </form>
      </Card>

      {/* Login Link */}
      <div className="text-center mt-8">
        <p className="text-gray-600 mb-4">{t.auth.alreadyHaveAccount}</p>
        <Button
          onClick={onNavigateToLogin}
          variant="ghost"
          className="text-cyan-600 hover:text-cyan-700 hover:underline"
        >
          {t.auth.login}
        </Button>
      </div>

      {/* Security Notice */}
      <div className="text-center mt-6 max-w-md mx-auto">
        <p className="text-xs text-gray-500">{t.auth.securityNotice}</p>
      </div>
    </div>
  );
}