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
		<div className="w-full min-h-screen bg-black text-white flex items-center justify-center py-10 sm:py-20 px-3 sm:px-4">
			{/* Grid for md and above */}
			<div className="hidden md:grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 max-w-6xl w-full">
				{cards.map((card) => (
					<motion.div
						key={card.id}
						className="relative rounded-2xl h-[20rem] sm:h-[24rem] lg:h-[28rem] cursor-pointer overflow-hidden shadow-xl"
						onClick={() => setSelectedId(card.id)}
						whileHover={{
							scale: 1.02,
							y: -4,
							boxShadow: '0 25px 50px -12px rgba(255, 255, 255, 0.15)',
						}}
						transition={{ type: 'spring', stiffness: 200, damping: 25 }}
						style={{
							backgroundImage: `url(${card.img})`,
							backgroundSize: 'cover',
							backgroundPosition: 'center',
						}}
					>
						<motion.div
							className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/60 to-black/20 p-4 sm:p-6 flex flex-col justify-between"
							whileHover={{
								background:
									'linear-gradient(to top, rgba(0,0,0,0.9), rgba(0,0,0,0.7), rgba(0,0,0,0.3))',
							}}
							transition={{ duration: 0.3 }}
						>
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
									whileHover={{ color: '#ffffff', y: -1 }}
									transition={{ duration: 0.2 }}
								>
									{card.short}
								</motion.p>
							</div>
							<motion.span
								className="text-xl sm:text-2xl self-end text-white/80 hover:text-white font-bold"
								whileHover={{
									scale: 1.2,
									rotate: 90,
									color: '#ffffff',
								}}
								transition={{ duration: 0.2 }}
							>
								+
							</motion.span>
						</motion.div>
					</motion.div>
				))}
			</div>

			{/* Mobile cards */}
			<div className="md:hidden w-full">
				<div className="grid grid-cols-1 gap-4 px-4 max-w-sm mx-auto">
					{cards.map((card) => (
						<motion.div
							key={card.id}
							className="relative rounded-2xl h-[20rem] cursor-pointer overflow-hidden shadow-xl"
							onClick={() => setSelectedId(card.id)}
							whileTap={{ scale: 0.98 }}
							style={{
								backgroundImage: `url(${card.img})`,
								backgroundSize: 'cover',
								backgroundPosition: 'center',
							}}
						>
							<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/60 to-black/20 p-4 flex flex-col justify-between">
								<div>
									<h2 className="text-lg font-semibold mb-2 text-white">{card.title}</h2>
									<p className="text-gray-300 text-sm">{card.short}</p>
								</div>
								<span className="text-xl self-end text-white/80 font-bold">+</span>
							</div>
						</motion.div>
					))}
				</div>
			</div>

			{/* Expanded Card View with proper mobile handling */}
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