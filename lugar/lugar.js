const axios = require('axios')



const getlugarlatlng = async(dir) => {

    const encoderUrl = encodeURI(dir)

    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${dir}`,

        headers: {
            'x-rapidapi-key': ' a87a333f82msh6abab8a3ab91d06p1d8d4djsnfa7d236540fd'
        }
    });
    const resp = await instance.get()
    if (resp.data.Results.length === 0) { // pongo esto porque si pongo algo que no tiene  resultado no sale lnada
        throw new Error(`no hay resultados para ${ dir}`)
    }

    const data = resp.data.Results[0]; // la info se almacena en respuesta
    const direccion = data.name;
    const lat = data.lat
    const lng = data.lon
    return {
        direccion,
        lat,
        lng
    }
}

module.exports = {

    getlugarlatlng
}