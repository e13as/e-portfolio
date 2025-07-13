'use client';

import { motion } from 'framer-motion';

interface ThemeToggleProps {
  isDarkMode: boolean;
  isAnimating: boolean;
  toggleTheme: () => void;
}

export default function ThemeToggle({ isDarkMode, isAnimating, toggleTheme }: ThemeToggleProps) {
  return (
    <motion.div 
      className="fixed top-4 md:top-6 right-4 md:right-6 z-50"
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1 }}
    >
      <motion.button
        onClick={toggleTheme}
        disabled={isAnimating}
        className={
          `w-16 h-10 bg-gradient-to-br from-yellow-200 to-gray-700 rounded-full border-2 border-gray-400 cursor-pointer shadow-lg transition-all duration-300 disabled:cursor-not-allowed relative overflow-hidden flex items-center`
          + ' group'
        }
        animate={isAnimating ? {
          scale: [1, 1.1, 1],
          rotate: [0, 2, -2, 0]
        } : {}}
        transition={{ 
          duration: 0.8,
          ease: "easeInOut"
        }}
        whileHover={!isAnimating ? {
          scale: 1.04,
          boxShadow: isDarkMode
            ? '0 0 8px 2px #60a5fa, 0 0 12px 4px #1e293b' // sanftes blau-grau für Dark Mode
            : '0 0 8px 2px #fde68a, 0 0 12px 4px #fef9c3', // sanftes gelb für Light Mode
          background: isDarkMode
            ? 'linear-gradient(90deg, #222, #334155 80%)'
            : 'linear-gradient(90deg, #fef9c3, #fde68a 80%)'
        } : {}}
        whileTap={!isAnimating ? { scale: 0.95 } : {}}
      >
        {/* Toggle Track */}
        <div className={`absolute inset-0 rounded-full transition-colors duration-300 ${isDarkMode ? 'bg-gray-800' : 'bg-yellow-200'}`}></div>
        {/* Emoji Toggle Knob */}
        <motion.div
          className="absolute flex items-center justify-center w-8 h-8 md:w-9 md:h-9 rounded-full shadow-lg bg-white/80 text-[1.6rem] top-1/2 -translate-y-1/2 left-1"
          animate={{
            x: isDarkMode ? -3.2 : 22
          }}
          transition={{ type: 'spring', stiffness: 400, damping: 25 }}
          style={{ lineHeight: 1 }}
        >
          {isDarkMode ? '🌙' : '🌞'}
        </motion.div>
      </motion.button>
    </motion.div>
  );
} 