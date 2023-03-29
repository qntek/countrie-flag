import { useEffect } from 'react';
import ContextHook from './hooks/ContextHook';
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
			
		</div>
	);
}

export default App;
