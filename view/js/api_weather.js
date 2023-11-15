// Usando a API: HG Brasil Weather
// https://hgbrasil.com/

// Objeto da API

const api = {
    baseApi: 'https://api.hgbrasil.com/weather',
    key: '40df055f',
    returnFormat: 'json-cors',
};
const valuesRequireds = ["temp", "date", "time", "city", "max", "min", "description", "currently", "humidity", "forecast" ]

// -----------------------

export const resultApi = (value_city) => {
    const result = fetch(`${api.baseApi}?format=${api.returnFormat}&array_limit=7&fields=only_results,${valuesRequireds}&key=${api.key}&city_name=${value_city}`)
    .then((res) => res.json())
    .then((data) => {
        return data;
    });
    return result;

}
