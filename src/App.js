import './App.css';
import React, {Component} from 'react'
import SearchBar from './components/search-bar'
import PicTile from './components/pic-tile'
import InfoTile from './components/info-tile';
import LocationDisplay from './components/location-display'
import _ from 'lodash'

class App extends Component {
    constructor(props){
        super(props)

        this.state = { weatherData : {} }
    }

    componentDidMount() {
        this.getWeatherData('rickmansworth')
    }

    getWeatherData(location){
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=${process.env.REACT_APP_WEATHER_API_KEY}`)
        .then((response) => {
            if(!response.ok) {
                throw Error('Unable to fetch weather data.')
            }
            return response.json()
        })
        .then((data) => this.setState({weatherData: data}))
        .catch(e => console.log(e))
    }

    convertUnixTime(unixTimestamp){
        const date = new Date(unixTimestamp * 1000)
        const hours = date.getHours().toString()
        const minutes = date.getMinutes().toString()

        return `${hours.length === 1 ? '0' + hours : hours}:${minutes.length === 1 ? '0' + minutes : minutes}`
    }

    render(){
        const getWeatherData = _.debounce((location) => {this.getWeatherData(location)}, 500)
        const weatherData = this.state.weatherData
        
        const {temp, temp_max, temp_min, feels_like, humidity} = weatherData.main || 'N/A'
        const {sunrise, sunset} = weatherData.sys || 'N/A'
        const weatherInfo = weatherData.weather

        return (
            <main>
                <LocationDisplay location={weatherData.name} />

                <SearchBar onLocationSearch={getWeatherData} />
                
                <div className='container'>
                    <InfoTile 
                        description='Current'
                        weatherData={Math.round(temp) + '°'} 
                        />
                    <InfoTile
                        description='Max'
                        weatherData={Math.round(temp_max) + '°'}  
                        />
                    <InfoTile 
                        description='Min'
                        weatherData={Math.round(temp_min) + '°'}  
                        />
                    <InfoTile 
                        description='Feels like'
                        weatherData={Math.round(feels_like) + '°'} 
                        />
                        <PicTile 
                        weatherData={weatherInfo}
                        />
                    <InfoTile
                        description='Sunrise'
                        weatherData={this.convertUnixTime(sunrise)}
                        />
                    <InfoTile 
                        description='Sunset'
                        weatherData={this.convertUnixTime(sunset)} 
                        />
                    <InfoTile 
                        description='Humidity'
                        weatherData={humidity + '%'} 
                        />
                </div>
            </main> 
        )
    }
}

export default App;
