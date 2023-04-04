import { useEffect } from 'react';
import { FadeLoader } from 'react-spinners'
import ContextHook from './hooks/ContextHook';
import Header from './components/Header';
import Inputs from './components/Inputs';
import AllCards from './components/AllCards';
import DetailedView from './components/DetailedView';
import Footer from './components/Footer';
import './style/index.css';

function App() {
	const { isDarkMode, isSingleView, isLoading } = ContextHook();

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
			{isLoading ? <div className='absolute left-1/2 top-1/2 -translate-x-2/4 -translate-y-2/4 text-6xl'> <FadeLoader
        size={150}
        aria-label="Loading Spinner"
      /></div> : null}
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
