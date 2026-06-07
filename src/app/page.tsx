"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import OilLampIntro from "@/components/OilLampIntro";
import LotusParticles from "@/components/LotusParticles";
import HeroSection from "@/components/HeroSection";
import EventDetails from "@/components/EventDetails";
import ShowcaseSection from "@/components/ShowcaseSection";
import HeritageStory from "@/components/HeritageStory";
import PhotoGallery from "@/components/PhotoGallery";
import SpecialMessage from "@/components/SpecialMessage";
import Footer from "@/components/Footer";

export default function Home() {
  const [showIntro, setShowIntro] = useState(true);

  return (
    <main className="relative min-h-screen bg-ivory text-brown overflow-hidden">
      {/* Cinematic Oil Lamp Intro */}
      <OilLampIntro onComplete={() => setShowIntro(false)} />

      {/* Main Page Content (Revealed after intro) */}
      <AnimatePresence>
        {!showIntro && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="relative w-full flex flex-col"
          >
            {/* Ambient Falling Lotus Petals and Gold Dust */}
            <LotusParticles />

            {/* Structured Page Sections */}
            <HeroSection />
            <EventDetails />
            <ShowcaseSection />
            <HeritageStory />
            <PhotoGallery />
            <SpecialMessage />
            <Footer />
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
