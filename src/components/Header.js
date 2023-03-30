import moonIcon from '../svg/moon.svg';
import moonIconLight from '../svg/moonLight.svg';
import ContextHook from '../hooks/ContextHook';

function Header() {
	const { isDarkMode, setDarkMode } = ContextHook();
	return (
		<header className=' py-6'>
			<div className='xl:container mx-5 xl:mx-auto flex flex-row justify-between'>
				<div>
					<h1 className='font-extrabold'>Where in the word?</h1>
				</div>
				<div
					onClick={() => setDarkMode(!isDarkMode)}
					className='flex flex-row cursor-pointer'>
					<img src={isDarkMode ? moonIconLight : moonIcon} alt='' />
					<p className='font-semibold pl-2'>Dark Mode</p>
				</div>
			</div>
		</header>
	);
}

export default Header;
