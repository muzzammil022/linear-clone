'use client';
import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

const cards = [
    {
        id: 'card1',
        title: 'Customer Requests',
        short: 'Build what customers actually want',
        img: '/s4.png',
    },
    {
        id: 'card2',
        title: 'Powerful git workflows',
        short: 'Automate pull requests and commit workflows',
        img: '/s5.avif',
    },
    {
        id: 'card3',
        title: 'Built for Teams',
        short: 'Collaborate instantly.',
        img: '/s6.avif',
    },
    {
        id: 'card4',
        title: 'Linear asks',
        short: 'Turn workplace requests into actionable issues',
        img: '/s7.avif',
    },
    {
        id: 'card5',
        title: 'Linear integration',
        short: '100+ ways to enhance your Linear experience',
        img: '/s8.avif',
    },
    {
        id: 'card6',
        title: 'Figma integration',
        short: 'Bridge the gap between engineering and design',
        img: '/s9.avif',
    },
    {
        id: 'card7',
        title: 'Built for developers',
        short: 'Build your own add-ones with the Linear API',
        img: '/s10.avif',
    },
];

export default function CardLayout2() {
    const [selectedId, setSelectedId] = useState<string | null>(null);
    const selectedCard = cards.find((card) => card.id === selectedId);

    return (
        <div className="w-full min-h-screen bg-black text-white flex items-center justify-center py-20">
            {/* Grid for md and above */}
            <div className="hidden md:grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl w-full px-4">
                {cards.map((card) => (
                    <motion.div
                        key={card.id}
                        className="relative rounded-2xl h-[28rem] cursor-pointer overflow-hidden shadow-xl"
                        onClick={() => setSelectedId(card.id)}
                        whileHover={{ 
                            scale: 1.04,
                            y: -8,
                            boxShadow: "0 25px 50px -12px rgba(255, 255, 255, 0.15)"
                        }}
                        transition={{ type: 'spring', stiffness: 200, damping: 25 }}
                        style={{
                            backgroundImage: `url(${card.img})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                        }}
                    >
                        <motion.div 
                            className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/60 to-black/20 p-6 flex flex-col justify-end"
                            whileHover={{
                                background: "linear-gradient(to top, rgba(0,0,0,0.9), rgba(0,0,0,0.7), rgba(0,0,0,0.3))"
                            }}
                            transition={{ duration: 0.3 }}
                        >
                            <div className="flex justify-between items-end">
                                <div>
                                    <motion.h2 
                                        className="text-2xl font-semibold mb-2"
                                        whileHover={{ y: -2 }}
                                        transition={{ duration: 0.2 }}
                                    >
                                        {card.title}
                                    </motion.h2>
                                    <motion.p 
                                        className="text-gray-300 text-base"
                                        whileHover={{ color: "#ffffff", y: -1 }}
                                        transition={{ duration: 0.2 }}
                                    >
                                        {card.short}
                                    </motion.p>
                                </div>
                                <motion.span 
                                    className="text-2xl text-white/80 hover:text-white font-bold ml-4"
                                    whileHover={{ 
                                        scale: 1.2,
                                        rotate: 90,
                                        color: "#ffffff"
                                    }}
                                    transition={{ duration: 0.2 }}
                                >
                                    &gt;
                                </motion.span>
                            </div>
                        </motion.div>
                    </motion.div>
                ))}
            </div>

            {/* Mobile horizontal scroll with partial second card visibility */}
            <div className="md:hidden w-full overflow-x-auto scrollbar-hide">
                <div className="flex gap-4 pl-4 pr-8" style={{ width: 'max-content' }}>
                    {cards.map((card, index) => (
                        <motion.div
                            key={card.id}
                            className="flex-shrink-0 rounded-2xl h-[26rem] cursor-pointer overflow-hidden shadow-xl relative"
                            style={{ 
                                width: index === cards.length - 1 ? '85vw' : '75vw',
                                maxWidth: index === cards.length - 1 ? '340px' : '300px',
                                backgroundImage: `url(${card.img})`,
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                            }}
                            onClick={() => setSelectedId(card.id)}
                            whileTap={{ scale: 0.97 }}
                            whileHover={{ 
                                scale: 1.02,
                                y: -4,
                                boxShadow: "0 20px 40px -12px rgba(255, 255, 255, 0.1)"
                            }}
                            transition={{ type: 'spring', stiffness: 200, damping: 25 }}
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
                                            className="text-lg font-semibold mb-2 leading-tight"
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
                                        &gt;
                                    </motion.span>
                                </div>
                            </motion.div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Expanded Card View */}
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
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                            }}
                        >
                            <div className="absolute inset-0 bg-black/60 p-4 sm:p-6 lg:p-8 flex flex-col justify-between">
                                <div className="overflow-y-auto">
                                    <h2 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4 text-white">
                                        {selectedCard.title}
                                    </h2>
                                    <p className="text-gray-200 text-base sm:text-lg leading-relaxed">
                                        {selectedCard.short}
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