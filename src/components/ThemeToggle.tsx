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
        className="w-12 h-8 md:w-16 md:h-10 bg-gradient-to-br from-gray-700 to-gray-800 rounded-xl border-2 border-gray-600 cursor-pointer shadow-lg transition-all duration-300 disabled:cursor-not-allowed relative overflow-hidden"
        animate={isAnimating ? {
          scale: [1, 1.1, 1],
          rotate: [0, 2, -2, 0]
        } : {}}
        transition={{ 
          duration: 0.8,
          ease: "easeInOut"
        }}
        whileHover={!isAnimating ? { scale: 1.05 } : {}}
        whileTap={!isAnimating ? { scale: 0.95 } : {}}
      >
        {/* Controller Body */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-600 to-gray-700 rounded-lg"></div>
        
        {/* Controller Grips */}
        <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-2 md:w-3 h-4 md:h-6 bg-gray-800 rounded-l-lg"></div>
        <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-2 md:w-3 h-4 md:h-6 bg-gray-800 rounded-r-lg"></div>
        
        {/* D-Pad */}
        <div className="absolute left-1 md:left-2 top-1/2 transform -translate-y-1/2 w-3 md:w-4 h-3 md:h-4 bg-gray-500 rounded-sm">
          <div className="absolute inset-0.5 bg-gray-600 rounded-sm"></div>
        </div>
        
        {/* Action Buttons */}
        <div className="absolute right-1 md:right-2 top-1/2 transform -translate-y-1/2 flex gap-0.5 md:gap-1">
          <div className="w-1.5 md:w-2 h-1.5 md:h-2 bg-gray-500 rounded-full"></div>
          <div className="w-1.5 md:w-2 h-1.5 md:h-2 bg-gray-500 rounded-full"></div>
        </div>
        
        {/* LED Indicators */}
        <div className="absolute top-0.5 md:top-1 left-1/2 transform -translate-x-1/2 flex gap-0.5 md:gap-1">
          <motion.div 
            className={`w-1 md:w-1.5 h-1 md:h-1.5 rounded-full ${
              isDarkMode ? 'bg-red-500' : 'bg-blue-500'
            }`}
            animate={isAnimating ? {
              scale: [1, 1.5, 1],
              opacity: [1, 0.5, 1]
            } : {
              scale: [1, 1.2, 1],
              opacity: [1, 0.7, 1]
            }}
            transition={{ 
              duration: 1,
              repeat: Infinity,
              repeatType: "reverse"
            }}
          />
          <motion.div 
            className={`w-1 md:w-1.5 h-1 md:h-1.5 rounded-full ${
              isDarkMode ? 'bg-red-500' : 'bg-blue-500'
            }`}
            animate={isAnimating ? {
              scale: [1, 1.5, 1],
              opacity: [1, 0.5, 1]
            } : {
              scale: [1, 1.2, 1],
              opacity: [1, 0.7, 1]
            }}
            transition={{ 
              duration: 1,
              repeat: Infinity,
              repeatType: "reverse",
              delay: 0.3
            }}
          />
          <motion.div 
            className={`w-1 md:w-1.5 h-1 md:h-1.5 rounded-full ${
              isDarkMode ? 'bg-red-500' : 'bg-blue-500'
            }`}
            animate={isAnimating ? {
              scale: [1, 1.5, 1],
              opacity: [1, 0.5, 1]
            } : {
              scale: [1, 1.2, 1],
              opacity: [1, 0.7, 1]
            }}
            transition={{ 
              duration: 1,
              repeat: Infinity,
              repeatType: "reverse",
              delay: 0.6
            }}
          />
        </div>
        
        {/* Start/Select Buttons */}
        <div className="absolute bottom-0.5 md:bottom-1 left-1/2 transform -translate-x-1/2 flex gap-1 md:gap-2">
          <div className="w-0.5 md:w-1 h-0.5 md:h-0.5 bg-gray-500 rounded-full"></div>
          <div className="w-0.5 md:w-1 h-0.5 md:h-0.5 bg-gray-500 rounded-full"></div>
        </div>
      </motion.button>
      
      {/* Power Indicator */}
      <motion.div 
        className="absolute -top-4 md:-top-6 left-1/2 transform -translate-x-1/2 text-xs font-bold"
        animate={isAnimating ? {
          scale: [1, 1.5, 1],
          y: [0, -5, 0]
        } : {}}
        transition={{ duration: 0.8 }}
      >
        {isDarkMode ? "🔴" : "🔵"}
      </motion.div>
    </motion.div>
  );
} 