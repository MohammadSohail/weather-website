const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=cd815a0ea8642bf210d3e9930751989d&query='+ latitude + ',' + longitude

    request({url, json:true}, (error, { body }) => {
        if(error){
            callback('Unable to connect to weather services!',undefined)
        }
        else if(error){
            callback('Unable to find location', undefined)
        }
        else{
            //console.log(body.current);
            
            callback(undefined, 
                body.current.weather_descriptions[0] + '. It is currently ' + body.current.temperature +
            ' degrees out. The humidity is ' + body.current.humidity+'%. It feels like ' + body.current.feelslike + ' degrees.'
            )
        }
    })

}








module.exports = forecast