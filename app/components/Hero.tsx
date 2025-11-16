"use client";

import { motion, useTransform, MotionValue } from "framer-motion";

interface HeroProps {
  scrollProgress: MotionValue<number>;
}

export default function Hero({ scrollProgress }: HeroProps) {
  const opacity = useTransform(scrollProgress, [0, 0.15], [1, 0]);
  const scale = useTransform(scrollProgress, [0, 0.15], [1, 0.8]);

  return (
    <motion.section
      style={{ opacity, scale }}
      className="min-h-screen flex items-center justify-center relative px-8"
    >
      <div className="max-w-6xl w-full">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="space-y-12"
        >
          {/* Main title */}
          <h1 className="font-display font-light text-fluid-8xl md:text-fluid-9xl leading-display tracking-ultra-tight text-balance">
            The Art and Craft of
            <br />
            <span className="font-semibold italic">Expressive</span>
            <br />
            Typography
          </h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="font-sans text-fluid-lg tracking-wide uppercase text-neutral-500 max-w-2xl"
          >
            A Visual Essay
          </motion.p>

          {/* Intro text */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="max-w-2xl space-y-6"
          >
            <p className="font-serif text-fluid-xl leading-relaxed text-balance">
              Typography is not merely the arrangement of letters. It is the architecture of language,
              the choreography of meaning, the silent conductor of emotion.
            </p>
            <p className="font-sans text-fluid-base leading-loose text-neutral-600">
              Scroll to explore how scale, weight, rhythm, spacing, and silence shape the way we read,
              feel, and understand.
            </p>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="w-[1px] h-16 bg-neutral-300"
        />
      </motion.div>
    </motion.section>
  );
}
