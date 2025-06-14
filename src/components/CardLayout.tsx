"use client";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const cards = [
  {
    id: "card1",
    title: "Blazing Fast",
    short: "Instant load times.",
    long: "Experience instant load times and buttery-smooth transitions that boost your productivity and reduce waiting times.",
    img: "/s1.avif",
  },
  {
    id: "card2",
    title: "Modern UI",
    short: "Minimalist design.",
    long: "Sleek, minimalist interfaces designed for usability and speed. Perfect for power users and teams.",
    img: "/s2.avif",
  },
  {
    id: "card3",
    title: "Built for Teams",
    short: "Collaborate instantly.",
    long: "Collaborate with your team using built-in workflows, shared boards, and real-time updates.",
    img: "/s3.avif",
  },
];

export default function CardLayout() {
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const selectedCard = cards.find((card) => card.id === selectedId);

  return (
    <div className="w-full min-h-screen bg-black text-white flex items-center justify-center py-10 sm:py-20">
      {/* Desktop Grid */}
      <div className="hidden md:grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 max-w-6xl w-full px-4">
        {cards.map((card) => (
          <motion.div
            key={card.id}
            className="relative rounded-2xl h-[20rem] sm:h-[24rem] lg:h-[28rem] cursor-pointer overflow-hidden shadow-xl"
            onClick={() => setSelectedId(card.id)}
            whileHover={{ 
              scale: 1.04,
              y: -8,
              boxShadow: "0 25px 50px -12px rgba(255, 255, 255, 0.15)"
            }}
            transition={{ type: "spring", stiffness: 200, damping: 25 }}
            style={{
              backgroundImage: `url(${card.img})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/60 to-black/20 p-4 sm:p-6 flex flex-col justify-end"
              whileHover={{
                background: "linear-gradient(to top, rgba(0,0,0,0.9), rgba(0,0,0,0.7), rgba(0,0,0,0.3))"
              }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex justify-between items-end">
                <div>
                  <motion.h2 
                    className="text-lg sm:text-xl lg:text-2xl font-semibold mb-2"
                    whileHover={{ y: -2 }}
                    transition={{ duration: 0.2 }}
                  >
                    {card.title}
                  </motion.h2>
                  <motion.p 
                    className="text-gray-300 text-sm sm:text-base"
                    whileHover={{ color: "#ffffff", y: -1 }}
                    transition={{ duration: 0.2 }}
                  >
                    {card.short}
                  </motion.p>
                </div>
                <motion.span
                  className="text-xl sm:text-2xl text-white/80 hover:text-white font-bold ml-4"
                  whileHover={{ 
                    scale: 1.2,
                    rotate: 90,
                    color: "#ffffff"
                  }}
                  transition={{ duration: 0.2 }}
                >
                  +
                </motion.span>
              </div>
            </motion.div>
          </motion.div>
        ))}
      </div>

      {/* Mobile Scroll */}
      <div className="md:hidden w-full overflow-x-auto scrollbar-hide">
        <div className="flex gap-4 pl-4 pr-8" style={{ width: "max-content" }}>
          {cards.map((card, index) => (
            <motion.div
              key={card.id}
              className="flex-shrink-0 relative rounded-2xl h-[22rem] cursor-pointer overflow-hidden shadow-xl"
              style={{
                width: index === cards.length - 1 ? "85vw" : "75vw",
                maxWidth: index === cards.length - 1 ? "340px" : "300px",
                backgroundImage: `url(${card.img})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
              onClick={() => setSelectedId(card.id)}
              whileTap={{ scale: 0.97 }}
              whileHover={{ 
                scale: 1.02,
                y: -4,
                boxShadow: "0 20px 40px -12px rgba(255, 255, 255, 0.1)"
              }}
              transition={{ type: "spring", stiffness: 200, damping: 25 }}
            >
              <motion.div 
                className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/60 to-black/20 p-4 flex flex-col justify-end"
                whileHover={{
                  background: "linear-gradient(to top, rgba(0,0,0,0.9), rgba(0,0,0,0.7), rgba(0,0,0,0.3))"
                }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex justify-between items-end">
                  <div className="flex-1 min-w-0">
                    <motion.h2 
                      className="text-lg font-semibold mb-2 text-white leading-tight"
                      whileHover={{ y: -2 }}
                      transition={{ duration: 0.2 }}
                    >
                      {card.title}
                    </motion.h2>
                    <motion.p 
                      className="text-gray-300 text-sm leading-relaxed"
                      whileHover={{ color: "#ffffff", y: -1 }}
                      transition={{ duration: 0.2 }}
                    >
                      {card.short}
                    </motion.p>
                  </div>
                  <motion.span 
                    className="text-xl text-white/80 hover:text-white font-bold ml-3 flex-shrink-0"
                    whileHover={{ 
                      scale: 1.2,
                      rotate: 90,
                      color: "#ffffff"
                    }}
                    transition={{ duration: 0.2 }}
                  >
                    +
                  </motion.span>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Fullscreen View */}
      <AnimatePresence>
        {selectedId && selectedCard && (
          <motion.div
            className="fixed inset-0 bg-black/90 flex items-center justify-center z-[9999] p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedId(null)}
          >
            <motion.div
              className="relative w-full max-w-2xl h-[80vh] sm:h-[70vh] rounded-2xl shadow-2xl border border-white/20 overflow-hidden"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
              style={{
                backgroundImage: `url(${selectedCard.img})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="absolute inset-0 bg-black/60 p-4 sm:p-6 lg:p-8 flex flex-col justify-between">
                <div className="overflow-y-auto">
                  <h2 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4 text-white">
                    {selectedCard.title}
                  </h2>
                  <p className="text-gray-200 text-base sm:text-lg leading-relaxed">
                    {selectedCard.long}
                  </p>
                </div>
                <button
                  onClick={() => setSelectedId(null)}
                  className="text-2xl sm:text-3xl self-end text-white/80 hover:text-white transition-colors mt-4"
                >
                  ×
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}