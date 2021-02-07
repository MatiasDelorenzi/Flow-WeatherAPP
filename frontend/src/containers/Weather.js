import React, { Component } from 'react'
import Card from '../components/Card.js'
import './Weather.css'


class Weather extends Component{
    constructor(){
        super()
        this.state={
            currentWeather: {},
            forecast: {}
        }
    }

    componentDidMount(){
        fetch(`http://localhost:4000/v1/forecast/${this.props.city}`)
            .then((response) => response.json())
            .then((data) => {
                this.setState({forecast: data})
            })
            .catch((err) => console.log(err))
        
        fetch(`http://localhost:4000/v1/current/${this.props.city}`)
            .then((response) => response.json())
            .then((data) => {
                this.setState({currentWeather: data})
            })
    }

    render (){       
        if(!this.state.forecast.day1){
            return(
                <div className="loading-container">
                    <h1 className="loading-text">Loading...</h1>
                </div>
            )
        }
        return(
            <div className="weather-container">
                <div className="grid-title">
                    <h1 className="grid-title-text">{this.state.forecast.location}</h1>
                </div>  
                <div className='grid'>
                              
                <Card weather={this.state.currentWeather}/>
                <Card weather={this.state.forecast.day1}/>
                <Card weather={this.state.forecast.day2}/>
                <Card weather={this.state.forecast.day3}/>
                <Card weather={this.state.forecast.day4}/>
                <Card weather={this.state.forecast.day5}/>
            </div>
            </div>
            
            
        )
    }
}

export default Weather