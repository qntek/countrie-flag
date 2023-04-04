import ContextHook from '../hooks/ContextHook';
import Card from './Card';
import { isSimilarString } from '../utility/compareTwoStrings';

function AllCards() {
	const { countryName, filterOption, setSingleView, data } = ContextHook();
	const singleCardClickHandler = () => {
		setSingleView(true);
	};
	let response = data;
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
						id={index}
						flagUrl={country.flags.png}
						flagAlt={country.flags.alt}
						countryName={country.name.common}
						population={country.population}
						region={country.subregion}
						capital={country.capital}
						onClick={(e) => singleCardClickHandler(e)}
					/>
				);
			} else return null;
		} else return null;
	});

	return (
		<div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-12 px-5 md:px-12 xl:container xl:mx-auto grid-flow-dense'>
			{cards}
		</div>
	);
}
export default AllCards;
