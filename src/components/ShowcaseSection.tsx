"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { eventData } from "@/config/eventData";

export default function ShowcaseSection() {
  return (
    <section className="relative py-24 px-6 bg-ivory paper-texture overflow-hidden">
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="font-noto-serif text-xs sm:text-sm text-gold tracking-widest font-semibold uppercase block mb-3"
          >
            සංස්කෘතික අංගයන්
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="font-abhaya text-4xl sm:text-5xl font-bold text-brown"
          >
            ප්‍රසංග මාලාව
          </motion.h2>
          <div className="w-16 h-[2px] bg-gold mx-auto mt-4" />
        </div>

        {/* Programs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {eventData.culturalPrograms.map((program, idx) => (
            <motion.div
              key={program.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.9, delay: idx * 0.15 }}
              whileHover={{ y: -8 }}
              className="flex flex-col rounded-2xl border border-gold/25 overflow-hidden bg-cream/20 shadow-md hover:shadow-xl transition-all duration-300 group"
            >
              {/* Image Container with Zoom */}
              <div className="relative h-64 sm:h-72 w-full overflow-hidden border-b border-gold/20">
                <Image
                  src={program.imagePath}
                  alt={program.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brown/60 via-transparent to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-300" />
                
                {/* Float tag with number in Sinhala style or simple decoration */}
                <div className="absolute top-4 left-4 px-3 py-1 rounded bg-ivory/95 border border-gold text-xs font-semibold text-gold shadow">
                  සංස්කෘතික අංගය 0{idx + 1}
                </div>
              </div>

              {/* Card Body */}
              <div className="p-8 flex flex-col justify-between flex-grow">
                <div>
                  <h3 className="font-abhaya text-2xl sm:text-3xl font-bold text-brown mb-4 tracking-wide group-hover:text-gold transition-colors duration-300">
                    {program.title}
                  </h3>
                  <p className="font-noto-serif text-sm sm:text-base text-gray-warm leading-relaxed">
                    {program.description}
                  </p>
                </div>

                {/* Decorative bottom pattern inside card */}
                <div className="flex items-center gap-2 mt-6 opacity-40 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-8 h-[1px] bg-gold" />
                  <div className="text-[10px] text-gold">✦</div>
                  <div className="w-8 h-[1px] bg-gold" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
