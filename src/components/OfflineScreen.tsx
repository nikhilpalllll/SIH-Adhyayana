import React from 'react';
import { Button } from './ui/button';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { 
  WifiOff, 
  Download, 
  BookOpen, 
  Play,
  CheckCircle,
  Clock,
  ArrowLeft
} from 'lucide-react';
import { LanguageContent } from '../utils/languages';

interface OfflineScreenProps {
  onNavigate: (screen: string) => void;
  t: LanguageContent;
}

export function OfflineScreen({ onNavigate, t }: OfflineScreenProps) {
  const cachedLessons = [
    {
      id: 1,
      title: 'संख्याएं 1-10',
      titleEn: 'Numbers 1-10',
      subject: 'गणित / Math',
      duration: '15 मिनट / 15 min',
      progress: 100,
      downloaded: true,
      icon: '🔢'
    },
    {
      id: 2,
      title: 'अक्षर ज्ञान',
      titleEn: 'Letter Recognition',
      subject: 'हिंदी / Hindi',
      duration: '20 मिनट / 20 min',
      progress: 60,
      downloaded: true,
      icon: '📝'
    },
    {
      id: 3,
      title: 'रंग पहचान',
      titleEn: 'Color Recognition',
      subject: 'सामान्य ज्ञान / GK',
      duration: '10 मिनट / 10 min',
      progress: 0,
      downloaded: true,
      icon: '🎨'
    },
    {
      id: 4,
      title: 'जानवरों के नाम',
      titleEn: 'Animal Names',
      subject: 'अंग्रेजी / English',
      duration: '12 मिनट / 12 min',
      progress: 30,
      downloaded: true,
      icon: '🐘'
    }
  ];

  const availableDownloads = [
    {
      id: 5,
      title: 'आकार पहचान',
      titleEn: 'Shape Recognition',
      subject: 'गणित / Math',
      size: '25 MB',
      icon: '🔷'
    },
    {
      id: 6,
      title: 'फलों के नाम',
      titleEn: 'Fruit Names',
      subject: 'सामान्य ज्ञान / GK',
      size: '18 MB',
      icon: '🍎'
    }
  ];

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
        
        <h1 className="text-xl text-gray-800">{t.offline.offlineMode}</h1>
        
        <div className="w-10"></div>
      </div>

      {/* Offline Status */}
      <Card className="p-4 mb-6 bg-gradient-to-r from-yellow-100 to-orange-100 border-0">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center">
            <WifiOff className="w-6 h-6 text-white" />
          </div>
          <div className="flex-1">
            <h2 className="text-lg text-gray-800">{t.offline.noInternet}</h2>
            <p className="text-xs text-gray-500 mt-1">
              {t.offline.lessonsAvailable}
            </p>
          </div>
          <Badge variant="outline" className="bg-yellow-50 text-yellow-700 border-yellow-200">
            Offline
          </Badge>
        </div>
      </Card>

      {/* Downloaded Lessons */}
      <div className="mb-6">
        <h3 className="text-lg text-gray-800 mb-4">{t.offline.downloadedLessons}</h3>
        <div className="space-y-3">
          {cachedLessons.map((lesson) => (
            <Card key={lesson.id} className="p-4 bg-white/95 border-0 hover:bg-white transition-colors">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-cyan-100 rounded-lg flex items-center justify-center text-2xl">
                  {lesson.icon}
                </div>
                
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between mb-2">
                    <div className="flex-1">
                      <h4 className="text-gray-800 truncate">{lesson.title}</h4>
                      <p className="text-sm text-gray-600">{lesson.titleEn}</p>
                      <p className="text-xs text-gray-500">{lesson.subject}</p>
                    </div>
                    <div className="flex items-center gap-2 ml-2">
                      <CheckCircle className="w-4 h-4 text-emerald-500" />
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-gray-400" />
                      <span className="text-sm text-gray-500">{lesson.duration}</span>
                    </div>
                    
                    <Button
                      size="sm"
                      className="bg-emerald-500 hover:bg-emerald-600 text-white"
                      onClick={() => onNavigate('lesson')}
                    >
                      <Play className="w-4 h-4 mr-1" />
                      {lesson.progress > 0 ? t.continue : t.start}
                    </Button>
                  </div>
                  
                  {lesson.progress > 0 && (
                    <div className="mt-2">
                      <div className="flex justify-between text-xs text-gray-500 mb-1">
                        <span>{t.lesson.progress}</span>
                        <span>{lesson.progress}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-1.5">
                        <div 
                          className="bg-emerald-500 h-1.5 rounded-full transition-all duration-300"
                          style={{ width: `${lesson.progress}%` }}
                        ></div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* Available Downloads */}
      <div className="mb-6">
        <h3 className="text-lg text-gray-800 mb-4">{t.offline.availableDownloads}</h3>
        <p className="text-sm text-gray-600 mb-4">
          {t.offline.downloadWhenOnline}
        </p>
        
        <div className="space-y-3">
          {availableDownloads.map((lesson) => (
            <Card key={lesson.id} className="p-4 bg-gray-50 border-0 opacity-75">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gray-200 rounded-lg flex items-center justify-center text-2xl grayscale">
                  {lesson.icon}
                </div>
                
                <div className="flex-1">
                  <h4 className="text-gray-600">{lesson.title}</h4>
                  <p className="text-sm text-gray-500">{lesson.titleEn}</p>
                  <p className="text-xs text-gray-400">{lesson.subject} • {lesson.size}</p>
                </div>
                
                <Button
                  size="sm"
                  variant="outline"
                  disabled
                  className="opacity-50"
                >
                  <Download className="w-4 h-4 mr-1" />
                  {t.offline.download}
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* Connection Status */}
      <Card className="p-4 bg-cyan-50 border-0">
        <div className="text-center">
          <div className="w-16 h-16 bg-cyan-100 rounded-full flex items-center justify-center mx-auto mb-3">
            <WifiOff className="w-8 h-8 text-cyan-600" />
          </div>
          <h3 className="text-gray-800 mb-2">{t.offline.waitingInternet}</h3>
          <p className="text-sm text-gray-600 mb-4">
            {t.offline.autoSync}
          </p>
          <p className="text-xs text-gray-500">
            {t.offline.progressSync}
          </p>
          
          <div className="flex justify-center mt-4">
            <div className="flex space-x-1">
              <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
              <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
              <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}