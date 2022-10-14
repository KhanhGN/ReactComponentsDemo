import { useEffect, useRef, useState } from 'react';
import { FlipCard, RotateCard } from '../components/card';

const ComponentPage = () => {
	const [rotateCardRef, setRotateCardRef] = useState(null);

	return (
		<div>
			<nav>
				<a href='#card'>Card</a>
				<a href='#flip-card'>Flip Card</a>
				<a href='#rotate-card'>Rotate Card</a>
			</nav>
			<section id='card'>
				<h1>Card</h1>
				<section
					id='flip-card'
					style={{
						display: 'flex',
						flexFlow: 'column',
					}}
				>
					<h2>Flip Card</h2>
					<div
						style={{
							width: '100%',
							display: 'flex',
							justifyContent: 'center',
							alignItems: 'center',
							margin: '40px 0px',
						}}
					>
						<FlipCard
							front={<img src='https://picsum.photos/250/400/' alt='' />}
							back={<img src='https://picsum.photos/251/400/' alt='' />}
						></FlipCard>
					</div>
				</section>
				<section
					id='rotate-card'
					style={{
						display: 'flex',
						flexFlow: 'column',
					}}
				>
					<h2>Rotate Card</h2>
					<div>
						<h3>Notes</h3>
						<p>Card border is done using box-shadow to prevent anomalies.</p>
						<p>Increase the brightness of color to have better reflections</p>
					</div>
					<div
						ref={(ref) => setRotateCardRef(ref)}
						id='rotate-card-container'
						style={{
							width: '100%',
							display: 'flex',
							justifyContent: 'center',
							alignItems: 'center',
							margin: '40px 0px',
							height: 800,
						}}
					>
						{rotateCardRef && (
							<RotateCard container={rotateCardRef}>
								<img
									src='https://picsum.photos/251/400/'
									alt='Random image'
									width={250}
									height={400}
									style={{ objectFit: 'cover', objectPosition: 'center' }}
								/>
							</RotateCard>
						)}
					</div>
				</section>
			</section>
		</div>
	);
};

export default ComponentPage;
