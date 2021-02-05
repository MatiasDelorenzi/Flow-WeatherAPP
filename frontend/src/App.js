import React, { Component } from 'react'
import './index.css';
import Weather from './containers/Weather'
import Card from './components/Card'



class App extends Component {

  constructor(){
    super()
    this.state = {
      location: '',
      currentWeather: {},
      forecast: {}
    }
    this.printForecast = this.fetchForecast.bind(this)
  }

  fetchForecast(){
    if (!this.state.forecast.day1){
      return (<Card temperature="Loading..."/>)
    } else {
      return (
        <Weather current = {this.state.currentWeather} forecast={this.state.forecast}/>
      )
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
                {this.fetchForecast()}
              <div className="search-box">
                <input
                  type="text"
                  className="search-bar"
                  placeholder="Search..."
                />
              </div>
              <div className='search-result'>

              </div>
              
    
          </main>
        </div>
      );
    }
    
}
  


export default App;
