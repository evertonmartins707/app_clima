// Endpoint: https://apiweather-evertonmartins.onrender.com

// Realiza a chamada para à API

export const getApiCity = (name_city) => {
	const result = fetch(`https://apiweather-evertonmartins.onrender.com/${name_city}`, {
		method: 'GET',
	})
		.then((res) => res.json())
		.then((data) => {
			return data;
		})
		.catch((err) => alert('Não foi possível localizar a cidade', err));
	return result;
};
export const getApiWoeid = () => {
	const result = fetch('https://apiweather-evertonmartins.onrender.com', {
		method: 'GET',
	})
		.then((res) => res.json())
		.then((data) => {
			return data;
		})
		.catch((err) => alert('Não foi possível localizar a cidade', err));
	return result;
};
