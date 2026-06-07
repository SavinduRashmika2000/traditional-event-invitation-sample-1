"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight, ZoomIn } from "lucide-react";
import { eventData } from "@/config/eventData";

export default function PhotoGallery() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const openLightbox = (index: number) => {
    setSelectedIndex(index);
    document.body.style.overflow = "hidden";
  };

  const closeLightbox = () => {
    setSelectedIndex(null);
    document.body.style.overflow = "unset";
  };

  const showPrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedIndex === null) return;
    setSelectedIndex((prev) => (prev === 0 ? eventData.galleryItems.length - 1 : prev! - 1));
  };

  const showNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedIndex === null) return;
    setSelectedIndex((prev) => (prev === eventData.galleryItems.length - 1 ? 0 : prev! + 1));
  };

  return (
    <section className="relative py-24 px-6 bg-ivory paper-texture overflow-hidden">
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
            ඡායාරූප ගැලරිය
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="font-abhaya text-4xl sm:text-5xl font-bold text-brown"
          >
            සංස්කෘතික සේයාරූ
          </motion.h2>
          <div className="w-16 h-[2px] bg-gold mx-auto mt-4" />
        </div>

        {/* Masonry Columns Layout */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          {eventData.galleryItems.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: idx * 0.1 }}
              onClick={() => openLightbox(idx)}
              className="break-inside-avoid relative rounded-xl overflow-hidden border border-gold/30 cursor-pointer group shadow-sm hover:shadow-md transition-all duration-300"
            >
              {/* Image element with height variations */}
              <div className="relative w-full h-64 sm:h-72 lg:h-80 overflow-hidden">
                <Image
                  src={item.imagePath}
                  alt={item.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-brown/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center z-10">
                  <div className="p-3 rounded-full bg-ivory/90 border border-gold shadow-md text-gold scale-75 group-hover:scale-100 transition-transform duration-300">
                    <ZoomIn className="w-6 h-6" />
                  </div>
                </div>

                {/* Bottom title bar */}
                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-brown/80 to-transparent p-4 z-10">
                  <p className="font-noto-serif text-sm text-ivory font-medium">
                    {item.title}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeLightbox}
            className="fixed inset-0 bg-black/95 z-50 flex flex-col items-center justify-center p-4 sm:p-8 select-none"
          >
            {/* Close Button ("වසන්න" in Sinhala) */}
            <button
              onClick={closeLightbox}
              className="absolute top-6 right-6 z-50 flex items-center gap-2 px-4 py-2 rounded-full border border-gold/40 bg-zinc-900/80 hover:bg-zinc-800 text-ivory font-noto-serif text-xs sm:text-sm cursor-pointer shadow transition-colors"
            >
              <X className="w-4 h-4 text-gold" />
              වසන්න
            </button>

            {/* Navigation Buttons */}
            <button
              onClick={showPrev}
              className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 z-50 p-3 rounded-full border border-gold/40 bg-zinc-900/80 hover:bg-zinc-800 text-gold cursor-pointer transition-colors"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={showNext}
              className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 z-50 p-3 rounded-full border border-gold/40 bg-zinc-900/80 hover:bg-zinc-800 text-gold cursor-pointer transition-colors"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Image Container */}
            <motion.div
              key={selectedIndex}
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="relative max-w-4xl max-h-[70vh] w-full h-[70vh] flex items-center justify-center overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={eventData.galleryItems[selectedIndex].imagePath}
                alt={eventData.galleryItems[selectedIndex].title}
                fill
                sizes="100vw"
                className="object-contain"
                priority
              />
            </motion.div>

            {/* Lightbox Caption */}
            <motion.div
              key={`caption-${selectedIndex}`}
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.1 }}
              className="mt-6 text-center max-w-xl px-4 z-10"
              onClick={(e) => e.stopPropagation()}
            >
              <p className="font-abhaya text-2xl font-bold text-gold mb-1">
                {eventData.galleryItems[selectedIndex].title}
              </p>
              <p className="font-noto-serif text-xs text-zinc-400">
                ප්‍රසංගයේ අසිරිය • 0{selectedIndex + 1} වන සේයාරුව
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
