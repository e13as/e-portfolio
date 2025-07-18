'use client';

import { motion } from 'framer-motion';
import { Check, X } from 'lucide-react';

interface GateSectionProps {
  code: string;
  error: boolean;
  lockedUntil: Date | null;
  onCodeChange: (code: string) => void;
  onUnlock: () => void;
}

export default function GateSection({ code, error, lockedUntil, onCodeChange, onUnlock }: GateSectionProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      className="w-full max-w-sm bg-[#111] p-8 rounded-xl shadow-2xl"
    >
      <h2 className="text-green-400 text-2xl mb-6">// Access Gate</h2>

      <form
        onSubmit={e => {
          e.preventDefault();
          onUnlock();
        }}
      >
        <input
          autoFocus
          type="text"
          placeholder="Enter secret code"
          value={code}
          onChange={(e) => onCodeChange(e.target.value.toUpperCase())}
          className={`w-full px-4 py-3 rounded bg-black border ${
            error ? 'border-red-500 animate-shake' : 'border-green-500'
          } text-green-400 placeholder-gray-500 outline-none font-mono mb-4`}
        />

        <button
          type="submit"
          className="w-full flex justify-center items-center gap-2 py-3 bg-green-500 text-black font-bold rounded hover:bg-green-400 transition"
        >
          Unlock <Check size={18} />
        </button>
      </form>

      {error && (
        <p className="flex items-center gap-1 text-red-500 mt-3 text-sm">
          <X size={14} /> Wrong code
        </p>
      )}

      {lockedUntil && (
        <p className="text-red-500 text-sm mt-3">
          Access locked until {lockedUntil.toLocaleString()}
        </p>
      )}
    </motion.div>
  );
} 