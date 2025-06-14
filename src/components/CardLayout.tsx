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
		<div className="w-full min-h-screen bg-black text-white flex items-center justify-center py-20 px-4">
			{/* Grid for md and above */}
			<div className="hidden md:grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl w-full">
				{cards.map((card) => (
					<motion.div
						key={card.id}
						className="relative rounded-2xl h-[28rem] cursor-pointer overflow-hidden shadow-xl"
						onClick={() => setSelectedId(card.id)}
						whileHover={{
							scale: 1.04,
							y: -8,
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
							className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/60 to-black/20 p-6 flex flex-col justify-between"
							whileHover={{
								background:
									'linear-gradient(to top, rgba(0,0,0,0.9), rgba(0,0,0,0.7), rgba(0,0,0,0.3))',
							}}
							transition={{ duration: 0.3 }}
						>
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
									whileHover={{ color: '#ffffff', y: -1 }}
									transition={{ duration: 0.2 }}
								>
									{card.short}
								</motion.p>
							</div>
							<motion.span
								className="text-2xl self-end text-white/80 hover:text-white font-bold"
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

			{/* Horizontal scrollable cards for mobile */}
			<div className="md:hidden w-full overflow-x-auto scrollbar-hide">
				<div className="flex gap-6 pb-4 px-4">
					{cards.map((card, index) => (
						<motion.div
							key={card.id}
							className="flex-shrink-0 w-80 rounded-2xl h-[28rem] cursor-pointer overflow-hidden shadow-xl relative"
							onClick={() => setSelectedId(card.id)}
							whileTap={{ scale: 0.97 }}
							whileHover={{
								scale: 1.02,
								y: -4,
								boxShadow: '0 20px 40px -12px rgba(255, 255, 255, 0.1)',
							}}
							transition={{ type: 'spring', stiffness: 200, damping: 25 }}
							style={{
								backgroundImage: `url(${card.img})`,
								backgroundSize: 'cover',
								backgroundPosition: 'center',
							}}
						>
							<motion.div
								className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/60 to-black/20 p-6 flex flex-col justify-between"
								whileHover={{
									background:
										'linear-gradient(to top, rgba(0,0,0,0.9), rgba(0,0,0,0.7), rgba(0,0,0,0.3))',
								}}
								transition={{ duration: 0.3 }}
							>
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
										whileHover={{ color: '#ffffff', y: -1 }}
										transition={{ duration: 0.2 }}
									>
										{card.short}
									</motion.p>
								</div>
								<motion.span
									className="text-2xl self-end text-white/80 hover:text-white font-bold"
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
							<div className="absolute inset-0 bg-black/60 p-8 flex flex-col justify-between">
								<div>
									<motion.h2
										className="text-3xl font-bold mb-4"
										initial={{ y: 20, opacity: 0 }}
										animate={{ y: 0, opacity: 1 }}
										transition={{ delay: 0.1 }}
									>
										{selectedCard.title}
									</motion.h2>
									<motion.p
										className="text-gray-200 text-lg leading-relaxed"
										initial={{ y: 20, opacity: 0 }}
										animate={{ y: 0, opacity: 1 }}
										transition={{ delay: 0.2 }}
									>
										{selectedCard.long}
									</motion.p>
								</div>
								<motion.button
									onClick={() => setSelectedId(null)}
									className="text-3xl self-end text-white/80 hover:text-white transition-colors"
									whileHover={{
										scale: 1.2,
										rotate: 90,
										color: '#ffffff',
									}}
									initial={{ y: 20, opacity: 0 }}
									animate={{ y: 0, opacity: 1 }}
									transition={{ delay: 0.3, duration: 0.2 }}
								>
									
								</motion.button>
							</div>
						</motion.div>
					</motion.div>
				)}
			</AnimatePresence>
		</div>
	);
}