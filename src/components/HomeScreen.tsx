import React from 'react';
import { Button } from './ui/button';
import { Card } from './ui/card';
import { Progress } from './ui/progress';
import { Badge } from './ui/badge';
import { 
  BookOpen, 
  Gamepad2, 
  Trophy, 
  BarChart3, 
  Sun, 
  Star,
  Flame,
  Volume2,
  Wifi,
  WifiOff,
  GraduationCap
} from 'lucide-react';
import { LanguageContent, LanguageCode } from '../utils/languages';
import { GameBackground } from './GameBackground';
import { InteractiveStudentBackground } from './InteractiveStudentBackground';
import { LanguageSelector } from './LanguageSelector';

interface HomeScreenProps {
  onNavigate: (screen: string) => void;
  isOffline?: boolean;
  t: LanguageContent;
  currentLanguage?: LanguageCode;
  onLanguageChange?: (language: LanguageCode) => void;
  selectedRole?: 'student' | 'teacher' | null;
}

export function HomeScreen({ 
  onNavigate, 
  isOffline = false, 
  t, 
  currentLanguage = 'en', 
  onLanguageChange,
  selectedRole 
}: HomeScreenProps) {
  const [earnedPoints, setEarnedPoints] = React.useState(0);

  const handlePointsEarned = (points: number) => {
    setEarnedPoints(prev => prev + points);
  };

  // Use interactive background for students, regular background for teachers
  const BackgroundComponent = selectedRole === 'student' ? InteractiveStudentBackground : GameBackground;
  const backgroundProps = selectedRole === 'student' 
    ? { onPointsEarned: handlePointsEarned }
    : { variant: "default" as const };

  return (
    <BackgroundComponent {...backgroundProps}>
      {/* Language Selector */}
      {onLanguageChange && (
        <LanguageSelector 
          currentLanguage={currentLanguage}
          onLanguageChange={onLanguageChange}
          position="fixed"
        />
      )}

      <div className="p-4">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center">
              <Sun className="w-7 h-7 text-white" />
            </div>
            <div>
              <h1 className="text-xl text-gray-800">{t.home.greeting}</h1>
            </div>
          </div>
          
          <div className="flex items-center gap-2">
            {/* Teacher Mode Access - Only if user is teacher */}
            {selectedRole === 'teacher' && (
              <Button 
                variant="outline" 
                size="sm"
                onClick={() => onNavigate('teacher-dashboard')}
                className="text-emerald-600 border-emerald-300 hover:bg-emerald-50 mr-2"
              >
                <GraduationCap className="w-4 h-4 mr-2" />
                Teacher
              </Button>
            )}
            {isOffline ? (
              <WifiOff className="w-5 h-5 text-gray-400" />
            ) : (
              <Wifi className="w-5 h-5 text-emerald-500" />
            )}
            <Button variant="ghost" size="sm">
              <Volume2 className="w-5 h-5 text-cyan-600" />
            </Button>
          </div>
        </div>

        {/* Progress Card */}
        <Card className="p-6 mb-6 bg-gradient-to-r from-purple-100 to-purple-200 border-0">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h2 className="text-lg text-gray-800">{t.home.todayProgress}</h2>
              <p className="text-sm text-gray-600">{t.home.lessonsComplete}</p>
            </div>
            <div className="flex items-center gap-1">
              <Star className="w-5 h-5 text-yellow-500 fill-current" />
              <span className="text-lg text-yellow-600">{125 + earnedPoints}</span>
            </div>
          </div>
          <Progress value={66} className="h-3 mb-3" />
          <div className="flex items-center gap-2">
            <Flame className="w-4 h-4 text-yellow-500" />
            <span className="text-sm text-gray-700">{t.home.dayStreak}</span>
          </div>
        </Card>

        {/* Daily Challenge */}
        <Card 
          className="p-4 mb-6 bg-gradient-to-r from-yellow-100 to-yellow-200 border-0 cursor-pointer hover:shadow-lg transition-shadow"
          onClick={() => onNavigate('daily-challenge')}
        >
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-yellow-500 rounded-lg flex items-center justify-center">
              <Trophy className="w-6 h-6 text-white" />
            </div>
            <div className="flex-1">
              <h3 className="text-gray-800">{t.home.dailyChallenge}</h3>
              <p className="text-sm text-gray-600">{t.home.mathProblems}</p>
            </div>
            <Badge className="bg-yellow-500 text-white">{t.home.new}</Badge>
          </div>
        </Card>

        {/* Odisha Special Section - Only for students */}
        {selectedRole === 'student' && (
          <Card className="p-4 mb-6 bg-gradient-to-r from-orange-100 to-red-100 border-0 shadow-lg" onClick={() => onNavigate('odisha')}>
            <div className="flex items-center gap-3 cursor-pointer">
              <div className="w-10 h-10 bg-orange-500 rounded-lg flex items-center justify-center">
                <span className="text-white text-lg">🏛️</span>
              </div>
              <div className="flex-1">
                <h3 className="text-gray-800">ଓଡ଼ିଶା Heritage</h3>
                <p className="text-sm text-gray-600">Discover Odisha's Rich Culture</p>
              </div>
              <Badge className="bg-orange-500 text-white">New</Badge>
            </div>
          </Card>
        )}

        {/* Quick Access Buttons */}
        <div className="grid grid-cols-2 gap-4 mb-6">
          <Button
            onClick={() => onNavigate('lesson')}
            className="h-24 bg-gradient-to-br from-cyan-400 to-cyan-600 hover:from-cyan-500 hover:to-cyan-700 text-white rounded-2xl flex flex-col items-center justify-center gap-2 shadow-lg"
          >
            <BookOpen className="w-8 h-8" />
            <span>{t.learn}</span>
          </Button>
          
          <Button
            onClick={() => onNavigate('games')}
            className="h-24 bg-gradient-to-br from-emerald-400 to-emerald-600 hover:from-emerald-500 hover:to-emerald-700 text-white rounded-2xl flex flex-col items-center justify-center gap-2 shadow-lg"
          >
            <Gamepad2 className="w-8 h-8" />
            <span>{t.play}</span>
          </Button>
          
          <Button
            onClick={() => onNavigate('leaderboard')}
            className="h-24 bg-gradient-to-br from-purple-400 to-purple-600 hover:from-purple-500 hover:to-purple-700 text-white rounded-2xl flex flex-col items-center justify-center gap-2 shadow-lg"
          >
            <Trophy className="w-8 h-8" />
            <span>{t.ranking}</span>
          </Button>
          
          <Button
            onClick={() => onNavigate('report')}
            className="h-24 bg-gradient-to-br from-yellow-400 to-yellow-600 hover:from-yellow-500 hover:to-yellow-700 text-white rounded-2xl flex flex-col items-center justify-center gap-2 shadow-lg"
          >
            <BarChart3 className="w-8 h-8" />
            <span>{t.reportNav}</span>
          </Button>
        </div>

        {/* Recent Achievements */}
        <Card className="p-4 bg-white/90 border-0 shadow-sm">
          <h3 className="text-gray-800 mb-3">{t.home.recentAchievements}</h3>
          <div className="flex gap-2 overflow-x-auto">
            <div className="min-w-16 flex flex-col items-center">
              <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mb-1">
                <Star className="w-6 h-6 text-yellow-500 fill-current" />
              </div>
              <span className="text-xs text-gray-600">{t.home.math}</span>
            </div>
            <div className="min-w-16 flex flex-col items-center">
              <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mb-1">
                <BookOpen className="w-6 h-6 text-emerald-500" />
              </div>
              <span className="text-xs text-gray-600">{t.home.hindi}</span>
            </div>
            <div className="min-w-16 flex flex-col items-center">
              <div className="w-12 h-12 bg-cyan-100 rounded-full flex items-center justify-center mb-1">
                <Trophy className="w-6 h-6 text-cyan-500 fill-current" />
              </div>
              <span className="text-xs text-gray-600">{t.home.week}</span>
            </div>
          </div>
        </Card>

        {/* Floating Action - Rewards */}
        <Button
          onClick={() => onNavigate('rewards')}
          className="fixed bottom-6 right-6 w-14 h-14 bg-gradient-to-br from-purple-400 to-purple-600 hover:from-purple-500 hover:to-purple-700 text-white rounded-full shadow-lg"
        >
          <Trophy className="w-6 h-6" />
        </Button>
      </div>
    </BackgroundComponent>
  );
}