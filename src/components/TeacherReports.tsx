import React from 'react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { Progress } from './ui/progress';
import { Badge } from './ui/badge';
import {
  BarChart3,
  FileText,
  Download,
  Filter,
  Calendar,
  Users,
  TrendingUp,
  Award,
  AlertCircle,
  CheckCircle,
  User,
  BookOpen,
  Target
} from 'lucide-react';
import { LanguageContent, LanguageCode } from '../utils/languages';
import { LanguageSelector } from './LanguageSelector';

interface TeacherReportsProps {
  onNavigate: (screen: string) => void;
  t: LanguageContent;
  currentLanguage?: LanguageCode;
  onLanguageChange?: (language: LanguageCode) => void;
}

export function TeacherReports({ onNavigate, t, currentLanguage = 'en', onLanguageChange }: TeacherReportsProps) {
  const [selectedReportType, setSelectedReportType] = React.useState('overview');
  const [selectedTimeframe, setSelectedTimeframe] = React.useState('this-month');

  const reportTypes = [
    { id: 'overview', label: 'Class Overview', icon: BarChart3 },
    { id: 'student-progress', label: 'Student Progress', icon: TrendingUp },
    { id: 'attendance', label: 'Attendance', icon: Users },
    { id: 'assignments', label: 'Assignment Reports', icon: FileText },
    { id: 'performance', label: 'Performance Analysis', icon: Award }
  ];

  const classOverviewData = [
    {
      className: 'Class 5A',
      subject: 'Mathematics',
      totalStudents: 28,
      activeStudents: 26,
      avgProgress: 85,
      assignmentsCompleted: 18,
      totalAssignments: 20,
      avgScore: 88,
      attendanceRate: 92
    },
    {
      className: 'Class 5B',
      subject: 'Hindi',
      totalStudents: 30,
      activeStudents: 28,
      avgProgress: 78,
      assignmentsCompleted: 22,
      totalAssignments: 25,
      avgScore: 82,
      attendanceRate: 89
    },
    {
      className: 'Class 4A',
      subject: 'Mathematics',
      totalStudents: 25,
      activeStudents: 24,
      avgProgress: 92,
      assignmentsCompleted: 20,
      totalAssignments: 20,
      avgScore: 94,
      attendanceRate: 96
    }
  ];

  const studentProgressData = [
    {
      name: 'Priya Sharma',
      class: '5A',
      overallProgress: 95,
      subjects: {
        math: 98,
        hindi: 92,
        science: 96,
        english: 94
      },
      assignmentsCompleted: 18,
      totalAssignments: 20,
      lastActive: '2 hours ago',
      status: 'excellent'
    },
    {
      name: 'Rahul Kumar',
      class: '5B',
      overallProgress: 82,
      subjects: {
        math: 85,
        hindi: 88,
        science: 80,
        english: 75
      },
      assignmentsCompleted: 15,
      totalAssignments: 20,
      lastActive: '1 day ago',
      status: 'good'
    },
    {
      name: 'Anita Patel',
      class: '5A',
      overallProgress: 78,
      subjects: {
        math: 82,
        hindi: 85,
        science: 72,
        english: 73
      },
      assignmentsCompleted: 12,
      totalAssignments: 20,
      lastActive: '3 hours ago',
      status: 'needs-attention'
    }
  ];

  const attendanceData = [
    {
      className: 'Class 5A',
      totalClasses: 20,
      avgAttendance: 92,
      students: [
        { name: 'Priya Sharma', attendance: 95, classes: 19 },
        { name: 'Rahul Kumar', attendance: 90, classes: 18 },
        { name: 'Dev Singh', attendance: 85, classes: 17 }
      ]
    },
    {
      className: 'Class 5B',
      totalClasses: 18,
      avgAttendance: 89,
      students: [
        { name: 'Meera Patel', attendance: 94, classes: 17 },
        { name: 'Arjun Kumar', attendance: 83, classes: 15 },
        { name: 'Sita Singh', attendance: 89, classes: 16 }
      ]
    }
  ];

  const assignmentReports = [
    {
      title: 'Math Quiz - Fractions',
      class: 'Class 5A',
      dueDate: '2024-09-25',
      submitted: 25,
      total: 28,
      avgScore: 88,
      highestScore: 98,
      lowestScore: 65,
      status: 'completed'
    },
    {
      title: 'Hindi Essay Writing',
      class: 'Class 5B',
      dueDate: '2024-09-26',
      submitted: 22,
      total: 30,
      avgScore: 82,
      highestScore: 95,
      lowestScore: 58,
      status: 'active'
    },
    {
      title: 'Science Experiment Report',
      class: 'Class 4A',
      dueDate: '2024-09-24',
      submitted: 25,
      total: 25,
      avgScore: 94,
      highestScore: 100,
      lowestScore: 78,
      status: 'completed'
    }
  ];

  const generateReport = (type: string) => {
    // Mock report generation
    console.log(`Generating ${type} report for ${selectedTimeframe}`);
  };

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
            <div className="flex items-center gap-3">
              <Button variant="ghost" size="sm" onClick={() => onNavigate('teacher-dashboard')}>
                ← Back to Dashboard
              </Button>
              <div>
                <h1 className="text-2xl text-gray-800">Reports & Analytics</h1>
                <p className="text-gray-600">Comprehensive performance insights</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <select 
                value={selectedTimeframe}
                onChange={(e) => setSelectedTimeframe(e.target.value)}
                className="px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
              >
                <option value="this-week">This Week</option>
                <option value="this-month">This Month</option>
                <option value="this-semester">This Semester</option>
                <option value="this-year">This Year</option>
              </select>
              <Button className="bg-yellow-500 hover:bg-yellow-600 text-white">
                <Download className="w-4 h-4 mr-2" />
                Export Report
              </Button>
            </div>
          </div>

          {/* Report Type Tabs */}
          <div className="flex gap-1 overflow-x-auto">
            {reportTypes.map((type) => (
              <Button
                key={type.id}
                variant={selectedReportType === type.id ? "default" : "ghost"}
                size="sm"
                onClick={() => setSelectedReportType(type.id)}
                className={selectedReportType === type.id ? "bg-yellow-500 text-white" : ""}
              >
                <type.icon className="w-4 h-4 mr-2" />
                {type.label}
              </Button>
            ))}
          </div>
        </div>
      </div>

      <div className="p-4 space-y-6 pb-20">
        {/* Class Overview Report */}
        {selectedReportType === 'overview' && (
          <>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              <Card className="p-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <Users className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Total Students</p>
                    <p className="text-2xl text-gray-800">83</p>
                  </div>
                </div>
              </Card>
              <Card className="p-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <TrendingUp className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Avg Progress</p>
                    <p className="text-2xl text-gray-800">85%</p>
                  </div>
                </div>
              </Card>
              <Card className="p-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center">
                    <Award className="w-6 h-6 text-yellow-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Avg Score</p>
                    <p className="text-2xl text-gray-800">88%</p>
                  </div>
                </div>
              </Card>
            </div>

            <div className="space-y-4">
              {classOverviewData.map((classData, index) => (
                <Card key={index} className="p-4">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <h3 className="text-lg text-gray-800">{classData.className}</h3>
                      <p className="text-sm text-gray-600">{classData.subject} • {classData.totalStudents} students</p>
                    </div>
                    <Badge variant="outline" className="text-green-600">
                      {classData.avgProgress}% Progress
                    </Badge>
                  </div>
                  
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="text-center">
                      <p className="text-xl text-gray-800">{classData.activeStudents}/{classData.totalStudents}</p>
                      <p className="text-sm text-gray-600">Active Students</p>
                    </div>
                    <div className="text-center">
                      <p className="text-xl text-gray-800">{classData.assignmentsCompleted}/{classData.totalAssignments}</p>
                      <p className="text-sm text-gray-600">Assignments</p>
                    </div>
                    <div className="text-center">
                      <p className="text-xl text-gray-800">{classData.avgScore}%</p>
                      <p className="text-sm text-gray-600">Avg Score</p>
                    </div>
                    <div className="text-center">
                      <p className="text-xl text-gray-800">{classData.attendanceRate}%</p>
                      <p className="text-sm text-gray-600">Attendance</p>
                    </div>
                  </div>
                  
                  <div className="mt-4">
                    <div className="flex justify-between mb-2">
                      <span className="text-sm text-gray-600">Overall Progress</span>
                      <span className="text-sm text-gray-800">{classData.avgProgress}%</span>
                    </div>
                    <Progress value={classData.avgProgress} className="w-full" />
                  </div>
                </Card>
              ))}
            </div>
          </>
        )}

        {/* Student Progress Report */}
        {selectedReportType === 'student-progress' && (
          <div className="space-y-4">
            {studentProgressData.map((student, index) => (
              <Card key={index} className="p-4">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full flex items-center justify-center">
                      <User className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg text-gray-800">{student.name}</h3>
                      <p className="text-sm text-gray-600">Class {student.class} • Last active: {student.lastActive}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge 
                      variant="outline" 
                      className={
                        student.status === 'excellent' ? 'text-green-600 border-green-200' :
                        student.status === 'good' ? 'text-blue-600 border-blue-200' :
                        'text-yellow-600 border-yellow-200'
                      }
                    >
                      {student.status === 'excellent' && <CheckCircle className="w-3 h-3 mr-1" />}
                      {student.status === 'needs-attention' && <AlertCircle className="w-3 h-3 mr-1" />}
                      {student.status}
                    </Badge>
                    <span className="text-xl text-gray-800">{student.overallProgress}%</span>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-blue-100 rounded-full mx-auto mb-2 flex items-center justify-center">
                      <span className="text-blue-600">{student.subjects.math}%</span>
                    </div>
                    <p className="text-sm text-gray-600">Math</p>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-red-100 rounded-full mx-auto mb-2 flex items-center justify-center">
                      <span className="text-red-600">{student.subjects.hindi}%</span>
                    </div>
                    <p className="text-sm text-gray-600">Hindi</p>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-green-100 rounded-full mx-auto mb-2 flex items-center justify-center">
                      <span className="text-green-600">{student.subjects.science}%</span>
                    </div>
                    <p className="text-sm text-gray-600">Science</p>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-purple-100 rounded-full mx-auto mb-2 flex items-center justify-center">
                      <span className="text-purple-600">{student.subjects.english}%</span>
                    </div>
                    <p className="text-sm text-gray-600">English</p>
                  </div>
                </div>
                
                <div className="flex items-center justify-between text-sm text-gray-600">
                  <span>Assignments: {student.assignmentsCompleted}/{student.totalAssignments}</span>
                  <span>Completion Rate: {Math.round((student.assignmentsCompleted / student.totalAssignments) * 100)}%</span>
                </div>
              </Card>
            ))}
          </div>
        )}

        {/* Attendance Report */}
        {selectedReportType === 'attendance' && (
          <div className="space-y-4">
            {attendanceData.map((classData, index) => (
              <Card key={index} className="p-4">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h3 className="text-lg text-gray-800">{classData.className}</h3>
                    <p className="text-sm text-gray-600">{classData.totalClasses} total classes</p>
                  </div>
                  <div className="text-center">
                    <p className="text-2xl text-gray-800">{classData.avgAttendance}%</p>
                    <p className="text-sm text-gray-600">Avg Attendance</p>
                  </div>
                </div>
                
                <div className="space-y-3">
                  {classData.students.map((student, studentIndex) => (
                    <div key={studentIndex} className="flex items-center justify-between p-2 bg-gray-50 rounded-lg">
                      <span className="text-gray-800">{student.name}</span>
                      <div className="flex items-center gap-3">
                        <span className="text-sm text-gray-600">{student.classes}/{classData.totalClasses} classes</span>
                        <div className="w-16">
                          <Progress value={student.attendance} className="h-2" />
                        </div>
                        <span className="text-sm text-gray-800 w-12">{student.attendance}%</span>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        )}

        {/* Assignment Reports */}
        {selectedReportType === 'assignments' && (
          <div className="space-y-4">
            {assignmentReports.map((assignment, index) => (
              <Card key={index} className="p-4">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h3 className="text-lg text-gray-800">{assignment.title}</h3>
                    <p className="text-sm text-gray-600">{assignment.class} • Due: {assignment.dueDate}</p>
                  </div>
                  <Badge 
                    variant="outline" 
                    className={assignment.status === 'completed' ? 'text-green-600 border-green-200' : 'text-blue-600 border-blue-200'}
                  >
                    {assignment.status}
                  </Badge>
                </div>
                
                <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-4">
                  <div className="text-center">
                    <p className="text-xl text-gray-800">{assignment.submitted}/{assignment.total}</p>
                    <p className="text-sm text-gray-600">Submitted</p>
                  </div>
                  <div className="text-center">
                    <p className="text-xl text-gray-800">{assignment.avgScore}%</p>
                    <p className="text-sm text-gray-600">Avg Score</p>
                  </div>
                  <div className="text-center">
                    <p className="text-xl text-green-600">{assignment.highestScore}%</p>
                    <p className="text-sm text-gray-600">Highest</p>
                  </div>
                  <div className="text-center">
                    <p className="text-xl text-red-600">{assignment.lowestScore}%</p>
                    <p className="text-sm text-gray-600">Lowest</p>
                  </div>
                  <div className="text-center">
                    <p className="text-xl text-gray-800">{Math.round((assignment.submitted / assignment.total) * 100)}%</p>
                    <p className="text-sm text-gray-600">Completion</p>
                  </div>
                </div>
                
                <Progress value={(assignment.submitted / assignment.total) * 100} className="w-full" />
              </Card>
            ))}
          </div>
        )}

        {/* Performance Analysis */}
        {selectedReportType === 'performance' && (
          <div className="space-y-6">
            <Card className="p-4">
              <h3 className="text-lg mb-4 text-gray-800">Subject-wise Performance Trends</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                  { subject: 'Mathematics', score: 88, trend: '+5%', color: 'blue' },
                  { subject: 'Hindi', score: 82, trend: '+3%', color: 'red' },
                  { subject: 'Science', score: 92, trend: '+8%', color: 'green' },
                  { subject: 'English', score: 85, trend: '+2%', color: 'purple' }
                ].map((subject, index) => (
                  <div key={index} className="text-center p-4 bg-gray-50 rounded-lg">
                    <div className={`w-16 h-16 bg-${subject.color}-100 rounded-full mx-auto mb-3 flex items-center justify-center`}>
                      <BookOpen className={`w-8 h-8 text-${subject.color}-600`} />
                    </div>
                    <h4 className="text-gray-800 mb-2">{subject.subject}</h4>
                    <p className="text-2xl text-gray-800 mb-1">{subject.score}%</p>
                    <p className="text-sm text-green-600">{subject.trend}</p>
                  </div>
                ))}
              </div>
            </Card>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Card className="p-4">
                <h3 className="text-lg mb-4 text-gray-800">Top Performing Classes</h3>
                <div className="space-y-3">
                  {[
                    { class: 'Class 4A', score: 94, subject: 'Mathematics' },
                    { class: 'Class 5A', score: 88, subject: 'Mathematics' },
                    { class: 'Class 5B', score: 85, subject: 'Hindi' }
                  ].map((item, index) => (
                    <div key={index} className="flex items-center justify-between p-2 bg-gray-50 rounded-lg">
                      <div>
                        <p className="text-gray-800">{item.class}</p>
                        <p className="text-sm text-gray-600">{item.subject}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-lg text-gray-800">{item.score}%</p>
                        <div className="flex items-center text-yellow-600">
                          <Award className="w-4 h-4 mr-1" />
                          <span className="text-sm">Top</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>

              <Card className="p-4">
                <h3 className="text-lg mb-4 text-gray-800">Areas for Improvement</h3>
                <div className="space-y-3">
                  {[
                    { area: 'English Writing Skills', classes: 2, priority: 'high' },
                    { area: 'Science Experiments', classes: 1, priority: 'medium' },
                    { area: 'Math Problem Solving', classes: 1, priority: 'low' }
                  ].map((item, index) => (
                    <div key={index} className="flex items-center justify-between p-2 bg-gray-50 rounded-lg">
                      <div>
                        <p className="text-gray-800">{item.area}</p>
                        <p className="text-sm text-gray-600">{item.classes} classes affected</p>
                      </div>
                      <Badge 
                        variant="outline" 
                        className={
                          item.priority === 'high' ? 'text-red-600 border-red-200' :
                          item.priority === 'medium' ? 'text-yellow-600 border-yellow-200' :
                          'text-green-600 border-green-200'
                        }
                      >
                        {item.priority}
                      </Badge>
                    </div>
                  ))}
                </div>
              </Card>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}