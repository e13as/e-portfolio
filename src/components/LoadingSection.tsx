'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface LoadingSectionProps {
  isDarkMode: boolean;
}

const LOADING_TEXT = 'Loading...';

export default function LoadingSection({ isDarkMode }: LoadingSectionProps) {
  const [progress, setProgress] = useState(0);

  // Ladebalken-Animation
  useEffect(() => {
    if (progress < 100) {
      const interval = setInterval(() => {
        setProgress((p) => Math.min(100, p + Math.random() * 10 + 5));
      }, 90);
      return () => clearInterval(interval);
    }
  }, [progress]);

  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center bg-[#0a0a0a] z-50 overflow-hidden">
      {/* Großes animiertes Emoji */}
      <motion.div
        className="text-[5rem] md:text-[7rem] mb-8 select-none z-10"
        animate={{
          rotate: [0, 10, -10, 0],
          scale: [1, 1.15, 0.95, 1],
          y: [0, -10, 10, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 2.2,
          ease: 'easeInOut',
        }}
      >
        👨‍💻
      </motion.div>

      {/* Loading Text */}
      <div className="text-green-400 text-lg md:text-xl font-mono mb-8 text-center min-h-[2.5rem] z-10">
        {LOADING_TEXT}
      </div>

      {/* Wellen-Ladebalken */}
      <div className="relative w-64 h-6 bg-gray-800 rounded-full overflow-hidden shadow-lg mb-8 z-10">
        <motion.div
          className="absolute left-0 top-0 h-full bg-gradient-to-r from-green-400 via-blue-400 to-purple-400"
          style={{ width: `${progress}%` }}
          animate={{
            borderRadius: [12, 20, 12],
            y: [0, -3, 3, 0],
          }}
          transition={{
            repeat: Infinity,
            duration: 1.2,
            ease: 'easeInOut',
          }}
        />
        {/* Wellen-Overlay */}
        <svg className="absolute left-0 top-0 w-full h-full pointer-events-none" viewBox="0 0 256 24" fill="none">
          <motion.path
            d="M0 12 Q 32 0 64 12 T 128 12 T 192 12 T 256 12 V24 H0Z"
            fill="white"
            fillOpacity={0.12}
            animate={{
              x: [0, 32, 0],
            }}
            transition={{
              repeat: Infinity,
              duration: 1.5,
              ease: 'easeInOut',
            }}
          />
        </svg>
      </div>

      {/* Blubbernde Bubbles */}
      <div className="absolute bottom-8 flex gap-2 z-10">
        {Array.from({ length: 6 }).map((_, i) => (
          <motion.div
            key={i}
            className="w-4 h-4 rounded-full bg-green-400/60"
            animate={{
              y: [0, -30, 0],
              opacity: [0.7, 1, 0.7],
              scale: [1, 1.3, 1],
            }}
            transition={{
              repeat: Infinity,
              duration: 1.5 + i * 0.2,
              delay: i * 0.2,
              ease: 'easeInOut',
            }}
          />
        ))}
      </div>
    </div>
  );
} 