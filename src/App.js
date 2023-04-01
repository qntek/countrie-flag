import { useEffect } from 'react';
import ContextHook from './hooks/ContextHook';
import Header from './components/Header';
import Inputs from './components/Inputs';
import Card from './components/Card';
import './style/index.css';
import data from './data.json';

function App() {
	const { isDarkMode } = ContextHook();

	useEffect(() => {
		const body = document.querySelector('body');
		isDarkMode
			? body.setAttribute('data-dark', 'true')
			: body.setAttribute('data-dark', 'false');
	}, [isDarkMode]);

	let response = data.flat();
	const cards = response.map((country, index) => {
		return (
			<Card
				key={index}
				flagUrl={country.flags.png}
				flagAlt={country.flags.alt}
				countryName={country.name.official}
				population={country.population}
				region={country.continents}
				capital={country.capital}
			/>
		);
	});

	return (
		<div>
			<Header />
			<Inputs />
			<div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-12  px-5 md:px-12 xl:container xl:mx-auto'>
				{cards}
			</div>
		</div>
	);
}
export default App;
