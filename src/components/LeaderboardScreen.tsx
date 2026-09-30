import React from 'react';
import { Button } from './ui/button';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { 
  ArrowLeft, 
  Trophy, 
  Crown, 
  Medal,
  Star,
  Users,
  School,
  MapPin
} from 'lucide-react';
import { LanguageContent } from '../utils/languages';

interface LeaderboardScreenProps {
  onNavigate: (screen: string) => void;
  t: LanguageContent;
}

export function LeaderboardScreen({ onNavigate, t }: LeaderboardScreenProps) {
  const villageLeaderboard = [
    { rank: 1, name: 'राहुल शर्मा', nameEn: 'Rahul Sharma', score: 1250, avatar: '👦', isMe: true },
    { rank: 2, name: 'प्रिया गुप्ता', nameEn: 'Priya Gupta', score: 1180, avatar: '👧', isMe: false },
    { rank: 3, name: 'अमित कुमार', nameEn: 'Amit Kumar', score: 1050, avatar: '👦', isMe: false },
    { rank: 4, name: 'सुनीता देवी', nameEn: 'Sunita Devi', score: 980, avatar: '👩', isMe: false },
    { rank: 5, name: 'विकास यादव', nameEn: 'Vikas Yadav', score: 920, avatar: '👦', isMe: false }
  ];

  const schoolLeaderboard = [
    { rank: 1, name: 'प्रिया गुप्ता', nameEn: 'Priya Gupta', score: 1180, avatar: '👧', class: 'कक्षा 6', isMe: false },
    { rank: 2, name: 'राहुल शर्मा', nameEn: 'Rahul Sharma', score: 1250, avatar: '👦', class: 'कक्षा 5', isMe: true },
    { rank: 3, name: 'आदित्य सिंह', nameEn: 'Aditya Singh', score: 1100, avatar: '👦', class: 'कक्षा 6', isMe: false },
    { rank: 4, name: 'रीता पटेल', nameEn: 'Rita Patel', score: 1080, avatar: '👧', class: 'कक्षा 5', isMe: false },
    { rank: 5, name: 'मोहन दास', nameEn: 'Mohan Das', score: 1020, avatar: '👦', class: 'कक्षा 7', isMe: false }
  ];

  const friendsLeaderboard = [
    { rank: 1, name: 'राहुल शर्मा', nameEn: 'Rahul Sharma', score: 1250, avatar: '👦', streak: 7, isMe: true },
    { rank: 2, name: 'अनिल वर्मा', nameEn: 'Anil Verma', score: 1150, avatar: '👦', streak: 5, isMe: false },
    { rank: 3, name: 'कविता', nameEn: 'Kavita', score: 1080, avatar: '👧', streak: 3, isMe: false },
    { rank: 4, name: 'संजय', nameEn: 'Sanjay', score: 950, avatar: '👦', streak: 2, isMe: false }
  ];

  const getRankIcon = (rank: number) => {
    switch (rank) {
      case 1: return <Crown className="w-6 h-6 text-yellow-500" />;
      case 2: return <Medal className="w-6 h-6 text-gray-400" />;
      case 3: return <Medal className="w-6 h-6 text-orange-600" />;
      default: return <span className="w-6 h-6 flex items-center justify-center text-gray-600">{rank}</span>;
    }
  };

  const getRankColor = (rank: number, isMe: boolean) => {
    if (isMe) return 'bg-cyan-50 border-cyan-200';
    switch (rank) {
      case 1: return 'bg-yellow-50 border-yellow-200';
      case 2: return 'bg-gray-50 border-gray-200';
      case 3: return 'bg-orange-50 border-orange-200';
      default: return 'bg-white border-gray-100';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-cyan-50 p-4">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <Button 
          variant="ghost" 
          size="sm"
          onClick={() => onNavigate('home')}
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          {t.back}
        </Button>
        
        <h1 className="text-xl text-gray-800">{t.leaderboard.title}</h1>
        
        <div className="w-10"></div>
      </div>

      {/* My Current Position */}
      <Card className="p-4 mb-6 bg-gradient-to-r from-cyan-100 to-purple-100 border-0">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 bg-cyan-500 rounded-full flex items-center justify-center text-white text-xl">
            👦
          </div>
          <div className="flex-1">
            <h3 className="text-gray-800">राहुल शर्मा / Rahul Sharma</h3>
            <p className="text-sm text-gray-600">{t.leaderboard.yourPosition}</p>
          </div>
          <div className="text-center">
            <div className="text-2xl text-cyan-700">#1</div>
            <div className="text-sm text-gray-600">{t.leaderboard.inVillage}</div>
          </div>
          <div className="flex items-center gap-1">
            <Star className="w-4 h-4 text-yellow-500 fill-current" />
            <span className="text-yellow-600">1250</span>
          </div>
        </div>
      </Card>

      {/* Leaderboard Tabs */}
      <Tabs defaultValue="village" className="w-full">
        <TabsList className="grid w-full grid-cols-3 mb-6">
          <TabsTrigger value="village" className="flex items-center gap-2">
            <MapPin className="w-4 h-4" />
            <span className="hidden sm:inline">{t.leaderboard.village}</span>
            <span className="sm:hidden">{t.leaderboard.village}</span>
          </TabsTrigger>
          <TabsTrigger value="school" className="flex items-center gap-2">
            <School className="w-4 h-4" />
            <span className="hidden sm:inline">{t.leaderboard.school}</span>
            <span className="sm:hidden">{t.leaderboard.school}</span>
          </TabsTrigger>
          <TabsTrigger value="friends" className="flex items-center gap-2">
            <Users className="w-4 h-4" />
            <span className="hidden sm:inline">{t.leaderboard.friends}</span>
            <span className="sm:hidden">{t.leaderboard.friends}</span>
          </TabsTrigger>
        </TabsList>

        {/* Village Leaderboard */}
        <TabsContent value="village" className="space-y-3">
          {villageLeaderboard.map((player) => (
            <Card 
              key={player.rank} 
              className={`p-4 border-2 ${getRankColor(player.rank, player.isMe)}`}
            >
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-3">
                  {getRankIcon(player.rank)}
                  <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-xl">
                    {player.avatar}
                  </div>
                </div>
                
                <div className="flex-1">
                  <h3 className={`${player.isMe ? 'text-cyan-700' : 'text-gray-800'}`}>
                    {player.name} {player.isMe && t.leaderboard.you}
                  </h3>
                  <p className="text-sm text-gray-600">{player.nameEn}</p>
                </div>
                
                <div className="text-right">
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 text-yellow-500 fill-current" />
                    <span className="text-yellow-600">{player.score}</span>
                  </div>
                  <div className="text-sm text-gray-500">{t.leaderboard.points}</div>
                </div>
              </div>
            </Card>
          ))}
        </TabsContent>

        {/* School Leaderboard */}
        <TabsContent value="school" className="space-y-3">
          {schoolLeaderboard.map((player) => (
            <Card 
              key={player.rank} 
              className={`p-4 border-2 ${getRankColor(player.rank, player.isMe)}`}
            >
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-3">
                  {getRankIcon(player.rank)}
                  <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-xl">
                    {player.avatar}
                  </div>
                </div>
                
                <div className="flex-1">
                  <h3 className={`${player.isMe ? 'text-cyan-700' : 'text-gray-800'}`}>
                    {player.name} {player.isMe && t.leaderboard.you}
                  </h3>
                  <p className="text-sm text-gray-600">{player.class}</p>
                </div>
                
                <div className="text-right">
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 text-yellow-500 fill-current" />
                    <span className="text-yellow-600">{player.score}</span>
                  </div>
                  <div className="text-sm text-gray-500">{t.leaderboard.points}</div>
                </div>
              </div>
            </Card>
          ))}
        </TabsContent>

        {/* Friends Leaderboard */}
        <TabsContent value="friends" className="space-y-3">
          {friendsLeaderboard.map((player) => (
            <Card 
              key={player.rank} 
              className={`p-4 border-2 ${getRankColor(player.rank, player.isMe)}`}
            >
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-3">
                  {getRankIcon(player.rank)}
                  <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-xl">
                    {player.avatar}
                  </div>
                </div>
                
                <div className="flex-1">
                  <h3 className={`${player.isMe ? 'text-cyan-700' : 'text-gray-800'}`}>
                    {player.name} {player.isMe && t.leaderboard.you}
                  </h3>
                  <p className="text-sm text-gray-600">{player.nameEn}</p>
                </div>
                
                <div className="text-right">
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 text-yellow-500 fill-current" />
                    <span className="text-yellow-600">{player.score}</span>
                  </div>
                  <Badge variant="outline" className="mt-1">
                    {player.streak} {t.leaderboard.dayStreak}
                  </Badge>
                </div>
              </div>
            </Card>
          ))}
        </TabsContent>
      </Tabs>

      {/* Weekly Challenge */}
      <Card className="mt-6 p-4 bg-gradient-to-r from-purple-100 to-purple-200 border-0">
        <div className="flex items-center gap-3">
          <Trophy className="w-8 h-8 text-purple-600" />
          <div className="flex-1">
            <h3 className="text-gray-800">{t.leaderboard.weeklyChallenge}</h3>
            <p className="text-sm text-gray-600">{t.leaderboard.earnMostPoints}</p>
          </div>
          <Badge className="bg-purple-500 text-white">
            {t.leaderboard.daysLeft}
          </Badge>
        </div>
      </Card>
    </div>
  );
}