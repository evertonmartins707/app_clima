const sectionWeeklyForecasts = document.querySelector('#weekly-forecasts');

export function viewForecasts(forecast) {
	sectionWeeklyForecasts.innerHTML = '';

	for (let i = 0; i < 7; i++) {
		sectionWeeklyForecasts.innerHTML += `
        <div class="weekly-forecasts-day">
            <time id="forecast-data">${forecast[i].date}</time> <!-- Data da previsão | Forecast date -->
            <img src="https://assets.hgbrasil.com/weather/icons/conditions/${forecast[i].condition}.svg"> <!-- Imagem da previsão | Forecast image -->
            <div class="forecasts-polaritys">
                <div class="forecasts-polaritys-max">
                    <sup>Max:</sup>
                    <p id="forecast-max-temp">${forecast[i].max}ºC</p>
                </div>
                <div class="forecasts-polaritys-min">
                    <sup>Min:</sup>
                    <p id="forecast-min-temp">${forecast[i].min}ºC</p>
                </div>
            </div>
        </div>`;
	}
}
