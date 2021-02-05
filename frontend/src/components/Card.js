import React from 'react'
import './Card.css'

function Card({date, temperature, min_temp, max_temp, imageUrl, weather}){
    return(
        <div className="card-container">
            <div className="card-content">
                <div className="card-date">
                    <h3>{date}</h3>
                </div>
                <div className="card-weather">
                    {weather}
                </div>
                <div className="image-container">
                    <img src={imageUrl}/>
                </div>
                <div className="card-temperature">
                    {temperature}
                </div>
                <div className="asdasdas">
                    <div className="temp-range left">
                        Min: {min_temp}
                    </div>
                    <div className="temp-range right">
                        Max: {max_temp}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card