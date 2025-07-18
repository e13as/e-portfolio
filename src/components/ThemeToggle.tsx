'use client';

// Kein Framer Motion mehr nötig

interface ThemeToggleProps {
  isDarkMode: boolean;
  isAnimating: boolean;
  toggleTheme: () => void;
  showMenu: boolean;
}

export default function ThemeToggle({ isDarkMode, isAnimating, toggleTheme, showMenu }: ThemeToggleProps) {
  return (
    <div
      className={`fixed top-4 md:top-6 right-4 md:right-6 z-50 transition-all duration-300
        ${showMenu ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-8 pointer-events-none'}`}
    >
      <button
        onClick={toggleTheme}
        disabled={isAnimating}
        className={
          `w-16 h-10 bg-gradient-to-br from-yellow-200 to-gray-700 rounded-full border-2 border-gray-400 cursor-pointer shadow-lg transition-all duration-300 disabled:cursor-not-allowed relative overflow-hidden flex items-center`
          + ' group'
        }
        style={isAnimating ? { transform: 'scale(1.08) rotate(2deg)' } : {}}
        onMouseDown={e => { if (!isAnimating) e.currentTarget.style.transform = 'scale(0.95)'; }}
        onMouseUp={e => { if (!isAnimating) e.currentTarget.style.transform = ''; }}
        onMouseLeave={e => { if (!isAnimating) e.currentTarget.style.transform = ''; }}
      >
        {/* Toggle Track */}
        <div className={`absolute inset-0 rounded-full transition-colors duration-300 ${isDarkMode ? 'bg-gray-800' : 'bg-yellow-200'}`}></div>
        {/* Emoji Toggle Knob */}
        <div
          className={`absolute flex items-center justify-center w-8 h-8 md:w-9 md:h-9 rounded-full shadow-lg bg-white/80 text-[1.6rem] top-1/2 -translate-y-1/2 transition-all duration-300
            ${isDarkMode ? 'right-0 md:right-0' : 'left-0 md:left-0'}`}
          style={{ lineHeight: 1 }}
        >
          {isDarkMode ? '🌙' : '🌞'}
        </div>
      </button>
    </div>
  );
} 