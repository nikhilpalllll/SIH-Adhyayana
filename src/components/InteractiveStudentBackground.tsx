import React, { useState, useEffect, useCallback } from 'react';
import { Star, Leaf, Sun, Cloud, TreePine, Flower, Sparkles } from 'lucide-react';

interface InteractiveStudentBackgroundProps {
  children: React.ReactNode;
  onPointsEarned?: (points: number) => void;
}

interface FloatingElement {
  id: string;
  x: number;
  y: number;
  type: 'star' | 'leaf' | 'flower' | 'sparkle';
  points: number;
  collected: boolean;
  animationDelay: number;
}

interface Bird {
  id: string;
  x: number;
  y: number;
  direction: number;
  speed: number;
}

export function InteractiveStudentBackground({ children, onPointsEarned }: InteractiveStudentBackgroundProps) {
  const [floatingElements, setFloatingElements] = useState<FloatingElement[]>([]);
  const [birds, setBirds] = useState<Bird[]>([]);
  const [totalPoints, setTotalPoints] = useState(0);
  const [cloudPosition, setCloudPosition] = useState(0);
  const [sunRotation, setSunRotation] = useState(0);

  // Initialize floating collectible elements
  useEffect(() => {
    const elements: FloatingElement[] = [];
    for (let i = 0; i < 8; i++) {
      elements.push({
        id: `element-${i}`,
        x: Math.random() * 80 + 10, // 10% to 90% of screen width
        y: Math.random() * 60 + 20, // 20% to 80% of screen height
        type: ['star', 'leaf', 'flower', 'sparkle'][Math.floor(Math.random() * 4)] as any,
        points: Math.floor(Math.random() * 10) + 5,
        collected: false,
        animationDelay: Math.random() * 3,
      });
    }
    setFloatingElements(elements);

    // Initialize birds
    const initialBirds: Bird[] = [];
    for (let i = 0; i < 3; i++) {
      initialBirds.push({
        id: `bird-${i}`,
        x: Math.random() * 100,
        y: Math.random() * 30 + 10,
        direction: Math.random() > 0.5 ? 1 : -1,
        speed: Math.random() * 0.3 + 0.1,
      });
    }
    setBirds(initialBirds);
  }, []);

  // Animate clouds and sun
  useEffect(() => {
    const interval = setInterval(() => {
      setCloudPosition(prev => (prev + 0.1) % 100);
      setSunRotation(prev => (prev + 0.5) % 360);
    }, 100);

    return () => clearInterval(interval);
  }, []);

  // Animate birds
  useEffect(() => {
    const interval = setInterval(() => {
      setBirds(prev => prev.map(bird => ({
        ...bird,
        x: bird.x + bird.direction * bird.speed,
        direction: bird.x > 95 ? -1 : bird.x < 5 ? 1 : bird.direction,
      })));
    }, 50);

    return () => clearInterval(interval);
  }, []);

  const handleElementClick = useCallback((elementId: string) => {
    setFloatingElements(prev => prev.map(element => {
      if (element.id === elementId && !element.collected) {
        setTotalPoints(current => current + element.points);
        onPointsEarned?.(element.points);
        return { ...element, collected: true };
      }
      return element;
    }));

    // Regenerate element after 3 seconds
    setTimeout(() => {
      setFloatingElements(prev => prev.map(element => {
        if (element.id === elementId) {
          return {
            ...element,
            x: Math.random() * 80 + 10,
            y: Math.random() * 60 + 20,
            type: ['star', 'leaf', 'flower', 'sparkle'][Math.floor(Math.random() * 4)] as any,
            points: Math.floor(Math.random() * 10) + 5,
            collected: false,
            animationDelay: Math.random() * 3,
          };
        }
        return element;
      }));
    }, 3000);
  }, [onPointsEarned]);

  const getElementIcon = (type: string) => {
    switch (type) {
      case 'star': return Star;
      case 'leaf': return Leaf;
      case 'flower': return Flower;
      case 'sparkle': return Sparkles;
      default: return Star;
    }
  };

  const getElementColor = (type: string) => {
    switch (type) {
      case 'star': return 'text-yellow-500';
      case 'leaf': return 'text-emerald-500';
      case 'flower': return 'text-pink-500';
      case 'sparkle': return 'text-purple-500';
      default: return 'text-yellow-500';
    }
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-emerald-50 via-cyan-50 to-yellow-50">
      {/* Sky and Sun */}
      <div className="absolute top-8 right-8 z-20">
        <div 
          className="w-16 h-16 text-yellow-400 transform transition-transform duration-1000"
          style={{ transform: `rotate(${sunRotation}deg)` }}
        >
          <Sun className="w-full h-full drop-shadow-lg" />
        </div>
      </div>

      {/* Animated Clouds */}
      <div className="absolute top-12 w-full h-24 pointer-events-none z-10">
        <div 
          className="absolute w-20 h-12 opacity-20"
          style={{ 
            left: `${cloudPosition}%`,
            transform: cloudPosition > 80 ? `translateX(-${(cloudPosition - 80) * 5}%)` : 'none'
          }}
        >
          <Cloud className="w-full h-full text-white drop-shadow-md" />
        </div>
        <div 
          className="absolute w-16 h-10 opacity-15"
          style={{ 
            left: `${(cloudPosition + 30) % 100}%`,
            top: '20px'
          }}
        >
          <Cloud className="w-full h-full text-white drop-shadow-md" />
        </div>
      </div>

      {/* Flying Birds */}
      {birds.map(bird => (
        <div
          key={bird.id}
          className="absolute pointer-events-none z-10 transition-all duration-100"
          style={{
            left: `${bird.x}%`,
            top: `${bird.y}%`,
            transform: `scaleX(${bird.direction})`
          }}
        >
          <div className="w-6 h-4 text-gray-600 opacity-40">
            <svg viewBox="0 0 24 16" className="w-full h-full" fill="currentColor">
              <path d="M2 8 C6 4, 10 4, 12 8 C14 4, 18 4, 22 8 C18 6, 14 6, 12 8 C10 6, 6 6, 2 8" />
            </svg>
          </div>
        </div>
      ))}

      {/* Village Landscape Elements */}
      <div className="absolute bottom-0 w-full h-48 pointer-events-none z-5">
        {/* Trees */}
        <div className="absolute bottom-8 left-8 w-12 h-20 text-emerald-600 opacity-30">
          <TreePine className="w-full h-full" />
        </div>
        <div className="absolute bottom-12 left-24 w-10 h-16 text-emerald-700 opacity-25">
          <TreePine className="w-full h-full" />
        </div>
        <div className="absolute bottom-6 right-16 w-14 h-22 text-emerald-600 opacity-30">
          <TreePine className="w-full h-full" />
        </div>

        {/* Hills */}
        <div className="absolute bottom-0 left-0 w-full">
          <svg viewBox="0 0 400 120" className="w-full h-30 text-emerald-200 opacity-40">
            <path d="M0 120 C80 60, 160 80, 240 40 C320 20, 380 60, 400 80 L400 120 Z" fill="currentColor" />
          </svg>
        </div>
        <div className="absolute bottom-0 left-0 w-full">
          <svg viewBox="0 0 400 100" className="w-full h-25 text-emerald-300 opacity-30">
            <path d="M0 100 C100 40, 200 60, 300 30 C350 20, 380 40, 400 50 L400 100 Z" fill="currentColor" />
          </svg>
        </div>
      </div>

      {/* Indian Folk Art Patterns */}
      <div className="absolute top-20 left-12 w-20 h-20 opacity-5 pointer-events-none">
        <svg viewBox="0 0 80 80" className="w-full h-full text-orange-500">
          <circle cx="40" cy="40" r="35" fill="none" stroke="currentColor" strokeWidth="2" />
          <circle cx="40" cy="40" r="25" fill="none" stroke="currentColor" strokeWidth="1" />
          <circle cx="40" cy="40" r="15" fill="currentColor" />
          <circle cx="40" cy="40" r="8" fill="white" />
          {[0, 45, 90, 135, 180, 225, 270, 315].map(angle => (
            <line
              key={angle}
              x1="40"
              y1="40"
              x2={40 + 30 * Math.cos(angle * Math.PI / 180)}
              y2={40 + 30 * Math.sin(angle * Math.PI / 180)}
              stroke="currentColor"
              strokeWidth="1"
            />
          ))}
        </svg>
      </div>

      {/* Rangoli Pattern */}
      <div className="absolute bottom-32 right-24 w-16 h-16 opacity-8 pointer-events-none">
        <svg viewBox="0 0 64 64" className="w-full h-full text-purple-500">
          <polygon points="32,8 44,20 32,32 20,20" fill="currentColor" />
          <polygon points="32,32 44,44 32,56 20,44" fill="currentColor" />
          <polygon points="8,32 20,20 32,32 20,44" fill="currentColor" />
          <polygon points="32,32 44,20 56,32 44,44" fill="currentColor" />
        </svg>
      </div>

      {/* Floating Collectible Elements */}
      {floatingElements.map(element => {
        const IconComponent = getElementIcon(element.type);
        const colorClass = getElementColor(element.type);
        
        return (
          <div
            key={element.id}
            className={`absolute cursor-pointer transition-all duration-300 hover:scale-110 z-30 ${
              element.collected ? 'opacity-0 scale-0' : 'opacity-80'
            }`}
            style={{
              left: `${element.x}%`,
              top: `${element.y}%`,
              animation: element.collected ? 'none' : `float 3s ease-in-out infinite`,
              animationDelay: `${element.animationDelay}s`,
            }}
            onClick={() => handleElementClick(element.id)}
          >
            <div className={`w-8 h-8 ${colorClass} drop-shadow-lg`}>
              <IconComponent className="w-full h-full" />
            </div>
            {!element.collected && (
              <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-yellow-400 text-white text-xs px-2 py-1 rounded-full opacity-0 hover:opacity-100 transition-opacity">
                +{element.points}
              </div>
            )}
          </div>
        );
      })}

      {/* Points Display */}
      {totalPoints > 0 && (
        <div className="absolute top-4 left-4 z-40 bg-yellow-400 text-white px-4 py-2 rounded-full shadow-lg">
          <div className="flex items-center gap-2">
            <Star className="w-5 h-5" />
            <span className="font-medium">{totalPoints}</span>
          </div>
        </div>
      )}

      {/* Floating Animation Styles */}
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) scale(1); }
          50% { transform: translateY(-10px) scale(1.05); }
        }
      `}</style>

      {/* Content */}
      <div className="relative z-20">
        {children}
      </div>
    </div>
  );
}