import React from 'react'
import Card from '../components/Card.js'
import './Weather.css'

function Weather({current, forecast}){

    console.log(forecast[0])
 
    return(
        <div className='grid'>
            <Card
                date = {current.day}
                weather = {current.weather}
                imageUrl = {current.iconUrl}
                temperature = {current.temp}
                min_temp = {current.min_temp}
                max_temp = {current.max_tempo}
            />
            
           
           
        </div>
        
    )
}

export default Weather