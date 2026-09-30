import React from 'react';
import { Button } from './ui/button';
import { Card } from './ui/card';
import { Progress } from './ui/progress';
import { Badge } from './ui/badge';
import { 
  ArrowLeft, 
  TrendingUp, 
  Clock, 
  Target,
  BookOpen,
  Calculator,
  Palette,
  Globe,
  Calendar,
  Star,
  Award
} from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import { LanguageContent } from '../utils/languages';

interface ReportScreenProps {
  onNavigate: (screen: string) => void;
  t: LanguageContent;
}

export function ReportScreen({ onNavigate, t }: ReportScreenProps) {
  const weeklyData = [
    { day: 'सोम', dayEn: 'Mon', score: 45 },
    { day: 'मंगल', dayEn: 'Tue', score: 60 },
    { day: 'बुध', dayEn: 'Wed', score: 35 },
    { day: 'गुरु', dayEn: 'Thu', score: 80 },
    { day: 'शुक्र', dayEn: 'Fri', score: 55 },
    { day: 'शनि', dayEn: 'Sat', score: 70 },
    { day: 'रवि', dayEn: 'Sun', score: 40 }
  ];

  const subjectData = [
    { subject: 'गणित', subjectEn: 'Math', value: 35, color: '#0891B2' },
    { subject: 'हिंदी', subjectEn: 'Hindi', value: 25, color: '#10B981' },
    { subject: 'अंग्रेजी', subjectEn: 'English', value: 20, color: '#F59E0B' },
    { subject: 'विज्ञान', subjectEn: 'Science', value: 20, color: '#8B5CF6' }
  ];

  const stats = {
    totalLessons: 24,
    completedLessons: 18,
    totalTime: 180, // minutes
    averageScore: 78,
    streak: 7,
    rank: 2
  };

  const subjects = [
    { 
      name: 'गणित / Mathematics', 
      icon: Calculator, 
      progress: 75, 
      lessons: '12/16', 
      score: 85,
      color: 'cyan'
    },
    { 
      name: 'हिंदी / Hindi', 
      icon: BookOpen, 
      progress: 60, 
      lessons: '6/10', 
      score: 78,
      color: 'emerald'
    },
    { 
      name: 'अंग्रेजी / English', 
      icon: Globe, 
      progress: 80, 
      lessons: '8/10', 
      score: 82,
      color: 'yellow'
    },
    { 
      name: 'चित्रकला / Art', 
      icon: Palette, 
      progress: 90, 
      lessons: '9/10', 
      score: 92,
      color: 'purple'
    }
  ];

  const getColorClass = (color: string) => {
    const colors = {
      cyan: 'text-cyan-600 bg-cyan-100',
      emerald: 'text-emerald-600 bg-emerald-100',
      yellow: 'text-yellow-600 bg-yellow-100',
      purple: 'text-purple-600 bg-purple-100'
    };
    return colors[color as keyof typeof colors] || colors.cyan;
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
        
        <h1 className="text-xl text-gray-800">{t.report.progressReport}</h1>
        
        <div className="w-10"></div>
      </div>

      {/* Student Info */}
      <Card className="p-4 mb-6 bg-gradient-to-r from-cyan-100 to-purple-100 border-0">
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 bg-cyan-500 rounded-full flex items-center justify-center text-white text-2xl">
            👦
          </div>
          <div className="flex-1">
            <h2 className="text-xl text-gray-800">राहुल शर्मा</h2>
            <p className="text-gray-600">Rahul Sharma</p>
            <p className="text-sm text-gray-500">{t.report.class} • {t.report.age}</p>
          </div>
          <div className="text-center">
            <div className="text-2xl text-cyan-700">#{stats.rank}</div>
            <div className="text-sm text-gray-600">{t.report.inClass}</div>
          </div>
        </div>
      </Card>

      {/* Quick Stats */}
      <div className="grid grid-cols-2 gap-4 mb-6">
        <Card className="p-4 bg-white/90 border-0">
          <div className="flex items-center gap-3">
            <Target className="w-8 h-8 text-emerald-500" />
            <div>
              <div className="text-2xl text-emerald-600">{stats.completedLessons}/{stats.totalLessons}</div>
              <div className="text-sm text-gray-600">{t.report.lessons}</div>
            </div>
          </div>
        </Card>

        <Card className="p-4 bg-white/90 border-0">
          <div className="flex items-center gap-3">
            <Clock className="w-8 h-8 text-cyan-500" />
            <div>
              <div className="text-2xl text-cyan-600">{Math.floor(stats.totalTime / 60)}h {stats.totalTime % 60}m</div>
              <div className="text-sm text-gray-600">{t.report.time}</div>
            </div>
          </div>
        </Card>

        <Card className="p-4 bg-white/90 border-0">
          <div className="flex items-center gap-3">
            <TrendingUp className="w-8 h-8 text-yellow-500" />
            <div>
              <div className="text-2xl text-yellow-600">{stats.averageScore}%</div>
              <div className="text-sm text-gray-600">{t.report.average}</div>
            </div>
          </div>
        </Card>

        <Card className="p-4 bg-white/90 border-0">
          <div className="flex items-center gap-3">
            <Award className="w-8 h-8 text-purple-500" />
            <div>
              <div className="text-2xl text-purple-600">{stats.streak}</div>
              <div className="text-sm text-gray-600">{t.leaderboard.dayStreak}</div>
            </div>
          </div>
        </Card>
      </div>

      {/* Weekly Progress Chart */}
      <Card className="p-4 mb-6 bg-white/90 border-0">
        <h3 className="text-lg text-gray-800 mb-4">{t.report.weeklyProgress}</h3>
        <div className="h-40">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={weeklyData}>
              <XAxis dataKey="day" tick={{ fontSize: 12 }} />
              <YAxis tick={{ fontSize: 12 }} />
              <Bar dataKey="score" fill="#0891B2" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </Card>

      {/* Subject Progress */}
      <Card className="p-4 mb-6 bg-white/90 border-0">
        <h3 className="text-lg text-gray-800 mb-4">{t.report.subjectProgress}</h3>
        <div className="space-y-4">
          {subjects.map((subject, index) => (
            <div key={index} className="space-y-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${getColorClass(subject.color)}`}>
                    <subject.icon className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-gray-800">{subject.name}</div>
                    <div className="text-sm text-gray-600">{subject.lessons} पाठ</div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 text-yellow-500 fill-current" />
                    <span className="text-yellow-600">{subject.score}%</span>
                  </div>
                </div>
              </div>
              <Progress value={subject.progress} className="h-2" />
            </div>
          ))}
        </div>
      </Card>

      {/* Subject Distribution */}
      <Card className="p-4 mb-6 bg-white/90 border-0">
        <h3 className="text-lg text-gray-800 mb-4">{t.report.timeDistribution}</h3>
        <div className="flex items-center gap-4">
          <div className="w-32 h-32">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={subjectData}
                  cx="50%"
                  cy="50%"
                  innerRadius={30}
                  outerRadius={60}
                  dataKey="value"
                >
                  {subjectData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div className="flex-1 space-y-2">
            {subjectData.map((item, index) => (
              <div key={index} className="flex items-center gap-2">
                <div
                  className="w-3 h-3 rounded-full"
                  style={{ backgroundColor: item.color }}
                ></div>
                <span className="text-sm text-gray-700">{item.subject}</span>
                <span className="text-sm text-gray-500">{item.value}%</span>
              </div>
            ))}
          </div>
        </div>
      </Card>

      {/* Recommendations */}
      <Card className="p-4 bg-gradient-to-r from-emerald-100 to-cyan-100 border-0">
        <h3 className="text-lg text-gray-800 mb-3">{t.report.recommendations}</h3>
        <div className="space-y-2">
          <div className="flex items-start gap-2">
            <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2"></div>
            <p className="text-sm text-gray-700">
              {t.report.mathPerformance}
            </p>
          </div>
          <div className="flex items-start gap-2">
            <div className="w-2 h-2 bg-cyan-500 rounded-full mt-2"></div>
            <p className="text-sm text-gray-700">
              {t.report.hindiPractice}
            </p>
          </div>
          <div className="flex items-start gap-2">
            <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2"></div>
            <p className="text-sm text-gray-700">
              {t.report.keepStreak}
            </p>
          </div>
        </div>
      </Card>
    </div>
  );
}