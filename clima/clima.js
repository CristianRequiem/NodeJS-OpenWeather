const axios = require('axios');

const getClima = async(lat, lng) => {
    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=014efde895e00e87718d12400e773c6d&units=metric`);

    console.log(resp.data.main.temp);

    return resp.data.main.temp;
}

module.exports = {
    getClima
}