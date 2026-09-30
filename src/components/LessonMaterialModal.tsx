import React from 'react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Select } from './ui/select';
import { Textarea } from './ui/textarea';
import {
  Video,
  Image,
  FileText,
  Headphones,
  Link,
  GamepadIcon,
  HelpCircle,
  PenTool,
  Upload,
  X
} from 'lucide-react';

interface MaterialModalProps {
  type: string;
  isOpen: boolean;
  onClose: () => void;
  onSave: (material: any) => void;
}

const materialIcons = {
  video: Video,
  image: Image,
  document: FileText,
  audio: Headphones,
  link: Link,
  game: GamepadIcon,
  quiz: HelpCircle,
  worksheet: PenTool
};

const materialColors = {
  video: 'bg-red-100 text-red-700',
  image: 'bg-blue-100 text-blue-700',
  document: 'bg-purple-100 text-purple-700',
  audio: 'bg-green-100 text-green-700',
  link: 'bg-indigo-100 text-indigo-700',
  game: 'bg-pink-100 text-pink-700',
  quiz: 'bg-orange-100 text-orange-700',
  worksheet: 'bg-yellow-100 text-yellow-700'
};

export function LessonMaterialModal({ type, isOpen, onClose, onSave }: MaterialModalProps) {
  const [materialData, setMaterialData] = React.useState({
    type,
    name: '',
    description: '',
    url: '',
    duration: '',
    file: null,
    difficulty: 'medium',
    instructions: ''
  });

  const IconComponent = materialIcons[type as keyof typeof materialIcons] || FileText;
  const colorClass = materialColors[type as keyof typeof materialColors] || 'bg-gray-100 text-gray-700';

  if (!isOpen) return null;

  const handleSave = () => {
    if (!materialData.name.trim()) return;
    
    onSave({
      ...materialData,
      id: Date.now().toString(),
      createdAt: new Date().toISOString()
    });
    
    // Reset form
    setMaterialData({
      type,
      name: '',
      description: '',
      url: '',
      duration: '',
      file: null,
      difficulty: 'medium',
      instructions: ''
    });
    
    onClose();
  };

  const getTypeDisplayName = (type: string) => {
    const names = {
      video: 'Video',
      image: 'Image',
      document: 'Document',
      audio: 'Audio',
      link: 'Web Link',
      game: 'Game',
      quiz: 'Quiz',
      worksheet: 'Worksheet'
    };
    return names[type as keyof typeof names] || type;
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-[60]">
      <Card className="w-full max-w-md max-h-[90vh] overflow-y-auto">
        <div className="p-4 border-b border-gray-200">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className={`w-10 h-10 rounded-full flex items-center justify-center ${colorClass}`}>
                <IconComponent className="w-5 h-5" />
              </div>
              <div>
                <h2 className="text-lg font-medium text-gray-800">Add {getTypeDisplayName(type)}</h2>
                <p className="text-sm text-gray-600">Add learning material to your lesson</p>
              </div>
            </div>
            <Button variant="ghost" size="sm" onClick={onClose}>
              <X className="w-4 h-4" />
            </Button>
          </div>
        </div>

        <div className="p-4 space-y-4">
          <div>
            <Label htmlFor="name">Material Name *</Label>
            <Input
              id="name"
              value={materialData.name}
              onChange={(e) => setMaterialData({...materialData, name: e.target.value})}
              placeholder={`Enter ${type} name...`}
              className="mt-1"
            />
          </div>

          <div>
            <Label htmlFor="description">Description</Label>
            <Textarea
              id="description"
              value={materialData.description}
              onChange={(e) => setMaterialData({...materialData, description: e.target.value})}
              placeholder="Brief description of this material..."
              className="mt-1"
              rows={2}
            />
          </div>

          {(type === 'video' || type === 'audio') && (
            <div>
              <Label htmlFor="duration">Duration</Label>
              <Input
                id="duration"
                value={materialData.duration}
                onChange={(e) => setMaterialData({...materialData, duration: e.target.value})}
                placeholder="e.g., 10 min"
                className="mt-1"
              />
            </div>
          )}

          {type === 'link' && (
            <div>
              <Label htmlFor="url">Web URL</Label>
              <Input
                id="url"
                type="url"
                value={materialData.url}
                onChange={(e) => setMaterialData({...materialData, url: e.target.value})}
                placeholder="https://example.com"
                className="mt-1"
              />
            </div>
          )}

          {(type === 'quiz' || type === 'worksheet') && (
            <div>
              <Label htmlFor="difficulty">Difficulty Level</Label>
              <select
                id="difficulty"
                value={materialData.difficulty}
                onChange={(e) => setMaterialData({...materialData, difficulty: e.target.value})}
                className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
              >
                <option value="easy">Easy</option>
                <option value="medium">Medium</option>
                <option value="hard">Hard</option>
              </select>
            </div>
          )}

          <div>
            <Label htmlFor="instructions">Instructions for Students</Label>
            <Textarea
              id="instructions"
              value={materialData.instructions}
              onChange={(e) => setMaterialData({...materialData, instructions: e.target.value})}
              placeholder="How should students use this material?"
              className="mt-1"
              rows={2}
            />
          </div>

          {/* File Upload Placeholder */}
          <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 text-center">
            <Upload className="w-8 h-8 mx-auto mb-2 text-gray-400" />
            <p className="text-sm text-gray-600">
              Click to upload file or drag and drop
            </p>
            <p className="text-xs text-gray-500 mt-1">
              {type === 'video' && 'MP4, AVI, MOV up to 100MB'}
              {type === 'image' && 'JPG, PNG, GIF up to 10MB'}
              {type === 'audio' && 'MP3, WAV up to 50MB'}
              {type === 'document' && 'PDF, DOC, DOCX up to 25MB'}
              {(type === 'quiz' || type === 'worksheet') && 'PDF, DOC, DOCX up to 25MB'}
            </p>
          </div>
        </div>

        <div className="p-4 border-t border-gray-200 flex gap-2">
          <Button variant="outline" onClick={onClose} className="flex-1">
            Cancel
          </Button>
          <Button 
            onClick={handleSave}
            disabled={!materialData.name.trim()}
            className="flex-1 bg-yellow-500 hover:bg-yellow-600 text-white"
          >
            Add Material
          </Button>
        </div>
      </Card>
    </div>
  );
}