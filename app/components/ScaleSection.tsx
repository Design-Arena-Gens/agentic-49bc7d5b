"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function ScaleSection() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: false, amount: 0.3 });

  const sizes = [
    { text: "whisper", size: "text-fluid-sm", label: "14px" },
    { text: "speak", size: "text-fluid-base", label: "18px" },
    { text: "declare", size: "text-fluid-2xl", label: "32px" },
    { text: "announce", size: "text-fluid-4xl", label: "48px" },
    { text: "SHOUT", size: "text-fluid-7xl", label: "72px" },
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
            01 — Scale
          </h2>
          <p className="font-serif text-fluid-2xl leading-relaxed max-w-3xl text-balance">
            Scale is hierarchy. It tells us where to look first, what matters most,
            and how to navigate through information. Size commands attention.
          </p>
        </motion.div>

        {/* Scale demonstration */}
        <div className="space-y-16">
          {sizes.map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, x: -40 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -40 }}
              transition={{ duration: 0.8, delay: index * 0.15 }}
              className="flex items-baseline gap-8 group"
            >
              <span className="font-mono text-xs text-neutral-400 w-16 flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity">
                {item.label}
              </span>
              <h3 className={`font-display font-light ${item.size} leading-tight tracking-tight transition-all hover:tracking-normal`}>
                {item.text}
              </h3>
            </motion.div>
          ))}
        </div>

        {/* Conceptual note */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 1, delay: 1 }}
          className="border-l-2 border-neutral-200 pl-8 py-4"
        >
          <p className="font-sans text-fluid-base leading-loose text-neutral-600 max-w-2xl">
            Type scale creates rhythm and hierarchy. Each size shift changes the reader's attention
            and breathing. Large type slows us down. Small type accelerates. Choose deliberately.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
