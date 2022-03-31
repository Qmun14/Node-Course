const request = require('postman-request');

const forecast = (latitude, longitude, callback) => {

    const url = `http://api.weatherstack.com/current?access_key=dff315052259f913ed5b1ecd41b70775&query=${encodeURIComponent(latitude.toString())},${encodeURIComponent(longitude.toString())}&units=m`

    request({url : url, json : true}, (error, response) => {
        if (error) {
            callback('Unable to connect to weather services', undefined)
        } else if (response.body.error) {
            callback('Unable to find location, please select another cordinate', undefined)
        } else {
            callback(undefined, {
                location : {
                    Province : response.body.location.region,
                    City : response.body.location.name
                },
                time : response.body.location.localtime,
                temperature : response.body.current.temperature + ` derajat Celcius` ,
                feelslike : response.body.current.feelslike + ` derajat Celcius`,
                potencially : response.body.current.precip + ` % for rainy`
            })
        }
    })

}   

module.exports = forecast