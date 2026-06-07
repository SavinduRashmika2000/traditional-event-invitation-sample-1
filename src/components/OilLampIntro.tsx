"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { eventData } from "@/config/eventData";

// Computed at module load time — completely outside React render, satisfying react-hooks/purity
const PARTICLE_CONFIGS = Array.from({ length: 8 }, () => ({
  initX: Math.random() * 80 - 40,
  initScale: Math.random() * 0.6 + 0.4,
  animX: Math.random() * 120 - 60,
  duration: Math.random() * 2 + 1.5,
}));

interface OilLampIntroProps {
  onComplete: () => void;
}

export default function OilLampIntro({ onComplete }: OilLampIntroProps) {
  const [step, setStep] = useState(0); // 0: Dark/Init, 1: Lamp Lighting, 2: Title & Button Reveal, 3: Fading Out

  useEffect(() => {
    // Stage 1: Light the lamp after 1.5 seconds
    const timer1 = setTimeout(() => setStep(1), 1200);
    // Stage 2: Reveal titles after 3 seconds
    const timer2 = setTimeout(() => setStep(2), 2600);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  const handleEnter = () => {
    setStep(3);
    setTimeout(onComplete, 1200); // Allow fade-out animation to play
  };



  return (
    <AnimatePresence>
      {step < 3 && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: -40 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-between bg-[#FFFDF8] paper-texture p-6 text-center select-none"
        >
          {/* Decorative Corner Patterns - Gold SVGs */}
          <div className="absolute top-6 left-6 w-20 h-20 border-t-2 border-l-2 border-gold/40 rounded-tl-xl pointer-events-none" />
          <div className="absolute top-6 right-6 w-20 h-20 border-t-2 border-r-2 border-gold/40 rounded-tr-xl pointer-events-none" />
          <div className="absolute bottom-6 left-6 w-20 h-20 border-b-2 border-l-2 border-gold/40 rounded-bl-xl pointer-events-none" />
          <div className="absolute bottom-6 right-6 w-20 h-20 border-b-2 border-r-2 border-gold/40 rounded-br-xl pointer-events-none" />

          {/* Top Spacing / Small Motif */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="mt-8 flex justify-center"
          >
            {/* Small traditional Sun/Lotus vector emblem */}
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" className="text-gold">
              <path
                d="M20 0C21.1 5.5 24.5 8.9 30 10C24.5 11.1 21.1 14.5 20 20C18.9 14.5 15.5 11.1 10 10C15.5 8.9 18.9 5.5 20 0Z"
                fill="currentColor"
              />
              <path
                d="M20 20C21.1 25.5 24.5 28.9 30 30C24.5 31.1 21.1 34.5 20 40C18.9 34.5 15.5 31.1 10 30C15.5 28.9 18.9 25.5 20 20Z"
                fill="currentColor"
                opacity="0.5"
              />
            </svg>
          </motion.div>

          {/* Central Lamp & Flame Container */}
          <div className="relative flex flex-col items-center justify-center flex-grow py-8 max-w-lg w-full">
            {/* Ambient Background Gold Glow */}
            <AnimatePresence>
              {step >= 1 && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.7 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 1.5 }}
                  className="absolute w-72 h-72 rounded-full bg-gold/10 blur-3xl pointer-events-none z-0"
                />
              )}
            </AnimatePresence>

            {/* Glowing Golden Particles rising */}
            {step >= 1 && (
              <div className="absolute inset-0 overflow-hidden pointer-events-none z-0 max-h-[350px] w-full">
                {PARTICLE_CONFIGS.map((cfg, i) => (
                  <motion.div
                    key={i}
                    className="absolute bottom-1/3 left-1/2 w-2 h-2 rounded-full bg-gold"
                    initial={{
                      x: cfg.initX,
                      y: 40,
                      opacity: 0.8,
                      scale: cfg.initScale,
                    }}
                    animate={{
                      y: -180,
                      x: cfg.animX,
                      opacity: 0,
                      scale: 0.1,
                    }}
                    transition={{
                      repeat: Infinity,
                      duration: cfg.duration,
                      delay: i * 0.3,
                      ease: "easeOut",
                    }}
                  />
                ))}
              </div>
            )}

            {/* Traditional Brass Oil Lamp SVG */}
            <div className="relative z-10 w-48 h-48 flex items-center justify-center">
              {/* The Lamp Shell */}
              <svg width="180" height="180" viewBox="0 0 100 100" fill="none" className="text-bronze">
                {/* Traditional Stand */}
                <path
                  d="M45 75 L55 75 L53 60 L47 60 Z"
                  fill="currentColor"
                  stroke="#C8A45D"
                  strokeWidth="0.5"
                />
                <path
                  d="M35 85 C35 78, 65 78, 65 85 L35 85 Z"
                  fill="currentColor"
                  stroke="#C8A45D"
                  strokeWidth="0.5"
                />
                {/* Bowl */}
                <path
                  d="M20 50 C20 62, 80 62, 80 50 C70 54, 30 54, 20 50 Z"
                  fill="currentColor"
                  stroke="#C8A45D"
                  strokeWidth="1"
                />
                {/* Wick Nest */}
                <path d="M48 50 L52 50 L50 42 Z" fill="#5C4033" />
              </svg>

              {/* Flame (Lights up and flickers) */}
              <AnimatePresence>
                {step >= 1 && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0, y: 10 }}
                    animate={{ 
                      opacity: 1, 
                      scale: [1, 1.05, 0.95, 1.02, 1],
                      y: -64 
                    }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="absolute flex flex-col items-center"
                  >
                    {/* Inner core flame */}
                    <motion.div
                      animate={{
                        scaleY: [1, 1.15, 0.9, 1.1, 1],
                        scaleX: [1, 0.9, 1.1, 0.95, 1],
                        skewX: [0, 2, -2, 1, 0],
                      }}
                      transition={{
                        repeat: Infinity,
                        duration: 1.5,
                        ease: "easeInOut",
                      }}
                      className="w-8 h-12 rounded-full bg-gradient-to-t from-red-500 via-orange-400 to-yellow-200 blur-[0.5px]"
                      style={{
                        borderRadius: "50% 50% 50% 50% / 80% 80% 20% 20%",
                        boxShadow: "0 0 20px 4px rgba(232, 211, 167, 0.6)",
                      }}
                    />
                    {/* Flame Glow */}
                    <div className="absolute -inset-2 w-12 h-16 rounded-full bg-gold/25 blur-md pointer-events-none z-0" />
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Typography Title Reveal */}
            <div className="mt-6 flex flex-col items-center">
              <AnimatePresence>
                {step >= 2 && (
                  <>
                    {/* Small traditional border above title */}
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 1 }}
                      className="w-32 h-[1px] bg-gradient-to-r from-transparent via-gold to-transparent mb-4"
                    />

                    <motion.h1
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 1.2, ease: "easeOut" }}
                      className="font-abhaya font-bold text-4xl sm:text-5xl md:text-6xl text-brown tracking-wide leading-tight mb-2"
                    >
                      {eventData.eventTitle}
                    </motion.h1>

                    <motion.p
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 1.2, delay: 0.3, ease: "easeOut" }}
                      className="font-noto-serif text-sm sm:text-base md:text-lg text-bronze max-w-md px-4 leading-relaxed font-medium"
                    >
                      {eventData.eventSubtitle}
                    </motion.p>
                  </>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* Bottom Enter Button */}
          <div className="mb-12 h-20 flex items-center justify-center">
            <AnimatePresence>
              {step >= 2 && (
                <motion.button
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  onClick={handleEnter}
                  className="relative group px-8 py-3 rounded-full border border-gold bg-cream text-brown font-noto-serif font-semibold text-sm sm:text-base cursor-pointer tracking-wider hover:bg-gold hover:text-white shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden"
                >
                  {/* Subtle inner gold shimmer */}
                  <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]" />
                  ආරාධනා පත්‍රය විවෘත කරන්න
                </motion.button>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
