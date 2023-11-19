const fore = {
    0: {date: '18/11', max: 37, min: 22, description: 'Chuvas esparsas'},
    1: {date: '19/11', max: 24, min: 19, description: 'Chuva'},
    2: {date: '20/11', max: 23, min: 18, description: 'Tempo nublado'},
    3: {date: '21/11', max: 34, min: 20, description: 'Parcialmente nublado'},
    4: {date: '22/11', max: 36, min: 24, description: 'Tempo nublado'},
    5: {date: '23/11', max: 35, min: 23, description: 'Chuva'},
    6: {date: '24/11', max: 33, min: 22, description: 'Chuva'}
}

export function viewForecasts(forecast) {
    for(let i=0; i<7; i++){
        console.log(fore[i].date)
    }
}
viewForecasts()