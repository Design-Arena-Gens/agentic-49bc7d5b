"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

export default function TrackingLeadingSection() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: false, amount: 0.3 });
  const [trackingDemo, setTrackingDemo] = useState<'tight' | 'normal' | 'loose'>('normal');

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
            04 — Tracking & Leading
          </h2>
          <p className="font-serif text-fluid-2xl leading-relaxed max-w-3xl text-balance">
            Tracking is the horizontal breath between letters. Leading is the vertical space between lines.
            Together, they control density, texture, and readability.
          </p>
        </motion.div>

        {/* Tracking demonstration */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="space-y-8"
        >
          <h3 className="font-mono text-xs uppercase tracking-wide text-neutral-400">
            Letter-spacing
          </h3>

          <div className="space-y-6">
            <div className="space-y-2">
              <p className="font-display text-fluid-4xl tracking-ultra-tight leading-tight">
                COMPRESSED
              </p>
              <p className="font-mono text-xs text-neutral-400">-0.08em</p>
            </div>

            <div className="space-y-2">
              <p className="font-display text-fluid-4xl tracking-normal leading-tight">
                STANDARD
              </p>
              <p className="font-mono text-xs text-neutral-400">0em</p>
            </div>

            <div className="space-y-2">
              <p className="font-display text-fluid-4xl tracking-ultra-wide leading-tight">
                EXPANDED
              </p>
              <p className="font-mono text-xs text-neutral-400">0.2em</p>
            </div>

            <div className="space-y-2">
              <p className="font-display text-fluid-4xl tracking-extreme leading-tight">
                EXTREME
              </p>
              <p className="font-mono text-xs text-neutral-400">0.5em</p>
            </div>
          </div>
        </motion.div>

        {/* Interactive tracking demo */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="space-y-8 pt-8"
        >
          <div className="flex gap-4">
            <button
              onClick={() => setTrackingDemo('tight')}
              className={`font-mono text-xs uppercase px-4 py-2 transition-all ${
                trackingDemo === 'tight' ? 'bg-neutral-900 text-neutral-50' : 'bg-neutral-200 text-neutral-600'
              }`}
            >
              Tight
            </button>
            <button
              onClick={() => setTrackingDemo('normal')}
              className={`font-mono text-xs uppercase px-4 py-2 transition-all ${
                trackingDemo === 'normal' ? 'bg-neutral-900 text-neutral-50' : 'bg-neutral-200 text-neutral-600'
              }`}
            >
              Normal
            </button>
            <button
              onClick={() => setTrackingDemo('loose')}
              className={`font-mono text-xs uppercase px-4 py-2 transition-all ${
                trackingDemo === 'loose' ? 'bg-neutral-900 text-neutral-50' : 'bg-neutral-200 text-neutral-600'
              }`}
            >
              Loose
            </button>
          </div>

          <motion.div
            key={trackingDemo}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="max-w-3xl"
          >
            <p
              className={`font-serif text-fluid-xl leading-relaxed transition-all duration-500 ${
                trackingDemo === 'tight' ? 'tracking-tight' :
                trackingDemo === 'normal' ? 'tracking-normal' :
                'tracking-wide'
              }`}
            >
              Typography is the craft of endowing human language with a durable visual form.
              Every decision about spacing shapes how we perceive and absorb meaning.
              The white space between letters is as important as the letters themselves.
            </p>
          </motion.div>
        </motion.div>

        {/* Leading examples */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          <div className="space-y-4">
            <h4 className="font-mono text-xs uppercase tracking-wide text-neutral-400">
              Tight Leading
            </h4>
            <p className="font-serif text-fluid-base leading-tight">
              Lines pressed close create density and texture. The eye moves quickly,
              almost urgently through the text.
            </p>
          </div>

          <div className="space-y-4">
            <h4 className="font-mono text-xs uppercase tracking-wide text-neutral-400">
              Normal Leading
            </h4>
            <p className="font-serif text-fluid-base leading-relaxed">
              Balanced vertical space invites comfortable reading. Natural flow.
              The default rhythm of prose.
            </p>
          </div>

          <div className="space-y-4">
            <h4 className="font-mono text-xs uppercase tracking-wide text-neutral-400">
              Loose Leading
            </h4>
            <p className="font-serif text-fluid-base leading-loose">
              Generous space slows reading, creates elegance, emphasizes each line as a unit.
            </p>
          </div>
        </motion.div>

        {/* Conceptual note */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 1, delay: 1 }}
          className="border-l-2 border-neutral-300 pl-8 py-4"
        >
          <p className="font-sans text-fluid-base leading-loose text-neutral-600 max-w-2xl">
            Tracking and leading are invisible forces. They create texture, color, density.
            Tight feels urgent, loose feels luxurious. Adjust with precision—even subtle changes
            radically alter the reading experience.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
