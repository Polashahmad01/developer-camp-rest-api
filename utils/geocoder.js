const NodeGeocoder = require("node-geocoder");

const options = {
    // provider: process.env.GEOCODER_PROVIDER,
    provider: 'mapquest',
    httpAdapter: 'https',
    apiKey: 'Dx1m9fTXzf7xRWGLDtWWaNCJisuRohdL',
    // apiKey: process.env.GEOCODER_API_KEY,
    formatter: null
}

const geocoder = NodeGeocoder(options);

module.exports = geocoder;
