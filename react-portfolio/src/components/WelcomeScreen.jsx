"use client";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import { useEffect } from "react";

const WelcomeScreen = ({ onWelcomeComplete }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onWelcomeComplete();
    }, 2500);

    return () => clearTimeout(timer);
  }, [onWelcomeComplete]);

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-background"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="text-center px-4"
      >
        <motion.div
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-6"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <Sparkles className="h-4 w-4" />
          Welcome
        </motion.div>

        <motion.h1
          className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          Hello, I’m Sohel 👋
        </motion.h1>

        <motion.p
          className="text-muted-foreground max-w-md mx-auto"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          Welcome to my portfolio. Let’s explore my work and skills.
        </motion.p>

        <motion.div
          className="mt-6 h-1 w-16 bg-primary rounded-full mx-auto"
          animate={{ scaleX: [1, 1.5, 1] }}
          transition={{ duration: 1.2, repeat: Infinity }}
        />
      </motion.div>
    </motion.div>
  );
};

export default WelcomeScreen;
