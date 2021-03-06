const router = require('express').Router()
const fetch = require('node-fetch')

const weatherAPI = {
    base: "http://api.openweathermap.org/data/2.5/",
    key: "69e166e8208a71ee4f5f1fce2bead0aa",
    iconUrlBase: "http://openweathermap.org/img/wn/"
}
const ipAPI = "http://api.ipapi.com/api/check?access_key=60fd1b5b43705a7d91c857f32a6d2c91"


function dateBuilder(advance){
    const date = new Date()
    const daysArray = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
    const day = daysArray[(date.getDay() + advance)%7]
    return day    
}

router.get('/location', async (req, res) => {
    res.setHeader('Access-Control-Allow-Origin','*')
    await fetch(ipAPI)
        .then((response) => response.json())
        .then((data) => location = {"city": data.city.normalize("NFD").replace(/[\u0300-\u036f]/g, ""), "country": data.country_code})
        .catch((err) => console.log(err))
    res.json(location)
})

router.get('/current/:city?', async (req, res) => {
    let { city } = req.params
    if (!city){
        await fetch('http://localhost:4000/v1/location')
            .then((res) => res.json())
            .then((dat) => {city = dat.city})
            .catch((error) => console.log(error))
    }
    await fetch(`${weatherAPI.base}weather?q=${city}&units=metric&appid=${weatherAPI.key}`)
        .then((response) => response.json())
        .then((data) => {
            const weather = {
                "day": dateBuilder(0),
                "location": data.name +', ' + data.sys.country,
                "temp": Math.trunc(data.main.temp) + '°C',
                "min_temp": Math.trunc(data.main.temp_min) + '°C',
                "max_temp": Math.trunc(data.main.temp_max) + '°C',
                "main": data.weather[0].main,
                "iconUrl" : `${weatherAPI.iconUrlBase}${data.weather[0].icon}@2x.png`
            }
            res.setHeader('Access-Control-Allow-Origin','*')
            res.json(weather)
        })
        .catch((err) => {            
            res.setHeader('Access-Control-Allow-Origin','*')
            res.sendStatus(404)
            }
        )
})

router.get('/forecast/:city?', async (req, res) => {
    let { city } = req.params
    if (!city){
        await fetch('http://localhost:4000/v1/location')
            .then((res) => res.json())
            .then((dat) => {city = dat.city})
            .catch((error) => console.log(error))
    }
    await fetch(`${weatherAPI.base}forecast?q=${city}&cnt=5&units=metric&appid=${weatherAPI.key}`)
        .then((response) => response.json())
        .then((data) => {
            const forecast = {
                "location": data.city.name + ', ' + data.city.country,
                "day1":{
                    "day" : dateBuilder(1),
                    "temp" : Math.trunc(data.list[0].main.temp) + '°C',
                    "min_temp": Math.trunc(data.list[0].main.temp_min) + '°C',
                    "max_temp": Math.trunc(data.list[0].main.temp_max) + '°C',
                    "main": data.list[0].weather[0].main,
                    "iconUrl": `${weatherAPI.iconUrlBase}${data.list[0].weather[0].icon}@2x.png`  
                },
                "day2":{
                    "day" :dateBuilder(2),
                    "temp": Math.trunc(data.list[1].main.temp) + '°C',
                    "min_temp": Math.trunc(data.list[1].main.temp_min) + '°C',
                    "max_temp": Math.trunc(data.list[1].main.temp_max) + '°C',
                    "main": data.list[1].weather[0].main,
                    "iconUrl": `${weatherAPI.iconUrlBase}${data.list[1].weather[0].icon}@2x.png`
                },
                "day3":{
                    "day" :dateBuilder(3),
                    "temp": Math.trunc(data.list[2].main.temp) + '°C',
                    "min_temp": Math.trunc(data.list[2].main.temp_min) + '°C',
                    "max_temp": Math.trunc(data.list[2].main.temp_max) + '°C',
                    "main": data.list[2].weather[0].main,
                    "iconUrl": `${weatherAPI.iconUrlBase}${data.list[2].weather[0].icon}@2x.png`
                }, 
                "day4":{
                    "day" :dateBuilder(4),
                    "temp": Math.trunc(data.list[3].main.temp) + '°C',
                    "min_temp": Math.trunc(data.list[3].main.temp_min) + '°C',
                    "max_temp": Math.trunc(data.list[3].main.temp_max) + '°C',
                    "main": data.list[3].weather[0].main,
                    "iconUrl": `${weatherAPI.iconUrlBase}${data.list[3].weather[0].icon}@2x.png`
                },
                "day5":{
                    "day" :dateBuilder(5),
                    "temp": Math.trunc(data.list[4].main.temp) + '°C',
                    "min_temp": Math.trunc(data.list[4].main.temp_min) + '°C',
                    "max_temp": Math.trunc(data.list[4].main.temp_max) + '°C',
                    "main": data.list[4].weather[0].main,
                    "iconUrl": `${weatherAPI.iconUrlBase}${data.list[4].weather[0].icon}@2x.png`
                }

            } 
            res.setHeader('Access-Control-Allow-Origin','*')
            res.json(forecast)
        })
        .catch((err) => {
            res.setHeader('Access-Control-Allow-Origin','*')
            res.sendStatus(404)
        })
})

module.exports = router