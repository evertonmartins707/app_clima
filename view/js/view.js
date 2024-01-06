import { view } from './informations.js';
import * as getApi from './get_api.js';

// Elememts HTML
const citySearch = document.querySelector('#search_Field');
const btnSearch = document.querySelector('#btn_search');

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
	if (resultApi['error']) {
		alert(
			`Error: ${resultApi['error']}! Não foi possível realizar a busca automática, tente pesquisar o nome da cidade!`,
		);
	}
	view(resultApi['results']);
});

// Functions
async function requestApi() {
	const city = citySearch.value; // Recebe o nome da cidade digitada no 'input'
	let resultApi = undefined;
	if (city != '') {
		resultApi = await getApi.getApiCity(city); // Faz a chamada da API
	} else {
		alert(`Adicione pelo menos 1 letra para realizar a busca!`);
		resultApi = await getApi.getApiWoeid(); // Faz a chamada da API
	}

	if(resultApi['error']){
		alert(`Error: ${resultApi['error']}! Estamos com um problema interno, tente novamente amanhã!`)
	}

	if (resultApi['results']) {
		view(resultApi['results']);
	} else {
		view(resultApi);
	}
}
