import { view } from './informations.js';
import * as getApi from './get_api.js';

// Elememts HTML
const citySearch = document.querySelector('#search_Field');
const btnSearch = document.querySelector('#btn_search');

// Criar e realizar a chamada para minha API

// Events
const keyPressed = () => {
	var tecla = event.keyCode;
	if (tecla === 13) {
		requestApi();
	}
}; // Verifica se foi pressionada a tecla 'enter'

document.addEventListener('keydown', keyPressed);
btnSearch.addEventListener('click', requestApi);

document.addEventListener('DOMContentLoaded', async () => {
	const resultApi = await getApi.getApiWoeid();
	view(resultApi['results']);
});

// Functions
async function requestApi() {
	const city = citySearch.value; // Recebe o nome da cidade digitada no 'input'
	const resultApi = await getApi.getApiCity(city); // Faz a chamada da API

	if (resultApi['results']) {
		view(resultApi['results']);
	} else {
		view(resultApi);
	}
}
