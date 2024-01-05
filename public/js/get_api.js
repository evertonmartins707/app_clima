// Endpoint: http://localhost:8080

// Realiza a chamada para à API

export const getApiCity = (name_city) => {
	const result = fetch(`http://localhost:8080/${name_city}`, {
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
	const result = fetch('http://localhost:8080', {
		method: 'GET',
	})
		.then((res) => res.json())
		.then((data) => {
			return data;
		})
		.catch((err) => alert('Não foi possível localizar a cidade', err));
	return result;
};
