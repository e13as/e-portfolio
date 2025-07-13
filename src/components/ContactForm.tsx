'use client';

import { motion, AnimatePresence } from 'framer-motion';

interface ContactFormProps {
  isDarkMode: boolean;
  showForm: boolean;
  formSent: boolean;
  sending: boolean;
  formError: string | null;
  onShowForm: () => void;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  onResetForm: () => void;
}

export default function ContactForm({ 
  isDarkMode, 
  showForm, 
  formSent, 
  sending, 
  formError, 
  onShowForm, 
  onSubmit, 
  onResetForm 
}: ContactFormProps) {
  return (
    <>
      {formError && (
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className={`mb-4 px-4 py-3 rounded border text-sm ${
            isDarkMode 
              ? 'bg-red-900/30 border-red-500 text-red-400' 
              : 'bg-red-50 border-red-400 text-red-600'
          }`}
        >
          {formError}
        </motion.p>
      )}

      {!showForm && !formSent && (
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className={`glow-button px-8 py-3 font-bold rounded transition mx-auto block ${
            isDarkMode 
              ? 'bg-green-500 text-black hover:bg-green-400' 
              : 'bg-green-600 text-white hover:bg-green-500'
          }`}
          onClick={onShowForm}
        >
          Get in Touch
        </motion.button>
      )}

      <AnimatePresence>
        {showForm && !formSent && (
          <motion.form
            key="form"
            onSubmit={onSubmit}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="space-y-4 mt-8 max-w-xl mx-auto"
          >
            <div>
              <label className={`block text-sm mb-1 ${
                isDarkMode ? 'text-gray-300' : 'text-gray-700'
              }`} htmlFor="name">Name</label>
              <input
                id="name"
                name="name"
                required
                className={`w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 ${
                  isDarkMode 
                    ? 'bg-black border-green-600 text-green-300 placeholder-gray-500 focus:ring-green-500' 
                    : 'bg-white border-green-400 text-gray-800 placeholder-gray-500 focus:ring-green-500'
                }`}
                placeholder="Your name"
              />
            </div>

            <div>
              <label className={`block text-sm mb-1 ${
                isDarkMode ? 'text-gray-300' : 'text-gray-700'
              }`} htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className={`w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 ${
                  isDarkMode 
                    ? 'bg-black border-green-600 text-green-300 placeholder-gray-500 focus:ring-green-500' 
                    : 'bg-white border-green-400 text-gray-800 placeholder-gray-500 focus:ring-green-500'
                }`}
                placeholder="you@example.com"
              />
            </div>

            <div>
              <label className={`block text-sm mb-1 ${
                isDarkMode ? 'text-gray-300' : 'text-gray-700'
              }`} htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                rows={4}
                required
                className={`w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 ${
                  isDarkMode 
                    ? 'bg-black border-green-600 text-green-300 placeholder-gray-500 focus:ring-green-500' 
                    : 'bg-white border-green-400 text-gray-800 placeholder-gray-500 focus:ring-green-500'
                }`}
                placeholder="What's up?"
              />
            </div>

            <button
              type="submit"
              disabled={sending}
              className={`glow-button px-12 py-3 font-bold rounded transition w-full ${
                isDarkMode 
                  ? 'bg-green-500 text-black hover:bg-green-400' 
                  : 'bg-green-600 text-white hover:bg-green-500'
              }`}
            >
              {sending ? 'Sending…' : 'Send'}
            </button>
          </motion.form>
        )}
      </AnimatePresence>

      {formSent && (
        <motion.div
          key="success"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className={`mt-8 text-center font-semibold space-y-4 max-w-xl mx-auto ${
            isDarkMode ? 'text-green-400' : 'text-green-600'
          }`}
        >
          <p>✅ Message sent successfully!</p>
          <button
            onClick={onResetForm}
            className={`mt-2 px-8 py-3 rounded transition ${
              isDarkMode 
                ? 'bg-green-700 text-white hover:bg-green-600' 
                : 'bg-green-600 text-white hover:bg-green-500'
            }`}
          >
            Send New Message
          </button>
        </motion.div>
      )}
    </>
  );
} 