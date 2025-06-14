'use client';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

const cards = [
	{
		id: 3,
		status: 'Off track',
		color: 'text-red-500',
		icon: '🔴',
		desc: 'Unexpected roadblocks forced us to take a different path...',
		date: 'Oct 10',
	},
	{
		id: 2,
		status: 'At risk',
		color: 'text-orange-400',
		icon: '🟠',
		desc: 'Progress slowed down last week because...',
		date: 'Oct 1',
	},
	{
		id: 1,
		status: 'On track',
		color: 'text-green-400',
		icon: '🟢',
		desc: 'We are ready to launch next Thursday',
		date: 'Sep 8',
	},
];

export default function StatusCards() {
	const [hovered, setHovered] = useState<number | null>(null);
	const [isMobile, setIsMobile] = useState(false);

	useEffect(() => {
		const checkMobile = () => {
			setIsMobile(window.innerWidth < 768);
		};

		checkMobile();
		window.addEventListener('resize', checkMobile);

		return () => window.removeEventListener('resize', checkMobile);
	}, []);

	return (
		<div className="relative w-full flex items-center justify-center bg-black px-4 py-16">
			<div
				className="relative w-full max-w-sm"
				style={{ perspective: isMobile ? 'none' : '1000px' }}
			>
				{cards.map((card, index) => {
					const zIndex = index + 1;
					const isHovered = hovered === card.id;
					const shouldShowColor = card.id === 1 || isHovered;
					const hoverScale = card.id === 2 || card.id === 3 ? 1.1 : 1.04;

					// Different positioning for mobile vs desktop
					const mobileStyle = {
						top: `${index * 1.5}rem`,
						left: `${index * 1}rem`,
						zIndex,
						transform: `rotate(-${index * 3}deg)`,
						transformOrigin: 'center center',
					};

					const desktopStyle = {
						top: `${index * 3}rem`,
						left: `${index * 2.5}rem`,
						zIndex,
						transform: `rotateZ(-18deg) rotateY(-15deg) rotateX(5deg)`,
						transformOrigin: 'center center',
					};

					return (
						<motion.div
							key={card.id}
							className="absolute w-full p-4 rounded-xl bg-neutral-900 shadow-lg border border-white/10 text-white"
							style={isMobile ? mobileStyle : desktopStyle}
							initial={{ scale: 1, y: 0 }}
							whileHover={{ scale: hoverScale, y: -6 }}
							whileTap={{ scale: hoverScale * 0.95, y: -3 }} // Added tap animation for mobile
							transition={{
								type: 'spring',
								stiffness: 200,
								damping: 20,
								duration: 0.2, // Faster animation for mobile
							}}
							onMouseEnter={() => setHovered(card.id)}
							onMouseLeave={() => setHovered(null)}
							onTouchStart={() => setHovered(card.id)} // Touch support
							onTouchEnd={() => setHovered(null)}
						>
							<div className="flex items-center gap-2 mb-2">
								<span
									className={`font-semibold ${
										shouldShowColor ? card.color : 'text-gray-400'
									}`}
								>
									{card.icon}
								</span>
								<span
									className={`font-semibold ${
										shouldShowColor ? card.color : 'text-gray-400'
									}`}
								>
									{card.status}
								</span>
							</div>
							<p className="text-sm text-gray-200">{card.desc}</p>
							<p className="text-xs text-gray-400 mt-2">{card.date}</p>
						</motion.div>
					);
				})}
			</div>
		</div>
	);
}