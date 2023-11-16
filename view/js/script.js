import * as weatherApi from "./api_weather.js";

// Elememts HTML
const titleCity = document.querySelector("#city_name")
const citySearch = document.querySelector("#search_Field");
const btnSearch = document.querySelector("#btn_search");

// Elements HTML for view
const imageClimate = document.querySelector("#climate_image");
const timeActually = document.querySelector(".prevision-time");
const dateActually = document.querySelector(".prevision-date");
const temperature = document.querySelector("#temperature");
const previsionDescription = document.querySelector("#prevision-description");
const previsionHumidity = document.querySelector("#prevision-humidity");
const previsionTemperatureMax = document.querySelector("#max_temperature");
const previsionTemperatureMin = document.querySelector("#min_temperature");

// Events
const keyPressed = () => {var tecla = event.keyCode;if(tecla === 13){requestApi()}}

document.addEventListener("keydown", keyPressed)
btnSearch.addEventListener("click", requestApi)

// Funtions
async function requestApi() {
    const city = citySearch.value
    const objectData = await weatherApi.resultApi(city);

    view(objectData);
};

function view(objectData){
    titleCity.innerHTML = objectData["city"] // Este 'city' é uma propriedade do objeto e não a variável
    
    let image = `https://assets.hgbrasil.com/weather/icons/conditions/${objectData["condition_slug"]}.svg` // Recebe o caminho da imagem do clima

    imageClimate.setAttribute("src", image)
    console.log(objectData)
    
}