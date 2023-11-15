import * as weatherApi from "./api_weather.js";

// Elementos HTML
const titleCity = document.querySelector("#city_name")
const citySearch = document.querySelector("#search_Field");
const btnSearch = document.querySelector("#btn_search");
const objectUser = document.querySelector(".object_user");
let city = undefined;


btnSearch.addEventListener("click", async () => {
    city = citySearch.value
    const objectData = await weatherApi.resultApi(city);

    titleCity.innerHTML = objectData["city"]
    objectUser.textContent = objectData["temp"]
    console.log(objectData)
});