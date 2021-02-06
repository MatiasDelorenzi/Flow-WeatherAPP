import React, { Component } from 'react'
import './index.css';
import Weather from './containers/Weather'

class App extends Component {

  constructor(){
    super()
    this.state = {
      search: '',
      location: '',
      currentWeather: {},
      forecast: {}
    }
    this.printForecast = this.fetchWeather.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.fetchCityWeather = this.fetchCityWeather.bind(this)
  }

  fetchWeather(){
    if (!this.state.forecast.day1){
      return (
        <div className="loading-container">
          <h1 className="loading-text">Fetching your city's weather...</h1>
        </div>)
    } else {
      return (
        <Weather current = {this.state.currentWeather} forecast={this.state.forecast}/>
      )
    }
  }

  fetchCityWeather(city){
    let current
    let forecast
    console.log('fetchcityweather')
    // fetch('http://localhost:4000/v1/current' + city)
    //   .then((response) => response.json())
    //   .then((data) => {
    //     fetch('http://localhost:4000/v1/current' + city)
    //       .then((res) => res.json())
    //       .then((result) => {
    //         forecast = result
    //       })
    //       .catch((error) => console.log(error))
    //     current = data})
    //   .cartch((err) => console.log(err))
    
    
    // return [current, forecast]
    
  }


  handleChange(e){
    this.setState({
      search: e.target.value
      
    })
    console.log(this.state.search)
  }
 

  componentDidMount(){
     fetch('http://localhost:4000/v1/location')
      .then((response) => response.json())
      .then((data) => {
        const fullLocation = `${data.city}, ${data.country}`
        this.setState({location: fullLocation})
     })
    
     fetch('http://localhost:4000/v1/forecast')
      .then((response) =>  response.json())
      .then((data) => {
      this.setState({forecast : data})
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
                {this.fetchWeather()}
              <div className="search-box">
                <input
                  value = {this.state.search}
                  onChange = {(e) => this.handleChange(e)}
                  type="text"
                  className="search-bar"
                  placeholder="Search..."
                />
              </div>
              {console.log(this.fetchCityWeather("toronto"))}
              <div className='search-result'>

              </div>
              
    
          </main>
        </div>
      );
    }
    
}
  


export default App;
