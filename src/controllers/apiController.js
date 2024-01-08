const express = require('express');
const requestApi = require('../models/request_api.js');
require('dotenv').config();

// Realizar chamada para a API 'weather' pelo nome da cidade
const requestApiCity = async (req, res) => {
	const city_name = req.params.id;
	let data = await requestApi.resultApiCity(
		city_name,
		process.env.KEY_API,
	);
	while (data['error']) {
		data = await requestApi.resultApiCity(
			city_name,
			process.env.SECOND_KEY_API,
		);
		if (data['error']) {
			return res.status(503).json({
				error: 503,
				message: data['message'],
			});
		}
	}
	return res.status(200).json(data);
};

// Realizar chamada para API 'weather' pelo código 'woeid'
const requestApiWoeid = async (req, res) => {
	const data = await requestApi.resultApiWoeid();
	console.log(data);
	if (data['error']) {
		return res.status(503).json({
			error: 503,
			results: {
				temp: 0,
				description: 'Serviço indisponível',
				city: 'Dados ficticios,',
				humidity: 0,
				condition_slug: 'cloudly_night',
			},
		});
	}

	return res.status(200).json(data);
};
module.exports = {
	requestApiCity,
	requestApiWoeid,
};
