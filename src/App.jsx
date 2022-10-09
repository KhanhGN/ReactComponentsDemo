import './App.css';
import { RotateCard } from './components/card';

function App() {
	return (
		<div
			className='App'
			style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}
		>
			<RotateCard maxRotate={60} maxStep={10}>
				<img
					src='/assets/avatar.png'
					alt='my image'
					width={250}
					height={400}
					style={{
						objectFit: 'cover',
						objectPosition: 'center',
					}}
				/>
			</RotateCard>
		</div>
	);
}

export default App;
