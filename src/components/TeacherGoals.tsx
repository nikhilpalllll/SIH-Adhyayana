import React from 'react';
import { Card } from './ui/card';
import { Progress } from './ui/progress';

const goals = [
  {
    title: 'Improve Math Scores',
    description: 'Increase average math scores to 90% across all classes',
    target: '2024-12-31',
    classes: ['Class 5A', 'Class 5B'],
    progress: 75,
    status: 'in-progress',
  },
  {
    title: 'Complete Hindi Curriculum',
    description: 'Finish all planned Hindi lessons by end of semester',
    target: '2024-11-30',
    classes: ['Class 5B'],
    progress: 60,
    status: 'in-progress',
  },
  {
    title: 'Student Engagement',
    description: 'Achieve 95% active participation in all classes',
    target: '',
    classes: ['Class 5A', 'Class 5B', 'Class 4A', 'Class 4B'],
    progress: 95,
    status: 'on-track',
  },
];

const statusColors = {
  'in-progress': 'bg-yellow-100 text-yellow-700',
  'on-track': 'bg-blue-100 text-blue-700',
};

export function TeacherGoals({ onNavigate }: { onNavigate?: (screen: string) => void }) {
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
        <h1 className="text-2xl font-bold">Learning Goals & Objectives</h1>
      </div>
      <div className="space-y-6">
        {goals.map((goal, idx) => (
          <Card key={idx} className="p-6">
            <div className="flex items-center justify-between mb-2">
              <div>
                <h2 className="text-lg font-semibold mb-1">{goal.title}</h2>
                <p className="text-sm text-gray-700 mb-1">{goal.description}</p>
                {goal.target && (
                  <p className="text-xs text-gray-500 mb-1">Target: {goal.target}</p>
                )}
                <p className="text-xs text-gray-500 mb-2">Classes: {goal.classes.join(', ')}</p>
              </div>
              <span className={`${statusColors[goal.status]} px-3 py-1 rounded-full text-xs font-medium`}>{goal.status}</span>
            </div>
            <div className="mb-2">
              <p className="text-xs text-gray-500 mb-1">Progress</p>
              <Progress value={goal.progress} className="w-full" />
              <span className="text-xs text-gray-500 float-right">{goal.progress}%</span>
            </div>
            <div className="flex gap-2 mt-4">
              <button className="px-3 py-2 bg-gray-100 text-gray-800 rounded font-medium hover:bg-gray-200">Update Progress</button>
              <button className="px-3 py-2 bg-black text-white rounded font-medium hover:bg-gray-800">View Details</button>
              <button className="px-3 py-2 bg-yellow-100 text-yellow-700 rounded font-medium hover:bg-yellow-200">Edit Goal</button>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
