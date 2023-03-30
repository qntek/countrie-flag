import { useEffect } from 'react';
import ContextHook from './hooks/ContextHook';
import Header from './components/Header';
import './style/index.css';

function App() {
  const { isDarkMode } = ContextHook();
	useEffect(() => {
		const body = document.querySelector('body');
		isDarkMode
			? body.setAttribute('data-dark', 'true')
			: body.setAttribute('data-dark', 'false');
	}, [isDarkMode]);
	
	return (
		<div>
			<Header />
		</div>
	);
}

export default App;
