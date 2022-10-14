import './App.css';
import { RotateCard } from './components/card';
import { Routes, Route } from 'react-router-dom';
import ComponentPage from './pages/component-page';

function App() {
	return (
		<div className='App'>
			<Routes>
				<Route path='/'>
					<Route index element={<ComponentPage />}></Route>
				</Route>
			</Routes>
		</div>
	);
}

export default App;
