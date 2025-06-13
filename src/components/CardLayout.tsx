'use client';
import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

const cards = [
  {
    id: 'card1',
    title: 'Blazing Fast',
    short: 'Instant load times.',
    long: 'Experience instant load times and buttery-smooth transitions that boost your productivity and reduce waiting times.',
    img: '/s1.avif',
  },
  {
    id: 'card2',
    title: 'Modern UI',
    short: 'Minimalist design.',
    long: 'Sleek, minimalist interfaces designed for usability and speed. Perfect for power users and teams.',
    img: '/s2.avif',
  },
  {
    id: 'card3',
    title: 'Built for Teams',
    short: 'Collaborate instantly.',
    long: 'Collaborate with your team using built-in workflows, shared boards, and real-time updates.',
    img: '/s3.avif',
  },
];

export default function CardLayout() {
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const selectedCard = cards.find((card) => card.id === selectedId);

  return (
    <div className="w-full bg-black text-white flex items-center justify-center px-4">
      {/* ...existing code... */}
      {/* Grid for md and above */}
      <div className="hidden md:grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl w-full">
        {cards.map((card) => (
          <motion.div
            key={card.id}
            className="relative rounded-2xl h-[28rem] cursor-pointer overflow-hidden shadow-xl"
            onClick={() => setSelectedId(card.id)}
            whileHover={{ scale: 1.04 }}
            transition={{ type: 'spring', stiffness: 200, damping: 25 }}
            style={{
              backgroundImage: `url(${card.img})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/60 to-black/20 p-6 flex flex-col justify-between">
              <div>
                <h2 className="text-2xl font-semibold mb-2">{card.title}</h2>
                <p className="text-gray-300 text-base">{card.short}</p>
              </div>
              <span className="text-2xl self-end text-white/80 hover:text-white font-bold">+</span>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Horizontal scrollable cards for mobile */}
      <div className="md:hidden w-full overflow-x-auto scrollbar-hide">
        <div className="flex gap-6 pb-4 px-4">
          {cards.map((card, index) => (
            <motion.div
              key={card.id}
              className="flex-shrink-0 w-80 rounded-2xl h-[28rem] cursor-pointer overflow-hidden shadow-xl relative"
              onClick={() => setSelectedId(card.id)}
              whileTap={{ scale: 0.97 }}
              style={{
                backgroundImage: `url(${card.img})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/60 to-black/20 p-6 flex flex-col justify-between">
                <div>
                  <h2 className="text-2xl font-semibold mb-2">{card.title}</h2>
                  <p className="text-gray-300 text-base">{card.short}</p>
                </div>
                <span className="text-2xl self-end text-white/80 hover:text-white font-bold">+</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* ...existing code... */}
    </div>
  );
}