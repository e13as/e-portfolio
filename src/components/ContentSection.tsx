'use client';

import { motion, AnimatePresence } from 'framer-motion';
import FadeIn from './FadeIn';
import ContactForm from './ContactForm';

interface ContentSectionProps {
  isDarkMode: boolean;
  showForm: boolean;
  formSent: boolean;
  sending: boolean;
  formError: string | null;
  onShowForm: () => void;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  onResetForm: () => void;
}

export default function ContentSection({ 
  isDarkMode, 
  showForm, 
  formSent, 
  sending, 
  formError, 
  onShowForm, 
  onSubmit, 
  onResetForm 
}: ContentSectionProps) {
  return (
    <>
      {/* Navbar */}
      <nav className={`fixed flex flex-row flex-nowrap items-center gap-1 top-4 left-2 w-auto max-w-[95vw] px-1 py-1 rounded-xl shadow-lg text-[0.7rem] font-normal tracking-wide z-50 overflow-x-auto
        sm:left-1/2 sm:-translate-x-1/2 sm:gap-6 sm:px-6 sm:py-2 sm:rounded-full sm:text-sm sm:font-semibold sm:max-w-none
        ${isDarkMode 
          ? 'bg-[#111] border border-green-500 text-green-400' 
          : 'bg-white/90 border border-green-400 text-green-600 backdrop-blur-sm'}
      `}>
        <a href="#about" className="hover:text-yellow-300 px-1 py-1 text-[0.7rem] sm:px-3 sm:py-2 sm:whitespace-nowrap sm:text-center sm:text-sm">About</a>
        <a href="#projects" className="hover:text-yellow-300 px-1 py-1 text-[0.7rem] sm:px-3 sm:py-2 sm:whitespace-nowrap sm:text-center sm:text-sm">Projects</a>
        <a href="#skills" className="hover:text-yellow-300 px-1 py-1 text-[0.7rem] sm:px-3 sm:py-2 sm:whitespace-nowrap sm:text-center sm:text-sm">Skills</a>
        <a href="#languages" className="hover:text-yellow-300 px-1 py-1 text-[0.7rem] hidden sm:inline sm:px-3 sm:py-2 sm:whitespace-nowrap sm:text-center sm:text-sm">Languages</a>
        <a href="#certificates" className="hover:text-yellow-300 px-1 py-1 text-[0.7rem] hidden lg:inline sm:px-3 sm:py-2 sm:whitespace-nowrap sm:text-center sm:text-sm">Certificates</a>
        <a href="#contact" className="hover:text-yellow-300 px-1 py-1 text-[0.7rem] sm:px-3 sm:py-2 sm:whitespace-nowrap sm:text-center sm:text-sm">Contact</a>
      </nav>

      {/* About */}
      <section id="about" className="pt-24 md:pt-32 pb-16 md:pb-32 max-w-4xl mx-auto px-4 text-left">
        <FadeIn>
          <h2 className={`text-2xl md:text-3xl font-bold mb-6 md:mb-8 ${
            isDarkMode ? 'text-green-400' : 'text-green-600'
          }`}>// About Me</h2>
          
          <div className="flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-8">
            {/* Profile Image */}
            <motion.div 
              className="flex-shrink-0"
              whileHover={{ scale: 1.05, rotateY: 5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className={`w-32 h-32 md:w-48 md:h-48 rounded-full overflow-hidden border-4 shadow-lg ${
                isDarkMode 
                  ? 'border-green-500 shadow-green-500/20' 
                  : 'border-green-400 shadow-green-500/30'
              }`}>
                <img 
                  src="/profile.jpg" 
                  alt="Elias - Full Stack Developer"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    // Fallback if image doesn't exist
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    target.parentElement!.innerHTML = `
                      <div class="w-full h-full flex items-center justify-center ${
                        isDarkMode ? 'bg-green-900/50 text-green-300' : 'bg-green-100 text-green-600'
                      } text-4xl md:text-6xl font-bold">
                        👨‍💻
                      </div>
                    `;
                  }}
                />
              </div>
            </motion.div>

            {/* About Text */}
            <div className="flex-1 text-center md:text-left">
              <p className={`text-base md:text-lg leading-relaxed mb-4 md:mb-6 ${
                isDarkMode ? 'text-gray-300' : 'text-gray-700'
              }`}>
                I'm Elias, a Full-Stack Developer with a passion for clean code and creative interfaces.
              </p>
              
              <p className={`text-sm md:text-base leading-relaxed mb-4 md:mb-6 ${
                isDarkMode ? 'text-gray-400' : 'text-gray-600'
              }`}>
                I specialize in building modern web applications using React, Next.js, and Node.js. 
                With expertise in both frontend and backend development, I create seamless user 
                experiences and robust server-side solutions.
              </p>

              <div className={`flex flex-wrap justify-center md:justify-start gap-3 md:gap-4 text-xs md:text-sm ${
                isDarkMode ? 'text-gray-400' : 'text-gray-600'
              }`}>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                  <span>Full-Stack Development</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                  <span>Angular & Next.js</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
                  <span>Node.js & Java</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                  <span>UI/UX Design</span>
                </div>
              </div>

              {/* Social Media Links */}
              <div className="mt-6 md:mt-8">
                <h3 className={`text-sm md:text-base font-semibold mb-3 md:mb-4 ${
                  isDarkMode ? 'text-green-400' : 'text-green-600'
                }`}>Connect with me</h3>
                <div className="flex justify-center md:justify-start gap-2 md:gap-3">
                  {/* LinkedIn */}
                  <motion.a
                    href="https://linkedin.com/in/your-profile"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className={`flex items-center gap-2 px-3 py-2 rounded-lg transition-all duration-300 ${
                      isDarkMode 
                        ? 'bg-blue-600/20 border border-blue-500/30 text-blue-400 hover:bg-blue-600/30 hover:border-blue-400' 
                        : 'bg-blue-50 border border-blue-200 text-blue-600 hover:bg-blue-100 hover:border-blue-300'
                    }`}
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </motion.a>

                  {/* GitHub */}
                  <motion.a
                    href="https://github.com/your-username"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className={`flex items-center gap-2 px-3 py-2 rounded-lg transition-all duration-300 ${
                      isDarkMode 
                        ? 'bg-gray-700/20 border border-gray-600/30 text-gray-300 hover:bg-gray-700/30 hover:border-gray-500' 
                        : 'bg-gray-50 border border-gray-200 text-gray-700 hover:bg-gray-100 hover:border-gray-300'
                    }`}
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                  </motion.a>

                  {/* Instagram */}
                  <motion.a
                    href="https://instagram.com/your-profile"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className={`flex items-center gap-2 px-3 py-2 rounded-lg transition-all duration-300 ${
                      isDarkMode 
                        ? 'bg-gradient-to-r from-purple-600/20 to-pink-600/20 border border-purple-500/30 text-purple-400 hover:from-purple-600/30 hover:to-pink-600/30 hover:border-purple-400' 
                        : 'bg-gradient-to-r from-purple-50 to-pink-50 border border-purple-200 text-purple-600 hover:from-purple-100 hover:to-pink-100 hover:border-purple-300'
                    }`}
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                  </motion.a>

                  {/* Telegram */}
                  <motion.a
                    href="https://t.me/your-username"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className={`flex items-center gap-2 px-3 py-2 rounded-lg transition-all duration-300 ${
                      isDarkMode 
                        ? 'bg-blue-500/20 border border-blue-400/30 text-blue-300 hover:bg-blue-500/30 hover:border-blue-300' 
                        : 'bg-blue-50 border border-blue-200 text-blue-600 hover:bg-blue-100 hover:border-blue-300'
                    }`}
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
                    </svg>
                  </motion.a>

                  {/* Twitter/X */}
                  <motion.a
                    href="https://x.com/your-username"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className={`flex items-center gap-2 px-3 py-2 rounded-lg transition-all duration-300 ${
                      isDarkMode 
                        ? 'bg-black/20 border border-gray-600/30 text-gray-300 hover:bg-black/30 hover:border-gray-500' 
                        : 'bg-black/5 border border-gray-200 text-gray-700 hover:bg-black/10 hover:border-gray-300'
                    }`}
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                    </svg>
                  </motion.a>
                </div>
              </div>
            </div>
          </div>
        </FadeIn>
      </section>

      {/* Projects */}
      <section id="projects" className="pb-32 max-w-6xl mx-auto px-4 text-left">
        <FadeIn>
          <h2 className={`text-3xl font-bold mb-8 ${
            isDarkMode ? 'text-green-400' : 'text-green-600'
          }`}>// Projects</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Project 1 */}
            <motion.div whileHover={{ scale: 1.03 }} className={`border rounded-lg p-5 shadow-md transition-all ${
              isDarkMode 
                ? 'bg-[#111] border-green-700 hover:shadow-green-500/20' 
                : 'bg-white border-green-300 hover:shadow-green-500/30'
            }`}>
              <h3 className={`text-xl font-semibold mb-2 ${
                isDarkMode ? 'text-green-300' : 'text-green-600'
              }`}>🧠 AI Portfolio Bot</h3>
              <p className={`text-sm mb-4 ${
                isDarkMode ? 'text-gray-400' : 'text-gray-600'
              }`}>
                Chatbot that explains your portfolio – OpenAI + GitHub integration.
              </p>
              <div className="flex gap-3 text-sm">
                <a href="#" className={`hover:text-yellow-300 underline ${
                  isDarkMode ? 'text-green-400' : 'text-green-500'
                }`}>🔗 GitHub</a>
                <a href="#" className={`hover:text-yellow-300 underline ${
                  isDarkMode ? 'text-green-400' : 'text-green-500'
                }`}>🌐 Live</a>
              </div>
            </motion.div>

            {/* Project 2 */}
            <motion.div
              whileHover={{ rotateY: 8, scale: 1.04 }}
              transition={{ type: 'spring', stiffness: 200 }}
              className={`border rounded-lg p-5 shadow-md transition-all perspective-1000 ${
                isDarkMode 
                  ? 'bg-[#111] border-green-700 hover:shadow-green-500/20' 
                  : 'bg-white border-green-300 hover:shadow-green-500/30'
              }`}
            >
              <h3 className={`text-xl font-semibold mb-2 ${
                isDarkMode ? 'text-green-300' : 'text-green-600'
              }`}>🚀 Sprint Planner</h3>
              <p className={`text-sm mb-4 ${
                isDarkMode ? 'text-gray-400' : 'text-gray-600'
              }`}>
                Agile board tool with drag & drop, React DnD + NestJS backend.
              </p>
              <div className="flex gap-3 text-sm">
                <a href="#" className={`hover:text-yellow-300 underline ${
                  isDarkMode ? 'text-green-400' : 'text-green-500'
                }`}>🔗 GitHub</a>
                <a href="#" className={`hover:text-yellow-300 underline ${
                  isDarkMode ? 'text-green-400' : 'text-green-500'
                }`}>🌐 Live</a>
              </div>
            </motion.div>

            {/* Project 3 */}
            <motion.div whileHover={{ scale: 1.03 }} className={`border rounded-lg p-5 shadow-md transition-all ${
              isDarkMode 
                ? 'bg-[#111] border-green-700 hover:shadow-green-500/20' 
                : 'bg-white border-green-300 hover:shadow-green-500/30'
            }`}>
              <h3 className={`text-xl font-semibold mb-2 ${
                isDarkMode ? 'text-green-300' : 'text-green-600'
              }`}>🎵 Music Visualizer</h3>
              <p className={`text-sm mb-4 ${
                isDarkMode ? 'text-gray-400' : 'text-gray-600'
              }`}>
                Web Audio API + Canvas for real-time music visualization.
              </p>
              <div className="flex gap-3 text-sm">
                <a href="#" className={`hover:text-yellow-300 underline ${
                  isDarkMode ? 'text-green-400' : 'text-green-500'
                }`}>🔗 GitHub</a>
                <a href="#" className={`hover:text-yellow-300 underline ${
                  isDarkMode ? 'text-green-400' : 'text-green-500'
                }`}>🌐 Live</a>
              </div>
            </motion.div>

            {/* Project 4 */}
            <motion.div
              whileHover={{ rotateY: -8, scale: 1.04 }}
              transition={{ type: 'spring', stiffness: 200 }}
              className={`border rounded-lg p-5 shadow-md transition-all perspective-1000 ${
                isDarkMode 
                  ? 'bg-[#111] border-green-700 hover:shadow-green-500/20' 
                  : 'bg-white border-green-300 hover:shadow-green-500/30'
              }`}
            >
              <h3 className={`text-xl font-semibold mb-2 ${
                isDarkMode ? 'text-green-300' : 'text-green-600'
              }`}>📊 Crypto Dashboard</h3>
              <p className={`text-sm mb-4 ${
                isDarkMode ? 'text-gray-400' : 'text-gray-600'
              }`}>
                Real-time crypto tracker with WebSocket + Chart.js integration.
              </p>
              <div className="flex gap-3 text-sm">
                <a href="#" className={`hover:text-yellow-300 underline ${
                  isDarkMode ? 'text-green-400' : 'text-green-500'
                }`}>🔗 GitHub</a>
                <a href="#" className={`hover:text-yellow-300 underline ${
                  isDarkMode ? 'text-green-400' : 'text-green-500'
                }`}>🌐 Live</a>
              </div>
            </motion.div>

            {/* Project 5 */}
            <motion.div whileHover={{ scale: 1.03 }} className={`border rounded-lg p-5 shadow-md transition-all ${
              isDarkMode 
                ? 'bg-[#111] border-green-700 hover:shadow-green-500/20' 
                : 'bg-white border-green-300 hover:shadow-green-500/30'
            }`}>
              <h3 className={`text-xl font-semibold mb-2 ${
                isDarkMode ? 'text-green-300' : 'text-green-600'
              }`}>🎮 Retro Game Collection</h3>
              <p className={`text-sm mb-4 ${
                isDarkMode ? 'text-gray-400' : 'text-gray-600'
              }`}>
                Classic games in React: Snake, Tetris, Pong with modern UI.
              </p>
              <div className="flex gap-3 text-sm">
                <a href="#" className={`hover:text-yellow-300 underline ${
                  isDarkMode ? 'text-green-400' : 'text-green-500'
                }`}>🔗 GitHub</a>
                <a href="#" className={`hover:text-yellow-300 underline ${
                  isDarkMode ? 'text-green-400' : 'text-green-500'
                }`}>🌐 Live</a>
              </div>
            </motion.div>

            {/* Project 6 */}
            <motion.div
              whileHover={{ rotateY: 8, scale: 1.04 }}
              transition={{ type: 'spring', stiffness: 200 }}
              className={`border rounded-lg p-5 shadow-md transition-all perspective-1000 ${
                isDarkMode 
                  ? 'bg-[#111] border-green-700 hover:shadow-green-500/20' 
                  : 'bg-white border-green-300 hover:shadow-green-500/30'
              }`}
            >
              <h3 className={`text-xl font-semibold mb-2 ${
                isDarkMode ? 'text-green-300' : 'text-green-600'
              }`}>🌍 Weather App</h3>
              <p className={`text-sm mb-4 ${
                isDarkMode ? 'text-gray-400' : 'text-gray-600'
              }`}>
                Weather app with geolocation + OpenWeatherMap API integration.
              </p>
              <div className="flex gap-3 text-sm">
                <a href="#" className={`hover:text-yellow-300 underline ${
                  isDarkMode ? 'text-green-400' : 'text-green-500'
                }`}>🔗 GitHub</a>
                <a href="#" className={`hover:text-yellow-300 underline ${
                  isDarkMode ? 'text-green-400' : 'text-green-500'
                }`}>🌐 Live</a>
              </div>
            </motion.div>
          </div>
        </FadeIn>
      </section>

      {/* Skills */}
      <section id="skills" className="pb-32 max-w-4xl mx-auto px-4 text-left">
        <FadeIn>
          <h2 className={`text-3xl font-bold mb-8 ${
            isDarkMode ? 'text-green-400' : 'text-green-600'
          }`}>// Skills</h2>
          
          <div className="space-y-6">
            {/* Frontend */}
            <div>
              <h3 className={`text-xl font-semibold mb-4 ${
                isDarkMode ? 'text-yellow-300' : 'text-yellow-600'
              }`}>🎨 Frontend</h3>
              <div className="space-y-3">
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className={isDarkMode ? 'text-gray-300' : 'text-gray-700'}>Angular</span>
                    <span className={isDarkMode ? 'text-green-400' : 'text-green-600'}>95%</span>
                  </div>
                  <div className={`w-full rounded-full h-2 ${
                    isDarkMode ? 'bg-gray-800' : 'bg-gray-200'
                  }`}>
                    <motion.div 
                      className="bg-gradient-to-r from-green-500 to-green-400 h-2 rounded-full"
                      initial={{ width: 0 }}
                      whileInView={{ width: "95%" }}
                      transition={{ duration: 1.5, ease: "easeOut" }}
                    />
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className={isDarkMode ? 'text-gray-300' : 'text-gray-700'}>Next.js</span>
                    <span className={isDarkMode ? 'text-green-400' : 'text-green-600'}>90%</span>
                  </div>
                  <div className={`w-full rounded-full h-2 ${
                    isDarkMode ? 'bg-gray-800' : 'bg-gray-200'
                  }`}>
                    <motion.div 
                      className="bg-gradient-to-r from-green-500 to-green-400 h-2 rounded-full"
                      initial={{ width: 0 }}
                      whileInView={{ width: "90%" }}
                      transition={{ duration: 1.5, ease: "easeOut", delay: 0.1 }}
                    />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className={isDarkMode ? 'text-gray-300' : 'text-gray-700'}>TypeScript</span>
                    <span className={isDarkMode ? 'text-green-400' : 'text-green-600'}>85%</span>
                  </div>
                  <div className={`w-full rounded-full h-2 ${
                    isDarkMode ? 'bg-gray-800' : 'bg-gray-200'
                  }`}>
                    <motion.div 
                      className="bg-gradient-to-r from-green-500 to-green-400 h-2 rounded-full"
                      initial={{ width: 0 }}
                      whileInView={{ width: "85%" }}
                      transition={{ duration: 1.5, ease: "easeOut", delay: 0.2 }}
                    />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className={isDarkMode ? 'text-gray-300' : 'text-gray-700'}>Tailwind CSS</span>
                    <span className={isDarkMode ? 'text-green-400' : 'text-green-600'}>92%</span>
                  </div>
                  <div className={`w-full rounded-full h-2 ${
                    isDarkMode ? 'bg-gray-800' : 'bg-gray-200'
                  }`}>
                    <motion.div 
                      className="bg-gradient-to-r from-green-500 to-green-400 h-2 rounded-full"
                      initial={{ width: 0 }}
                      whileInView={{ width: "92%" }}
                      transition={{ duration: 1.5, ease: "easeOut", delay: 0.3 }}
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Backend */}
            <div>
              <h3 className={`text-xl font-semibold mb-4 ${
                isDarkMode ? 'text-yellow-300' : 'text-yellow-600'
              }`}>⚙️ Backend</h3>
              <div className="space-y-3">
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className={isDarkMode ? 'text-gray-300' : 'text-gray-700'}>Python</span>
                    <span className={isDarkMode ? 'text-green-400' : 'text-green-600'}>60%</span>
                  </div>
                  <div className={`w-full rounded-full h-2 ${
                    isDarkMode ? 'bg-gray-800' : 'bg-gray-200'
                  }`}>
                    <motion.div 
                      className="bg-gradient-to-r from-yellow-400 to-yellow-300 h-2 rounded-full"
                      initial={{ width: 0 }}
                      whileInView={{ width: "60%" }}
                      transition={{ duration: 1.5, ease: "easeOut", delay: 0.4 }}
                    />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className={isDarkMode ? 'text-gray-300' : 'text-gray-700'}>Java</span>
                    <span className={isDarkMode ? 'text-green-400' : 'text-green-600'}>82%</span>
                  </div>
                  <div className={`w-full rounded-full h-2 ${
                    isDarkMode ? 'bg-gray-800' : 'bg-gray-200'
                  }`}>
                    <motion.div 
                      className="bg-gradient-to-r from-orange-500 to-orange-400 h-2 rounded-full"
                      initial={{ width: 0 }}
                      whileInView={{ width: "82%" }}
                      transition={{ duration: 1.5, ease: "easeOut", delay: 0.5 }}
                    />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className={isDarkMode ? 'text-gray-300' : 'text-gray-700'}>Spring Boot</span>
                    <span className={isDarkMode ? 'text-green-400' : 'text-green-600'}>80%</span>
                  </div>
                  <div className={`w-full rounded-full h-2 ${
                    isDarkMode ? 'bg-gray-800' : 'bg-gray-200'
                  }`}>
                    <motion.div 
                      className="bg-gradient-to-r from-green-600 to-green-500 h-2 rounded-full"
                      initial={{ width: 0 }}
                      whileInView={{ width: "80%" }}
                      transition={{ duration: 1.5, ease: "easeOut", delay: 0.6 }}
                    />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className={isDarkMode ? 'text-gray-300' : 'text-gray-700'}>MariaDB</span>
                    <span className={isDarkMode ? 'text-green-400' : 'text-green-600'}>85%</span>
                  </div>
                  <div className={`w-full rounded-full h-2 ${
                    isDarkMode ? 'bg-gray-800' : 'bg-gray-200'
                  }`}>
                    <motion.div 
                      className="bg-gradient-to-r from-blue-600 to-blue-400 h-2 rounded-full"
                      initial={{ width: 0 }}
                      whileInView={{ width: "85%" }}
                      transition={{ duration: 1.5, ease: "easeOut", delay: 0.7 }}
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Tools & Others */}
            <div>
              <h3 className={`text-xl font-semibold mb-4 ${
                isDarkMode ? 'text-yellow-300' : 'text-yellow-600'
              }`}>🛠️ Tools & Others</h3>
              <div className="space-y-3">
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className={isDarkMode ? 'text-gray-300' : 'text-gray-700'}>Git</span>
                    <span className={isDarkMode ? 'text-green-400' : 'text-green-600'}>90%</span>
                  </div>
                  <div className={`w-full rounded-full h-2 ${
                    isDarkMode ? 'bg-gray-800' : 'bg-gray-200'
                  }`}>
                    <motion.div 
                      className="bg-gradient-to-r from-red-500 to-red-400 h-2 rounded-full"
                      initial={{ width: 0 }}
                      whileInView={{ width: "90%" }}
                      transition={{ duration: 1.5, ease: "easeOut", delay: 0.8 }}
                    />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className={isDarkMode ? 'text-gray-300' : 'text-gray-700'}>Docker</span>
                    <span className={isDarkMode ? 'text-green-400' : 'text-green-600'}>75%</span>
                  </div>
                  <div className={`w-full rounded-full h-2 ${
                    isDarkMode ? 'bg-gray-800' : 'bg-gray-200'
                  }`}>
                    <motion.div 
                      className="bg-gradient-to-r from-blue-500 to-blue-400 h-2 rounded-full"
                      initial={{ width: 0 }}
                      whileInView={{ width: "75%" }}
                      transition={{ duration: 1.5, ease: "easeOut", delay: 0.9 }}
                    />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className={isDarkMode ? 'text-gray-300' : 'text-gray-700'}>Postman</span>
                    <span className={isDarkMode ? 'text-green-400' : 'text-green-600'}>90%</span>
                  </div>
                  <div className={`w-full rounded-full h-2 ${
                    isDarkMode ? 'bg-gray-800' : 'bg-gray-200'
                  }`}>
                    <motion.div 
                      className="bg-gradient-to-r from-orange-400 to-orange-300 h-2 rounded-full"
                      initial={{ width: 0 }}
                      whileInView={{ width: "90%" }}
                      transition={{ duration: 1.5, ease: "easeOut", delay: 1.0 }}
                    />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className={isDarkMode ? 'text-gray-300' : 'text-gray-700'}>Figma</span>
                    <span className={isDarkMode ? 'text-green-400' : 'text-green-600'}>78%</span>
                  </div>
                  <div className={`w-full rounded-full h-2 ${
                    isDarkMode ? 'bg-gray-800' : 'bg-gray-200'
                  }`}>
                    <motion.div 
                      className="bg-gradient-to-r from-purple-500 to-purple-400 h-2 rounded-full"
                      initial={{ width: 0 }}
                      whileInView={{ width: "78%" }}
                      transition={{ duration: 1.5, ease: "easeOut", delay: 1.1 }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </FadeIn>
      </section>

      {/* Languages */}
      <section id="languages" className="pb-32 max-w-4xl mx-auto px-4 text-left">
        <FadeIn>
          <h2 className={`text-3xl font-bold mb-8 ${
            isDarkMode ? 'text-green-400' : 'text-green-600'
          }`}>// Languages</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Persian - Native */}
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className={`border rounded-lg p-6 text-center shadow-md transition-all ${
                isDarkMode 
                  ? 'bg-[#111] border-green-700 hover:shadow-green-500/20' 
                  : 'bg-white border-green-300 hover:shadow-green-500/30'
              }`}
            >
              <div className="flex items-center justify-center gap-2 text-2xl mb-3">
                <a href="https://fa.wikipedia.org/wiki/%D8%B2%D8%A8%D8%A7%D9%86_%D9%81%D8%A7%D8%B1%D8%B3%DB%8C" target="_blank" rel="noopener noreferrer"><span className="fi fi-ir flag-interactive"></span></a>
                <a href="https://fa.wikipedia.org/wiki/%D8%B2%D8%A8%D8%A7%D9%86_%D9%81%D8%A7%D8%B1%D8%B3%DB%8C" target="_blank" rel="noopener noreferrer"><span className="fi fi-af flag-interactive"></span></a>
                <a href="https://fa.wikipedia.org/wiki/%D8%B2%D8%A8%D8%A7%D9%86_%D9%81%D8%A7%D8%B1%D8%B3%DB%8C" target="_blank" rel="noopener noreferrer"><span className="fi fi-tj flag-interactive"></span></a>
              </div>
              <h3 className={`text-xl font-semibold mb-2 ${
                isDarkMode ? 'text-green-300' : 'text-green-600'
              }`}>Persian</h3>
              <p className={`font-semibold text-sm ${
                isDarkMode ? 'text-yellow-400' : 'text-yellow-600'
              }`}>Native</p>
              <div className="mt-3">
                <div className={`w-full rounded-full h-3 ${
                  isDarkMode ? 'bg-gray-800' : 'bg-gray-200'
                }`}>
                  <motion.div 
                    className="bg-gradient-to-r from-green-500 to-green-400 h-3 rounded-full"
                    initial={{ width: 0 }}
                    whileInView={{ width: "100%" }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                  />
                </div>
              </div>
            </motion.div>

            {/* German - Business Fluent */}
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className={`border rounded-lg p-6 text-center shadow-md transition-all ${
                isDarkMode 
                  ? 'bg-[#111] border-green-700 hover:shadow-green-500/20' 
                  : 'bg-white border-green-300 hover:shadow-green-500/30'
              }`}
            >
              <div className="flex items-center justify-center gap-2 text-2xl mb-3">
                <a href="https://de.wikipedia.org/wiki/Deutsche_Sprache" target="_blank" rel="noopener noreferrer"><span className="fi fi-de flag-interactive"></span></a>
                <a href="https://de.wikipedia.org/wiki/Deutsche_Sprache" target="_blank" rel="noopener noreferrer"><span className="fi fi-at flag-interactive"></span></a>
                <a href="https://de.wikipedia.org/wiki/Deutsche_Sprache" target="_blank" rel="noopener noreferrer"><span className="fi fi-ch flag-interactive"></span></a>
              </div>
              <h3 className={`text-xl font-semibold mb-2 ${
                isDarkMode ? 'text-green-300' : 'text-green-600'
              }`}>German</h3>
              <p className={`font-semibold text-sm ${
                isDarkMode ? 'text-yellow-400' : 'text-yellow-600'
              }`}>Business Fluent</p>
              <div className="mt-3">
                <div className={`w-full rounded-full h-3 ${
                  isDarkMode ? 'bg-gray-800' : 'bg-gray-200'
                }`}>
                  <motion.div 
                    className="bg-gradient-to-r from-blue-500 to-blue-400 h-3 rounded-full"
                    initial={{ width: 0 }}
                    whileInView={{ width: "95%" }}
                    transition={{ duration: 1.5, ease: "easeOut", delay: 0.2 }}
                  />
                </div>
              </div>
            </motion.div>

            {/* English - Fluent */}
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className={`border rounded-lg p-6 text-center shadow-md transition-all ${
                isDarkMode 
                  ? 'bg-[#111] border-green-700 hover:shadow-green-500/20' 
                  : 'bg-white border-green-300 hover:shadow-green-500/30'
              }`}
            >
              <div className="flex items-center justify-center gap-2 text-2xl mb-3">
                <a href="https://en.wikipedia.org/wiki/English_language" target="_blank" rel="noopener noreferrer"><span className="fi fi-us flag-interactive"></span></a>
                <a href="https://en.wikipedia.org/wiki/English_language" target="_blank" rel="noopener noreferrer"><span className="fi fi-gb flag-interactive"></span></a>
              </div>
              <h3 className={`text-xl font-semibold mb-2 ${
                isDarkMode ? 'text-green-300' : 'text-green-600'
              }`}>English</h3>
              <p className={`font-semibold text-sm ${
                isDarkMode ? 'text-yellow-400' : 'text-yellow-600'
              }`}>Fluent</p>
              <div className="mt-3">
                <div className={`w-full rounded-full h-3 ${
                  isDarkMode ? 'bg-gray-800' : 'bg-gray-200'
                }`}>
                  <motion.div 
                    className="bg-gradient-to-r from-red-500 to-red-400 h-3 rounded-full"
                    initial={{ width: 0 }}
                    whileInView={{ width: "90%" }}
                    transition={{ duration: 1.5, ease: "easeOut", delay: 0.4 }}
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </FadeIn>
      </section>

      {/* Certificates */}
      <section id="certificates" className="pb-32 max-w-4xl mx-auto px-4 text-left">
        <FadeIn>
          <h2 className={`text-3xl font-bold mb-8 ${
            isDarkMode ? 'text-green-400' : 'text-green-600'
          }`}>// Certificates</h2>
          
          <div className="space-y-6">
            {/* Scrum Master */}
            <motion.div 
              whileHover={{ scale: 1.02, x: 5 }}
              className={`border rounded-lg p-6 shadow-md transition-all ${
                isDarkMode 
                  ? 'bg-[#111] border-green-700 hover:shadow-green-500/20' 
                  : 'bg-white border-green-300 hover:shadow-green-500/30'
              }`}
            >
              <div className="flex items-start gap-4">
                <div className="text-3xl">🏆</div>
                <div className="flex-1">
                  <h3 className={`text-xl font-semibold mb-2 ${
                    isDarkMode ? 'text-green-300' : 'text-green-600'
                  }`}>Scrum Master</h3>
                  <p className={`text-sm mb-3 ${
                    isDarkMode ? 'text-gray-400' : 'text-gray-600'
                  }`}>
                    Certified Scrum Master with comprehensive knowledge in agile methodologies and team leadership.
                  </p>
                  <div className={`flex items-center gap-2 text-sm ${
                    isDarkMode ? 'text-yellow-400' : 'text-yellow-600'
                  }`}>
                    <span>📅 2023</span>
                    <span>•</span>
                    <span>🏢 Scrum Alliance</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Java Intensive Course Bootcamp */}
            <motion.div 
              whileHover={{ scale: 1.02, x: 5 }}
              className={`border rounded-lg p-6 shadow-md transition-all ${
                isDarkMode 
                  ? 'bg-[#111] border-green-700 hover:shadow-green-500/20' 
                  : 'bg-white border-green-300 hover:shadow-green-500/30'
              }`}
            >
              <div className="flex items-start gap-4">
                <div className="text-3xl">☕</div>
                <div className="flex-1">
                  <h3 className={`text-xl font-semibold mb-2 ${
                    isDarkMode ? 'text-green-300' : 'text-green-600'
                  }`}>Java Intensive Course Bootcamp</h3>
                  <p className={`text-sm mb-3 ${
                    isDarkMode ? 'text-gray-400' : 'text-gray-600'
                  }`}>
                    Comprehensive training in Java development, Spring Framework and modern development practices.
                  </p>
                  <div className={`flex items-center gap-2 text-sm ${
                    isDarkMode ? 'text-yellow-400' : 'text-yellow-600'
                  }`}>
                    <span>📅 2022</span>
                    <span>•</span>
                    <span>🏢 Coding Bootcamp</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* AWS Cloud Practitioner */}
            <motion.div 
              whileHover={{ scale: 1.02, x: 5 }}
              className={`border rounded-lg p-6 shadow-md transition-all ${
                isDarkMode 
                  ? 'bg-[#111] border-green-700 hover:shadow-green-500/20' 
                  : 'bg-white border-green-300 hover:shadow-green-500/30'
              }`}
            >
              <div className="flex items-start gap-4">
                <div className="text-3xl">☁️</div>
                <div className="flex-1">
                  <h3 className={`text-xl font-semibold mb-2 ${
                    isDarkMode ? 'text-green-300' : 'text-green-600'
                  }`}>AWS Cloud Practitioner</h3>
                  <p className={`text-sm mb-3 ${
                    isDarkMode ? 'text-gray-400' : 'text-gray-600'
                  }`}>
                    Fundamentals of AWS Cloud Services and cloud architecture.
                  </p>
                  <div className={`flex items-center gap-2 text-sm ${
                    isDarkMode ? 'text-yellow-400' : 'text-yellow-600'
                  }`}>
                    <span>📅 2023</span>
                    <span>•</span>
                    <span>🏢 Amazon Web Services</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* React Developer Certificate */}
            <motion.div 
              whileHover={{ scale: 1.02, x: 5 }}
              className={`border rounded-lg p-6 shadow-md transition-all ${
                isDarkMode 
                  ? 'bg-[#111] border-green-700 hover:shadow-green-500/20' 
                  : 'bg-white border-green-300 hover:shadow-green-500/30'
              }`}
            >
              <div className="flex items-start gap-4">
                <div className="text-3xl">⚛️</div>
                <div className="flex-1">
                  <h3 className={`text-xl font-semibold mb-2 ${
                    isDarkMode ? 'text-green-300' : 'text-green-600'
                  }`}>React Developer Certificate</h3>
                  <p className={`text-sm mb-3 ${
                    isDarkMode ? 'text-gray-400' : 'text-gray-600'
                  }`}>
                    Advanced React development with Hooks, Context API and performance optimization.
                  </p>
                  <div className={`flex items-center gap-2 text-sm ${
                    isDarkMode ? 'text-yellow-400' : 'text-yellow-600'
                  }`}>
                    <span>📅 2023</span>
                    <span>•</span>
                    <span>🏢 Meta</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </FadeIn>
      </section>

      {/* Contact */}
      <section id="contact" className="pb-32 max-w-3xl mx-auto px-4 text-center">
        <FadeIn>
          <h2 className={`text-3xl font-bold mb-6 ${
            isDarkMode ? 'text-green-400' : 'text-green-600'
          }`}>// Contact</h2>

          <ContactForm 
            isDarkMode={isDarkMode}
            showForm={showForm}
            formSent={formSent}
            sending={sending}
            formError={formError}
            onShowForm={onShowForm}
            onSubmit={onSubmit}
            onResetForm={onResetForm}
          />
        </FadeIn>
      </section>
    </>
  );
} 