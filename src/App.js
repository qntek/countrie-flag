import { useEffect } from 'react';
import ContextHook from './hooks/ContextHook';
import Header from './components/Header';
import Inputs from './components/Inputs';
import AllCards from './components/AllCards';
import DetailedView from './components/DetailedView';
import Footer from './components/Footer';
import './style/index.css';

function App() {
	const { isDarkMode, isSingleView } = ContextHook();

	useEffect(() => {
		const body = document.querySelector('body');
		isDarkMode
			? body.setAttribute('data-dark', 'true')
			: body.setAttribute('data-dark', 'false');
		if (!isSingleView) document.getElementById('searchValue').focus()
	}, [isDarkMode, isSingleView]);

	return (
		<div className='min-h-screen relative'>
			<Header />
			{isSingleView ? 
				<DetailedView />
			 : (
				<>
					<Inputs />
					<AllCards />
				</>
			)}
			<Footer />
		</div>
	);
}
export default App;
