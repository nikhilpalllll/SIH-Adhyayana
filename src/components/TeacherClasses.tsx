import React from 'react';
import { Card } from './ui/card';
import { Progress } from './ui/progress';

const classes = [
  {
    name: 'Class 5A',
    subject: 'Mathematics',
    students: 28,
    progress: 85,
    schedule: 'Mon, Wed, Fri - 9:00 AM',
    nextClass: 'Tomorrow 9:00 AM',
    recentTopic: 'Fractions and Decimals',
  },
  {
    name: 'Class 5B',
    subject: 'Hindi',
    students: 30,
    progress: 78,
    schedule: 'Tue, Thu, Sat - 10:00 AM',
    nextClass: 'Thursday 10:00 AM',
    recentTopic: 'Poetry and Literature',
  },
];

export function TeacherClasses({ onNavigate }: { onNavigate?: (screen: string) => void }) {
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
        <h1 className="text-2xl font-bold">Class Management</h1>
        <button className="ml-auto px-4 py-2 bg-yellow-100 text-yellow-700 rounded hover:bg-yellow-200 font-semibold">+ Add New Class</button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {classes.map((cls, idx) => (
          <Card key={idx} className="p-6">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-xl">📘</span>
                </div>
                <div>
                  <h2 className="text-lg font-semibold">{cls.name}</h2>
                  <p className="text-sm text-gray-600">{cls.subject}</p>
                </div>
              </div>
              <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-medium">{cls.students} students</span>
            </div>
            <div className="mb-2">
              <p className="text-xs text-gray-500 mb-1">Overall Progress</p>
              <Progress value={cls.progress} className="w-full" />
              <span className="text-xs text-gray-500 float-right">{cls.progress}%</span>
            </div>
            <div className="flex justify-between text-sm text-gray-700 mb-2">
              <span>Schedule: {cls.schedule}</span>
              <span>Next Class: {cls.nextClass}</span>
            </div>
            <div className="mb-4 text-sm text-gray-700">Recent Topic: {cls.recentTopic}</div>
            <button className="w-full py-2 bg-black text-white rounded font-semibold hover:bg-gray-800">View Details</button>
          </Card>
        ))}
      </div>
    </div>
  );
}
