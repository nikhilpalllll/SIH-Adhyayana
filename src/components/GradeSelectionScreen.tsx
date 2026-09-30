import React from 'react';
import { Button } from './ui/button';
import { Card } from './ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { CheckCircle, BookOpen, ArrowLeft } from 'lucide-react';
import { LanguageContent } from '../utils/languages';

interface GradeSelectionScreenProps {
  onGradeSelect: (grade: string) => void;
  onBack: () => void;
  t: LanguageContent;
}

export function GradeSelectionScreen({ onGradeSelect, onBack, t }: GradeSelectionScreenProps) {
  const [selectedGrade, setSelectedGrade] = React.useState<string | null>(null);

  // Only grades 6-12 are allowed
  const grades = [
    {
      id: 'grade-6',
      name: `${t.gradeSelection.class} 6`,
      description: `${t.gradeSelection.middle} (11-12 years)`,
      icon: '📊',
      gradient: 'from-emerald-100 to-emerald-200',
      range: 'Class 6'
    },
    {
      id: 'grade-7',
      name: `${t.gradeSelection.class} 7`,
      description: `${t.gradeSelection.middle} (12-13 years)`,
      icon: '🔬',
      gradient: 'from-cyan-100 to-cyan-200',
      range: 'Class 7'
    },
    {
      id: 'grade-8',
      name: `${t.gradeSelection.class} 8`,
      description: `${t.gradeSelection.middle} (13-14 years)`,
      icon: '🧮',
      gradient: 'from-yellow-100 to-yellow-200',
      range: 'Class 8'
    },
    {
      id: 'grade-9',
      name: `${t.gradeSelection.class} 9`,
      description: `${t.gradeSelection.high} (14-15 years)`,
      icon: '📖',
      gradient: 'from-orange-100 to-orange-200',
      range: 'Class 9'
    },
    {
      id: 'grade-10',
      name: `${t.gradeSelection.class} 10`,
      description: `${t.gradeSelection.high} (15-16 years)`,
      icon: '📐',
      gradient: 'from-red-100 to-red-200',
      range: 'Class 10'
    },
    {
      id: 'grade-11',
      name: `${t.gradeSelection.class} 11`,
      description: `${t.gradeSelection.high} (16-17 years)`,
      icon: '🎯',
      gradient: 'from-purple-100 to-purple-200',
      range: 'Class 11'
    },
    {
      id: 'grade-12',
      name: `${t.gradeSelection.class} 12`,
      description: `${t.gradeSelection.high} (17-18 years)`,
      icon: '🎓',
      gradient: 'from-pink-100 to-pink-200',
      range: 'Class 12'
    }
  ];

  const handleGradeSelect = (gradeId: string) => {
    setSelectedGrade(gradeId);
  };

  const handleContinue = () => {
    if (selectedGrade) {
      onGradeSelect(selectedGrade);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-cyan-50 p-4">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <Button 
          variant="ghost" 
          size="sm"
          onClick={onBack}
          className="text-emerald-600"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          {t.back}
        </Button>
        
        <div className="w-10"></div>
      </div>

      {/* Title Section */}
      <div className="text-center mb-8">
        <div className="w-20 h-20 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center mx-auto mb-4">
          <BookOpen className="w-10 h-10 text-white" />
        </div>
        <h1 className="text-3xl mb-2 text-gray-800">{t.gradeSelection.title}</h1>
        <p className="text-gray-600">{t.gradeSelection.subtitle}</p>
        <p className="text-sm text-emerald-600 mt-2">Available for Grades 6-12 only</p>
      </div>

      {/* Dropdown Selection */}
      <div className="mb-8">
        <Card className="p-6">
          <div className="text-center mb-6">
            <h3 className="text-lg text-gray-800 mb-2">Select Your Grade</h3>
            <p className="text-sm text-gray-600">Choose from Grade 6 to Grade 12</p>
          </div>
          
          <Select value={selectedGrade || ''} onValueChange={handleGradeSelect}>
            <SelectTrigger className="w-full h-14 text-lg bg-white border-2 border-gray-200 hover:border-yellow-300 focus:border-yellow-400">
              <SelectValue placeholder="Choose your grade..." />
            </SelectTrigger>
            <SelectContent>
              {grades.map((grade) => (
                <SelectItem 
                  key={grade.id} 
                  value={grade.id}
                  className="text-lg py-3"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-xl">{grade.icon}</span>
                    <div>
                      <div className="font-medium">{grade.name}</div>
                      <div className="text-sm text-gray-500">{grade.description}</div>
                    </div>
                  </div>
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </Card>
      </div>

      {/* Selected Grade Preview */}
      {selectedGrade && (
        <div className="mb-8">
          <Card className="p-4 bg-yellow-50 border-2 border-yellow-200">
            {(() => {
              const selected = grades.find(g => g.id === selectedGrade);
              return selected ? (
                <div className="flex items-center gap-4">
                  <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${selected.gradient} flex items-center justify-center text-xl`}>
                    {selected.icon}
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg text-gray-800">{selected.name}</h4>
                    <p className="text-sm text-gray-600">{selected.description}</p>
                  </div>
                  <CheckCircle className="w-6 h-6 text-yellow-500" />
                </div>
              ) : null;
            })()}
          </Card>
        </div>
      )}

      {/* Continue Button */}
      <div className="fixed bottom-6 left-4 right-4">
        <Button
          onClick={handleContinue}
          disabled={!selectedGrade}
          className="w-full bg-yellow-500 hover:bg-yellow-600 disabled:bg-gray-300 disabled:text-gray-500 text-white py-3 rounded-full shadow-lg text-lg"
          size="lg"
        >
          {t.next}
        </Button>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-10 left-10 w-8 h-8 bg-yellow-300 rounded-full opacity-60"></div>
      <div className="absolute top-32 right-16 w-6 h-6 bg-emerald-300 rounded-full opacity-40"></div>
      <div className="absolute bottom-32 left-8 w-10 h-10 bg-cyan-300 rounded-full opacity-50"></div>
      <div className="absolute bottom-16 right-12 w-4 h-4 bg-purple-300 rounded-full opacity-60"></div>
    </div>
  );
}