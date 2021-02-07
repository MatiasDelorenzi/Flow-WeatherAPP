import React, { Component } from 'react'
import './Card.css'


class Card extends Component{
    constructor(){
        super()
    }
    render(){
        return(
            <div className="card-container">
                <div className="card-content">
                    <div className="card-date">
                        <h3>{this.props.weather.day}</h3>
                    </div>
                    <div className="card-weather">
                        {this.props.weather.main}
                    </div>
                    <div className="image-container">
                        <img src={this.props.weather.iconUrl}/>
                    </div>
                    <div className="card-temperature">
                        {this.props.weather.temp}
                    </div>
                    <div>
                        <div className="temp-range left">
                            {`Min: ${this.props.weather.min_temp}`}
                        </div>
                        <div className="temp-range right">
                            {`Max: ${this.props.weather.max_temp}`}
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}

// function Card({date, temperature, min_temp, max_temp, imageUrl, weather}){
//     return(
//         <div className="card-container">
//             <div className="card-content">
//                 <div className="card-date">
//                     <h3>{date}</h3>
//                 </div>
//                 <div className="card-weather">
//                     {weather}
//                 </div>
//                 <div className="image-container">
//                     <img src={imageUrl}/>
//                 </div>
//                 <div className="card-temperature">
//                     {temperature}
//                 </div>
//                 <div className="asdasdas">
//                     <div className="temp-range left">
//                         Min: {min_temp}
//                     </div>
//                     <div className="temp-range right">
//                         Max: {max_temp}
//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
// }

export default Card