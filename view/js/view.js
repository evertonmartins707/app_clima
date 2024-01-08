// Importações | Imports
import { view } from './informations.js';
import * as getApi from './get_api.js';

// Elementos HTML | HTML elememts
const citySearch = document.querySelector('#search_Field');
const btnSearch = document.querySelector('#btn_search');

// Eventos do teclado | Keyboard events
const keyPressed = () => {
	var tecla = event.keyCode;
	if (tecla === 13) {
		requestApi();
	}
}; // Verifica se foi pressionada a tecla 'enter' | Check if the key was pressed 'Enter'

document.addEventListener('keydown', keyPressed);
btnSearch.addEventListener('click', requestApi);

// Pesquisa automática | Automatic search
document.addEventListener('DOMContentLoaded', async () => {
	// Chamada á API | Call to API
	const resultApi = await getApi.getApiWoeid();

	// Verificação de error | Error checking
	if (resultApi['cod'] != 200) {
		alert(
			`Error: ${resultApi['cod']}! Não foi possível realizar a busca automática, tente pesquisar o nome da cidade!`,
		);
	}

	// Resposta | Response
	alert(
		'O serviço de localização automática está em "TESTE", agradeçemos a compreensão',
	);
	view(resultApi['response'].results);
});

// Functions
async function requestApi() {
	const city = citySearch.value;
	let resultApi = undefined;
	if (city != '') {
		// Chamada á API
		resultApi = await getApi.getApiCity(city);

		// Verificação de error | Error checking
		if (resultApi['cod'] != 200) {
			return alert(
				`Error: ${resultApi['cod']}! Estamos com um problema interno, tente novamente amanhã!`,
			);
		}
		// ---
	} else {
		return alert(`Adicione pelo menos 1 letra para realizar a busca!`);
	}
	// Resposta | Response
	view(resultApi['response']);
}
