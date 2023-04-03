import ContextHook from '../hooks/ContextHook';

function DetailedView() {
	const { data, activeCard, setSingleView, countryName, filterOption } =
		ContextHook();
	const country = data[activeCard];
	console.log(data[activeCard]);

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
		<div className='xl:container mx-5 xl:mx-auto xl:px-12'>
			<button
				onClick={HandleBackClick}
				className='btn appearance-none px-8 py-1 rounded-sm shadow-md my-6 md:my-14'>
				Back
			</button>
			<div className='w-full grid grid-cols-1 md:grid-cols-2 gap-4'>
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
					<h1 className='text-xl md:text-2xl lg:text-4xl font-extrabold mb-5'>
						{country.name.common}
					</h1>
					<div className='w-full grid grid-cols-1 mb-2 pb-2 md:grid-cols-2 gap-2  border-b border-slate-700 '>
						<div>
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
						<div>
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
					<BorderCountries borders={country.borders}/>
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
				className='text-sm font-semibold lg:text-base underline underline-offset-2 '>
				{title}
			</a>
		);
	} else {
		return null;
	}
}

function SingleLineText({ text, title }) {
	return (
		<p className='text-sm lg:text-base'>
			<span className='font-semibold'>{title}</span> {text}
		</p>
	);
}

function BorderCountries({ borders }) {
	if (typeof(borders) === "undefined" || borders.length === 0) return null;
	const { data, setActiveCard } = ContextHook();
	const borderCountries = []
	data.forEach ((country, index) => {
		if (borders.includes(country.cca3)) {
			borderCountries.push([country, index])
		}
	}
	)
	return (
		<div>
			{borderCountries.map((country) => {
				return (
					<button onClick={() => setActiveCard(country[1])} className='btn appearance-none px-8 py-1 rounded-sm shadow-md my-6 md:my-14'>
						{country[0].name.common}
					</button>
				);
			})}
		</div>
	);
}

export default DetailedView;
