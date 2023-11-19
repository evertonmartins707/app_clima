// API: HG Brasil Weather
// Site da API: https://hgbrasil.com/
// Documentação: https://console.hgbrasil.com/documentation/weather

// Objeto da API
const api = {
    baseApi: 'https://api.hgbrasil.com/weather', // EndPoint base
    key: 'd73801b3', // Chave de acesso
    returnFormat: 'json-cors' // Formato de resposta
};
// Palavras-chave de informações de resposta da API
const valuesRequireds = ["temp", "date", "time", "city", "max", "min", "description", "currently", "humidity", "forecast", "condition_slug" ]

// -----------------------

export const resultApiCity = (value_city) => {
    try {
        const result = fetch(`${api.baseApi}?format=${api.returnFormat}&array_limit=7&fields=only_results,${valuesRequireds}&key=${api.key}&city_name=${value_city}`) // Link de chamada para API seguindo todos os parâmetros
        .then((res) => res.json()) // Retorna o resultadcurrent previsiono em um arquivo JSON
        .then((data) => { // Obtém os dados do arquivo JSON
            return data;
        });
        return result;
    }
    catch {alert("Não foi possível localizar a cidade")};
}

export const resultApiWoeid = () => {
    try {
        const result = fetch(`${api.baseApi}?format=${api.returnFormat}&woeid=455828`) // Link de chamada para API seguindo todos os parâmetros
        .then((res) => res.json()) // Retorna o resultadcurrent previsiono em um arquivo JSON
        .then((data) => { // Obtém os dados do arquivo JSON
            return data;
        });
        return result;
    }
    catch {alert("Não foi possível localizar a cidade")};
}