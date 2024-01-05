const express = require('express');
const requestApi = require('../models/request_api.js');
require('dotenv').config();

// Realizar chamada para a API 'weather' pelo nome da cidade
const requestApiCity = async (req, res) => {
	const city_name = req.params.id
	const data_response = await requestApi.resultApiCity(city_name)
	return res.status(200).json(data_response);
};

// Realizar chamada para API 'weather' pelo código 'woeid'
const requestApiWoeid = async (req, res) => {
	const data_response = await requestApi.resultApiWoeid();

	return res.status(200).json(data_response);
};
module.exports = {
	requestApiCity,
	requestApiWoeid,
};
