import React, { Component } from 'react'
import './index.css';
import Weather from './containers/Weather'
import swal from 'sweetalert'

class App extends Component {

  constructor(){
    super()
    this.state = {
      search: '',
      location: '',
      country:'',
      citiesArray: []
    }
    this.handleChange = this.handleChange.bind(this)
    this.fetchWeatherFrom = this.saveCity.bind(this)   
  }

  handleChange(e){
    this.setState({
      search: e.target.value
    })
  }
 

  componentDidMount(){
     fetch('http://localhost:4000/v1/location')
      .then((response) => response.json())
      .then((data) => {
        this.setState({location: data.city, country: data.country})
     })
      .catch((err) => console.log(err))
  } 

  async saveCity(event){
    if(event.key === "Enter"){
        //CHECK IF VALID CITY
        var error = false
        await fetch(`http://localhost:4000/v1/current/${this.state.search}`)
          .then((response) => response.json())
          .catch((err) => {
            error = true
            swal({
              title: "Invalid city",
              text: "We couldn't find this city, please try again",
              icon:"error",
              button:"Okay"
            })
          })
        if(error){
          console.log('City not found')
        }else{
          if(this.state.citiesArray.length <= 4){
            this.state.citiesArray.push(this.state.search)
          }else{
            this.state.citiesArray = []
            this.state.citiesArray.push(this.state.search)
          }
        }
        console.log('citiesarray:' +this.state.citiesArray)
        this.setState({search: ''})
      }
  }
    
  

  render(){   
      return (
        <div className="App">
           <main>
                
                <Weather city={this.state.location}/>
              
              <div className="search-box">
                <input
                  onKeyPress = {(e) => this.saveCity(e)}
                  value = {this.state.search}
                  onChange = {(e) => this.handleChange(e)}
                  type="text"
                  className="search-bar"
                  placeholder="Search up to five more cities!"
                  autoFocus
                />
                
              </div>   
              
              <div className='search-result'>
                {(this.state.citiesArray.length < 1) && <h3 className="search-result-placeholder">Results will be displayed here</h3>}
                {(this.state.citiesArray.length > 0) && (
                  this.state.citiesArray.map(city => {
                    return (
                      <div className="sarch-card">
                        <Weather city = {city}/>
                      </div>
                    )                    
                  })
                )}
              </div>
          </main>
        </div>
      );
    }
    
}
  


export default App;
