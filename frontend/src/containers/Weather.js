import React from 'react'
import Card from '../components/Card.js'
import './Weather.css'

function Weather({current, forecast}){ 
    return(
        <div className='grid'>
            <Card
                date = "Today"
                weather = {current.weather}
                imageUrl = {current.iconUrl}
                temperature = {current.temp}
                min_temp = {current.min_temp}
                max_temp = {current.max_temp}
            />
            <Card
                date = {forecast.day1.day}
                weather = {forecast.day1.weather}
                imageUrl = {forecast.day1.iconUrl}
                temperature = {forecast.day1.temp}
                min_temp = {forecast.day1.min_temp}
                max_temp = {forecast.day1.max_temp}
            />
            <Card
                date = {forecast.day2.day}
                weather = {forecast.day2.weather}
                imageUrl = {forecast.day2.iconUrl}
                temperature = {forecast.day2.temp}
                min_temp = {forecast.day2.min_temp}
                max_temp = {forecast.day2.max_temp}
            />
            <Card
                date = {forecast.day3.day}
                weather = {forecast.day3.weather}
                imageUrl = {forecast.day3.iconUrl}
                temperature = {forecast.day3.temp}
                min_temp = {forecast.day3.min_temp}
                max_temp = {forecast.day3.max_temp}
            />
            <Card
                date = {forecast.day4.day}
                weather = {forecast.day4.weather}
                imageUrl = {forecast.day4.iconUrl}
                temperature = {forecast.day4.temp}
                min_temp = {forecast.day4.min_temp}
                max_temp = {forecast.day4.max_temp}
            />
            <Card
                date = {forecast.day5.day}
                weather = {forecast.day5.weather}
                imageUrl = {forecast.day5.iconUrl}
                temperature = {forecast.day5.temp}
                min_temp = {forecast.day5.min_temp}
                max_temp = {forecast.day5.max_temp}
            />         
           
        </div>
        
    )
}

export default Weather