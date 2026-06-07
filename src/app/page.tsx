"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import dynamic from "next/dynamic";

// Static import for the initial fold experience to render immediately
import OilLampIntro from "@/components/OilLampIntro";

// Dynamically import below-the-fold components to improve initial load speed (FCP / LCP)
const LotusParticles = dynamic(() => import("@/components/LotusParticles"), { ssr: false });
const HeroSection = dynamic(() => import("@/components/HeroSection"), { ssr: false });
const EventDetails = dynamic(() => import("@/components/EventDetails"), { ssr: false });
const ShowcaseSection = dynamic(() => import("@/components/ShowcaseSection"), { ssr: false });
const HeritageStory = dynamic(() => import("@/components/HeritageStory"), { ssr: false });
const PhotoGallery = dynamic(() => import("@/components/PhotoGallery"), { ssr: false });
const SpecialMessage = dynamic(() => import("@/components/SpecialMessage"), { ssr: false });
const Footer = dynamic(() => import("@/components/Footer"), { ssr: false });

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
