"use client";

import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { useRef } from "react";
import Hero from "./components/Hero";
import ScaleSection from "./components/ScaleSection";
import WeightSection from "./components/WeightSection";
import RhythmSection from "./components/RhythmSection";
import TrackingLeadingSection from "./components/TrackingLeadingSection";
import TypefaceVoiceSection from "./components/TypefaceVoiceSection";
import NegativeSpaceSection from "./components/NegativeSpaceSection";
import Finale from "./components/Finale";

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  return (
    <main ref={containerRef} className="relative">
      <Hero scrollProgress={scrollYProgress} />
      <ScaleSection />
      <WeightSection />
      <RhythmSection />
      <TrackingLeadingSection />
      <TypefaceVoiceSection />
      <NegativeSpaceSection />
      <Finale />
    </main>
  );
}
