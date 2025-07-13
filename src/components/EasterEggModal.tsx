'use client';

import { motion } from 'framer-motion';

interface EasterEggModalProps {
  showEasterEgg: boolean;
  onClose: () => void;
}

export default function EasterEggModal({ showEasterEgg, onClose }: EasterEggModalProps) {
  if (!showEasterEgg) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="fixed inset-0 flex items-center justify-center bg-black/70 z-[100]"
    >
      <div className="bg-[#111] border border-green-600 rounded-xl p-8 max-w-md text-center text-green-400 shadow-2xl">
        <h2 className="text-2xl font-bold mb-4">🎮 Secret Unlocked!</h2>
        <p className="mb-6">You discovered the Konami Code. Respect 👾</p>
        <button
          onClick={onClose}
          className="mt-2 px-6 py-2 bg-green-500 text-black font-semibold rounded hover:bg-green-400 transition"
        >
          Nice!
        </button>
      </div>
    </motion.div>
  );
} 