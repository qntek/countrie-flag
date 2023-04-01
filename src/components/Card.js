function Card({ flagUrl, flagAlt, countryName, population, region, capital }) {
	return (
		<div className='card w-full rounded-lg overflow-hidden drop-shadow-xl cursor-pointer hover:scale-105 transition-transform'>
			<img src={flagUrl} alt={flagAlt} className='w-full' />
			<div className='w-full px-5 py-8 '>
				<h2 className='text-2xl font-bold leading-loose'>{countryName}</h2>
				<p>
					<span className='font-bold leading-relaxed'>Population:</span>{' '}
					{population}
				</p>
				<p>
					<span className='font-bold leading-relaxed'>Region:</span> {region}
				</p>
				<p>
					<span className='font-bold leading-relaxed'>Capital:</span> {capital}
				</p>
			</div>
		</div>
	);
}

export default Card;
