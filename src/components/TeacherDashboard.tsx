import React from 'react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { Progress } from './ui/progress';
import { Badge } from './ui/badge';
import {
  Users,
  BookOpen,
  TrendingUp,
  Calendar,
  Plus,
  BarChart3,
  FileText,
  Settings,
  Bell,
  Search,
  Filter,
  ChevronRight,
  Star,
  Clock,
  Award,
  Target,
  User
} from 'lucide-react';
import { LanguageContent, LanguageCode } from '../utils/languages';
import { LanguageSelector } from './LanguageSelector';

interface TeacherDashboardProps {
  onNavigate: (screen: string) => void;
  t: LanguageContent;
  currentLanguage?: LanguageCode;
  onLanguageChange?: (language: LanguageCode) => void;
}

export function TeacherDashboard({ onNavigate, t, currentLanguage = 'en', onLanguageChange }: TeacherDashboardProps) {
  const [activeTab, setActiveTab] = React.useState('overview');

  const stats = [
    {
      title: t.teacherDashboard.totalStudents,
      value: '156',
      change: '+12',
      icon: Users,
      color: 'text-blue-600',
      bgColor: 'bg-blue-100'
    },
    {
      title: t.teacherDashboard.activeAssignments,
      value: '8',
      change: '+2',
      icon: BookOpen,
      color: 'text-emerald-600',
      bgColor: 'bg-emerald-100'
    },
    {
      title: t.teacherDashboard.avgProgress,
      value: '78%',
      change: '+5%',
      icon: TrendingUp,
      color: 'text-yellow-600',
      bgColor: 'bg-yellow-100'
    }
  ];

  const recentClasses = [
    { name: 'Class 5A', students: 28, progress: 85, subject: 'Mathematics' },
    { name: 'Class 5B', students: 30, progress: 78, subject: 'Hindi' },
    { name: 'Class 4A', students: 25, progress: 92, subject: 'Mathematics' },
    { name: 'Class 4B', students: 27, progress: 70, subject: 'Science' }
  ];

  const recentActivity = [
    { student: 'Priya Sharma', action: 'Completed Math Assignment', time: '2 mins ago', score: 95 },
    { student: 'Rahul Kumar', action: 'Started Hindi Lesson', time: '5 mins ago', score: null },
    { student: 'Anita Patel', action: 'Earned Star Badge', time: '10 mins ago', score: null },
    { student: 'Dev Singh', action: 'Completed Quiz', time: '15 mins ago', score: 88 }
  ];

  const upcomingTasks = [
    { task: 'Grade Math Tests', due: 'Today 5:00 PM', priority: 'high' },
    { task: 'Prepare Science Lesson', due: 'Tomorrow 9:00 AM', priority: 'medium' },
    { task: 'Parent Meeting - Priya', due: 'Friday 2:00 PM', priority: 'low' },
    { task: 'Monthly Report', due: 'Next Week', priority: 'medium' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-cyan-50 relative">
      {/* Language Selector */}
      {onLanguageChange && (
        <LanguageSelector 
          currentLanguage={currentLanguage}
          onLanguageChange={onLanguageChange}
          position="fixed"
        />
      )}

      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="p-4">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h1 className="text-2xl text-gray-800">Teacher Portal</h1>
              <p className="text-gray-600">{t.teacherDashboard.welcome}</p>
            </div>
            <div className="flex items-center gap-3">
              {/* Student Mode Access Button - Teachers can access student features */}
              <Button 
                variant="outline" 
                size="sm"
                onClick={() => onNavigate('student-home')}
                className="text-cyan-600 border-cyan-300 hover:bg-cyan-50"
              >
                <User className="w-4 h-4 mr-2" />
                Student View
              </Button>
              <Button variant="ghost" size="sm">
                <Bell className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="sm">
                <Settings className="w-5 h-5" />
              </Button>
            </div>
          </div>

          {/* Search Bar */}
          <div className="relative mb-4">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <input
              type="text"
              placeholder="Search students, classes, assignments..."
              className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
            />
            <Button variant="ghost" size="sm" className="absolute right-2 top-1/2 transform -translate-y-1/2">
              <Filter className="w-4 h-4" />
            </Button>
          </div>

          {/* Navigation Tabs */}
          <div className="flex gap-1">
            {[
              { id: 'overview', label: 'Overview' },
              { id: 'classes', label: 'Classes' },
              { id: 'assignments', label: 'Assignments' },
              { id: 'analytics', label: 'Analytics' }
            ].map((tab) => (
              <Button
                key={tab.id}
                variant={activeTab === tab.id ? "default" : "ghost"}
                size="sm"
                onClick={() => setActiveTab(tab.id)}
                className={activeTab === tab.id ? "bg-yellow-500 text-white" : ""}
              >
                {tab.label}
              </Button>
            ))}
          </div>
        </div>
      </div>

      <div className="p-4 space-y-6">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {stats.map((stat, index) => (
            <Card key={index} className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600 mb-1">{stat.title}</p>
                  <div className="flex items-center gap-2">
                    <span className="text-2xl text-gray-800">{stat.value}</span>
                    <Badge variant="outline" className="text-green-600 border-green-200">
                      {stat.change}
                    </Badge>
                  </div>
                </div>
                <div className={`w-12 h-12 rounded-full ${stat.bgColor} flex items-center justify-center`}>
                  <stat.icon className={`w-6 h-6 ${stat.color}`} />
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Quick Actions */}
        <Card className="p-4">
          <h3 className="text-lg mb-4 text-gray-800">Quick Actions</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            <Button className="bg-yellow-500 hover:bg-yellow-600 text-white flex flex-col items-center p-4 h-auto" onClick={() => onNavigate('teacher-lessons')}>
              <Plus className="w-6 h-6 mb-2" />
              {t.teacherDashboard.createLesson}
            </Button>
            <Button variant="outline" className="flex flex-col items-center p-4 h-auto" onClick={() => onNavigate('teacher-analytics')}>
              <BarChart3 className="w-6 h-6 mb-2" />
              {t.teacherDashboard.analytics}
            </Button>
            <Button variant="outline" className="flex flex-col items-center p-4 h-auto" onClick={() => onNavigate('teacher-reports')}>
              <FileText className="w-6 h-6 mb-2" />
              {t.teacherDashboard.viewReports}
            </Button>
            <Button variant="outline" className="flex flex-col items-center p-4 h-auto" onClick={() => onNavigate('teacher-classes')}>
              <Users className="w-6 h-6 mb-2" />
              {t.teacherDashboard.manageStudents}
            </Button>
          </div>
        </Card>

        {/* My Classes */}
        <Card className="p-4">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg text-gray-800">{t.teacherDashboard.myClasses}</h3>
            <Button variant="ghost" size="sm">
              View All <ChevronRight className="w-4 h-4 ml-1" />
            </Button>
          </div>
          <div className="space-y-3">
            {recentClasses.map((classItem, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center">
                    <BookOpen className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="text-gray-800">{classItem.name}</h4>
                    <p className="text-sm text-gray-600">{classItem.students} students • {classItem.subject}</p>
                  </div>
                </div>
                <div className="text-right">
                  <div className="flex items-center gap-2 mb-1">
                    <Progress value={classItem.progress} className="w-20" />
                    <span className="text-sm text-gray-600">{classItem.progress}%</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Card>

        {/* Recent Activity & Upcoming Tasks */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Recent Activity */}
          <Card className="p-4">
            <h3 className="text-lg mb-4 text-gray-800">{t.teacherDashboard.recentActivity}</h3>
            <div className="space-y-3">
              {recentActivity.map((activity, index) => (
                <div key={index} className="flex items-center gap-3 p-2">
                  <div className="w-8 h-8 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-full flex items-center justify-center">
                    {activity.score ? (
                      <Star className="w-4 h-4 text-white" />
                    ) : (
                      <Clock className="w-4 h-4 text-white" />
                    )}
                  </div>
                  <div className="flex-1">
                    <p className="text-sm text-gray-800">{activity.student}</p>
                    <p className="text-xs text-gray-600">{activity.action}</p>
                    <p className="text-xs text-gray-500">{activity.time}</p>
                  </div>
                  {activity.score && (
                    <Badge variant="outline" className="text-green-600">
                      {activity.score}%
                    </Badge>
                  )}
                </div>
              ))}
            </div>
          </Card>

          {/* Upcoming Tasks */}
          <Card className="p-4">
            <h3 className="text-lg mb-4 text-gray-800">Upcoming Tasks</h3>
            <div className="space-y-3">
              {upcomingTasks.map((task, index) => (
                <div key={index} className="flex items-center gap-3 p-2">
                  <div className={`w-3 h-3 rounded-full ${
                    task.priority === 'high' ? 'bg-red-500' :
                    task.priority === 'medium' ? 'bg-yellow-500' : 'bg-green-500'
                  }`}></div>
                  <div className="flex-1">
                    <p className="text-sm text-gray-800">{task.task}</p>
                    <p className="text-xs text-gray-600">{task.due}</p>
                  </div>
                  <Badge variant="outline" className={
                    task.priority === 'high' ? 'text-red-600 border-red-200' :
                    task.priority === 'medium' ? 'text-yellow-600 border-yellow-200' :
                    'text-green-600 border-green-200'
                  }>
                    {task.priority}
                  </Badge>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>

      {/* Bottom Navigation for Teacher */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-lg">
        <div className="grid grid-cols-5 gap-1 p-2">
          {[
            { icon: BarChart3, label: 'Overview', screen: 'teacher-dashboard' },
            { icon: Users, label: 'Classes', screen: 'teacher-classes' },
            { icon: BookOpen, label: 'Lessons', screen: 'teacher-lessons' },
            { icon: Award, label: 'Reports', screen: 'teacher-reports' },
            { icon: Target, label: 'Goals', screen: 'teacher-goals' }
          ].map((item, index) => (
            <Button
              key={index}
              variant="ghost"
              size="sm"
              className="flex flex-col items-center p-2 h-auto"
              onClick={() => onNavigate(item.screen)}
            >
              <item.icon className="w-5 h-5 mb-1 text-gray-600" />
              <span className="text-xs text-gray-600">{item.label}</span>
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
}