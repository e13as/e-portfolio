'use client';

import { useState, useEffect, FormEvent } from 'react';
import confetti from 'canvas-confetti';
import { config } from '@/config/env';

// Gate code from environment variables
const SECRET = config.gateCode;

export function usePortfolio() {
  // Initialize step from localStorage or default to 'landing'
  const [step, setStep] = useState<'landing' | 'gate' | 'content'>(() => {
    if (typeof window !== 'undefined') {
      const savedStep = localStorage.getItem('portfolioStep') as 'landing' | 'gate' | 'content';
      const gateExpires = localStorage.getItem('gateCodeExpires');
      
      // Check if gate code is still valid
      if (savedStep === 'content' && gateExpires) {
        const expiresAt = parseInt(gateExpires);
        if (Date.now() < expiresAt) {
          return 'content'; // Gate code still valid
        } else {
          // Gate code expired, clear storage and go to landing
          localStorage.removeItem('portfolioStep');
          localStorage.removeItem('gateCodeExpires');
          return 'landing';
        }
      }
      
      return savedStep || 'landing';
    }
    return 'landing';
  });
  
  const [isLoading, setIsLoading] = useState(false);
  const [isInitialized, setIsInitialized] = useState(false);
  const [time, setTime] = useState(new Date());
  const [code, setCode] = useState('');
  const [error, setError] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [isAnimating, setIsAnimating] = useState(false);

  const [showForm, setShowForm] = useState(false);
  const [formSent, setFormSent] = useState(false);
  const [sending, setSending] = useState(false);
  const [formError, setFormError] = useState<string | null>(null);
  const [lockedUntil, setLockedUntil] = useState<Date | null>(null);
  const [audioReady, setAudioReady] = useState(false);
  const [keys, setKeys] = useState<string[]>([]);
  const [showEasterEgg, setShowEasterEgg] = useState(false);

  // Theme toggle function
  const toggleTheme = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    
    setTimeout(() => {
      setIsDarkMode(!isDarkMode);
      setIsAnimating(false);
    }, 800);
  };

  // Update body class for light mode
  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.remove('light-mode');
    } else {
      document.body.classList.add('light-mode');
    }
  }, [isDarkMode]);

  // Konami Code Easter Egg - only active on content page
  useEffect(() => {
    if (step !== 'content') return; // Only active on content page
    
    const sequence = [
      'ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown',
      'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight',
      'b', 'a'
    ];

    const handleKeyDown = (e: KeyboardEvent) => {
      setKeys(prev => {
        const updated = [...prev, e.key].slice(-sequence.length);
        if (updated.join(',') === sequence.join(',')) {
          triggerEasterEgg();
        }
        return updated;
      });
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [step]); // Add step as dependency

  // Audio unlock
  useEffect(() => {
    const unlock = () => {
      setAudioReady(true);
      window.removeEventListener('pointerdown', unlock);
    };
    window.addEventListener('pointerdown', unlock);
  }, []);

  // Clock update
  useEffect(() => {
    const id = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(id);
  }, []);

  // Handle initialization and loading
  useEffect(() => {
    // Check for locked gate
    const ts = localStorage.getItem('gateLockUntil');
    if (ts) {
      const parsed = new Date(ts);
      if (parsed > new Date()) {
        setLockedUntil(parsed);
      } else {
        localStorage.removeItem('gateAttempts');
        localStorage.removeItem('gateLockUntil');
      }
    }

    // Show loading for all pages on initial load
    if (!isInitialized) {
      setIsLoading(true);
      const loadingDuration = step === 'content' ? 2000 : 4000;
      const timer = setTimeout(() => {
        setIsLoading(false);
        setIsInitialized(true);
      }, loadingDuration); // 2s für Reload auf Inhalt, sonst 4s
      return () => clearTimeout(timer);
    }
  }, [isInitialized, step]);

  function triggerEasterEgg() {
    confetti({
      particleCount: 150,
      spread: 70,
      origin: { y: 0.6 },
    });
  
    const audio = new Audio('/secret.mp3');
    audio.play().catch(() => {});
  
    setShowEasterEgg(true);
  }

  // Form submit handler
  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setFormError(null);
    setSending(true);
  
    const form = e.currentTarget;
    const formData = new FormData(form);
  
    const name = formData.get('name')?.toString().trim() || '';
    const email = formData.get('email')?.toString().trim() || '';
    const message = formData.get('message')?.toString().trim() || '';
  
    // simple validation
    if (name.length < 3) {
      setFormError('Name must be at least 3 characters long.');
      setSending(false);
      return;
    }
  
    if (!email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
      setFormError('Please enter a valid email address.');
      setSending(false);
      return;
    }
  
    if (message.length === 0) {
      setFormError('Please enter a message.');
      setSending(false);
      return;
    }
  
    // try to send
    const res = await fetch('https://formspree.io/f/mjkrnzgb', {
      method: 'POST',
      headers: { Accept: 'application/json' },
      body: formData,
    });
  
    setSending(false);
    if (res.ok) {
      setFormSent(true);
      form.reset();
    } else {
      setFormError('❌ Message could not be sent. Please try again later.');
    }
  }

  // Gate unlock handler
  const handleUnlock = () => {
    if (lockedUntil && lockedUntil > new Date()) {
      return; // do nothing if locked
    }

    // Vergleich robust machen
    if (code.trim().toUpperCase() === SECRET.trim().toUpperCase()) {
      // correct → reset attempts
      localStorage.removeItem('gateAttempts');
      localStorage.removeItem('gateLockUntil');
      
      // Show loading before going to content
      setIsLoading(true);
      setTimeout(() => {
        updateStep('content'); // Use updateStep to handle localStorage
        setIsLoading(false);
      }, 4000); // Same duration as initial loading
    } else {
      // wrong → count up
      const tries = Number(localStorage.getItem('gateAttempts') || 0) + 1;
      localStorage.setItem('gateAttempts', String(tries));

      if (tries >= 3) {
        // 1 hour lock
        const lockTs = new Date(Date.now() + 60 * 60 * 1000);
        localStorage.setItem('gateLockUntil', lockTs.toISOString());
        setLockedUntil(lockTs);
      }

      setError(true);
      setTimeout(() => setError(false), 700);
    }
  };

  // Form reset handler
  const handleResetForm = () => {
    setFormSent(false);
    setShowForm(false);
  };

  // Custom setStep function that also saves to localStorage
  const updateStep = (newStep: 'landing' | 'gate' | 'content') => {
    setStep(newStep);
    if (typeof window !== 'undefined') {
      localStorage.setItem('portfolioStep', newStep);
      
      // If going to content, ensure gate code expiration is set
      if (newStep === 'content') {
        const expiresAt = Date.now() + (4 * 60 * 60 * 1000); // 4 hours
        localStorage.setItem('gateCodeExpires', expiresAt.toString());
      }
    }
  };

  return {
    // State
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
    
    // Actions
    setStep: updateStep,
    setCode,
    toggleTheme,
    handleSubmit,
    handleUnlock,
    handleResetForm,
    setShowForm,
    setShowEasterEgg,
  };
} 