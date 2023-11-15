import * as weatherApi from "./api_weather.js";

// Elememts HTML
const titleCity = document.querySelector("#city_name")
const citySearch = document.querySelector("#search_Field");
const btnSearch = document.querySelector("#btn_search");
const objectUser = document.querySelector(".object_user");
let city = undefined;

// Events
document.addEventListener("keydown", keyPressed)
btnSearch.addEventListener("click", requestApi)

// Funtions
function keyPressed(){
    var tecla = event.keyCode;
    if(!String.fromCharCode(tecla) == " "){requestApi()}
}

async function requestApi() {
    city = citySearch.value
    const objectData = await weatherApi.resultApi(city);

    titleCity.innerHTML = objectData["city"]
};