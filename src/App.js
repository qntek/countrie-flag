import { useEffect } from 'react';
import ContextHook from './hooks/ContextHook';
import Header from './components/Header';
import Inputs from './components/Inputs';
import AllCards from './components/AllCards';
import DetailedView from './components/DetailedView';
import './style/index.css';

function App() {
	const { isDarkMode, isSingleView } = ContextHook();

	useEffect(() => {
		const body = document.querySelector('body');
		isDarkMode
			? body.setAttribute('data-dark', 'true')
			: body.setAttribute('data-dark', 'false');
			document.getElementById('searchValue').focus()
	}, [isDarkMode]);

	return (
		<div>
			<Header />
			{isSingleView ? 
				<DetailedView />
			 : (
				<>
					<Inputs />
					<AllCards />
				</>
			)}
		</div>
	);
}
export default App;
