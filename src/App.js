import { useEffect } from 'react';
import ContextHook from './hooks/ContextHook';
import Header from './components/Header';
import Inputs from './components/Inputs';
import AllCards from './components/AllCards';
import './style/index.css';

function App() {
	const { isDarkMode, isSingleView, setSingleView } = ContextHook();

	useEffect(() => {
		const body = document.querySelector('body');
		isDarkMode
			? body.setAttribute('data-dark', 'true')
			: body.setAttribute('data-dark', 'false');
	}, [isDarkMode]);

	return (
		<div>
			<Header />
			{isSingleView ? null : (
				<>
					<Inputs />
					<AllCards />
				</>
			)}
			{isSingleView ? (
				<button onClick={() => setSingleView(false)}>Back</button>
			) : null}
		</div>
	);
}
export default App;
