import React from 'react';
import { Card } from './ui/card';
import { Progress } from './ui/progress';
import { Badge } from './ui/badge';

const classPerformance = [
  { name: 'Class 5A', math: 92, hindi: 88, science: 90, english: 86, avg: 86 },
  { name: 'Class 5B', math: 85, hindi: 80, science: 82, english: 78, avg: 81 },
  { name: 'Class 4A', math: 95, hindi: 90, science: 92, english: 88, avg: 91 },
  { name: 'Class 4B', math: 78, hindi: 72, science: 75, english: 71, avg: 74 },
];

const topPerformers = [
  { name: 'Priya Sharma', class: '5A', score: 95, change: '+5%' },
  { name: 'Dev Kumar', class: '4A', score: 92, change: '+8%' },
  { name: 'Anita Patel', class: '5A', score: 90, change: '+3%' },
];

const weeklyProgress = [
  { week: 'Week 1', submissions: 45, avgScore: 82 },
  { week: 'Week 2', submissions: 52, avgScore: 85 },
  { week: 'Week 3', submissions: 48, avgScore: 88 },
  { week: 'Week 4', submissions: 55, avgScore: 86 },
];

export function TeacherAnalytics({ onNavigate }: { onNavigate?: (screen: string) => void }) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-cyan-50 p-6">
      <div className="flex items-center mb-6">
        {onNavigate && (
          <button
            className="px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600 mr-4"
            onClick={() => onNavigate('teacher-dashboard')}
          >
            ← Back
          </button>
        )}
        <h1 className="text-2xl font-bold">Performance Analytics</h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <Card className="p-4">
          <h2 className="text-lg font-semibold mb-4">Class Performance Overview</h2>
          {classPerformance.map((cls, idx) => (
            <div key={idx} className="mb-4">
              <div className="font-medium mb-1">{cls.name} <span className="text-xs text-gray-500">Avg: {cls.avg}%</span></div>
              <div className="flex gap-2 mb-1">
                <span className="text-blue-600">Math</span>
                <Progress value={cls.math} className="w-24" />
                <span className="text-red-600">Hindi</span>
                <Progress value={cls.hindi} className="w-24" />
                <span className="text-green-600">Science</span>
                <Progress value={cls.science} className="w-24" />
                <span className="text-purple-600">English</span>
                <Progress value={cls.english} className="w-24" />
              </div>
            </div>
          ))}
        </Card>
        <Card className="p-4">
          <h2 className="text-lg font-semibold mb-4">Top Performers</h2>
          {topPerformers.map((student, idx) => (
            <div key={idx} className="flex items-center justify-between mb-3">
              <div>
                <div className="font-medium">{student.name}</div>
                <div className="text-xs text-gray-500">{student.class}</div>
              </div>
              <Badge className="bg-yellow-100 text-yellow-700">{student.score}% {student.change}</Badge>
            </div>
          ))}
        </Card>
      </div>
      <Card className="p-4">
        <h2 className="text-lg font-semibold mb-4">Weekly Progress Trend</h2>
        {weeklyProgress.map((week, idx) => (
          <div key={idx} className="mb-3">
            <div className="flex justify-between mb-1">
              <span>{week.week}</span>
              <span className="text-xs text-gray-500">Submissions: {week.submissions}</span>
              <span className="text-xs text-gray-500">Avg Score: {week.avgScore}%</span>
            </div>
            <Progress value={week.avgScore} className="w-full" />
          </div>
        ))}
      </Card>
    </div>
  );
}
