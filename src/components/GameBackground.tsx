import React from 'react';

interface GameBackgroundProps {
  children: React.ReactNode;
  variant?: 'default' | 'minimal' | 'decorative';
}

export function GameBackground({ children, variant = 'default' }: GameBackgroundProps) {
  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Base gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 via-cyan-50 to-yellow-50" />
      
      {/* Decorative elements based on variant */}
      {variant === 'decorative' && (
        <>
          {/* Folk art patterns */}
          <div className="absolute top-10 left-8 w-16 h-16 opacity-10">
            <svg viewBox="0 0 64 64" className="w-full h-full text-yellow-500">
              <circle cx="32" cy="32" r="28" fill="none" stroke="currentColor" strokeWidth="2" />
              <path d="M32 8 L40 24 L56 24 L44 36 L48 52 L32 44 L16 52 L20 36 L8 24 L24 24 Z" fill="currentColor" />
            </svg>
          </div>
          
          {/* Paisley pattern */}
          <div className="absolute top-32 right-12 w-12 h-20 opacity-10">
            <svg viewBox="0 0 48 80" className="w-full h-full text-purple-500">
              <path d="M24 4 C36 4 44 16 44 32 C44 48 36 60 24 60 C12 60 4 48 4 32 C4 24 8 16 16 12 C20 8 24 4 24 4 Z" fill="currentColor" />
              <circle cx="28" cy="24" r="4" fill="white" />
              <circle cx="20" cy="36" r="3" fill="white" />
            </svg>
          </div>

          {/* Leaf elements */}
          <div className="absolute bottom-40 left-16 w-10 h-14 opacity-15">
            <svg viewBox="0 0 40 56" className="w-full h-full text-emerald-500">
              <path d="M20 4 C28 4 36 12 36 24 C36 36 28 44 20 52 C12 44 4 36 4 24 C4 12 12 4 20 4 Z" fill="currentColor" />
              <path d="M20 8 L20 48" stroke="currentColor" strokeWidth="1" fill="none" />
            </svg>
          </div>

          {/* Lotus petal */}
          <div className="absolute bottom-20 right-20 w-14 h-10 opacity-10">
            <svg viewBox="0 0 56 40" className="w-full h-full text-cyan-500">
              <ellipse cx="28" cy="20" rx="24" ry="16" fill="currentColor" />
              <ellipse cx="28" cy="20" rx="16" ry="10" fill="white" opacity="0.3" />
            </svg>
          </div>
        </>
      )}

      {variant === 'default' && (
        <>
          {/* Subtle geometric shapes */}
          <div className="absolute top-16 right-8 w-8 h-8 opacity-8">
            <div className="w-full h-full bg-yellow-400 rounded-full" />
          </div>
          
          <div className="absolute top-48 left-4 w-6 h-6 opacity-8">
            <div className="w-full h-full bg-purple-400 transform rotate-45" />
          </div>
          
          <div className="absolute bottom-64 right-16 w-10 h-10 opacity-8">
            <div className="w-full h-full bg-cyan-400 rounded-full" />
          </div>
          
          <div className="absolute bottom-32 left-8 w-4 h-8 opacity-8">
            <div className="w-full h-full bg-emerald-400 rounded-full" />
          </div>
        </>
      )}

      {/* Floating particles animation */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className={`absolute w-2 h-2 bg-yellow-300 rounded-full opacity-20 animate-bounce`}
            style={{
              left: `${20 + (i * 15)}%`,
              top: `${30 + (i * 10)}%`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${3 + (i * 0.5)}s`,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}