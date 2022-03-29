const request = require("postman-request");
const geocode = require("./utils/geocode");

const url = "http://api.weatherstack.com/current?access_key=dff315052259f913ed5b1ecd41b70775&query=-6.200000,106.816666&units=m"
const urlLocation = "https://api.mapbox.com/geocoding/v5/mapbox.places/Bogor%20West%20Java.json?access_token=pk.eyJ1IjoicW11bjE0IiwiYSI6ImNsMWJ6ZGg4aTAycHIzYm9uN3B0aWFidDUifQ.IetbdL_7fM6iRdFXNdGKmg&limit=1"

// request({url : url, json : true}, (error, response) => {
    
//     if (error) {  
//         console.log('Unable to connect weather service!');
//     } if (response.body.error) {
//         console.log('Unable to find location!');
//     } else {
//         console.log(`${response.body.current.weather_descriptions[0]}. Saat ini suhu berada di ${response.body.current.temperature} derajat celcius, seperti terasa ${response.body.current.feelslike} derajat celcius`);
//     }

// });

// request({url : urlLocation, json : true}, (error, response) => {
//     if (error) {
//         console.log('Unable to connect to connection services');
//     } else if(response.body.features.length === 0) {
//         console.log('Unable to find location, try another search ');
//     } else {
//         const latitude = response.body.features[0].center[1];
//         const longtitude = response.body.features[0].center[0];
//         console.log(`Latitude : ${latitude}`);
//         console.log(`longtitude : ${longtitude}`);
//     }
    
// });

geocode("Soreang, Bandung", (error, data) => {
    console.log('Error', error);
    console.log('Data', data);
});