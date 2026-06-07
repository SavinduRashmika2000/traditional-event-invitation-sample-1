"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { eventData } from "@/config/eventData";

export default function HeritageStory() {
  return (
    <section className="relative py-24 px-6 bg-cream/20 paper-texture overflow-hidden">
      {/* Background blur highlight */}
      <div className="absolute top-1/4 right-0 w-80 h-80 rounded-full bg-gold/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-80 h-80 rounded-full bg-gold/5 blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Image Column */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="lg:col-span-5 relative flex justify-center"
          >
            {/* Double decorative border frame */}
            <div className="relative p-3 border border-gold/30 rounded-2xl bg-ivory shadow-lg">
              <div className="relative h-[400px] w-[300px] sm:w-[320px] rounded-xl overflow-hidden">
                <Image
                  src="/images/heritage_stage.png"
                  alt="Sri Lankan Heritage Carving"
                  fill
                  sizes="320px"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brown/30 to-transparent pointer-events-none" />
              </div>

              {/* Decorative corners */}
              <div className="absolute top-6 left-6 w-6 h-6 border-t border-l border-gold pointer-events-none" />
              <div className="absolute bottom-6 right-6 w-6 h-6 border-b border-r border-gold pointer-events-none" />
            </div>
          </motion.div>

          {/* Text/Story Column */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
            className="lg:col-span-7 flex flex-col justify-center text-center lg:text-left"
          >
            <span className="font-noto-serif text-xs sm:text-sm text-gold tracking-widest font-semibold uppercase block mb-3">
              උරුමයක අභිමානය
            </span>
            <h2 className="font-abhaya text-4xl sm:text-5xl font-bold text-brown mb-6 leading-tight">
              {eventData.heritageTitle}
            </h2>
            <div className="w-16 h-[2px] bg-gold mb-6 mx-auto lg:mx-0" />
            
            <p className="font-noto-serif text-sm sm:text-base md:text-lg text-gray-warm leading-relaxed mb-8 font-light">
              {eventData.heritageDescription}
            </p>

            {/* Premium Blockquote Card */}
            <div className="relative p-6 rounded-xl border-l-4 border-gold bg-ivory shadow-sm max-w-lg mx-auto lg:mx-0 text-center lg:text-left">
              <span className="absolute top-2 right-4 text-6xl text-gold/15 font-serif pointer-events-none leading-none select-none">
                “
              </span>
              <p className="font-abhaya text-xl sm:text-2xl font-bold text-bronze italic relative z-10 leading-relaxed">
                {eventData.heritageQuote}
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
