// Importações | Imports
const express = require('express');
const requestApi = require('../models/request_api.js');
require('dotenv').config();

// Realizar chamada para a API 'weather' pelo nome da cidade
const requestApiCity = async (req, res) => {
	const city_name = req.params.id;
	let data = await requestApi.resultApiCity(city_name, process.env.KEY_API);

	// Verificação de error | Error checking
	if (data['error']) {
		// Realiza uma nova tentativa com outra chave | Make a new attempt with another key
		data = await requestApi.resultApiCity(
			city_name,
			process.env.SECOND_KEY_API,
		);

		// Tratamento de error | Error handling
		if (data['error']) {
			return res.status(503).json({
				cod: 503,
				message: data['message'],
			});
		}
	}

	// Resposta de sucesso | Successful responses
	return res.status(200).json({
		cod: 200,
		response: data,
		serverMessage: 'Sucesso!',
	});
};

// Realizar chamada para API 'weather' pelo código 'woeid'
const requestApiWoeid = async (req, res) => {
	// Busca automática por IP | Automatic search by IP
	let data = await requestApi.resultApiIp(process.env.KEY_IP);

	// Verificação de error | Error checking
	if (data['by'] === 'default') {
		// Realiza a chamada por código WOEID | Performs the search by WOEID code
		data = await requestApi.resultApiWoeid();
		console.log(data);

		// Tratamento de error | Error handling
		if (data['error']) {
			return res.status(503).json({
				cod: 503,
				results: {
					temp: 0,
					description: 'Serviço indisponível',
					city: 'Dados ficticios,',
					humidity: 0,
					condition_slug: 'cloudly_night',
				},
			});
		}

		// Resposta de sucesso (WOEID) | Successful responses (WOEID)
		return res.status(200).json({
			cod: 200,
			response: data,
			serverMessage:
				'Não foi possível buscar os dados de sua localização! Por favor use a caixa de pesquisa.',
		});
	}

	// Resposta de sucesso (IP) | Successful responses (IP)
	return res.status(200).json({
		cod: 200,
		response: data,
		serverMessage: 'Pesquisa por IP',
	});
};

// -----------------------
module.exports = {
	requestApiCity,
	requestApiWoeid,
};
