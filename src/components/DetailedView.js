import ContextHook from '../hooks/ContextHook';

function DetailedView() {
	const { data, activeCard, setSingleView, countryName, filterOption } = ContextHook();
	const country = data[activeCard];
	// console.log(data[activeCard]);

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
		<div className='xl:container mx-5 xl:mx-auto xl:px-12 mt-12'>
			<button onClick={HandleBackClick} className='btn appearance-none drop-shadow-2xl px-8 py-1 rounded-sm'>Back</button>
			<div className='w-full grid grid-cols-1 md:grid-cols-2 gap-4'>
				<div>
					<img
						src={country.flags.svg}
						alt={country.flags.alt}
						className='w-full'
					/>
				</div>
				<div className='w-full grid grid-cols-1 md:grid-cols-2 gap-4'>
					<div>
						<h1>{country.name.common}</h1>
						<SingleLineText title={'Native name: '} text={nativeName} />
						<Link url={country.coatOfArms.png} title={'Emblem'} />
						<SingleLineText title={'Continent: '} text={country.continents} />
						<SingleLineText title={'Population: '} text={country.population} />
						<SingleLineText title={'Capital: '} text={country.capital} />
						<SingleLineText
							title={'UN Member: '}
							text={country.unMember ? 'Yes' : 'No'}
						/>
					</div>
					<div>
						<SingleLineText title={'Top Level Domain: '} text={country.tld} />
						<SingleLineText title={'Currencies: '} text={currencies} />
            <SingleLineText title={'Traffic direction: '} text={country.car.side} />
            <SingleLineText title={'Timezone: '} text={country.timezones} />
            <Link url={country.maps.googleMaps} title='View on Google Maps' />
            <SingleLineText title={'Languages: '} text={languages.join(', ')} />
					</div>
				</div>
			</div>
		</div>
	);
}

function Link({ url, title }) {
	if (url) {
		return (
			<a href={url} target='_blank' rel='noreferrer'>
				{title}
			</a>
		);
	} else {
		return null;
	}
}

function SingleLineText({ text, title }) {
	return (
		<p>
			<span>{title}</span> {text}
		</p>
	);
}

export default DetailedView;
