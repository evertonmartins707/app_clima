import * as weatherApi from "./api_weather.js";
import * as forecast from "./forecasts.js";

// Elememts HTML
const titleCity = document.querySelector("#city_name")
const citySearch = document.querySelector("#search_Field");
const btnSearch = document.querySelector("#btn_search");

// Elements HTML for view
const imageClimate = document.querySelector("#climate_image");
const temperature = document.querySelector("#temperature");
const previsionDescription = document.querySelector("#prevision-description");
const previsionHumidity = document.querySelector("#prevision-humidity");
const previsionTemperatureMax = document.querySelector("#max_temperature");
const previsionTemperatureMin = document.querySelector("#min_temperature");

// Events
const keyPressed = () => {var tecla = event.keyCode;if(tecla === 13){requestApi()}}

document.addEventListener("keydown", keyPressed)
btnSearch.addEventListener("click", requestApi)

document.addEventListener("DOMContentLoaded", async () => {
    const resultApi = await weatherApi.resultApiWoeid();
    view(resultApi["results"])
});

// Funtions
async function requestApi() {
    const city = citySearch.value // Recebe o nome da cidade digitada no 'input'
    const resultApi = await weatherApi.resultApiCity(city); // Faz a chamada da API 

    if (resultApi["results"]){
        view(resultApi["results"]);
    } else {
        view(resultApi)
    }
};

function view(objectData){
    const image = `https://assets.hgbrasil.com/weather/icons/conditions/${objectData["condition_slug"]}.svg` // Recebe o caminho da imagem do clima
    const otherTemps = objectData["forecast"]
    console.log(otherTemps)
    forecast.viewForecasts(otherTemps)
    const maxTemperature = otherTemps[0]

    titleCity.innerHTML = objectData["city"] // Este 'city' é uma propriedade do objeto e não a variável
    temperature.innerHTML = `${objectData["temp"]}ºC`
    imageClimate.setAttribute("src", image)
    previsionDescription.innerHTML = objectData["description"]
    previsionHumidity.innerHTML = `Humidade: ${objectData["humidity"]}%`
    previsionTemperatureMax.innerHTML = `${maxTemperature["max"]}ºC`
    previsionTemperatureMin.innerHTML = `${maxTemperature["min"]}ºC`

}