import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Scissors } from 'lucide-react';

interface LoadingScreenProps {
  onLoadingComplete: () => void;
}

const LoadingScreen = ({ onLoadingComplete }: LoadingScreenProps) => {
  const [progress, setProgress] = useState(0);
  const completedRef = useRef(false);
  const callbackRef = useRef(onLoadingComplete);
  
  // Keep callback ref updated
  callbackRef.current = onLoadingComplete;

  useEffect(() => {
    let currentProgress = 0;
    
    const timer = setInterval(() => {
      currentProgress += 2;
      setProgress(currentProgress);
      
      if (currentProgress >= 100) {
        clearInterval(timer);
        if (!completedRef.current) {
          completedRef.current = true;
          setTimeout(() => {
            callbackRef.current();
          }, 300);
        }
      }
    }, 40);

    return () => clearInterval(timer);
  }, []);

  return (
    <motion.div
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-background"
      exit={{ opacity: 0, scale: 1.1 }}
      transition={{ duration: 0.5, ease: 'easeInOut' }}
    >
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-primary/3 blur-3xl" />
      </div>

      {/* Main content */}
      <div className="relative z-10 flex flex-col items-center">
        {/* Animated scissors */}
        <motion.div
          className="mb-8 relative"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, type: 'spring' }}
        >
          <motion.div
            className="w-24 h-24 rounded-full gold-border flex items-center justify-center animate-pulse-glow"
          >
            <Scissors className="w-10 h-10 text-primary animate-scissors" />
          </motion.div>
        </motion.div>

        {/* Logo text */}
        <motion.h1
          className="font-display text-4xl md:text-5xl font-bold text-foreground mb-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          Prestwood
        </motion.h1>
        <motion.p
          className="text-primary text-xl tracking-[0.3em] uppercase font-body mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          Barbers
        </motion.p>

        {/* Progress bar */}
        <motion.div
          className="w-64 h-0.5 bg-muted rounded-full overflow-hidden"
          initial={{ opacity: 0, width: 0 }}
          animate={{ opacity: 1, width: 256 }}
          transition={{ delay: 0.7, duration: 0.5 }}
        >
          <div
            className="h-full bg-gradient-gold transition-all duration-100"
            style={{ width: `${progress}%` }}
          />
        </motion.div>

        {/* Loading text */}
        <motion.p
          className="mt-4 text-muted-foreground text-sm font-body tracking-wider"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.5 }}
        >
          Preparing your experience...
        </motion.p>
      </div>
    </motion.div>
  );
};

export default LoadingScreen;
