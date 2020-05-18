const lugar = require('./lugar/lugar')
const clima = require('./clima/clima')


const argv = require('yargs').options({
        direccion: {
            alias: 'd',
            desc: 'direcion de la ciudad a obtener el clima',
            demand: true
        }
    }).argv
    /*
    lugar.getlugarlatlng(argv.direccion)
        .then(console.log)
    clima.getclima(-2.700000, -59.700001)
        .then(console.log)

    .catch(console.log)
        */
const getinfo = async(dir) => {

    try {
        const coords = await lugar.getlugarlatlng(dir)
        const temp = await clima.getclima(coords.lat, coords.lng)
        return `el clima de la ciudad ${coords.direccion} es igual a ${temp}.`

    } catch (error) {
        return `no se puede determianr el clima del lugar`
    }


}

getinfo(argv.direccion)
    .then(console.log)
    .catch(console.log)