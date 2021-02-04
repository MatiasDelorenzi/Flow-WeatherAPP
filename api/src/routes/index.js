const router = require('express').Router()
const fetch = require('node-fetch')
require('./index')

const weatherAPI = {
    base: "http://api.openweathermap.org/data/2.5/",
    key: "69e166e8208a71ee4f5f1fce2bead0aa"
}
const ipAPI = "http://api.ipapi.com/api/check?access_key=60fd1b5b43705a7d91c857f32a6d2c91"
var location

fetch(ipAPI)
    .then((response) => response.json())
    .then((data) => location = data.city)
    .catch((err) => console.log(err))

router.get('/location', (req, res) => {
    res.json({"city": location})
})

router.get('/current/:city?', (req, res) => {
    let { city } = req.params
    if (!city){
        city = location
    }
    fetch(`${weatherAPI.base}weather?q=${city}&units=metric&appid=${weatherAPI.key}`)
        .then((response) => response.json())
        .then((data) => res.json(data))
        .catch((err) => console.log(err))
})

router.get('/forecast/:city?', (req, res) => {
    let { city } = req.params
    if (!city){
        city = location
    }
    fetch(`${weatherAPI.base}forecast?q=${city}&cnt=6&units=metric&appid=${weatherAPI.key}`)
        .then((response) => response.json())
        .then((data) => res.json(data))
        .catch((err) => console.log(err))
})

module.exports = router