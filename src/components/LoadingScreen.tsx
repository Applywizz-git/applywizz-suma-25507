import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface LoadingScreenProps {
  onComplete: () => void;
}

export default function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const [progress, setProgress] = useState(0);
  const [loadingText, setLoadingText] = useState("Initializing Analytics Engine...");

  const loadingMessages = [
    "Initializing Analytics Engine...",
    "Querying Performance Data...",
    "Optimizing Business Logic...",
    "Preparing Portfolio Strategy...",
    "Insights Ready..."
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress(prev => {
        const newProgress = prev + Math.random() * 15;
        const messageIndex = Math.floor((newProgress / 100) * loadingMessages.length);
        if (messageIndex < loadingMessages.length) {
          setLoadingText(loadingMessages[messageIndex]);
        }
        if (newProgress >= 100) {
          clearInterval(timer);
          setTimeout(onComplete, 500);
          return 100;
        }
        return newProgress;
      });
    }, 200);
    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <motion.div
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-background"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="relative z-10 flex flex-col items-center">
        <motion.div
          className="text-center mb-12"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <div className="w-20 h-20 mb-8 mx-auto relative">
            <div className="absolute inset-0 rounded-full border-4 border-primary/20"></div>
            <motion.div
              className="absolute inset-0 rounded-full border-4 border-primary border-t-transparent"
              animate={{ rotate: 360 }}
              transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
            ></motion.div>
          </div>

          <h1 className="text-4xl font-display font-bold gradient-text mb-4">
            SUMA KEERTHANA NEDUNURI
          </h1>
          <p className="text-xl text-muted-foreground">Business Analyst</p>
        </motion.div>

        <div className="w-80 mb-4">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm font-medium text-foreground">{loadingText}</span>
            <span className="text-sm text-muted-foreground">{Math.round(progress)}%</span>
          </div>
          <div className="w-full bg-muted rounded-full h-2 overflow-hidden">
            <motion.div
              className="h-full bg-gradient-primary rounded-full"
              style={{ width: `${progress}%` }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            />
          </div>
        </div>

        <motion.p
          className="text-xs text-muted-foreground mt-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          Synthesizing professional data insights...
        </motion.p>
      </div>
    </motion.div>
  );
}
