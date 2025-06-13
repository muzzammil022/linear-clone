'use client';
import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';

const customerSets = [
  ['🧠 Perplexity', '📱 Supercell', '🏦 Monzo', '🚀 Raycast', '🛠️ Retool', '💰 Mercury'],
  ['📓 Notion', '⚡ Vercel', '💳 Stripe', '📈 Linear', '🎥 Loom', '📊 PostHog'],
  ['🎨 Figma', '💬 Slack', '📋 Trello', '🔌 Zapier', '🌐 Netlify', '🏠 Airbnb'],
];

export default function CustomerGrid() {
  const [index, setIndex] = useState(0);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % customerSets.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const currentSet = customerSets[index];

  return (
    <div
      className="relative w-full py-20 bg-black text-white overflow-hidden"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Desktop Grid View (only on large screens and up) */}
      <div
        className={`hidden lg:grid grid-cols-3 gap-y-16 gap-x-10 max-w-5xl mx-auto transition duration-300 ${
          hovered ? 'blur-sm opacity-60' : 'blur-0 opacity-100'
        }`}
      >
        {customerSets[0].map((_, i) => (
          <div key={i} className="text-xl font-medium text-center h-6">
            <AnimatePresence mode="wait">
              <motion.span
                key={currentSet[i]}
                initial={{ opacity: 0, y: 10, scale: 0.85 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -10, scale: 0.85 }}
                transition={{ duration: 0.5, ease: 'easeInOut' }}
              >
                {currentSet[i]}
              </motion.span>
            </AnimatePresence>
          </div>
        ))}
      </div>

      {/* Marquee View (for screen widths below lg) */}
      <div className="lg:hidden w-full overflow-hidden">
        <motion.div
          className="flex gap-14 whitespace-nowrap text-lg font-medium px-6"
          animate={{ x: ['100%', '-100%'] }}
          transition={{
            repeat: Infinity,
            ease: 'linear',
            duration: 15,
          }}
        >
          {customerSets.flat().map((name, idx) => (
            <span key={idx} className="inline-block">
              {name}
            </span>
          ))}
        </motion.div>
      </div>

      {/* CTA Button (only on large and up) */}
      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.3 }}
            className="hidden lg:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20"
          >
            <button className="px-6 py-2 rounded-full bg-[#1f1f1f] text-white border border-white/20 hover:bg-white/10 transition">
              Meet our customers →
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}