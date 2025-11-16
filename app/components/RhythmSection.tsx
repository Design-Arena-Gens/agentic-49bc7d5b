"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function RhythmSection() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: false, amount: 0.3 });

  return (
    <section ref={ref} className="min-h-screen flex items-center justify-center px-8 py-32">
      <div className="max-w-6xl w-full space-y-24">
        {/* Section intro */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <h2 className="font-mono text-fluid-sm uppercase tracking-extreme text-neutral-400">
            03 — Rhythm & Line Length
          </h2>
          <p className="font-serif text-fluid-2xl leading-relaxed max-w-3xl text-balance">
            Rhythm is the breath of text. Line length and leading create a pulse,
            a cadence that either invites or exhausts the reader.
          </p>
        </motion.div>

        {/* Rhythm demonstrations */}
        <div className="space-y-20">
          {/* Tight rhythm - short lines */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-4"
          >
            <h3 className="font-mono text-xs uppercase tracking-wide text-neutral-400">
              Staccato
            </h3>
            <div className="max-w-xs">
              <p className="font-serif text-fluid-xl leading-tight">
                Short lines.
                <br />
                Quick beats.
                <br />
                Urgent.
                <br />
                Breathless.
                <br />
                Tension.
              </p>
            </div>
          </motion.div>

          {/* Medium rhythm - optimal readability */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-4"
          >
            <h3 className="font-mono text-xs uppercase tracking-wide text-neutral-400">
              Andante
            </h3>
            <div className="max-w-2xl">
              <p className="font-serif text-fluid-xl leading-relaxed">
                Medium line length with balanced leading creates a comfortable reading rhythm.
                The eye travels smoothly from line to line. Neither rushed nor languid.
                This is the zone of sustained attention, where ideas unfold naturally.
              </p>
            </div>
          </motion.div>

          {/* Loose rhythm - contemplative */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="space-y-4"
          >
            <h3 className="font-mono text-xs uppercase tracking-wide text-neutral-400">
              Largo
            </h3>
            <div className="max-w-4xl">
              <p className="font-serif text-fluid-xl leading-ultra-loose">
                Generous leading. Wide measure. Space to breathe between lines.
              </p>
              <p className="font-serif text-fluid-xl leading-ultra-loose">
                The rhythm slows. Each line becomes an island.
              </p>
              <p className="font-serif text-fluid-xl leading-ultra-loose">
                Reading becomes meditation.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Conceptual note */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 1, delay: 1 }}
          className="border-l-2 border-neutral-200 pl-8 py-4"
        >
          <p className="font-sans text-fluid-base leading-loose text-neutral-600 max-w-2xl">
            Rhythm is invisible choreography. The right measure and leading create flow.
            Too tight feels cramped. Too loose feels disconnected. Master rhythm and you master pace.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
