import { motion } from 'framer-motion';
import { useTheme } from '../hooks/useTheme';

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <motion.button
      onClick={toggleTheme}
      className="relative w-12 h-6 rounded-full p-1 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 transition-colors duration-300"
      style={{
        backgroundColor: theme === 'dark' ? '#1e293b' : '#e2e8f0',
      }}
      whileTap={{ scale: 0.95 }}
      aria-label="Toggle theme"
    >
      <motion.div
        className="flex items-center justify-center w-4 h-4 rounded-full shadow-md"
        style={{
          backgroundColor: theme === 'dark' ? '#475569' : '#ffffff',
        }}
        animate={{
          x: theme === 'dark' ? 24 : 0,
        }}
        transition={{
          type: 'spring',
          stiffness: 700,
          damping: 30,
        }}
      >
        <motion.span
          className="text-xs"
          animate={{
            rotate: theme === 'dark' ? 180 : 0,
          }}
          transition={{
            duration: 0.3,
          }}
        >
          {theme === 'dark' ? '🌙' : '☀️'}
        </motion.span>
      </motion.div>
    </motion.button>
  );
}