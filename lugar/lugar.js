const axios = require('axios');

const getLugarLatLng = async ( dir ) => {

    const encodeUlr = encodeURI(dir);

    const instance = axios.create({
        baseURL: `https://open-weather13.p.rapidapi.com/city/${encodeUlr}`,
        headers: {'X-RapidAPI-Key': '97608be4c5msh68b3ea97c2b7469p135c90jsnef8cf43efbb1'}
    });

    const resp = await instance.get();

    if( resp.data.length === 0) {
        throw new Error(`No hay resultados para ${dir}`);
    }

    const data = resp.data;
    const direccion = data.name;
    const lat = data.coord.lat;
    const lng = data.coord.lon;

    return {
        direccion,
        lat,
        lng
    }

    // instance.get()
    //             .then( resp => {
    //                 console.log(resp.data);
    //             })
    //             .catch(err => {
    //                 console.log('Error!!!!', err);    
    //             });

}

module.exports = {
    getLugarLatLng
}

