import ContextHook from '../hooks/ContextHook';
function Inputs() {
	const { countryName, setCountryName, filterOption, setFilter } =
		ContextHook();

	const onChange = (e) => {
		console.log(e.target);
		setCountryName(e.target.value);
	};

	const onChangeOption = (e) => {
		setFilter(e.target.value);
	};

	return (
		<div className='xl:container xl:mx-auto mx-5 my-8 md:flex md:justify-between md:align-middle'>
			<input
				value={countryName}
				onChange={onChange}
				aria-label='Country name'
				className='filter-options-input h-10 block px-5 py-3 w-full md:w-1/2 xl:w-1/3 rounded-md'
			/>
			<select
				className='filter-options-input h-10 mt-8 md:my-0 px-5 rounded-md'
				onChange={onChangeOption}>
				<option default value='all'>
					Filter by Region
				</option>
				<option value='africa'>Africa</option>
				<option value='america'>America</option>
				<option value='asia'>Asia</option>
				<option value='europe'>Europe</option>
				<option value='oceania'>Oceania</option>
			</select>
		</div>
	);
}

export default Inputs;
