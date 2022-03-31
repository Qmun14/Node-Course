const request = require("postman-request");
const geocode = require("./utils/geocode");
const forecast = require("./utils/forecast");

const url = "http://api.weatherstack.com/current?access_key=dff315052259f913ed5b1ecd41b70775&query=-6.200000,106.816666&units=m"
const urlLocation = "https://api.mapbox.com/geocoding/v5/mapbox.places/Bogor%20West%20Java.json?access_token=pk.eyJ1IjoicW11bjE0IiwiYSI6ImNsMWJ6ZGg4aTAycHIzYm9uN3B0aWFidDUifQ.IetbdL_7fM6iRdFXNdGKmg&limit=1"

const inputLocation = process.argv[2].toString();

geocode(inputLocation, (error, data) => {
    if (error) {
        return console.log(error);
    }

    forecast(data.latitude, data.longitude, (error, forecastData) => {
        if (error) {
            return console.log(error);
        }
        console.log(data.location)
        console.log(forecastData);
    })

});
