const axios = require('axios');

const getClima = async (lat, lng) => {
    const resp =  await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=e8e3ed06ab440beace8897c4be0757dd&units=metric`);
    return resp.data.main.temp;
}

module.exports = {
    getClima
}