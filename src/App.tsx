import React from 'react';
import { ErrorBoundary } from './components/ErrorBoundary';
import { WelcomeScreen } from './components/WelcomeScreen';
import { OnboardingScreen } from './components/OnboardingScreen';
import { HomeScreen } from './components/HomeScreen';
import { LessonScreen } from './components/LessonScreen';
import { GamesScreen } from './components/GamesScreen';
import { OdishaScreen } from './components/OdishaScreen';
import { RewardsScreen } from './components/RewardsScreen';
import { LeaderboardScreen } from './components/LeaderboardScreen';
import { ReportScreen } from './components/ReportScreen';
import { OfflineScreen } from './components/OfflineScreen';
import { LanguageSelectionScreen } from './components/LanguageSelectionScreen';
import { GradeSelectionScreen } from './components/GradeSelectionScreen';
import { RoleSelectionScreen } from './components/RoleSelectionScreen';
import { TeacherDashboard } from './components/TeacherDashboard';
import { TeacherOnboarding } from './components/TeacherOnboarding';
import { TeacherReports } from './components/TeacherReports';
import { TeacherAnalytics } from './components/TeacherAnalytics';
import { TeacherGoals } from './components/TeacherGoals';
import { TeacherClasses } from './components/TeacherClasses';
import { TeacherLessons } from './components/TeacherLessons';
import { StudentLoginScreen } from './components/StudentLoginScreen';
import { TeacherLoginScreen } from './components/TeacherLoginScreen';
import { StudentSignUpScreen } from './components/StudentSignUpScreen';
import { TeacherSignUpScreen } from './components/TeacherSignUpScreen';
import { DailyChallengeScreen } from './components/DailyChallengeScreen';
import { LanguageCode, languages } from './utils/languages';
import { BookOpen } from 'lucide-react';

export default function App() {
  const [currentScreen, setCurrentScreen] = React.useState('welcome');
  const [selectedLanguage, setSelectedLanguage] = React.useState<LanguageCode>('en');
  const [selectedRole, setSelectedRole] = React.useState<'student' | 'teacher' | null>(null);
  const [selectedGrade, setSelectedGrade] = React.useState<string>('');
  const [isOffline, setIsOffline] = React.useState(false);
  const [isAuthenticated, setIsAuthenticated] = React.useState(false);
  const [isInitialized, setIsInitialized] = React.useState(false);

  // Initialize app
  React.useEffect(() => {
    // Load language from localStorage if available
    try {
      if (typeof window !== 'undefined' && window.localStorage) {
        const savedLanguage = localStorage.getItem('selectedLanguage') as LanguageCode;
        if (savedLanguage && ['hi', 'en', 'od'].includes(savedLanguage)) {
          setSelectedLanguage(savedLanguage);
        }
      }
    } catch (error) {
      console.warn('Could not load language from localStorage:', error);
    }

    const timer = setTimeout(() => {
      setIsInitialized(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  // Get current language content with error handling
  const t = React.useMemo(() => {
    try {
      const languageContent = languages[selectedLanguage];
      if (!languageContent) {
        console.warn(`Language ${selectedLanguage} not found, falling back to English`);
        return languages.en;
      }
      
      // Validate that required properties exist
      if (!languageContent.onboarding) {
        console.warn(`Missing onboarding content for language ${selectedLanguage}, falling back to English`);
        return languages.en;
      }
      
      return languageContent;
    } catch (error) {
      console.error('Language loading error:', error);
      return languages.en;
    }
  }, [selectedLanguage]);

  // Simplified offline detection
  React.useEffect(() => {
    const handleOnline = () => setIsOffline(false);
    const handleOffline = () => setIsOffline(true);

    if (typeof window !== 'undefined' && navigator) {
      window.addEventListener('online', handleOnline);
      window.addEventListener('offline', handleOffline);
      setIsOffline(!navigator.onLine);

      return () => {
        window.removeEventListener('online', handleOnline);
        window.removeEventListener('offline', handleOffline);
      };
    }
  }, []);

  const handleNavigation = React.useCallback((screen: string) => {
    setCurrentScreen(screen);
  }, []);

  // Student login handler
  const handleStudentLogin = React.useCallback(() => {
    setIsAuthenticated(true);
    setSelectedRole('student');
    setCurrentScreen('grade');
  }, []);

  // Teacher login handler
  const handleTeacherLogin = React.useCallback(() => {
    setIsAuthenticated(true);
    setSelectedRole('teacher');
    setCurrentScreen('teacher-onboarding');
  }, []);

  // Student signup handler
  const handleStudentSignUp = React.useCallback((grade: string) => {
    setIsAuthenticated(true);
    setSelectedRole('student');
    setSelectedGrade(grade);
    setCurrentScreen('student-onboarding');
  }, []);

  // Teacher signup handler
  const handleTeacherSignUp = React.useCallback(() => {
    setIsAuthenticated(true);
    setSelectedRole('teacher');
    setCurrentScreen('teacher-onboarding');
  }, []);

  const handleLanguageChange = React.useCallback((language: LanguageCode) => {
    setSelectedLanguage(language);
    try {
      if (typeof window !== 'undefined' && window.localStorage) {
        localStorage.setItem('selectedLanguage', language);
      }
    } catch (error) {
      console.warn('Could not save language to localStorage:', error);
    }
  }, []);

  const handleLanguageSelect = React.useCallback((language: LanguageCode) => {
    setSelectedLanguage(language);
    try {
      if (typeof window !== 'undefined' && window.localStorage) {
        localStorage.setItem('selectedLanguage', language);
      }
    } catch (error) {
      console.warn('Could not save language to localStorage:', error);
    }
    setCurrentScreen('role');
  }, []);

  const handleRoleSelect = React.useCallback((role: 'student' | 'teacher') => {
    setSelectedRole(role);
    if (role === 'teacher') {
      setCurrentScreen('teacher-onboarding');
    } else {
      setCurrentScreen('grade');
    }
  }, []);

  const handleGradeSelect = React.useCallback((grade: string) => {
    setSelectedGrade(grade);
    setCurrentScreen('student-onboarding');
  }, []);

  const handleBackToLanguage = React.useCallback(() => {
    setCurrentScreen('language');
  }, []);

  const handleBackToRole = React.useCallback(() => {
    setCurrentScreen('role');
  }, []);

  const handleStudentOnboardingComplete = React.useCallback(() => {
    setCurrentScreen('student-home');
  }, []);

  const handleTeacherOnboardingComplete = React.useCallback(() => {
    setCurrentScreen('teacher-dashboard');
  }, []);

  // Welcome screen handler
  const handleWelcomeNext = React.useCallback(() => {
    setCurrentScreen('student-login');
  }, []);

  // Error boundary for the entire app
  if (!t) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="text-center">
          <h1 className="text-xl mb-2">Loading...</h1>
          <p className="text-gray-600">Please wait while the app loads.</p>
        </div>
      </div>
    );
  }

  // Show loading screen while initializing
  if (!isInitialized) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-emerald-50 via-cyan-50 to-yellow-50">
        <div className="text-center">
          <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full mx-auto mb-4 flex items-center justify-center">
            <BookOpen className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-xl mb-2 text-gray-800">Loading...</h1>
          <p className="text-gray-600">Setting up your learning experience...</p>
        </div>
      </div>
    );
  }

  // Show offline screen if offline and not on certain screens
  if (isOffline && !['welcome', 'student-home', 'student-onboarding', 'language', 'role', 'grade', 'teacher-onboarding', 'teacher-dashboard', 'login', 'signup'].includes(currentScreen)) {
    return <OfflineScreen onNavigate={handleNavigation} t={t} />;
  }

  const renderScreen = () => {
    switch (currentScreen) {
      case 'welcome':
        return <WelcomeScreen onNext={handleWelcomeNext} />;
      case 'student-login':
        return (
          <StudentLoginScreen 
            onLogin={handleStudentLogin} 
            onNavigateToSignUp={() => setCurrentScreen('student-signup')} 
            onNavigateToTeacher={() => setCurrentScreen('teacher-login')}
            t={t}
            currentLanguage={selectedLanguage}
            onLanguageChange={handleLanguageChange}
          />
        );
      case 'student-signup':
        return (
          <StudentSignUpScreen 
            onSignUp={handleStudentSignUp} 
            onNavigateToLogin={() => setCurrentScreen('student-login')} 
            onNavigateToTeacher={() => setCurrentScreen('teacher-signup')}
            t={t}
            currentLanguage={selectedLanguage}
            onLanguageChange={handleLanguageChange}
          />
        );
      case 'teacher-login':
        return (
          <TeacherLoginScreen 
            onLogin={handleTeacherLogin} 
            onNavigateToSignUp={() => setCurrentScreen('teacher-signup')} 
            onNavigateToStudent={() => setCurrentScreen('student-login')}
            t={t}
            currentLanguage={selectedLanguage}
            onLanguageChange={handleLanguageChange}
          />
        );
      case 'teacher-signup':
        return (
          <TeacherSignUpScreen 
            onSignUp={handleTeacherSignUp} 
            onNavigateToLogin={() => setCurrentScreen('teacher-login')} 
            onNavigateToStudent={() => setCurrentScreen('student-signup')}
            t={t}
            currentLanguage={selectedLanguage}
            onLanguageChange={handleLanguageChange}
          />
        );
      case 'language':
        return <LanguageSelectionScreen onLanguageSelect={handleLanguageSelect} />;
      case 'role':
        return (
          <RoleSelectionScreen 
            onRoleSelect={handleRoleSelect} 
            onBack={handleBackToLanguage} 
            t={t}
            currentLanguage={selectedLanguage}
            onLanguageChange={handleLanguageChange}
          />
        );
      case 'grade':
        return <GradeSelectionScreen onGradeSelect={handleGradeSelect} onBack={handleBackToRole} t={t} />;
      case 'teacher-onboarding':
        return <TeacherOnboarding onComplete={handleTeacherOnboardingComplete} t={t} />;
      case 'teacher-dashboard':
        return (
          <TeacherDashboard 
            onNavigate={handleNavigation} 
            t={t}
            currentLanguage={selectedLanguage}
            onLanguageChange={handleLanguageChange}
          />
        );
      case 'teacher-classes':
        return <TeacherClasses onNavigate={handleNavigation} />;
      case 'teacher-analytics':
        return <TeacherAnalytics onNavigate={handleNavigation} />;
      case 'teacher-goals':
          return <TeacherGoals onNavigate={handleNavigation} />;
        
        case 'teacher-lessons':
          return (
            <TeacherLessons 
              onNavigate={handleNavigation} 
              t={t}
              currentLanguage={selectedLanguage}
              onLanguageChange={handleLanguageChange}
            />
          );
      case 'teacher-lessons':
        return (
          <TeacherLessons 
            onNavigate={handleNavigation} 
            t={t}
            currentLanguage={selectedLanguage}
            onLanguageChange={handleLanguageChange}
          />
        );
      case 'teacher-reports':
        return (
          <TeacherReports 
            onNavigate={handleNavigation} 
            t={t}
            currentLanguage={selectedLanguage}
            onLanguageChange={handleLanguageChange}
          />
        );
      case 'student-onboarding':
        return <OnboardingScreen onComplete={handleStudentOnboardingComplete} t={t} />;
      case 'student-home':
      case 'home':
        return (
          <HomeScreen 
            onNavigate={handleNavigation} 
            isOffline={isOffline} 
            t={t}
            currentLanguage={selectedLanguage}
            onLanguageChange={handleLanguageChange}
            selectedRole={selectedRole}
          />
        );
      case 'lesson':
        return <LessonScreen onNavigate={handleNavigation} t={t} selectedGrade={selectedGrade} />;
      case 'games':
        return <GamesScreen onNavigate={handleNavigation} t={t} />;
      case 'daily-challenge':
        return <DailyChallengeScreen onNavigate={handleNavigation} t={t} />;
      case 'odisha':
        return <OdishaScreen onNavigate={handleNavigation} t={t} />;
      case 'rewards':
        return <RewardsScreen onNavigate={handleNavigation} t={t} />;
      case 'leaderboard':
        return <LeaderboardScreen onNavigate={handleNavigation} t={t} />;
      case 'report':
        return <ReportScreen onNavigate={handleNavigation} t={t} />;
      case 'offline':
        return <OfflineScreen onNavigate={handleNavigation} t={t} />;
      default:
        return selectedRole === 'teacher' 
          ? <TeacherDashboard onNavigate={handleNavigation} t={t} currentLanguage={selectedLanguage} onLanguageChange={handleLanguageChange} />
          : <HomeScreen onNavigate={handleNavigation} isOffline={isOffline} t={t} currentLanguage={selectedLanguage} onLanguageChange={handleLanguageChange} selectedRole={selectedRole} />;
    }
  };

  return (
    <ErrorBoundary>
      {renderScreen()}
    </ErrorBoundary>
  );
}