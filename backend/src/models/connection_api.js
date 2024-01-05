// API: HG Brasil Weather
// Site da API: https://hgbrasil.com/
// Documentação: https://console.hgbrasil.com/documentation/weather

require('dotenv').config();

// Objeto da API
const api = {
	baseApi: 'https://api.hgbrasil.com/weather', // 'EndPoint' base
	key: process.env.KEY_API,
	returnFormat: 'json-cors', // Formato de resposta
};
// Palavras-chave de informações de resposta da API
const valuesRequireds = [
	'temp',
	'date',
	'time',
	'city',
	'max',
	'min',
	'description',
	'currently',
	'humidity',
	'forecast',
	'condition_slug',
	'condition',
];

// -----------------------
module.exports = {
	api,
	valuesRequireds,
};
