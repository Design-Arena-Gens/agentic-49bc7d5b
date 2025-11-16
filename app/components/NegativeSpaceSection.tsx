"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function NegativeSpaceSection() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: false, amount: 0.3 });

  return (
    <section ref={ref} className="min-h-screen flex items-center justify-center px-8 py-32 bg-neutral-100">
      <div className="max-w-6xl w-full space-y-32">
        {/* Section intro */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <h2 className="font-mono text-fluid-sm uppercase tracking-extreme text-neutral-400">
            06 — Negative Space & Silence
          </h2>
          <p className="font-serif text-fluid-2xl leading-relaxed max-w-3xl text-balance">
            White space is not empty space. It is active, breathing room.
            Silence between words gives meaning to sound. Space gives meaning to form.
          </p>
        </motion.div>

        {/* Cramped example */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="space-y-4"
        >
          <h3 className="font-mono text-xs uppercase tracking-wide text-neutral-400">
            Without space
          </h3>
          <div className="bg-neutral-200 p-6">
            <p className="font-serif text-base leading-tight tracking-tight">
              When text is packed tightly with minimal margins and no breathing room the reader feels claustrophobic.
              Everything competes for attention. There is no place for the eye to rest. No hierarchy emerges.
              Reading becomes work instead of pleasure. The density overwhelms rather than invites.
            </p>
          </div>
        </motion.div>

        {/* Spacious example */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="space-y-8 py-16"
        >
          <h3 className="font-mono text-xs uppercase tracking-wide text-neutral-400">
            With space
          </h3>

          <div className="max-w-2xl mx-auto">
            <p className="font-serif text-fluid-2xl leading-loose tracking-wide">
              Space invites.
            </p>
          </div>
        </motion.div>

        {/* Margin demonstration */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="space-y-12"
        >
          <h3 className="font-mono text-xs uppercase tracking-wide text-neutral-400">
            Margins frame and focus
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="border border-neutral-300 p-3">
              <p className="font-serif text-sm leading-snug">
                Tight margins create tension and density. The text pushes against the edges.
                There's urgency here, compression, almost claustrophobia.
              </p>
            </div>

            <div className="border border-neutral-300 p-16">
              <p className="font-serif text-sm leading-relaxed">
                Generous margins create calm. The text floats in space, unthreatening, patient.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Vertical rhythm with space */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="space-y-16 max-w-3xl"
        >
          <h3 className="font-mono text-xs uppercase tracking-wide text-neutral-400">
            Strategic silence
          </h3>

          <p className="font-display text-fluid-3xl leading-tight">
            Great typography
          </p>

          <div className="h-32" />

          <p className="font-display text-fluid-3xl leading-tight">
            knows when to pause
          </p>

          <div className="h-32" />

          <p className="font-display text-fluid-3xl leading-tight">
            for emphasis.
          </p>
        </motion.div>

        {/* Conceptual note */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="border-l-2 border-neutral-300 pl-8 py-4"
        >
          <p className="font-sans text-fluid-base leading-loose text-neutral-600 max-w-2xl">
            Master typographers understand that white space is not wasted space—it's active design.
            The emptiness shapes the fullness. Silence gives power to sound.
            Learn to compose with absence as deliberately as presence.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
