'use client';

import { usePortfolio } from '@/hooks/usePortfolio';
import ThemeToggle from '@/components/ThemeToggle';
import LandingSection from '@/components/LandingSection';
import GateSection from '@/components/GateSection';
import ContentSection from '@/components/ContentSection';
import LoadingSection from '@/components/LoadingSection';
import EasterEggModal from '@/components/EasterEggModal';

export default function Home() {
  const {
    step,
    time,
    code,
    error,
    isDarkMode,
    isAnimating,
    isLoading,
    isInitialized,
    showForm,
    formSent,
    sending,
    formError,
    lockedUntil,
    showEasterEgg,
    setStep,
    setCode,
    toggleTheme,
    handleSubmit,
    handleUnlock,
    handleResetForm,
    setShowForm,
    setShowEasterEgg,
    showMenu,
  } = usePortfolio();

  return (
    <>
      {/* Game Controller Toggle */}
      <ThemeToggle 
        isDarkMode={isDarkMode}
        isAnimating={isAnimating}
        toggleTheme={toggleTheme}
        showMenu={showMenu}
      />

      <main className={`relative min-h-screen flex items-center justify-center text-white font-mono transition-colors duration-500 ${
        isDarkMode 
          ? 'bg-[#0a0a0a] text-white' 
          : 'bg-gradient-to-br from-blue-50 to-indigo-100 text-gray-800'
      }`}>
        <div className="z-10 text-center px-4">
          {isLoading ? (
            <LoadingSection isDarkMode={isDarkMode} />
          ) : isInitialized ? (
            <>
              {step === 'landing' && (
                <LandingSection 
                  isDarkMode={isDarkMode}
                  time={time}
                  onEnter={() => setStep('gate')}
                />
              )}
              
              {step === 'gate' && (
                <GateSection 
                  code={code}
                  error={error}
                  lockedUntil={lockedUntil}
                  onCodeChange={setCode}
                  onUnlock={handleUnlock}
                />
              )}
              
              {step === 'content' && (
                <ContentSection 
                  isDarkMode={isDarkMode}
                  showForm={showForm}
                  formSent={formSent}
                  sending={sending}
                  formError={formError}
                  onShowForm={() => setShowForm(true)}
                  onSubmit={handleSubmit}
                  onResetForm={handleResetForm}
                />
              )}
            </>
          ) : (
            <LoadingSection isDarkMode={isDarkMode} />
          )}
        </div>
      </main>
      
      {/* Easter Egg Modal */}
      <EasterEggModal 
        showEasterEgg={showEasterEgg}
        onClose={() => setShowEasterEgg(false)}
      />
    </>
  );
}
