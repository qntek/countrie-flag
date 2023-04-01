import { useRef } from 'react';
import ContextHook from '../hooks/ContextHook';
import searchIcon from '../svg/search.svg';
import searchIconLight from '../svg/searchWhite.svg';

function Inputs() {
	const { isDarkMode, setCountryName, setFilter } = ContextHook();

	const onSubmit = (e) => {
		if (e.key === 'Enter') setCountryName(e.target.value);
	};

	const onChangeOption = (e) => {
		setFilter(e.target.value);
	};

	let icon;
	isDarkMode ? (icon = searchIconLight) : (icon = searchIcon);
	const inputRef = useRef();
	return (
		<div className='xl:container xl:mx-auto mx-5 my-8 md:flex md:justify-between md:align-middle md:px-7 xl:px-12'>
			<div className='block relative w-full md:w-1/2 xl:w-1/3'>
				<input
					ref={inputRef}
					placeholder='Search for a country...'
					onKeyDown={(e) => {
						onSubmit(e);
					}}
					onChange={(e) => {
						if (inputRef.current.value === '') setCountryName('');
					}}
					aria-label='Country name'
					className='filter-options-input h-10 ps-10 py-3 w-full  rounded-md'
				/>
				<img
					src={icon}
					alt=''
					className='absolute top-1/2 -translate-y-1/2 left-2 cursor-pointer'
					onClick={() => setCountryName(inputRef.current.value)}
				/>
			</div>
			<select
				className='filter-options-input h-10 mt-8 md:my-0 px-5 rounded-md'
				onChange={onChangeOption}>
				<option default value='all'>
					Filter by Region
				</option>
				<option value='africa'>Africa</option>
				<option value='americas'>Americas</option>
				<option value='asia'>Asia</option>
				<option value='europe'>Europe</option>
				<option value='oceania'>Oceania</option>
			</select>
		</div>
	);
}

export default Inputs;
