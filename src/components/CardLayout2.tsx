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

export default function CardLayout() {
    const [selectedId, setSelectedId] = useState<string | null>(null);
    const selectedCard = cards.find((card) => card.id === selectedId);

    return (
        <div className="w-full min-h-screen bg-black text-white flex items-center justify-center py-20 px-4">
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
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/60 to-black/20 p-6 flex flex-col justify-end">
                            <div className="flex justify-between items-end">
                                <div>
                                    <h2 className="text-2xl font-semibold mb-2">{card.title}</h2>
                                    <p className="text-gray-300 text-base">{card.short}</p>
                                </div>
                                <span className="text-2xl text-white/80 hover:text-white font-bold ml-4">&gt;</span>
                            </div>
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
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/60 to-black/20 p-6 flex flex-col justify-end">
                                <div className="flex justify-between items-end">
                                    <div>
                                        <h2 className="text-2xl font-semibold mb-2">{card.title}</h2>
                                        <p className="text-gray-300 text-base">{card.short}</p>
                                    </div>
                                    <span className="text-2xl text-white/80 hover:text-white font-bold ml-4">&gt;</span>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Expanded Card View */}
            <AnimatePresence>
                {selectedId && selectedCard && (
                    <motion.div
                        className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 px-4"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setSelectedId(null)}
                    >
                        <motion.div
                            className="relative w-full max-w-2xl h-[36rem] rounded-2xl shadow-2xl border border-white/20 overflow-hidden"
                            initial={{ scale: 0.9 }}
                            animate={{ scale: 1 }}
                            exit={{ scale: 0.9 }}
                            transition={{ duration: 0.3 }}
                            onClick={(e) => e.stopPropagation()}
                            style={{
                                backgroundImage: `url(${selectedCard.img})`,
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                            }}
                        >
                            <div className="absolute inset-0 bg-black/60 p-8 flex flex-col justify-between">
                                <div>
                                    <h2 className="text-3xl font-bold mb-3">{selectedCard.title}</h2>
                                    <p className="text-gray-200 text-base leading-relaxed pr-2">{selectedCard.short}</p>
                                </div>
                                <button
                                    onClick={() => setSelectedId(null)}
                                    className="text-2xl self-end text-white/80 hover:text-white transition"
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