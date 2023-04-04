import axios from 'axios';

async function getData(callback, setIsLoading) {
  //callback is used to change state of data in Context.js
	console.log('FETCHING DATA FROM API');
  setIsLoading(true);
	await axios
		.get('https://restcountries.com/v3.1/all')
		.then((response) => {
			const data = response.data;
			const cachedData = {
				data: data,
				cachedTime: new Date(),
			};
			localStorage.setItem('cachedData', JSON.stringify(cachedData));
			return cachedData;
		})
		.then((cachedData) => {
			callback(cachedData.data);
      setIsLoading(false);
			return cachedData;
		})
		.catch((error) => {
			console.error(error);
      setIsLoading(false);
		});
}

function loadData(callback, setIsLoading) {
	let cachedData = localStorage.getItem('cachedData');

	if (cachedData) {
		setIsLoading(true);
		const parsedData = JSON.parse(cachedData);
		const lastCachedTime = new Date(parsedData.cachedTime);
		const currentTime = new Date();

		if ((currentTime - lastCachedTime) / (1000 * 60 * 60 * 24) < 7) {
			// if data younger then one week - load data from LocalStorage
			const data = parsedData.data;
			console.log('FETCHING DATA FROM LOCAL STORAGE');
			setIsLoading(false);
			callback(data);
		} else {
			// if data older than one week - get data from API
			cachedData = getData(callback, setIsLoading);
		}
	} else {
		// lack of data in LocalStorage - get data from API
		cachedData = getData(callback, setIsLoading);
	}
}

export default loadData;
