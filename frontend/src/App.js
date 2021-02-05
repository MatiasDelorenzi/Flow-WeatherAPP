import React, { Component } from 'react'
import './index.css';
import Weather from './containers/Weather'
import Card from './components/Card'

class App extends Component {

  constructor(props){
    super(props)
    this.state = {
      location: '',
      currentWeather: {},
      forecast: []
    }
  }

  componentDidMount(){
    fetch('http://localhost:4000/v1/location')
      .then((response) => response.json())
      .then((data) => {
        const fullLocation = `${data.city}, ${data.country}`
        this.setState({location: fullLocation})
     })
    fetch('http://localhost:4000/v1/forecast')
      .then((response) => response.json())
      .then((data) => {
      this.setState({forecast : data.day1})
      console.log(this.state.forecast.main)
    })
    fetch('http://localhost:4000/v1/current')
     .then((response) => response.json())
     .then((data) => {
       this.setState({currentWeather: data})
     })
    
  } 

  render = () => {
    return (
      <div className="App">
         <main>
            <div className="title-box">
              <h1 className="title">{this.state.location}</h1>
            </div>  
            <div className="grid">
              <Card
                  date = {this.state.currentWeather.day}
                  imageUrl = {this.state.currentWeather.iconUrl}
                  temperature = {this.state.currentWeather.temp}
                  min_temp = {this.state.currentWeather.min_temp}
                  max_temp = {this.state.currentWeather.max_temp}
                  weather = {this.state.currentWeather.main}
              />
              <Card
                  date = {this.state.forecast.day}
                  imageUrl = {this.state.forecast.iconUrl}
                  temperature = {this.state.forecast.temp}
                  min_temp = {this.state.forecast.min_temp}
                  max_temp = {this.state.forecast.max_temp}
                  weather = {this.state.forecast.main}
              />
            </div>
            
                 
                  

            <div className="search-box">
              <input
                type="text"
                className="search-bar"
                placeholder="Search..."
              />
            </div>
            <div className="location-box">
              <div className="location">New York City, US</div>
              
            </div>
            <div className='weather-box'>
              <div className="temp">15°</div>
              <div className="weather">Sunny</div>
            </div>
            
  
        </main>
      </div>
    );
  }
  
}

export default App;
