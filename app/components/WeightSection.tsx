"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function WeightSection() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: false, amount: 0.3 });

  const weights = [
    { text: "delicate", weight: "font-light", value: "300" },
    { text: "balanced", weight: "font-normal", value: "400" },
    { text: "confident", weight: "font-medium", value: "500" },
    { text: "assertive", weight: "font-semibold", value: "600" },
    { text: "commanding", weight: "font-bold", value: "700" },
  ];

  return (
    <section ref={ref} className="min-h-screen flex items-center justify-center px-8 py-32 bg-neutral-100">
      <div className="max-w-6xl w-full space-y-24">
        {/* Section intro */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <h2 className="font-mono text-fluid-sm uppercase tracking-extreme text-neutral-400">
            02 — Weight
          </h2>
          <p className="font-serif text-fluid-2xl leading-relaxed max-w-3xl text-balance">
            Weight carries emotion. Light whispers, bold commands.
            The thickness of a stroke changes how we feel before we know what we read.
          </p>
        </motion.div>

        {/* Weight demonstration */}
        <div className="space-y-2">
          {weights.map((item, index) => (
            <motion.div
              key={item.value}
              initial={{ opacity: 0, scaleX: 0.95 }}
              animate={isInView ? { opacity: 1, scaleX: 1 } : { opacity: 0, scaleX: 0.95 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <h3 className={`font-display ${item.weight} text-fluid-6xl leading-tight transition-all hover:tracking-wider`}>
                {item.text}
              </h3>
              <span className="font-mono text-xs text-neutral-400 opacity-0 group-hover:opacity-100 transition-opacity ml-2">
                {item.value}
              </span>
            </motion.div>
          ))}
        </div>

        {/* Interactive comparison */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-12 pt-16"
        >
          <div className="space-y-4">
            <h4 className="font-display font-light text-fluid-4xl leading-tight">
              This is an invitation
            </h4>
            <p className="font-sans text-sm text-neutral-500">Light / 300</p>
          </div>
          <div className="space-y-4">
            <h4 className="font-display font-bold text-fluid-4xl leading-tight">
              This is a demand
            </h4>
            <p className="font-sans text-sm text-neutral-500">Bold / 700</p>
          </div>
        </motion.div>

        {/* Conceptual note */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="border-l-2 border-neutral-300 pl-8 py-4"
        >
          <p className="font-sans text-fluid-base leading-loose text-neutral-600 max-w-2xl">
            Weight is not just visual density—it's emotional density. Every shift in stroke weight
            recalibrates the voice. Use it to modulate tone, not just emphasis.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
