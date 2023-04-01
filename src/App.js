import { useEffect } from 'react';
import ContextHook from './hooks/ContextHook';
import Header from './components/Header';
import Inputs from './components/Inputs';
import Card from './components/Card';
import { isSimilarString } from './utility/compareTwoStrings';
import data from './data.json';
import './style/index.css';

function App() {
	const { isDarkMode, isSingleView, countryName, filterOption } = ContextHook();

	useEffect(() => {
		const body = document.querySelector('body');
		isDarkMode
			? body.setAttribute('data-dark', 'true')
			: body.setAttribute('data-dark', 'false');
	}, [isDarkMode]);

	let response = data;
	// console.log(response);
	const cards = response.map((country, index) => {
		if (
			filterOption === 'all' ||
			filterOption === country.region.toLowerCase()
		) {
			if (
				isSimilarString(country.name, countryName) ||
				countryName.length === 0
			) {
				return (
					<Card
						key={index}
						flagUrl={country.flags.png}
						flagAlt={country.flags.alt}
						countryName={country.name.common}
						population={country.population}
						region={country.subregion}
						capital={country.capital}
					/>
				);
			} else return null;
		} else return null;
	});

	return (
		<div>
			<Header />
			<Inputs />
			{isSingleView ? null : (
				<div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-12  px-5 md:px-12 xl:container xl:mx-auto'>
					{cards}
				</div>
			)}
		</div>
	);
}
export default App;
