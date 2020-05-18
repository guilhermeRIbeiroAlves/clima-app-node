const axios = require('axios')
    //const lat = clima.lat
    //const lng = clima.lng

const getclima = async(lat, lng) => {

    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${ lat}&lon=${ lng}&appid=8af9fcc56a776a5060ac774f927d1f01`)

    const valor = resp.data.main.temp
    const valor2 = valor - 273
        //return resp.data.main.temp;
    return valor2

}

module.exports = {
    getclima
}