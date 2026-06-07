"use client";

import { motion } from "framer-motion";
import { Calendar, Clock, MapPin, Award, Compass } from "lucide-react";
import { eventData } from "@/config/eventData";

export default function EventDetails() {
  const details = [
    {
      id: "date",
      icon: <Calendar className="w-8 h-8 text-gold" />,
      label: "දිනය",
      value: eventData.eventDate,
    },
    {
      id: "time",
      icon: <Clock className="w-8 h-8 text-gold" />,
      label: "වේලාව",
      value: eventData.eventTime,
    },
    {
      id: "venue",
      icon: <MapPin className="w-8 h-8 text-gold" />,
      label: "ස්ථානය",
      value: eventData.eventVenue,
    },
    {
      id: "organizer",
      icon: <Award className="w-8 h-8 text-gold" />,
      label: "සංවිධානය",
      value: eventData.organizerName,
    },
  ];

  return (
    <section className="relative py-24 px-6 bg-cream/30 paper-texture overflow-hidden">
      {/* Decorative background lines */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-gold/30 to-transparent" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="font-noto-serif text-xs sm:text-sm text-gold tracking-widest font-semibold uppercase block mb-3"
          >
            වැදගත් තොරතුරු
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="font-abhaya text-4xl sm:text-5xl font-bold text-brown"
          >
            මංගල්‍යයේ විස්තරය
          </motion.h2>
          <div className="w-16 h-[2px] bg-gold mx-auto mt-4" />
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {details.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: idx * 0.15 }}
              whileHover={{ y: -6, scale: 1.01 }}
              className="relative p-8 rounded-xl border border-gold/30 bg-ivory shadow-md hover:shadow-lg transition-all duration-300 group overflow-hidden"
            >
              {/* Gold glow hover effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-tr from-gold/5 via-transparent to-transparent pointer-events-none" />
              
              {/* Corner accent decorations */}
              <div className="absolute top-3 left-3 w-4 h-4 border-t border-l border-gold/40 rounded-tl pointer-events-none" />
              <div className="absolute bottom-3 right-3 w-4 h-4 border-b border-r border-gold/40 rounded-br pointer-events-none" />

              <div className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-5 relative z-10">
                {/* Icon Container with border */}
                <div className="p-4 rounded-full border border-gold/30 bg-cream/50 flex items-center justify-center shrink-0 shadow-inner group-hover:border-gold/60 transition-colors duration-300">
                  {item.icon}
                </div>

                <div className="flex-grow flex flex-col items-center sm:items-start">
                  {/* Card label */}
                  <h3 className="font-noto-serif text-sm text-gold font-semibold uppercase tracking-wider mb-2">
                    {item.label}
                  </h3>
                  {/* Card value */}
                  <p className="font-noto-serif text-base sm:text-lg text-brown leading-relaxed font-medium">
                    {item.value}
                  </p>
                  
                  {item.id === "venue" && (
                    <div className="mt-4">
                      <a
                        href={eventData.eventVenueUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gold/40 bg-cream/40 hover:bg-gold hover:text-white hover:border-transparent text-gold font-noto-serif text-xs font-semibold shadow-sm transition-all duration-300 cursor-pointer"
                      >
                        <Compass className="w-3.5 h-3.5" />
                        දිශාවන් ලබාගන්න
                      </a>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
