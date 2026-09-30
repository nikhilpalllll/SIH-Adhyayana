import React from 'react';
import { ChevronRight, Star, BookOpen, Trophy } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface WelcomeScreenProps {
  onNext: () => void;
}

export function WelcomeScreen({ onNext }: WelcomeScreenProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-100 via-cyan-100 to-yellow-100 flex flex-col items-center justify-center p-6 relative">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-6 h-6 bg-yellow-400 rounded-full opacity-70"></div>
        <div className="absolute top-32 right-16 w-4 h-4 bg-purple-400 rounded-full opacity-70"></div>
        <div className="absolute bottom-32 left-20 w-5 h-5 bg-emerald-400 rounded-full opacity-70"></div>
        <div className="absolute bottom-20 right-10 w-7 h-7 bg-cyan-400 rounded-full opacity-70"></div>
        
        {/* Floating icons */}
        <div className="absolute top-16 right-6 text-yellow-500">
          <Star className="w-8 h-8" />
        </div>
        <div className="absolute bottom-40 left-8 text-purple-500">
          <BookOpen className="w-6 h-6" />
        </div>
        <div className="absolute bottom-16 right-20 text-cyan-500">
          <Trophy className="w-6 h-6" />
        </div>
      </div>

      <div className="text-center max-w-md mx-auto relative z-10">
        {/* App Name */}
        <div className="mb-8">
          <h1 className="text-5xl bg-gradient-to-r from-purple-600 via-yellow-500 to-emerald-600 bg-clip-text text-transparent mb-4">
            Adhyayana
          </h1>
          <div className="flex items-center justify-center gap-2 mb-6">
            <div className="w-8 h-1 bg-yellow-400 rounded-full"></div>
            <div className="w-4 h-1 bg-purple-400 rounded-full"></div>
            <div className="w-6 h-1 bg-emerald-400 rounded-full"></div>
          </div>
          <h2 className="text-xl text-gray-700 mb-8">
            Gamify Your Learning Journey
          </h2>
        </div>

        {/* Temple representation */}
        <div className="relative mb-8">
          <div className="relative inline-block">
            <div className="absolute -inset-4 bg-gradient-to-r from-yellow-400 via-purple-400 to-emerald-400 rounded-3xl opacity-30 animate-pulse"></div>
            <div className="absolute -inset-2 bg-gradient-to-r from-emerald-400 via-cyan-400 to-yellow-400 rounded-2xl opacity-40 animate-pulse delay-300"></div>
            
            <div className="relative bg-white p-3 rounded-2xl shadow-2xl">
              <div className="w-48 h-36 rounded-xl overflow-hidden relative">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1617385316361-ef3fe3ef3817?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxqYWdhbm5hdGglMjB0ZW1wbGUlMjBvZGlzaGElMjBjb2xvcmZ1bCUyMGFydGlzdGljfGVufDF8fHx8MTc1ODY1MDU0M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Jagannath Temple, Odisha"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-orange-500/30 via-transparent to-yellow-400/20"></div>
                <div className="absolute bottom-2 left-2 right-2 text-center">
                  <p className="text-sm text-white drop-shadow-lg">Jagannath Temple</p>
                  <p className="text-xs text-yellow-100 drop-shadow-lg">Cultural Heritage</p>
                </div>
              </div>
              
              <div className="absolute -top-2 -right-2 bg-yellow-400 text-white rounded-full p-2 shadow-lg animate-bounce">
                <Star className="w-4 h-4" />
              </div>
              <div className="absolute -bottom-2 -left-2 bg-purple-500 text-white rounded-full p-2 shadow-lg animate-bounce delay-500">
                <Trophy className="w-4 h-4" />
              </div>
            </div>
          </div>
        </div>

        {/* Cultural tagline */}
        <p className="text-gray-600 mb-8 text-center leading-relaxed">
          Discover the rich heritage of Odisha while mastering new skills through interactive games and challenges
        </p>

        {/* Next Button */}
        <button
          onClick={onNext}
          className="bg-gradient-to-r from-yellow-400 to-emerald-500 hover:from-yellow-500 hover:to-emerald-600 text-white px-8 py-4 rounded-2xl shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 flex items-center gap-3 mx-auto"
        >
          <span className="text-lg">Let's Start Learning!</span>
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* Feature highlights */}
        <div className="mt-8 flex justify-center gap-4">
          <div className="flex items-center gap-2 bg-white bg-opacity-70 px-4 py-2 rounded-full shadow-lg">
            <BookOpen className="w-5 h-5 text-emerald-600" />
            <span className="text-sm text-gray-700">Interactive Learning</span>
          </div>
          <div className="flex items-center gap-2 bg-white bg-opacity-70 px-4 py-2 rounded-full shadow-lg">
            <Trophy className="w-5 h-5 text-yellow-600" />
            <span className="text-sm text-gray-700">Earn Rewards</span>
          </div>
        </div>
      </div>
    </div>
  );
}