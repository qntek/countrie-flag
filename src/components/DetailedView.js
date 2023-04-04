import ContextHook from '../hooks/ContextHook';
import Button from './Button';

function DetailedView() {
	const { data, activeCard, setSingleView, countryName, filterOption } =
		ContextHook();
	const country = data[activeCard];
	const HandleBackClick = () => {
		setSingleView(false);
		setTimeout(() => {
			document.getElementById('searchValue').value = countryName;
			document.getElementById('filterValue').value = filterOption;
			document.getElementById('searchValue').focus();
		}, 150);
	};

	let nativeName;
	for (let value in Object.values(country.name.nativeName)) {
		nativeName = Object.values(country.name.nativeName)[value].common;
	}
	let currencies;
	for (let key of Object.keys(country.currencies)) {
		currencies = `${country.currencies[key].name} / ${country.currencies[key].symbol}`;
		if (currencies.includes('undefined')) {
			currencies = '';
		}
	}
	const languages = [];
	for (let key of Object.keys(country.languages)) {
		languages.push(country.languages[key]);
	}
	return (
		<div className='xl:container mx-5 xl:mx-auto xl:px-12 mt-6 md:mt-14 pb-32'>
			<Button onClick={HandleBackClick}>Back</Button>
			<div className='w-full grid grid-cols-1 md:grid-cols-2 gap-4 mt-6 md:mt-14'>
				<div className='border-solid '>
					<img
						src={country.flags.svg}
						alt={country.flags.alt}
						className='w-full border border-gray-500'
					/>
				</div>
				<div
					className='md:mx-5 lg:mx-12 tracking-wide
'>
					<h1 className='text-2xl lg:text-4xl font-extrabold mb-5 text-center md:text-left'>
						{country.name.common}
					</h1>
					<div className='w-full grid grid-cols-1 mb-3 pb-2 md:grid-cols-2 gap-2  border-b'>
						<div className='mx-auto lg:m-0 md:w-full w-1/2 text-center md:text-left'>
							<SingleLineText title={'Native name: '} text={nativeName} />
							<Link url={country.coatOfArms.png} title={'Emblem'} />
							<SingleLineText title={'Continent: '} text={country.continents} />
							<SingleLineText
								title={'Population: '}
								text={country.population}
							/>
							<SingleLineText title={'Capital: '} text={country.capital} />
							<SingleLineText
								title={'UN Member: '}
								text={country.unMember ? 'Yes' : 'No'}
							/>
						</div>
						<div className='mx-auto lg:m-0 md:w-full w-1/2 text-center  md:text-left mb-2 md:mb-0'>
							<SingleLineText title={'Top Level Domain: '} text={country.tld} />
							<SingleLineText title={'Currencies: '} text={currencies} />
							<SingleLineText
								title={'Traffic direction: '}
								text={country.car.side}
							/>
							<SingleLineText title={'Timezone: '} text={country.timezones} />
							<Link url={country.maps.googleMaps} title='View on Google Maps' />
						</div>
					</div>
					<SingleLineText title={'Languages: '} text={languages.join(', ')} />
					<BorderCountries borders={country.borders} />
				</div>
			</div>
		</div>
	);
}

function Link({ url, title }) {
	if (url) {
		return (
			<a
				href={url}
				target='_blank'
				rel='noreferrer'
				className='font-semibold text-base underline underline-offset-2'>
				{title}
			</a>
		);
	} else {
		return null;
	}
}

function SingleLineText({ text, title }) {
	if (Array.isArray(text)) {
		text = text.join(', ');
	}
	return (
		<p className='text-base '>
			<span className='font-semibold'>{title}</span> {text}
		</p>
	);
}

function BorderCountries({ borders }) {
	if (typeof borders === 'undefined' || borders.length === 0) return null;
	const { data, setActiveCard } = ContextHook();
	const borderCountries = [];
	data.forEach((country, index) => {
		if (borders.includes(country.cca3)) {
			borderCountries.push([country, index]);
		}
	});
	return (
		<div className=' mt-2'>
			<p className='text-base font-semibold mr-3 mb-3'>Border&nbsp;countries: </p>
			{borderCountries.map((country, index) => {
				return (
					<Button
						key={index}
						onClick={() => setActiveCard(country[1])}
						className='mr-2 my-2'>
						{country[0].name.common}
					</Button>
				);
			})}
		</div>
	);
}

export default DetailedView;
