"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { eventData } from "@/config/eventData";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center py-20 px-6 overflow-hidden paper-texture">
      {/* Decorative Gold Lotus Background Motif */}
      <div className="absolute inset-0 flex items-center justify-center opacity-[0.03] pointer-events-none select-none z-0">
        <Image
          src="/images/lotus_motif.png"
          alt="Lotus Motif"
          width={600}
          height={600}
          priority
          className="object-contain animate-float-slower"
        />
      </div>

      {/* Elegant Borders */}
      <div className="absolute inset-4 sm:inset-6 border border-gold/20 rounded-lg pointer-events-none z-10" />
      <div className="absolute inset-5 sm:inset-7 border-2 border-gold/10 rounded-lg pointer-events-none z-10" />

      {/* Main Content Card with Cultural Gold Frame */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 max-w-4xl w-full bg-[#FFFDF8]/85 backdrop-blur-sm p-8 sm:p-12 md:p-16 rounded-xl border border-gold/30 shadow-xl text-center"
      >
        {/* Top Decorative Border Pattern */}
        <div className="flex justify-center mb-6">
          <div className="w-24 h-[2px] bg-gradient-to-r from-transparent via-gold to-transparent" />
        </div>

        {/* Organizer Header */}
        <motion.p
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 1 }}
          className="font-noto-serif text-xs sm:text-sm text-bronze uppercase tracking-widest mb-6 font-semibold"
        >
          {eventData.organizerName}
        </motion.p>

        {/* Main Title */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 1.2 }}
          className="font-abhaya text-5xl sm:text-6xl md:text-7xl font-bold text-brown tracking-wide mb-4 leading-[1.15] drop-shadow-sm"
        >
          {eventData.eventTitle}
        </motion.h1>

        {/* Subtitle */}
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 1 }}
          className="font-noto-serif text-base sm:text-lg md:text-xl text-gold font-medium mb-8 max-w-2xl mx-auto"
        >
          {eventData.eventSubtitle}
        </motion.h2>

        {/* Decorative Divider */}
        <div className="flex items-center justify-center gap-4 my-8">
          <div className="w-12 h-[1px] bg-gold/50" />
          <div className="text-gold">✦</div>
          <div className="w-12 h-[1px] bg-gold/50" />
        </div>

        {/* Brief Event Description */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 1 }}
          className="font-noto-serif text-sm sm:text-base md:text-lg text-gray-warm leading-relaxed max-w-2xl mx-auto font-light"
        >
          {eventData.eventDescription}
        </motion.p>

        {/* Bottom Decorative Border Pattern */}
        <div className="flex justify-center mt-10">
          <div className="w-24 h-[2px] bg-gradient-to-r from-transparent via-gold to-transparent" />
        </div>
      </motion.div>

      {/* Down Scroll Indicator (Sinhala) */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="absolute bottom-8 z-10 flex flex-col items-center gap-2 pointer-events-none"
      >
        <span className="font-noto-serif text-xs text-bronze/80 font-medium tracking-wider">
          පහළට ලියන්න
        </span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="w-5 h-8 rounded-full border border-gold flex justify-center p-1"
        >
          <div className="w-1 h-2 rounded-full bg-gold" />
        </motion.div>
      </motion.div>
    </section>
  );
}
