'use client';

import { useEffect, useState } from 'react';

interface LoadingSectionProps {
  isDarkMode: boolean;
}

export default function LoadingSection({ isDarkMode }: LoadingSectionProps) {
  const [dots, setDots] = useState('');
  const [matrixText, setMatrixText] = useState('');
  const [currentChar, setCurrentChar] = useState(0);

  // Animated dots
  useEffect(() => {
    const interval = setInterval(() => {
      setDots(prev => prev.length >= 3 ? '' : prev + '.');
    }, 500);
    return () => clearInterval(interval);
  }, []);

  // Matrix-like text effect
  useEffect(() => {
    const text = 'INITIALIZING PORTFOLIO';
    const interval = setInterval(() => {
      setCurrentChar(prev => {
        if (prev < text.length) {
          setMatrixText(text.slice(0, prev + 1));
          return prev + 1;
        } else {
          return prev;
        }
      });
    }, 150);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center space-y-8">
      {/* Matrix-style loading text */}
      <div className="text-center">
        <div className="text-2xl md:text-3xl font-bold mb-4 text-green-400">
          {matrixText}
          <span className="animate-pulse">|</span>
        </div>
        
        {/* Animated loading bar */}
        <div className="w-64 h-2 bg-gray-700 rounded-full overflow-hidden">
          <div 
            className="h-full bg-gradient-to-r from-green-400 to-blue-500 rounded-full animate-pulse"
            style={{
              width: `${(currentChar / 20) * 100}%`,
              transition: 'width 0.3s ease-in-out'
            }}
          />
        </div>
      </div>

      {/* Funny loading messages */}
      <div className="text-lg text-gray-400 animate-pulse">
        <div className="mb-2">Loading awesome content{dots}</div>
        <div className="text-sm opacity-75">
          {currentChar < 5 && 'Booting up the matrix...'}
          {currentChar >= 5 && currentChar < 10 && 'Decrypting secrets...'}
          {currentChar >= 10 && currentChar < 15 && 'Summoning the code gods...'}
          {currentChar >= 15 && 'Almost there...'}
        </div>
      </div>

      {/* Animated dots grid */}
      <div className="grid grid-cols-8 gap-1">
        {Array.from({ length: 64 }).map((_, i) => (
          <div
            key={i}
            className={`w-2 h-2 rounded-full animate-pulse ${
              Math.random() > 0.7 
                ? 'bg-green-400' 
                : 'bg-gray-600'
            }`}
            style={{
              animationDelay: `${i * 0.1}s`,
              animationDuration: `${1 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>
    </div>
  );
} 