import { useEffect, useState } from 'react';

const RotateCard = ({
	children,
	maxRotate = 60,
	maxStep = 10,
	blur = 30,
	color = '#FFFFFF88',
	spread = 0,
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
		document.addEventListener('mousemove', rotateHandler);
		document.addEventListener('mouseleave', resetRotateHandler);
		return () => {
			document.removeEventListener('mousemove', rotateHandler);
			document.removeEventListener('mouseleave', resetRotateHandler);
		};
	}, []);

	return (
		<div
			style={{
				background: '#222',
				width: 250,
				height: 400,
				borderRadius: 16,
				transform: `rotateX(${y}deg) rotateY(${x}deg)`,
				overflow: 'hidden',
				position: 'relative',
			}}
		>
			{children}
			<div
				style={{
					boxShadow: `inset ${-x}px ${-y}px ${blur}px ${spread}px ${color}`,
					zIndex: 100,
					width: '100%',
					height: '100%',
					position: 'absolute',
					top: 0,
					left: 0,
					borderRadius: 16,
				}}
			></div>
		</div>
	);
};

export default RotateCard;
