import { viewForecasts } from './forecast.js';

// Elements HTML for view
const titleCity = document.querySelector('#city_name');
const imageClimate = document.querySelector('#climate_image');
const temperature = document.querySelector('#temperature');
const previsionDescription = document.querySelector('#prevision-description');
const previsionHumidity = document.querySelector('#prevision-humidity');
const previsionTemperatureMax = document.querySelector('#max_temperature');
const previsionTemperatureMin = document.querySelector('#min_temperature');

export function view(objectResponse) {
	// Recebe a imagem do clima | Reiceve the weather image
	const weatherimage = `https://assets.hgbrasil.com/weather/icons/conditions/${objectResponse['condition_slug']}.svg`;
	const otherTemps = objectResponse['forecast']; // Recebe toda previsão semanal | Receive the entire weekly forecast
	const polarityTemperatures = otherTemps[0]; // Recebe as temperaturas "max" e "min" do dia atual | Receives the "max" and "min" temperatures of the current day

	// Nome | Name
	titleCity.innerHTML = objectResponse['city'];

	// Temperatura | Temperature
	temperature.innerHTML = `${objectResponse['temp']}ºC`;

	// Imagem do clima | Weather image
	imageClimate.setAttribute('src', weatherimage);

	// Descrição do clima | Climate description
	previsionDescription.innerHTML = objectResponse['description'];

	// Humidade | Humidity
	previsionHumidity.innerHTML = `Humidade: ${objectResponse['humidity']}%`;

	// Temperaturas máximas e mínimas | Maximum and minimum temperatures
	previsionTemperatureMax.innerHTML = `${polarityTemperatures['max']}ºC`;
	previsionTemperatureMin.innerHTML = `${polarityTemperatures['min']}ºC`;

	// Previsão semanal | Weekly forecast
	viewForecasts(otherTemps);
}
