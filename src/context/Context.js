import { createContext, useState } from 'react';

const appContext = createContext();

function Context({ children }) {
	let currentTheme;
	localStorage.getItem('theme') === 'true'
		? (currentTheme = true)
		: (currentTheme = false);
	const [isDarkMode, setDarkMode] = useState(currentTheme);
	const [countryName, setCountryName] = useState('');
	const [filterOption, setFilter] = useState('all');
	const [isSingleView, setSingleView] = useState(false);

	const toShare = {
		isDarkMode,
		setDarkMode,
		countryName,
		setCountryName,
		filterOption,
		setFilter,
		isSingleView, setSingleView
	};
	return <appContext.Provider value={toShare}>{children}</appContext.Provider>;
}

export { appContext };
export default Context;
