const request = require('postman-request');

const forecast = (latitude, longitude, callback) => {

    const url = `http://api.weatherstack.com/current?access_key=dff315052259f913ed5b1ecd41b70775&query=${encodeURIComponent(latitude.toString())},${encodeURIComponent(longitude.toString())}&units=m`

    request({url, json : true}, (error, { body }) => {
        if (error) {
            callback('Unable to connect to weather services', undefined)
        } else if (body.error) {
            callback('Unable to find location, please select another cordinate', undefined)
        } else {
            callback(undefined, {
                location : {
                    Province : body.location.region,
                    City : body.location.name
                },
                time : body.location.localtime,
                temperature : body.current.temperature + ` derajat Celcius` ,
                feelslike : body.current.feelslike + ` derajat Celcius`,
                potencially : body.current.precip + ` % for rainy`
            })
        }
    })

}   

module.exports = forecast