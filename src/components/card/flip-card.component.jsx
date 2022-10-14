import { useState } from 'react';

const FlipCard = ({ front, back, bgColor = '#222', style, width = 250, height = 400 }) => {
	const [flipped, setFlipped] = useState(false);

	return (
		<div
			style={{ width: 250, height: 400, perspective: 1000 }}
			onClick={() => setFlipped((prev) => !prev)}
		>
			<div
				style={{
					transformStyle: 'preserve-3d',
					transition: 'all 0.55s ease-in-out',
					position: 'relative',
					width: 'inherit',
					height: 'inherit',
					transform: `rotateY(${flipped ? 180 : 0}deg)`,
				}}
			>
				<div
					style={{
						backfaceVisibility: 'hidden',
						position: 'absolute',
						top: 0,
						left: 0,
						width: '100%',
						height: '100%',
						display: 'flex',
						justifyContent: 'center',
						alignItems: 'center',
						backgroundColor: bgColor,
						transform: 'rotateY(0deg)',
						borderRadius: 16,
						overflow: 'hidden',
					}}
				>
					{front}
				</div>
				<div
					style={{
						backfaceVisibility: 'hidden',
						position: 'absolute',
						top: 0,
						left: 0,
						width: '100%',
						height: '100%',
						display: 'flex',
						justifyContent: 'center',
						alignItems: 'center',
						backgroundColor: bgColor,
						transform: 'rotateY(180deg)',
						borderRadius: 16,
						overflow: 'hidden',
					}}
				>
					{back}
				</div>
			</div>
		</div>
	);
};

export default FlipCard;
