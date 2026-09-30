import React from 'react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { Progress } from './ui/progress';
import { Badge } from './ui/badge';
import {
  BookOpen,
  Plus,
  Calendar,
  Clock,
  Users,
  PlayCircle,
  Edit,
  Trash2,
  Copy,
  FileText,
  Video,
  Image,
  CheckCircle,
  AlertCircle,
  Filter,
  Search,
  Star,
  Target,
  BarChart3
} from 'lucide-react';
import { LessonMaterialModal } from './LessonMaterialModal';
import { LanguageContent, LanguageCode } from '../utils/languages';
import { LanguageSelector } from './LanguageSelector';

interface TeacherLessonsProps {
  onNavigate: (screen: string) => void;
  t: LanguageContent;
  currentLanguage?: LanguageCode;
  onLanguageChange?: (language: LanguageCode) => void;
}

export function TeacherLessons({ onNavigate, t, currentLanguage = 'en', onLanguageChange }: TeacherLessonsProps) {
  const [activeTab, setActiveTab] = React.useState('my-lessons');
  const [selectedSubject, setSelectedSubject] = React.useState('all');
  const [showCreateModal, setShowCreateModal] = React.useState(false);
  const [selectedLesson, setSelectedLesson] = React.useState<string | null>(null);
  const [createStep, setCreateStep] = React.useState(1);
  const [showMaterialModal, setShowMaterialModal] = React.useState(false);
  const [selectedMaterialType, setSelectedMaterialType] = React.useState('');
  const [lessonData, setLessonData] = React.useState({
    title: '',
    subject: '',
    grade: '',
    duration: '',
    scheduledDate: '',
    description: '',
    objectives: [''],
    template: 'scratch',
    materials: [],
    activities: [],
    assessment: {
      type: 'quiz',
      questions: []
    }
  });

  const subjects = ['all', 'mathematics', 'hindi', 'science', 'english'];

  const lessons = [
    {
      id: 'lesson-1',
      title: 'Introduction to Fractions',
      subject: 'Mathematics',
      grade: '5',
      duration: 45,
      status: 'published',
      students: 28,
      completionRate: 85,
      avgScore: 88,
      createdDate: '2024-09-20',
      scheduledDate: '2024-09-25',
      description: 'Learn the basics of fractions with interactive examples and exercises.',
      objectives: [
        'Understand what fractions represent',
        'Identify numerator and denominator',
        'Compare different fractions',
        'Solve basic fraction problems'
      ],
      materials: [
        { type: 'video', name: 'Fraction Basics Video', duration: '10 min' },
        { type: 'worksheet', name: 'Practice Problems', pages: 3 },
        { type: 'game', name: 'Fraction Match Game', duration: '15 min' }
      ],
      progress: {
        notStarted: 4,
        inProgress: 12,
        completed: 12
      }
    },
    {
      id: 'lesson-2',
      title: 'Hindi Poetry - Kabir Ke Dohe',
      subject: 'Hindi',
      grade: '5',
      duration: 50,
      status: 'draft',
      students: 30,
      completionRate: 0,
      avgScore: 0,
      createdDate: '2024-09-22',
      scheduledDate: '2024-09-27',
      description: 'Explore the beautiful poetry of Kabir and understand the deeper meanings.',
      objectives: [
        'Understand Kabir\'s philosophy',
        'Learn pronunciation and rhythm',
        'Analyze meaning of selected dohas',
        'Create own simple verses'
      ],
      materials: [
        { type: 'audio', name: 'Poetry Recitation', duration: '15 min' },
        { type: 'text', name: 'Selected Dohas', pages: 2 },
        { type: 'activity', name: 'Poetry Writing Exercise', duration: '20 min' }
      ],
      progress: {
        notStarted: 30,
        inProgress: 0,
        completed: 0
      }
    },
    {
      id: 'lesson-3',
      title: 'Plant Life Cycle',
      subject: 'Science',
      grade: '4',
      duration: 40,
      status: 'published',
      students: 25,
      completionRate: 92,
      avgScore: 94,
      createdDate: '2024-09-18',
      scheduledDate: '2024-09-24',
      description: 'Discover how plants grow from seeds to full-grown plants.',
      objectives: [
        'Identify stages of plant growth',
        'Understand the role of sunlight and water',
        'Observe and record plant changes',
        'Create a plant growth diary'
      ],
      materials: [
        { type: 'video', name: 'Plant Growth Time-lapse', duration: '8 min' },
        { type: 'experiment', name: 'Seed Planting Activity', duration: '30 min' },
        { type: 'worksheet', name: 'Life Cycle Diagram', pages: 2 }
      ],
      progress: {
        notStarted: 2,
        inProgress: 0,
        completed: 23
      }
    }
  ];

  const curriculumPlan = [
    {
      week: 'Week 1',
      subject: 'Mathematics',
      topics: ['Number Systems', 'Basic Operations', 'Place Value'],
      lessonsCompleted: 3,
      totalLessons: 3,
      status: 'completed'
    },
    {
      week: 'Week 2',
      subject: 'Mathematics',
      topics: ['Introduction to Fractions', 'Types of Fractions'],
      lessonsCompleted: 1,
      totalLessons: 2,
      status: 'in-progress'
    },
    {
      week: 'Week 3',
      subject: 'Hindi',
      topics: ['Kabir Ke Dohe', 'Poem Analysis'],
      lessonsCompleted: 0,
      totalLessons: 2,
      status: 'planned'
    }
  ];

  const templates = [
    {
      id: 'template-1',
      title: 'Math Problem Solving',
      subject: 'Mathematics',
      duration: 45,
      description: 'Interactive problem-solving lesson template',
      usageCount: 12
    },
    {
      id: 'template-2',
      title: 'Hindi Reading Comprehension',
      subject: 'Hindi',
      duration: 40,
      description: 'Reading and comprehension activities',
      usageCount: 8
    },
    {
      id: 'template-3',
      title: 'Science Experiment',
      subject: 'Science',
      duration: 50,
      description: 'Hands-on experiment lesson structure',
      usageCount: 15
    }
  ];

  const filteredLessons = selectedSubject === 'all' 
    ? lessons 
    : lessons.filter(lesson => lesson.subject.toLowerCase() === selectedSubject);

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
                <h1 className="text-2xl text-gray-800">Lesson Management</h1>
                <p className="text-gray-600">Create, manage, and track your lessons</p>
              </div>
            </div>
            <Button 
              className="bg-yellow-500 hover:bg-yellow-600 text-white"
              onClick={() => setShowCreateModal(true)}
            >
              <Plus className="w-4 h-4 mr-2" />
              Create New Lesson
            </Button>
          </div>

          {/* Search and Filters */}
          <div className="flex items-center gap-3 mb-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <input
                type="text"
                placeholder="Search lessons..."
                className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
              />
            </div>
            <select 
              value={selectedSubject}
              onChange={(e) => setSelectedSubject(e.target.value)}
              className="px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
            >
              <option value="all">All Subjects</option>
              <option value="mathematics">Mathematics</option>
              <option value="hindi">Hindi</option>
              <option value="science">Science</option>
              <option value="english">English</option>
            </select>
            <Button variant="outline" size="sm">
              <Filter className="w-4 h-4 mr-2" />
              More Filters
            </Button>
          </div>

          {/* Navigation Tabs */}
          <div className="flex gap-1 overflow-x-auto">
            {[
              { id: 'my-lessons', label: 'My Lessons' },
              { id: 'curriculum', label: 'Curriculum Plan' },
              { id: 'templates', label: 'Templates' },
              { id: 'analytics', label: 'Lesson Analytics' }
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

      <div className="p-4 space-y-6 pb-20">
        {/* My Lessons Tab */}
        {activeTab === 'my-lessons' && (
          <>
            {!selectedLesson ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {filteredLessons.map((lesson) => (
                  <Card key={lesson.id} className="p-4 hover:shadow-lg transition-shadow">
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex items-center gap-2">
                        <div className="w-10 h-10 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center">
                          <BookOpen className="w-5 h-5 text-white" />
                        </div>
                        <div>
                          <h3 className="text-lg text-gray-800">{lesson.title}</h3>
                          <p className="text-sm text-gray-600">{lesson.subject} • Grade {lesson.grade}</p>
                        </div>
                      </div>
                      <Badge 
                        variant="outline" 
                        className={lesson.status === 'published' ? 'text-green-600 border-green-200' : 'text-yellow-600 border-yellow-200'}
                      >
                        {lesson.status}
                      </Badge>
                    </div>
                    
                    <p className="text-sm text-gray-600 mb-4">{lesson.description}</p>
                    
                    <div className="space-y-3">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-gray-600">Duration:</span>
                        <span className="text-gray-800">{lesson.duration} min</span>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-gray-600">Students:</span>
                        <span className="text-gray-800">{lesson.students}</span>
                      </div>
                      {lesson.status === 'published' && (
                        <>
                          <div className="flex items-center justify-between text-sm">
                            <span className="text-gray-600">Completion:</span>
                            <span className="text-gray-800">{lesson.completionRate}%</span>
                          </div>
                          <Progress value={lesson.completionRate} className="w-full" />
                        </>
                      )}
                    </div>
                    
                    <div className="flex gap-2 mt-4">
                      <Button 
                        size="sm" 
                        className="flex-1"
                        onClick={() => setSelectedLesson(lesson.id)}
                      >
                        <PlayCircle className="w-4 h-4 mr-1" />
                        View Details
                      </Button>
                      <Button size="sm" variant="outline">
                        <Edit className="w-4 h-4" />
                      </Button>
                      <Button size="sm" variant="outline">
                        <Copy className="w-4 h-4" />
                      </Button>
                    </div>
                  </Card>
                ))}
              </div>
            ) : (
              // Lesson Details View
              <div className="space-y-4">
                <Button variant="ghost" size="sm" onClick={() => setSelectedLesson(null)}>
                  ← Back to Lessons
                </Button>
                
                {lessons
                  .filter(l => l.id === selectedLesson)
                  .map((lesson) => (
                    <div key={lesson.id} className="space-y-4">
                      <Card className="p-6">
                        <div className="flex items-start justify-between mb-4">
                          <div>
                            <h2 className="text-2xl text-gray-800 mb-2">{lesson.title}</h2>
                            <p className="text-gray-600 mb-4">{lesson.description}</p>
                            <div className="flex items-center gap-4 text-sm text-gray-600">
                              <span>{lesson.subject} • Grade {lesson.grade}</span>
                              <span>{lesson.duration} minutes</span>
                              <span>Scheduled: {lesson.scheduledDate}</span>
                            </div>
                          </div>
                          <div className="flex gap-2">
                            <Button className="bg-yellow-500 hover:bg-yellow-600 text-white">
                              Start Lesson
                            </Button>
                            <Button variant="outline">
                              <Edit className="w-4 h-4 mr-2" />
                              Edit
                            </Button>
                          </div>
                        </div>
                      </Card>

                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <Card className="p-4">
                          <h3 className="text-lg mb-3 text-gray-800">Student Progress</h3>
                          <div className="space-y-3">
                            <div className="flex items-center justify-between">
                              <span className="text-sm text-gray-600">Not Started</span>
                              <span className="text-sm text-gray-800">{lesson.progress.notStarted}</span>
                            </div>
                            <div className="flex items-center justify-between">
                              <span className="text-sm text-gray-600">In Progress</span>
                              <span className="text-sm text-gray-800">{lesson.progress.inProgress}</span>
                            </div>
                            <div className="flex items-center justify-between">
                              <span className="text-sm text-gray-600">Completed</span>
                              <span className="text-sm text-gray-800">{lesson.progress.completed}</span>
                            </div>
                          </div>
                        </Card>

                        <Card className="p-4">
                          <h3 className="text-lg mb-3 text-gray-800">Learning Objectives</h3>
                          <div className="space-y-2">
                            {lesson.objectives.map((objective, index) => (
                              <div key={index} className="flex items-start gap-2">
                                <Target className="w-4 h-4 text-yellow-600 mt-0.5 flex-shrink-0" />
                                <span className="text-sm text-gray-700">{objective}</span>
                              </div>
                            ))}
                          </div>
                        </Card>

                        <Card className="p-4">
                          <h3 className="text-lg mb-3 text-gray-800">Lesson Materials</h3>
                          <div className="space-y-3">
                            {lesson.materials.map((material, index) => (
                              <div key={index} className="flex items-center gap-3 p-2 bg-gray-50 rounded-lg">
                                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                                  {material.type === 'video' && <Video className="w-4 h-4 text-blue-600" />}
                                  {material.type === 'worksheet' && <FileText className="w-4 h-4 text-blue-600" />}
                                  {material.type === 'game' && <Star className="w-4 h-4 text-blue-600" />}
                                  {material.type === 'audio' && <PlayCircle className="w-4 h-4 text-blue-600" />}
                                  {material.type === 'text' && <BookOpen className="w-4 h-4 text-blue-600" />}
                                  {material.type === 'activity' && <Target className="w-4 h-4 text-blue-600" />}
                                  {material.type === 'experiment' && <BarChart3 className="w-4 h-4 text-blue-600" />}
                                </div>
                                <div className="flex-1">
                                  <p className="text-sm text-gray-800">{material.name}</p>
                                  <p className="text-xs text-gray-600">
                                    {material.duration || (material.pages ? `${material.pages} pages` : '')}
                                  </p>
                                </div>
                              </div>
                            ))}
                          </div>
                        </Card>
                      </div>
                    </div>
                  ))}
              </div>
            )}
          </>
        )}

        {/* Curriculum Plan Tab */}
        {activeTab === 'curriculum' && (
          <div className="space-y-4">
            <Card className="p-4">
              <h3 className="text-lg mb-4 text-gray-800">Semester Planning Overview</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <div className="text-center">
                  <p className="text-2xl text-gray-800">24</p>
                  <p className="text-sm text-gray-600">Total Weeks</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl text-gray-800">8</p>
                  <p className="text-sm text-gray-600">Weeks Completed</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl text-gray-800">67%</p>
                  <p className="text-sm text-gray-600">On Schedule</p>
                </div>
              </div>
              <Progress value={33} className="w-full" />
            </Card>

            <div className="space-y-3">
              {curriculumPlan.map((week, index) => (
                <Card key={index} className="p-4">
                  <div className="flex items-center justify-between mb-3">
                    <div>
                      <h4 className="text-lg text-gray-800">{week.week}</h4>
                      <p className="text-sm text-gray-600">{week.subject}</p>
                    </div>
                    <Badge 
                      variant="outline" 
                      className={
                        week.status === 'completed' ? 'text-green-600 border-green-200' :
                        week.status === 'in-progress' ? 'text-blue-600 border-blue-200' :
                        'text-gray-600 border-gray-200'
                      }
                    >
                      {week.status === 'completed' && <CheckCircle className="w-3 h-3 mr-1" />}
                      {week.status === 'in-progress' && <Clock className="w-3 h-3 mr-1" />}
                      {week.status === 'planned' && <Calendar className="w-3 h-3 mr-1" />}
                      {week.status}
                    </Badge>
                  </div>
                  
                  <div className="space-y-2 mb-3">
                    <p className="text-sm text-gray-600">Topics:</p>
                    <div className="flex flex-wrap gap-2">
                      {week.topics.map((topic, topicIndex) => (
                        <Badge key={topicIndex} variant="outline" className="text-blue-600">
                          {topic}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">
                      Lessons: {week.lessonsCompleted}/{week.totalLessons}
                    </span>
                    <Progress value={(week.lessonsCompleted / week.totalLessons) * 100} className="w-32" />
                  </div>
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* Templates Tab */}
        {activeTab === 'templates' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {templates.map((template) => (
              <Card key={template.id} className="p-4">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full flex items-center justify-center">
                    <FileText className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg text-gray-800">{template.title}</h3>
                    <p className="text-sm text-gray-600">{template.subject}</p>
                  </div>
                </div>
                
                <p className="text-sm text-gray-600 mb-4">{template.description}</p>
                
                <div className="flex items-center justify-between text-sm mb-4">
                  <span className="text-gray-600">Duration: {template.duration} min</span>
                  <span className="text-gray-600">Used {template.usageCount} times</span>
                </div>
                
                <div className="flex gap-2">
                  <Button size="sm" className="flex-1">Use Template</Button>
                  <Button size="sm" variant="outline">Preview</Button>
                </div>
              </Card>
            ))}
          </div>
        )}

        {/* Analytics Tab */}
        {activeTab === 'analytics' && (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <Card className="p-4 text-center">
                <div className="w-12 h-12 bg-blue-100 rounded-full mx-auto mb-3 flex items-center justify-center">
                  <BookOpen className="w-6 h-6 text-blue-600" />
                </div>
                <p className="text-2xl text-gray-800">15</p>
                <p className="text-sm text-gray-600">Total Lessons</p>
              </Card>
              <Card className="p-4 text-center">
                <div className="w-12 h-12 bg-green-100 rounded-full mx-auto mb-3 flex items-center justify-center">
                  <CheckCircle className="w-6 h-6 text-green-600" />
                </div>
                <p className="text-2xl text-gray-800">8</p>
                <p className="text-sm text-gray-600">Published</p>
              </Card>
              <Card className="p-4 text-center">
                <div className="w-12 h-12 bg-yellow-100 rounded-full mx-auto mb-3 flex items-center justify-center">
                  <Clock className="w-6 h-6 text-yellow-600" />
                </div>
                <p className="text-2xl text-gray-800">5</p>
                <p className="text-sm text-gray-600">In Progress</p>
              </Card>
              <Card className="p-4 text-center">
                <div className="w-12 h-12 bg-purple-100 rounded-full mx-auto mb-3 flex items-center justify-center">
                  <Star className="w-6 h-6 text-purple-600" />
                </div>
                <p className="text-2xl text-gray-800">89%</p>
                <p className="text-sm text-gray-600">Avg Completion</p>
              </Card>
            </div>

            <Card className="p-4">
              <h3 className="text-lg mb-4 text-gray-800">Subject-wise Lesson Performance</h3>
              <div className="space-y-4">
                {[
                  { subject: 'Mathematics', lessons: 6, avgCompletion: 88, avgScore: 85 },
                  { subject: 'Science', lessons: 4, avgCompletion: 92, avgScore: 91 },
                  { subject: 'Hindi', lessons: 3, avgCompletion: 78, avgScore: 82 },
                  { subject: 'English', lessons: 2, avgCompletion: 85, avgScore: 88 }
                ].map((subject, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center">
                        <BookOpen className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <h4 className="text-gray-800">{subject.subject}</h4>
                        <p className="text-sm text-gray-600">{subject.lessons} lessons</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-gray-800">Completion: {subject.avgCompletion}%</p>
                      <p className="text-sm text-gray-600">Avg Score: {subject.avgScore}%</p>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        )}
      </div>

      {/* Enhanced Create Lesson Modal */}
      {showCreateModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <Card className="w-full max-w-4xl max-h-[90vh] overflow-y-auto">
            {/* Modal Header */}
            <div className="p-6 border-b border-gray-200 bg-gradient-to-r from-yellow-50 to-orange-50">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-2xl text-gray-800 mb-1">Create New Lesson</h2>
                  <p className="text-sm text-gray-600">Step {createStep} of 4</p>
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => {
                    setShowCreateModal(false);
                    setCreateStep(1);
                    setLessonData({
                      title: '',
                      subject: '',
                      grade: '',
                      duration: '',
                      scheduledDate: '',
                      description: '',
                      objectives: [''],
                      template: 'scratch',
                      materials: [],
                      activities: [],
                      assessment: { type: 'quiz', questions: [] }
                    });
                  }}
                >
                  ✕
                </Button>
              </div>
              
              {/* Progress Bar */}
              <div className="mt-4">
                <div className="flex items-center gap-2">
                  {[1, 2, 3, 4].map((step) => (
                    <div key={step} className="flex items-center flex-1">
                      <div
                        className={`w-8 h-8 rounded-full flex items-center justify-center text-sm border-2 ${
                          step <= createStep
                            ? 'bg-yellow-500 border-yellow-500 text-white'
                            : 'bg-gray-100 border-gray-300 text-gray-500'
                        }`}
                      >
                        {step < createStep ? '✓' : step}
                      </div>
                      {step < 4 && (
                        <div
                          className={`h-1 flex-1 mx-2 ${
                            step < createStep ? 'bg-yellow-500' : 'bg-gray-200'
                          }`}
                        />
                      )}
                    </div>
                  ))}
                </div>
                <div className="flex justify-between mt-2 text-xs text-gray-600">
                  <span>Basic Info</span>
                  <span>Content</span>
                  <span>Activities</span>
                  <span>Review</span>
                </div>
              </div>
            </div>

            <div className="p-6">
              {/* Step 1: Basic Information */}
              {createStep === 1 && (
                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="md:col-span-2">
                      <label className="text-sm font-medium text-gray-700 mb-2 block">
                        Lesson Title *
                      </label>
                      <input
                        type="text"
                        value={lessonData.title}
                        onChange={(e) => setLessonData({...lessonData, title: e.target.value})}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                        placeholder="Enter an engaging lesson title..."
                      />
                    </div>

                    <div>
                      <label className="text-sm font-medium text-gray-700 mb-2 block">
                        Subject *
                      </label>
                      <select
                        value={lessonData.subject}
                        onChange={(e) => setLessonData({...lessonData, subject: e.target.value})}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
                      >
                        <option value="">Select Subject</option>
                        <option value="mathematics">🔢 Mathematics</option>
                        <option value="hindi">🇮🇳 Hindi</option>
                        <option value="english">🇬🇧 English</option>
                        <option value="science">🔬 Science</option>
                        <option value="social-studies">🌍 Social Studies</option>
                        <option value="art">🎨 Art & Craft</option>
                      </select>
                    </div>

                    <div>
                      <label className="text-sm font-medium text-gray-700 mb-2 block">
                        Grade Level *
                      </label>
                      <select
                        value={lessonData.grade}
                        onChange={(e) => setLessonData({...lessonData, grade: e.target.value})}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
                      >
                        <option value="">Select Grade</option>
                        <option value="1">📚 Grade 1 (Age 6-7)</option>
                        <option value="2">📖 Grade 2 (Age 7-8)</option>
                        <option value="3">📘 Grade 3 (Age 8-9)</option>
                        <option value="4">📙 Grade 4 (Age 9-10)</option>
                        <option value="5">📗 Grade 5 (Age 10-11)</option>
                      </select>
                    </div>

                    <div>
                      <label className="text-sm font-medium text-gray-700 mb-2 block">
                        Duration (minutes)
                      </label>
                      <input
                        type="number"
                        value={lessonData.duration}
                        onChange={(e) => setLessonData({...lessonData, duration: e.target.value})}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
                        placeholder="45"
                        min="15"
                        max="120"
                      />
                    </div>

                    <div>
                      <label className="text-sm font-medium text-gray-700 mb-2 block">
                        Scheduled Date
                      </label>
                      <input
                        type="date"
                        value={lessonData.scheduledDate}
                        onChange={(e) => setLessonData({...lessonData, scheduledDate: e.target.value})}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
                        min={new Date().toISOString().split('T')[0]}
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-sm font-medium text-gray-700 mb-2 block">
                      Lesson Description
                    </label>
                    <textarea
                      value={lessonData.description}
                      onChange={(e) => setLessonData({...lessonData, description: e.target.value})}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
                      rows={3}
                      placeholder="Write a brief description of what students will learn in this lesson..."
                    />
                  </div>

                  <div>
                    <label className="text-sm font-medium text-gray-700 mb-2 block">
                      Learning Objectives
                    </label>
                    {lessonData.objectives.map((objective, index) => (
                      <div key={index} className="flex gap-2 mb-2">
                        <input
                          type="text"
                          value={objective}
                          onChange={(e) => {
                            const newObjectives = [...lessonData.objectives];
                            newObjectives[index] = e.target.value;
                            setLessonData({...lessonData, objectives: newObjectives});
                          }}
                          className="flex-1 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
                          placeholder={`Learning objective ${index + 1}...`}
                        />
                        {lessonData.objectives.length > 1 && (
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => {
                              const newObjectives = lessonData.objectives.filter((_, i) => i !== index);
                              setLessonData({...lessonData, objectives: newObjectives});
                            }}
                          >
                            ✕
                          </Button>
                        )}
                      </div>
                    ))}
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => setLessonData({
                        ...lessonData, 
                        objectives: [...lessonData.objectives, '']
                      })}
                      className="mt-2"
                    >
                      + Add Objective
                    </Button>
                  </div>
                </div>
              )}

              {/* Step 2: Content & Materials */}
              {createStep === 2 && (
                <div className="space-y-6">
                  <div>
                    <label className="text-sm font-medium text-gray-700 mb-2 block">
                      Choose a Template to Get Started
                    </label>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {[
                        {
                          id: 'scratch',
                          name: 'Start from Scratch',
                          description: 'Build your lesson from the ground up',
                          icon: '✨',
                          color: 'border-yellow-200 bg-yellow-50'
                        },
                        {
                          id: 'math-problem',
                          name: 'Math Problem Solving',
                          description: 'Structured approach to math problems',
                          icon: '🔢',
                          color: 'border-blue-200 bg-blue-50'
                        },
                        {
                          id: 'science-experiment',
                          name: 'Science Experiment',
                          description: 'Hands-on scientific exploration',
                          icon: '🔬',
                          color: 'border-green-200 bg-green-50'
                        },
                        {
                          id: 'reading-comprehension',
                          name: 'Reading & Comprehension',
                          description: 'Text analysis and understanding',
                          icon: '📖',
                          color: 'border-purple-200 bg-purple-50'
                        }
                      ].map((template) => (
                        <div
                          key={template.id}
                          className={`p-4 border-2 rounded-lg cursor-pointer transition-all ${
                            lessonData.template === template.id
                              ? 'border-yellow-400 bg-yellow-100'
                              : template.color
                          }`}
                          onClick={() => setLessonData({...lessonData, template: template.id})}
                        >
                          <div className="flex items-center gap-3">
                            <span className="text-2xl">{template.icon}</span>
                            <div>
                              <h3 className="font-medium text-gray-800">{template.name}</h3>
                              <p className="text-sm text-gray-600">{template.description}</p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="text-sm font-medium text-gray-700 mb-3 block">
                      Lesson Materials & Resources
                    </label>
                    
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-4">
                      {[
                        { type: 'video', icon: '🎥', name: 'Video', color: 'bg-red-100 text-red-700' },
                        { type: 'image', icon: '🖼️', name: 'Images', color: 'bg-blue-100 text-blue-700' },
                        { type: 'audio', icon: '🎵', name: 'Audio', color: 'bg-green-100 text-green-700' },
                        { type: 'document', icon: '📄', name: 'Document', color: 'bg-purple-100 text-purple-700' },
                        { type: 'worksheet', icon: '📝', name: 'Worksheet', color: 'bg-yellow-100 text-yellow-700' },
                        { type: 'quiz', icon: '❓', name: 'Quiz', color: 'bg-orange-100 text-orange-700' },
                        { type: 'game', icon: '🎮', name: 'Game', color: 'bg-pink-100 text-pink-700' },
                        { type: 'link', icon: '🔗', name: 'Web Link', color: 'bg-indigo-100 text-indigo-700' }
                      ].map((material) => (
                        <Button
                          key={material.type}
                          variant="outline"
                          className={`p-4 h-auto flex flex-col items-center gap-2 ${material.color} border-2 hover:border-current`}
                          onClick={() => {
                            setSelectedMaterialType(material.type);
                            setShowMaterialModal(true);
                          }}
                        >
                          <span className="text-xl">{material.icon}</span>
                          <span className="text-xs">{material.name}</span>
                        </Button>
                      ))}
                    </div>

                    {lessonData.materials.length === 0 ? (
                      <div className="text-center py-8 text-gray-500">
                        <FileText className="w-12 h-12 mx-auto mb-2 opacity-50" />
                        <p>No materials added yet</p>
                        <p className="text-sm">Click the buttons above to add learning materials</p>
                      </div>
                    ) : (
                      <div className="space-y-3">
                        {lessonData.materials.map((material, index) => (
                          <div key={index} className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                            <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                              {material.type === 'video' && <Video className="w-5 h-5 text-blue-600" />}
                              {material.type === 'image' && <Image className="w-5 h-5 text-blue-600" />}
                              {material.type === 'document' && <FileText className="w-5 h-5 text-blue-600" />}
                              {material.type === 'audio' && <PlayCircle className="w-5 h-5 text-blue-600" />}
                              {material.type === 'worksheet' && <FileText className="w-5 h-5 text-blue-600" />}
                              {material.type === 'quiz' && <Star className="w-5 h-5 text-blue-600" />}
                              {material.type === 'game' && <Target className="w-5 h-5 text-blue-600" />}
                              {material.type === 'link' && <BookOpen className="w-5 h-5 text-blue-600" />}
                            </div>
                            <div className="flex-1">
                              <p className="font-medium text-gray-800">{material.name}</p>
                              <p className="text-sm text-gray-600">{material.description}</p>
                              {material.duration && (
                                <p className="text-xs text-gray-500">Duration: {material.duration}</p>
                              )}
                            </div>
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={() => {
                                const newMaterials = lessonData.materials.filter((_, i) => i !== index);
                                setLessonData({...lessonData, materials: newMaterials});
                              }}
                            >
                              <Trash2 className="w-4 h-4" />
                            </Button>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              )}

              {/* Step 3: Activities & Assessment */}
              {createStep === 3 && (
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-medium text-gray-800 mb-4">Interactive Activities</h3>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {[
                        {
                          type: 'discussion',
                          title: 'Class Discussion',
                          description: 'Group discussion with guided questions',
                          icon: '💬',
                          color: 'border-blue-200 bg-blue-50'
                        },
                        {
                          type: 'hands-on',
                          title: 'Hands-on Activity',
                          description: 'Physical or practical exercise',
                          icon: '✋',
                          color: 'border-green-200 bg-green-50'
                        },
                        {
                          type: 'group-work',
                          title: 'Group Work',
                          description: 'Collaborative team activities',
                          icon: '👥',
                          color: 'border-purple-200 bg-purple-50'
                        },
                        {
                          type: 'presentation',
                          title: 'Student Presentation',
                          description: 'Students present their work',
                          icon: '🎤',
                          color: 'border-yellow-200 bg-yellow-50'
                        }
                      ].map((activity) => (
                        <div
                          key={activity.type}
                          className={`p-4 border-2 rounded-lg cursor-pointer transition-all ${activity.color}`}
                        >
                          <div className="flex items-center gap-3 mb-3">
                            <span className="text-2xl">{activity.icon}</span>
                            <div>
                              <h4 className="font-medium text-gray-800">{activity.title}</h4>
                              <p className="text-sm text-gray-600">{activity.description}</p>
                            </div>
                          </div>
                          <Button size="sm" variant="outline" className="w-full">
                            Add Activity
                          </Button>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-medium text-gray-800 mb-4">Assessment Options</h3>
                    
                    <div className="space-y-3">
                      {[
                        { type: 'quiz', name: 'Quiz', description: 'Multiple choice questions', icon: '❓' },
                        { type: 'assignment', name: 'Assignment', description: 'Take-home work', icon: '📝' },
                        { type: 'project', name: 'Project', description: 'Long-term creative work', icon: '🎨' },
                        { type: 'oral', name: 'Oral Assessment', description: 'Verbal questioning', icon: '🗣️' }
                      ].map((assessment) => (
                        <div
                          key={assessment.type}
                          className={`p-3 border rounded-lg cursor-pointer transition-all ${
                            lessonData.assessment.type === assessment.type
                              ? 'border-yellow-400 bg-yellow-50'
                              : 'border-gray-200 hover:border-gray-300'
                          }`}
                          onClick={() => setLessonData({
                            ...lessonData, 
                            assessment: { ...lessonData.assessment, type: assessment.type }
                          })}
                        >
                          <div className="flex items-center gap-3">
                            <span className="text-xl">{assessment.icon}</span>
                            <div>
                              <h4 className="font-medium text-gray-800">{assessment.name}</h4>
                              <p className="text-sm text-gray-600">{assessment.description}</p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* Step 4: Review & Publish */}
              {createStep === 4 && (
                <div className="space-y-6">
                  <div className="bg-gradient-to-r from-green-50 to-blue-50 p-6 rounded-lg">
                    <h3 className="text-lg font-medium text-gray-800 mb-4">🎉 Lesson Summary</h3>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-medium text-gray-700 mb-2">Basic Information</h4>
                        <div className="space-y-2 text-sm">
                          <p><span className="font-medium">Title:</span> {lessonData.title || 'Not specified'}</p>
                          <p><span className="font-medium">Subject:</span> {lessonData.subject || 'Not specified'}</p>
                          <p><span className="font-medium">Grade:</span> {lessonData.grade || 'Not specified'}</p>
                          <p><span className="font-medium">Duration:</span> {lessonData.duration ? `${lessonData.duration} minutes` : 'Not specified'}</p>
                        </div>
                      </div>
                      
                      <div>
                        <h4 className="font-medium text-gray-700 mb-2">Content & Assessment</h4>
                        <div className="space-y-2 text-sm">
                          <p><span className="font-medium">Template:</span> {lessonData.template}</p>
                          <p><span className="font-medium">Objectives:</span> {lessonData.objectives.filter(o => o.trim()).length}</p>
                          <p><span className="font-medium">Materials:</span> {lessonData.materials.length}</p>
                          <p><span className="font-medium">Assessment:</span> {lessonData.assessment.type}</p>
                        </div>
                      </div>
                    </div>

                    {lessonData.description && (
                      <div className="mt-4">
                        <h4 className="font-medium text-gray-700 mb-2">Description</h4>
                        <p className="text-sm text-gray-600 bg-white p-3 rounded border">
                          {lessonData.description}
                        </p>
                      </div>
                    )}
                  </div>

                  <div className="bg-yellow-50 border border-yellow-200 p-4 rounded-lg">
                    <h4 className="font-medium text-yellow-800 mb-2">📋 Pre-Publishing Checklist</h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center gap-2">
                        <input type="checkbox" checked={!!lessonData.title} readOnly />
                        <span className={lessonData.title ? 'text-green-700' : 'text-red-600'}>
                          Lesson title is provided
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <input type="checkbox" checked={!!lessonData.subject} readOnly />
                        <span className={lessonData.subject ? 'text-green-700' : 'text-red-600'}>
                          Subject is selected
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <input type="checkbox" checked={!!lessonData.grade} readOnly />
                        <span className={lessonData.grade ? 'text-green-700' : 'text-red-600'}>
                          Grade level is specified
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <input type="checkbox" checked={lessonData.objectives.some(o => o.trim())} readOnly />
                        <span className={lessonData.objectives.some(o => o.trim()) ? 'text-green-700' : 'text-red-600'}>
                          At least one learning objective is defined
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Modal Footer */}
            <div className="p-6 border-t border-gray-200 bg-gray-50">
              <div className="flex gap-3">
                {createStep > 1 && (
                  <Button
                    variant="outline"
                    onClick={() => setCreateStep(createStep - 1)}
                  >
                    ← Previous
                  </Button>
                )}
                
                <div className="flex-1" />
                
                {createStep < 4 ? (
                  <Button
                    className="bg-yellow-500 hover:bg-yellow-600 text-white"
                    onClick={() => setCreateStep(createStep + 1)}
                    disabled={
                      (createStep === 1 && (!lessonData.title || !lessonData.subject || !lessonData.grade))
                    }
                  >
                    Next →
                  </Button>
                ) : (
                  <div className="flex gap-2">
                    <Button
                      variant="outline"
                      onClick={() => {
                        setShowCreateModal(false);
                        setCreateStep(1);
                        // Save as draft logic
                        console.log('Saving as draft:', lessonData);
                      }}
                    >
                      💾 Save as Draft
                    </Button>
                    <Button
                      className="bg-green-500 hover:bg-green-600 text-white"
                      onClick={() => {
                        setShowCreateModal(false);
                        setCreateStep(1);
                        // Publish logic
                        console.log('Publishing lesson:', lessonData);
                      }}
                      disabled={!lessonData.title || !lessonData.subject || !lessonData.grade}
                    >
                      🚀 Publish Lesson
                    </Button>
                  </div>
                )}
              </div>
            </div>
          </Card>
        </div>
      )}

      {/* Material Modal */}
      <LessonMaterialModal
        type={selectedMaterialType}
        isOpen={showMaterialModal}
        onClose={() => {
          setShowMaterialModal(false);
          setSelectedMaterialType('');
        }}
        onSave={(material) => {
          setLessonData({
            ...lessonData,
            materials: [...lessonData.materials, material]
          });
        }}
      />
    </div>
  );
}