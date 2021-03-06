const axios = require('axios');

const getLugarLatLng = async(direccion) => {

    const encodedURL = encodeURI(direccion);

    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodedURL}`,
        headers: { 'x-rapidapi-key': 'INSERTAR_API' }
    });

    const resp = await instance.get();
    if (resp.data.Results === null) { resp.data.Results = [] }; // Borrar condición cuando la API se reestablezca

    if (resp.data.Results.length === 0) {
        throw new Error(`No hay resultados para ${direccion}`);
    }

    const data = resp.data.Results[0];
    const dir = data.name;
    const lat = data.lat;
    const lng = data.lon;

    return {
        dir,
        lat,
        lng
    }

}


module.exports = {
    getLugarLatLng
};