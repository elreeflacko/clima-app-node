const lugar = require('./lugar/lugar');
const clima = require('./clima/clima')

const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Dirección de la ciudad para obtener el clima',
        demand: true
    }
}).argv;

// lugar.getLugarLatLng(argv.direccion)
//                         .then(console.log);

// clima.getClima(4.6097,  -74.0817)
//                     .then(console.log)
//                     .catch(console.log)

const getInfo = async (dire) => {

    try {
        const lu =  await lugar.getLugarLatLng(dire);
        const Temp = await clima.getClima(lu.lat, lu.lng);  
        return `El clima de ${dire} es de ${Temp}.`;  
    } catch (error) {
        return `No se pudo determinar el clima de ${dire}.`;    
    }
}

getInfo(argv.direccion)
    .then(console.log)
    .catch(console.log);



