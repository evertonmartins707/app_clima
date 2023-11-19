// Variáveis
let day, month, year = undefined

// Elementos HTML
const dateActually = document.querySelector(".prevision-date");
const timeActually = document.querySelector(".prevision-time");


let date = new Date();

setInterval(() => {
    day = format(date.getDate())
    month = format(date.getMonth()+1)
    year = date.getFullYear()

    dateActually.innerHTML = `${day}/${month}/${year}`
    timeActually.innerHTML = `${format(date.getHours())}:${format(date.getMinutes())}` 
}, 1000);

function format(value){
    value = value.toString().padStart(2, '0')
    return value
}