const { request } = require('express');

const { api } = require('./connection_api.js');
const { valuesRequireds } = require('./connection_api.js');

// Chamada por nome de cidade
const resultApiCity = (value_city, key) => {
	const result = fetch(
		`${api.baseApi}?format=${api.returnFormat}&array_limit=7&fields=only_results,${valuesRequireds}&key=${key}&city_name=${value_city}`,
		{
			method: 'GET',
			cache: 'default',
		},
	) // Link de chamada para API seguindo todos os parâmetros
		.then((res) => res.json()) // Retorna o resultado em um arquivo JSON
		.then((data) => {
			// Obtém os dados do arquivo JSON
			return data;
		})
		.catch((err) => alert('Não foi possível localizar a cidade', err));
	return result;
};

const resultApiIp = (key) => {
	const result = fetch(`${api.baseApi}?key=${key}&user_ip=remote`)
		.then((res) => res.json())
		.then((data) => {
			return data;
		})
		.catch((err) => console.log(err));
	return result;
};

// Chamada por WOEID
const resultApiWoeid = () => {
	const result = fetch(
		`${api.baseApi}?format=${api.returnFormat}&woeid=455819`,
		{
			method: 'GET',
			cache: 'default',
		},
	) // Link de chamada para API seguindo todos os parâmetros
		.then((res) => res.json()) // Retorna o resultado em um arquivo JSON
		.then((data) => {
			// Obtém os dados do arquivo JSON
			return data;
		})
		.catch((err) => alert('Não foi possível localizar a cidade', err));
	return result;
};

module.exports = {
	resultApiCity,
	resultApiWoeid,
	resultApiIp,
};
