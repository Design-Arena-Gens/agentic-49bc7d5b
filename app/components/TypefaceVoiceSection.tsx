"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function TypefaceVoiceSection() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: false, amount: 0.3 });

  const voices = [
    {
      font: "font-serif",
      name: "Playfair Display",
      character: "Classical, elegant, refined",
      text: "We hold these truths to be self-evident.",
    },
    {
      font: "font-display",
      name: "Cormorant Garamond",
      character: "Lyrical, graceful, literary",
      text: "In the beginning was the Word.",
    },
    {
      font: "font-sans",
      name: "Inter",
      character: "Modern, neutral, functional",
      text: "Form follows function.",
    },
    {
      font: "font-mono",
      name: "IBM Plex Mono",
      character: "Technical, precise, systematic",
      text: "const truth = invariant(time);",
    },
  ];

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
            05 — Typeface & Voice
          </h2>
          <p className="font-serif text-fluid-2xl leading-relaxed max-w-3xl text-balance">
            Every typeface has a voice. Serif speaks with history and authority.
            Sans-serif speaks with clarity and modernity. Choosing a typeface is choosing a personality.
          </p>
        </motion.div>

        {/* Typeface demonstrations */}
        <div className="space-y-16">
          {voices.map((voice, index) => (
            <motion.div
              key={voice.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: index * 0.15 }}
              className="space-y-4 group"
            >
              <div className="flex items-baseline gap-4">
                <h3 className="font-mono text-xs uppercase tracking-wide text-neutral-400">
                  {voice.name}
                </h3>
                <span className="font-sans text-xs text-neutral-300">
                  {voice.character}
                </span>
              </div>
              <p className={`${voice.font} text-fluid-3xl md:text-fluid-4xl leading-tight transition-all group-hover:tracking-wide`}>
                {voice.text}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Same text, different voices */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="space-y-12 pt-12"
        >
          <h3 className="font-mono text-xs uppercase tracking-wide text-neutral-400">
            Same words, different voices
          </h3>

          <div className="space-y-8">
            <p className="font-serif text-fluid-2xl leading-relaxed">
              Typography is the voice of the written word.
            </p>

            <p className="font-sans text-fluid-2xl leading-relaxed">
              Typography is the voice of the written word.
            </p>

            <p className="font-display font-light italic text-fluid-2xl leading-relaxed">
              Typography is the voice of the written word.
            </p>

            <p className="font-mono text-fluid-xl leading-relaxed">
              Typography is the voice of the written word.
            </p>
          </div>
        </motion.div>

        {/* Mixing voices */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="space-y-8"
        >
          <h3 className="font-mono text-xs uppercase tracking-wide text-neutral-400">
            Mixing voices creates conversation
          </h3>

          <div className="max-w-3xl space-y-6">
            <p className="font-serif text-fluid-xl leading-relaxed">
              In traditional publishing, <span className="font-sans font-medium">body text</span> and{" "}
              <span className="font-display italic text-fluid-2xl">display type</span> work together—
              one voice for reading, another for announcing.
            </p>
            <p className="font-sans text-fluid-base leading-loose text-neutral-600">
              The contrast creates hierarchy and interest. But too many voices becomes chaos.
              Discipline and restraint separate the amateur from the master.
            </p>
          </div>
        </motion.div>

        {/* Conceptual note */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="border-l-2 border-neutral-200 pl-8 py-4"
        >
          <p className="font-sans text-fluid-base leading-loose text-neutral-600 max-w-2xl">
            A typeface is not neutral. It carries history, culture, associations.
            Choose deliberately. Mix sparingly. Let each voice speak with intention and purpose.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
