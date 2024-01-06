const express = require('express');
const requestApi = require('../models/request_api.js');
require('dotenv').config();

// Realizar chamada para a API 'weather' pelo nome da cidade
const requestApiCity = async (req, res) => {
	const city_name = req.params.id;
	let data_response = await requestApi.resultApiCity(city_name, process.env.KEY_API);
	while (data_response['error']) {
		data_response = await requestApi.resultApiCity(city_name, process.env.SECOND_KEY_API)
		if (data_response['error']) {
			return res.status(503).json({
				message: data_response['message'],
			});
		}
	}
	return res.status(200).json(data_response);
};

// Realizar chamada para API 'weather' pelo código 'woeid'
const requestApiWoeid = async (req, res) => {
	let data_response = await requestApi.resultApiWoeid();
	while(data_response['error']){
		return res.status(503).json({
			"results": {
				"temp": 0,
				"description": "Serviço indisponível",
				"city": "Dados ficticios,",
				"humidity": 0,
				"condition_slug": "cloudly_night",
			}
		})
	}

	return res.status(200).json(data_response);
};
module.exports = {
	requestApiCity,
	requestApiWoeid,
};
