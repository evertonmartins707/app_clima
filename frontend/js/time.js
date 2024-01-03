// Variáveis / Variables
let date = new Date();
let day, month, year = undefined
const backgroudPhotos = {
    "morning": "https://cdn.pixabay.com/photo/2016/11/23/13/48/beach-1852945_1280.jpg",
    "sunset": "https://cdn.pixabay.com/photo/2017/02/19/15/28/sunset-2080072_1280.jpg",
    "night": "https://cdn.pixabay.com/photo/2015/04/23/21/59/hot-air-balloon-736879_1280.jpg"
}

// Elementos HTML / Elements HTML
const dateActually = document.querySelector(".prevision-date");
const timeActually = document.querySelector(".prevision-time");
const htmlTag = document.querySelector("html")

// Data e hora / Date and hours
day = format(date.getDate()) // Recebe o dia / Receive the day
month = format(date.getMonth()+1) // Recebe o mês / Receive the month
year = date.getFullYear() // Recebe o ano / Receive the year

dateActually.innerHTML = `${day}/${month}/${year}` // Data atual / Current date
setInterval(() => {
    timeActually.innerHTML = `${format(date.getHours())}:${format(date.getMinutes())}` // Hora atual / Current time
}, 1000);

// Plano de fundo e cores / Background and colors
if(date.getHours() < 17){
    // Manhã / Morning
    htmlTag.setAttribute("style", `background: url(${backgroudPhotos["morning"]})`)

    htmlTag.classList.add("day")
    htmlTag.classList.remove("night")

} else if(date.getHours() == 17){
    // Pôr do Sol / Sunset
    htmlTag.setAttribute("style", `background: url(${backgroudPhotos["sunset"]})`)

} else {
    // Noite / Night
    htmlTag.setAttribute("style", `background: url(${backgroudPhotos["night"]})`)

    htmlTag.classList.remove("day")
    htmlTag.classList.add("night")
}

// Functions
function format(value){
    value = value.toString().padStart(2, '0') // Retorna o valor com duas casas -> '00'
    return value
}