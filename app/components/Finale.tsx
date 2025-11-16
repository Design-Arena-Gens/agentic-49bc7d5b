"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function Finale() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: false, amount: 0.3 });

  return (
    <section ref={ref} className="min-h-screen flex items-center justify-center px-8 py-32">
      <div className="max-w-4xl w-full space-y-32">
        {/* Opening statement */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="space-y-12"
        >
          <h2 className="font-display font-light text-fluid-7xl leading-display tracking-ultra-tight text-balance">
            Typography
            <br />
            <span className="italic font-medium">is</span>
            <br />
            not decoration.
          </h2>
        </motion.div>

        {/* Key principles */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="space-y-12 max-w-2xl"
        >
          <p className="font-serif text-fluid-xl leading-relaxed">
            It is the invisible architecture that carries meaning from mind to mind.
            It is the silent voice that speaks before the words are read.
          </p>

          <p className="font-serif text-fluid-xl leading-relaxed">
            Every choice—<span className="font-sans font-medium">scale</span>,{" "}
            <span className="font-bold">weight</span>,{" "}
            <span className="tracking-wide">spacing</span>,{" "}
            <span className="font-display italic">voice</span>,{" "}
            <span className="inline-block w-8" />silence—shapes experience.
          </p>
        </motion.div>

        {/* Principles list */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="space-y-8 border-l-2 border-neutral-200 pl-8"
        >
          <div className="space-y-3">
            <h3 className="font-mono text-xs uppercase tracking-extreme text-neutral-400">
              Principles
            </h3>
            <ul className="space-y-4 font-sans text-fluid-base leading-loose">
              <li>
                <span className="font-semibold">Hierarchy</span> guides attention
              </li>
              <li>
                <span className="font-semibold">Rhythm</span> controls pace
              </li>
              <li>
                <span className="font-semibold">Contrast</span> creates emphasis
              </li>
              <li>
                <span className="font-semibold">Space</span> allows breathing
              </li>
              <li>
                <span className="font-semibold">Restraint</span> demonstrates mastery
              </li>
            </ul>
          </div>
        </motion.div>

        {/* Final thought */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 1.5, delay: 1.2 }}
          className="space-y-12 pt-16"
        >
          <p className="font-display font-light text-fluid-4xl leading-tight text-balance">
            The best typography is invisible—
          </p>

          <p className="font-display font-light text-fluid-4xl leading-tight text-balance">
            felt, not seen.
          </p>

          <p className="font-display font-light text-fluid-4xl leading-tight text-balance">
            It disappears into pure communication.
          </p>
        </motion.div>

        {/* Closing signature */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 1, delay: 2 }}
          className="pt-32 pb-16 text-center"
        >
          <div className="space-y-4">
            <p className="font-mono text-xs uppercase tracking-extreme text-neutral-400">
              End
            </p>
            <div className="h-px w-16 bg-neutral-300 mx-auto" />
          </div>
        </motion.div>

        {/* Quiet footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 1, delay: 2.5 }}
          className="text-center space-y-2"
        >
          <p className="font-sans text-xs text-neutral-400">
            A visual essay on expressive typography
          </p>
          <p className="font-mono text-xs text-neutral-300">
            Crafted with intention
          </p>
        </motion.div>
      </div>
    </section>
  );
}
