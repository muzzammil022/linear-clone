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

	const handleInteractionStart = (cardId: number) => {
		setHovered(cardId);
	};

	const handleInteractionEnd = () => {
		// Delay clearing hover state on mobile for better UX
		if (isMobile) {
			setTimeout(() => setHovered(null), 150);
		} else {
			setHovered(null);
		}
	};

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

					// Mobile-specific animations
					const mobileAnimations = {
						scale: isHovered ? hoverScale : 1,
						y: isHovered ? -6 : 0,
						zIndex: isHovered ? 100 : zIndex,
					};

					// Desktop animations
					const desktopAnimations = {
						scale: 1,
						y: 0,
					};

					return (
						<motion.div
							key={card.id}
							className="absolute w-full p-4 rounded-xl bg-neutral-900 shadow-lg border border-white/10 text-white cursor-pointer"
							style={isMobile ? mobileStyle : desktopStyle}
							initial={isMobile ? { scale: 1, y: 0 } : { scale: 1, y: 0 }}
							animate={isMobile ? mobileAnimations : desktopAnimations}
							whileHover={isMobile ? {} : { scale: hoverScale, y: -6 }}
							whileTap={{ scale: hoverScale * 0.98, y: -3 }}
							transition={{
								type: 'spring',
								stiffness: 300,
								damping: 25,
								duration: 0.15,
							}}
							onMouseEnter={() => !isMobile && handleInteractionStart(card.id)}
							onMouseLeave={() => !isMobile && handleInteractionEnd()}
							onTouchStart={(e) => {
								e.preventDefault();
								handleInteractionStart(card.id);
							}}
							onTouchEnd={(e) => {
								e.preventDefault();
								handleInteractionEnd();
							}}
							onClick={() => {
								if (isMobile) {
									handleInteractionStart(card.id);
									setTimeout(() => setHovered(null), 1000);
								}
							}}
						>
							<div className="flex items-center gap-2 mb-2">
								<span
									className={`font-semibold transition-colors duration-200 ${
										shouldShowColor ? card.color : 'text-gray-400'
									}`}
								>
									{card.icon}
								</span>
								<span
									className={`font-semibold transition-colors duration-200 ${
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