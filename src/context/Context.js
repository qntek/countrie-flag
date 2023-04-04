import { createContext, useState, useEffect } from 'react';
import loadData from '../utility/loadData';
// import data from '../data.json';

const appContext = createContext();

function Context({ children }) {
	

	let currentTheme;
	localStorage.getItem('theme') === 'true'
		? (currentTheme = true)
		: (currentTheme = false);
	const [isDarkMode, setDarkMode] = useState(currentTheme);
	const [countryName, setCountryName] = useState(''); //value for search by name
	const [filterOption, setFilter] = useState('all'); //value for filter by region
	const [isSingleView, setSingleView] = useState(false); //true when single country card is clicked
	const [activeCard, setActiveCard] = useState(null); //data index of the active card
	const [isLoading, setIsLoading] = useState(false); //true when data is loading
	const [data, setData] = useState([]); // data from API or LocalStorage

	useEffect(() => {
		async function fetchData() {
			loadData(setData, setIsLoading);
		}
		fetchData();
	}, []);


	const toShare = {
		isDarkMode,
		setDarkMode,
		countryName,
		setCountryName,
		filterOption,
		setFilter,
		isSingleView,
		setSingleView,
		activeCard,
		setActiveCard,
		data,
		isLoading
	};
	return <appContext.Provider value={toShare}>{children}</appContext.Provider>;
}

export { appContext };
export default Context;
