import React from 'react';
import { Button } from './ui/button';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { 
  ArrowLeft, 
  Star, 
  Trophy, 
  Crown, 
  Flame,
  Target,
  Award,
  Gem,
  Heart,
  Zap
} from 'lucide-react';
import { LanguageContent } from '../utils/languages';
import { GameBackground } from './GameBackground';

interface RewardsScreenProps {
  onNavigate: (screen: string) => void;
  t: LanguageContent;
}

export function RewardsScreen({ onNavigate, t }: RewardsScreenProps) {
  const [showCelebration, setShowCelebration] = React.useState(false);

  React.useEffect(() => {
    // Show celebration animation when screen loads
    setShowCelebration(true);
    const timer = setTimeout(() => setShowCelebration(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  const stats = {
    stars: 245,
    coins: 1250,
    streak: 7,
    level: 5
  };

  const badges = [
    { id: 1, name: 'गणित मास्टर', nameEn: 'Math Master', icon: '🧮', earned: true, rarity: 'gold' },
    { id: 2, name: 'पाठक', nameEn: 'Reader', icon: '📚', earned: true, rarity: 'silver' },
    { id: 3, name: 'तेज़ दिमाग', nameEn: 'Quick Thinker', icon: '⚡', earned: true, rarity: 'bronze' },
    { id: 4, name: 'मेहनती', nameEn: 'Hard Worker', icon: '💪', earned: false, rarity: 'gold' },
    { id: 5, name: 'टीम प्लेयर', nameEn: 'Team Player', icon: '🤝', earned: false, rarity: 'silver' },
    { id: 6, name: 'चैंपियन', nameEn: 'Champion', icon: '👑', earned: false, rarity: 'platinum' }
  ];

  const achievements = [
    { title: '7 दिन की streak!', titleEn: '7 day streak!', reward: '+50 coins', icon: Flame, color: 'yellow' },
    { title: 'गणित में 100%', titleEn: '100% in Math', reward: '+25 stars', icon: Star, color: 'yellow' },
    { title: 'पहला बैज', titleEn: 'First Badge', reward: 'Math Master', icon: Trophy, color: 'cyan' }
  ];

  const getRarityColor = (rarity: string) => {
    switch (rarity) {
      case 'platinum': return 'from-purple-400 to-purple-600';
      case 'gold': return 'from-yellow-400 to-yellow-600';
      case 'silver': return 'from-gray-300 to-gray-500';
      case 'bronze': return 'from-orange-300 to-orange-500';
      default: return 'from-gray-200 to-gray-300';
    }
  };

  return (
    <GameBackground variant="decorative">
      <div className="p-4">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <Button 
            variant="ghost" 
            size="sm"
            onClick={() => onNavigate('home')}
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            {t.back || 'Back'}
          </Button>
          
          <h1 className="text-xl text-gray-800">{t.rewards || 'Rewards'}</h1>
          
          <div className="w-10"></div>
        </div>

        {/* Celebration Animation */}
        {showCelebration && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/20 backdrop-blur-sm">
            <Card className="p-8 text-center bg-white shadow-2xl animate-bounce">
              <div className="text-6xl mb-4">🎉</div>
              <h2 className="text-xl text-yellow-600 mb-2">
                {(t.rewards && typeof t.rewards === 'object' && 'congratulations' in t.rewards) 
                  ? (t.rewards as any).congratulations 
                  : 'Congratulations!'}
              </h2>
              <p className="text-sm text-gray-500 mt-2">
                {(t.rewards && typeof t.rewards === 'object' && 'starsEarned' in t.rewards) 
                  ? (t.rewards as any).starsEarned 
                  : '+10 stars earned!'}
              </p>
            </Card>
          </div>
        )}

        {/* Stats Cards */}
        <div className="grid grid-cols-2 gap-4 mb-6">
          <Card className="p-4 bg-gradient-to-br from-yellow-100 to-yellow-200 border-0">
            <div className="flex items-center gap-3">
              <Star className="w-8 h-8 text-yellow-600 fill-current" />
              <div>
                <div className="text-2xl text-yellow-700">{stats.stars}</div>
                <div className="text-sm text-gray-600">
                  {(t.rewards && typeof t.rewards === 'object' && 'stars' in t.rewards) 
                    ? (t.rewards as any).stars 
                    : 'Stars'}
                </div>
              </div>
            </div>
          </Card>

          <Card className="p-4 bg-gradient-to-br from-cyan-100 to-cyan-200 border-0">
            <div className="flex items-center gap-3">
              <Gem className="w-8 h-8 text-cyan-600" />
              <div>
                <div className="text-2xl text-cyan-700">{stats.coins}</div>
                <div className="text-sm text-gray-600">
                  {(t.rewards && typeof t.rewards === 'object' && 'coins' in t.rewards) 
                    ? (t.rewards as any).coins 
                    : 'Coins'}
                </div>
              </div>
            </div>
          </Card>

          <Card className="p-4 bg-gradient-to-br from-orange-100 to-orange-200 border-0">
            <div className="flex items-center gap-3">
              <Flame className="w-8 h-8 text-orange-600" />
              <div>
                <div className="text-2xl text-orange-700">{stats.streak}</div>
                <div className="text-sm text-gray-600">
                  {(t.rewards && typeof t.rewards === 'object' && 'days' in t.rewards) 
                    ? (t.rewards as any).days 
                    : 'Days'}
                </div>
              </div>
            </div>
          </Card>

          <Card className="p-4 bg-gradient-to-br from-emerald-100 to-emerald-200 border-0">
            <div className="flex items-center gap-3">
              <Crown className="w-8 h-8 text-emerald-600" />
              <div>
                <div className="text-2xl text-emerald-700">
                  {(t.rewards && typeof t.rewards === 'object' && 'level' in t.rewards) 
                    ? (t.rewards as any).level 
                    : 'Level'} {stats.level}
                </div>
              </div>
            </div>
          </Card>
        </div>

        {/* Recent Achievements */}
        <Card className="p-4 mb-6 bg-white/90 border-0">
          <h3 className="text-lg text-gray-800 mb-4">
            {(t.rewards && typeof t.rewards === 'object' && 'recentAchievements' in t.rewards) 
              ? (t.rewards as any).recentAchievements 
              : 'Recent Achievements'}
          </h3>
          <div className="space-y-3">
            {achievements.map((achievement, index) => (
              <div key={index} className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                  achievement.color === 'yellow' ? 'bg-yellow-100' : 
                  achievement.color === 'cyan' ? 'bg-cyan-100' : 'bg-purple-100'
                }`}>
                  <achievement.icon className={`w-5 h-5 ${
                    achievement.color === 'yellow' ? 'text-yellow-600' : 
                    achievement.color === 'cyan' ? 'text-cyan-600' : 'text-purple-600'
                  }`} />
                </div>
                <div className="flex-1">
                  <div className="text-gray-800">{achievement.title}</div>
                  <div className="text-sm text-gray-600">{achievement.titleEn}</div>
                </div>
                <Badge className={`${
                  achievement.color === 'yellow' ? 'bg-yellow-500' : 
                  achievement.color === 'cyan' ? 'bg-cyan-500' : 'bg-purple-500'
                } text-white`}>
                  {achievement.reward}
                </Badge>
              </div>
            ))}
          </div>
        </Card>

        {/* Badges Collection */}
        <Card className="p-4 bg-white/90 border-0">
          <h3 className="text-lg text-gray-800 mb-4">
            {(t.rewards && typeof t.rewards === 'object' && 'badgeCollection' in t.rewards) 
              ? (t.rewards as any).badgeCollection 
              : 'Badge Collection'}
          </h3>
          <div className="grid grid-cols-3 gap-4">
            {badges.map((badge) => (
              <div key={badge.id} className="text-center">
                <div className={`
                  w-16 h-16 rounded-full mx-auto mb-2 flex items-center justify-center text-2xl
                  ${badge.earned 
                    ? `bg-gradient-to-br ${getRarityColor(badge.rarity)} shadow-lg` 
                    : 'bg-gray-200 opacity-50'
                  }
                `}>
                  {badge.earned ? badge.icon : '🔒'}
                </div>
                <div className={`text-xs ${badge.earned ? 'text-gray-800' : 'text-gray-400'}`}>
                  {badge.name}
                </div>
                <div className={`text-xs ${badge.earned ? 'text-gray-600' : 'text-gray-400'}`}>
                  {badge.nameEn}
                </div>
                {badge.earned && (
                  <div className="text-xs text-emerald-600 mt-1">
                    {(t.rewards && typeof t.rewards === 'object' && 'earned' in t.rewards) 
                      ? (t.rewards as any).earned 
                      : '✓ Earned'}
                  </div>
                )}
              </div>
            ))}
          </div>
        </Card>

        {/* Bottom Action */}
        <div className="mt-6 text-center">
          <Button
            onClick={() => onNavigate('home')}
            className="bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white px-8 py-3 rounded-full shadow-lg"
          >
            {(t.rewards && typeof t.rewards === 'object' && 'earnMorePoints' in t.rewards) 
              ? (t.rewards as any).earnMorePoints 
              : 'Earn More Points'}
          </Button>
        </div>
      </div>
    </GameBackground>
  );
}