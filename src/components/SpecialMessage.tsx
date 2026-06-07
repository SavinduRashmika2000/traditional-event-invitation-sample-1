"use client";

import { motion } from "framer-motion";
import { eventData } from "@/config/eventData";

export default function SpecialMessage() {
  return (
    <section className="relative py-28 px-6 bg-cream/10 paper-texture overflow-hidden">
      {/* Decorative ambient gold glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] sm:w-[500px] h-[350px] sm:h-[500px] rounded-full bg-gold/5 blur-3xl pointer-events-none z-0" />

      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="relative bg-[#FFFDF8] border-2 border-gold/40 rounded-2xl p-8 sm:p-14 md:p-16 shadow-xl text-center overflow-hidden"
        >
          {/* Traditional Cultural Frame Corners */}
          <div className="absolute top-4 left-4 w-12 h-12 border-t-2 border-l-2 border-gold/55 rounded-tl-lg pointer-events-none" />
          <div className="absolute top-4 right-4 w-12 h-12 border-t-2 border-r-2 border-gold/55 rounded-tr-lg pointer-events-none" />
          <div className="absolute bottom-4 left-4 w-12 h-12 border-b-2 border-l-2 border-gold/55 rounded-bl-lg pointer-events-none" />
          <div className="absolute bottom-4 right-4 w-12 h-12 border-b-2 border-r-2 border-gold/55 rounded-br-lg pointer-events-none" />

          {/* Inner Golden border line */}
          <div className="absolute inset-2 border border-gold/20 rounded-xl pointer-events-none" />

          {/* Traditional Lotus Icon decoration at top */}
          <div className="flex justify-center mb-8">
            <svg width="60" height="60" viewBox="0 0 60 60" fill="none" className="text-gold">
              <path
                d="M30 5C31.5 15 36.5 20 45 22C36.5 24 31.5 29 30 39C28.5 29 23.5 24 15 22C23.5 20 28.5 15 30 5Z"
                fill="currentColor"
              />
              <circle cx="30" cy="46" r="3" fill="currentColor" />
              <circle cx="20" cy="44" r="2" fill="currentColor" opacity="0.6" />
              <circle cx="40" cy="44" r="2" fill="currentColor" opacity="0.6" />
            </svg>
          </div>

          {/* Invitation Title */}
          <h3 className="font-abhaya text-3xl sm:text-4xl font-bold text-brown mb-8 tracking-wider">
            ගෞරවනීය ආරාධනය
          </h3>

          <div className="w-24 h-[1px] bg-gradient-to-r from-transparent via-gold/60 to-transparent mx-auto mb-8" />

          {/* Message Content */}
          <p className="font-noto-serif text-base sm:text-lg md:text-xl text-gray-warm leading-loose max-w-2xl mx-auto px-2 font-medium">
            {eventData.royalInvitationMessage}
          </p>

          <div className="w-24 h-[1px] bg-gradient-to-r from-transparent via-gold/60 to-transparent mx-auto mt-10 mb-8" />

          {/* Traditional Blessing */}
          <span className="font-abhaya text-xl sm:text-2xl font-bold text-gold tracking-widest block">
            ආයුබෝවන්!
          </span>
        </motion.div>
      </div>
    </section>
  );
}
