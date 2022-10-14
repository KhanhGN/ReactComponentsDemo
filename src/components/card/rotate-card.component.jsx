import { useEffect, useState } from 'react';

const RotateCard = ({
	children,
	width = 250,
	height = 400,
	maxRotate = 20,
	maxStep = 10,
	blur = 20,
	color = '#ffffff44',
	spread = 0,
	style,
	container = document,
	borderColor = '#0000',
	borderWeight = 0,
}) => {
	const [coord, setCoord] = useState({ x: 0, y: 0 });
	const { x, y } = coord;

	const rotateHandler = (e) => {
		const midX = window.innerWidth / 2;
		const midY = window.innerHeight / 2;
		let { x, y } = e;
		x = (x - midX) / maxStep;
		y = (y - midY) / maxStep;
		if (x > maxRotate) x = maxRotate;
		if (x < -maxRotate) x = -maxRotate;
		if (y > maxRotate) y = maxRotate;
		if (y < -maxRotate) y = -maxRotate;
		setCoord({ x, y });
	};

	const resetRotateHandler = () => {
		setCoord({ x: 0, y: 0 });
	};

	useEffect(() => {
		container.addEventListener('mousemove', rotateHandler);
		container.addEventListener('mouseleave', resetRotateHandler);
		return () => {
			container.removeEventListener('mousemove', rotateHandler);
			container.removeEventListener('mouseleave', resetRotateHandler);
		};
	}, []);

	return (
		<div
			style={{
				perspective: 1000,
				width,
				height,

				transformStyle: 'preserve-3d',
			}}
		>
			<div
				style={{
					width: 'inherit',
					height: 'inherit',
					borderRadius: 16,
					overflow: 'hidden',
					background: '#222',
					transform: `rotateY(${-x}deg) rotateX(${y}deg)`,
					position: 'relative',
					boxShadow: `0px 0px 0px ${borderWeight}px ${borderColor}`,
					...style,
				}}
			>
				{children}
				<div
					style={{
						boxShadow: `inset ${-x}px ${-y}px ${x || y ? blur : 0}px ${spread}px ${color}`,
						zIndex: 100,
						width: 'inherit',
						height: 'inherit',
						position: 'absolute',
						top: 0,
						left: 0,
						borderRadius: 16,
					}}
				></div>
			</div>
		</div>
	);
};

export default RotateCard;
