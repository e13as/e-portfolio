'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Typewriter from 'typewriter-effect';

interface LandingSectionProps {
  isDarkMode: boolean;
  time: Date;
  onEnter: () => void;
}

export default function LandingSection({ isDarkMode, time, onEnter }: LandingSectionProps) {
  const hh = time.getHours().toString().padStart(2, '0');
  const mm = time.getMinutes().toString().padStart(2, '0');
  const ss = time.getSeconds().toString().padStart(2, '0');

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        className={`${
          isDarkMode 
            ? 'bg-[#000000dd] text-green-400 border-green-600' 
            : 'bg-white/90 text-green-600 border-green-500'
        } font-mono text-base md:text-lg rounded-lg border max-w-xl mx-auto shadow-xl overflow-hidden backdrop-blur-sm`}
      >
        {/* Window bar with dots */}
        <div className={`flex items-center gap-2 px-4 py-2 border-b ${
          isDarkMode 
            ? 'bg-[#111] border-green-700' 
            : 'bg-gray-100 border-green-300'
        }`}>
          <span className="w-3 h-3 rounded-full bg-red-500" />
          <span className="w-3 h-3 rounded-full bg-yellow-400" />
          <span className="w-3 h-3 rounded-full bg-green-500" />
        </div>

        {/* Terminal-Output */}
        <div className="px-6 py-4 leading-relaxed">
          <div className="text-green-500 text-sm mb-2">root@elias-portfolio:~$</div>
          <Typewriter
            onInit={(tw) => {
              // MutationObserver for sound per character
              const target = document.querySelector('.Typewriter__wrapper');
              let lastLength = target?.textContent?.length || 0;
              const observer = new MutationObserver(() => {
                const currLength = target?.textContent?.length || 0;
                if (currLength > lastLength) {
                  const audio = new Audio('/type.mp3');
                  audio.volume = 0.3;
                  audio.play().catch(() => {});
                }
                lastLength = currLength;
              });
              if (target) {
                observer.observe(target, { childList: true, characterData: true, subtree: true });
              }

              tw
                .typeString('whoami')
                .pauseFor(300)
                .typeString('<br/><span class="text-green-400">Hello, I\'m Elias</span>')
                .pauseFor(500)
                .typeString('<br/><span class="text-green-500">root@elias-portfolio:~$</span> ')
                .typeString('cat about.txt')
                .pauseFor(300)
                .typeString('<br/>I like code & coffee ☕')
                .pauseFor(500)
                .typeString('<br/><span class="text-green-500">root@elias-portfolio:~$</span> ')
                .typeString('ls -la')
                .pauseFor(300)
                .typeString(`<br/><span class="text-gray-400">drwxr-xr-x 2 elias elias 4096 ${time.toLocaleDateString('en-US', { month: 'short', day: '2-digit' })} ${time.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: false })} projects/  skills/  languages/  certificates/  contact/</span>`)
                .callFunction(() => {
                  document.querySelector('.Typewriter__cursor')?.classList.add('hidden');
                  document.querySelector('#terminal-end')?.classList.add('blinking-cursor');
                })
                .start();
            }}
            options={{
              delay: 140,
              cursor: '_',
              loop: false,
              skipAddStyles: true,
            }}
          />
          <span id="terminal-end" />
        </div>
      </motion.div>

      <motion.div
        className={`flex justify-center items-center gap-2 md:gap-4 text-[2rem] md:text-[3rem] lg:text-[4.5rem] font-mono mb-16 md:mb-20 mt-8 md:mt-10 select-none ${
          isDarkMode ? 'text-green-400' : 'text-green-600'
        }`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        <motion.span 
          className="bg-gradient-to-br from-green-900/80 to-green-800/60 px-3 md:px-6 py-2 md:py-3 rounded-xl border border-green-500/50 shadow-lg backdrop-blur-sm"
          whileHover={{ 
            scale: 1.15, 
            boxShadow: "0 0 30px rgba(34, 197, 94, 0.8), 0 0 60px rgba(34, 197, 94, 0.4)",
            rotateY: 10
          }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          {hh}
        </motion.span>
        <motion.span 
          animate={{ 
            opacity: [1, 0.3, 1],
            scale: [1, 1.2, 1],
            textShadow: [
              "0 0 10px rgba(234, 179, 8, 0.5)",
              "0 0 20px rgba(234, 179, 8, 1)",
              "0 0 10px rgba(234, 179, 8, 0.5)"
            ]
          }} 
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="text-yellow-400 font-bold"
        >
          :
        </motion.span>
        <motion.span 
          className="bg-gradient-to-br from-green-900/80 to-green-800/60 px-3 md:px-6 py-2 md:py-3 rounded-xl border border-green-500/50 shadow-lg backdrop-blur-sm"
          whileHover={{ 
            scale: 1.15, 
            boxShadow: "0 0 30px rgba(34, 197, 94, 0.8), 0 0 60px rgba(34, 197, 94, 0.4)",
            rotateY: -10
          }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          {mm}
        </motion.span>
        <motion.span 
          animate={{ 
            opacity: [1, 0.3, 1],
            scale: [1, 1.2, 1],
            textShadow: [
              "0 0 10px rgba(234, 179, 8, 0.5)",
              "0 0 20px rgba(234, 179, 8, 1)",
              "0 0 10px rgba(234, 179, 8, 0.5)"
            ]
          }} 
          transition={{ repeat: Infinity, duration: 1.5, delay: 0.5 }}
          className="text-yellow-400 font-bold"
        >
          :
        </motion.span>
        <motion.span 
          className="bg-gradient-to-br from-yellow-900/80 to-yellow-800/60 px-3 md:px-6 py-2 md:py-3 rounded-xl border border-yellow-500/50 shadow-lg backdrop-blur-sm text-yellow-300"
          whileHover={{ 
            scale: 1.15, 
            boxShadow: "0 0 30px rgba(234, 179, 8, 0.8), 0 0 60px rgba(234, 179, 8, 0.4)",
            rotateY: 15
          }}
          animate={{
            boxShadow: [
              "0 0 20px rgba(234, 179, 8, 0.3)",
              "0 0 30px rgba(234, 179, 8, 0.6)",
              "0 0 20px rgba(234, 179, 8, 0.3)"
            ]
          }}
          transition={{ 
            type: "spring", 
            stiffness: 300,
            boxShadow: { repeat: Infinity, duration: 2 }
          }}
        >
          {ss}
        </motion.span>
      </motion.div>

      <motion.button
        whileHover={{ scale: 1.05, rotate: [-1, 1, -1, 0] }}
        whileTap={{ scale: 0.95 }}
        className={`glow-button flex items-center justify-center gap-2 px-8 md:px-12 py-3 md:py-4 font-bold text-base md:text-lg rounded-full shadow-2xl w-64 md:w-80 mx-auto ${
          isDarkMode 
            ? 'bg-green-500 text-black' 
            : 'bg-green-600 text-white'
        }`}
        onClick={onEnter}
      >
        Enter Base <ArrowRight size={18} className="md:w-5 md:h-5" />
      </motion.button>
    </>
  );
} 