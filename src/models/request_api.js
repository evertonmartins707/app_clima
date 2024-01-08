// Importações | Imports
const { api } = require('./connection_api.js');
const { valuesRequireds } = require('./connection_api.js');

// Chamada por nome de cidade | Call by city name
const resultApiCity = (value_city, key) => {
	const result = fetch(
		`${api.baseApi}?format=${api.returnFormat}&array_limit=7&fields=only_results,${valuesRequireds}&key=${key}&city_name=${value_city}`,
		{
			method: 'GET',
			cache: 'default',
		},
	)
		.then((res) => res.json()) // Retorna o resultado em um arquivo JSON
		.then((data) => {
			// Obtém os dados do arquivo JSON
			return data;
		})
		.catch((err) => {
			return err;
		});
	return result;
};

// Chamada por IP | Call by IP
const resultApiIp = (key) => {
	const result = fetch(
		`${api.baseApi}?format=${api.returnFormat}&woeid=455819`,
		{
			method: 'GET',
			cache: 'default',
		},
	)
		.then((res) => res.json()) // Retorna o resultado em um arquivo JSON
		.then((data) => {
			// Obtém os dados do arquivo JSON
			return data;
		})
		.catch((err) => {
			return err;
		});
	return result;
};

// Chamada por WOEID | Call by WOEID
const resultApiWoeid = () => {
	const result = fetch(
		`${api.baseApi}?format=${api.returnFormat}&woeid=455819`,
		{
			method: 'GET',
			cache: 'default',
		},
	)
		.then((res) => res.json()) // Retorna o resultado em um arquivo JSON
		.then((data) => {
			// Obtém os dados do arquivo JSON
			return data;
		})
		.catch((err) => {
			return err;
		});
	return result;
};

// -----------------------
module.exports = {
	resultApiCity,
	resultApiWoeid,
	resultApiIp,
};
