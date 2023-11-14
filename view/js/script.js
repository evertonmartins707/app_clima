import resultApi from "./api_weather";

// Elementos HTML

const citySearch = document.querySelector("#search_Field");
const btnSearch = document.querySelector("#btn_search");
const objectUser = document.querySelector(".object_user");
let city = "Londres";


btnSearch.addEventListener("click", async () => {
    const result = await resultApi(city);

    objectUser.textContent = `${JSON.stringify(result, undefined, 2)}`;

});