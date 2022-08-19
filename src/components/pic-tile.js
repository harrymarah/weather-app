import React, {Component} from "react";
import '../styles/pic-tile.css'
import '../styles/glass-style.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSun, faCloud, faCloudSun, faCloudRain, faCloudShowersHeavy, faCloudBolt, faSmog, faSnowflake, faQuestion } from '@fortawesome/free-solid-svg-icons'

class PicTile extends Component {
    
    getWeatherIcon(code) {
        if(code === 'no icon') return faQuestion
        if(code === '01d' || code === '01n') return faSun
        if(code === '02d' || code === '02n') return faCloudSun
        if(code === '03d' || code === '03n'|| '04d' || '04n') return faCloud
        if(code === '09d' || code === '09n') return faCloudRain
        if(code === '10d' || code === '10n') return faCloudShowersHeavy
        if(code === '11d' || code === '11n') return faCloudBolt
        if(code === '13d' || code === '13n') return faSnowflake
        if(code === '50d' || code === '50n') return faSmog
        return faQuestion
    }

    render() {
        const icon = this.props.weatherData?.[0].icon || 'no icon'
        const description = this.props.weatherData?.[0].main || 'no data'

        return (
            <div className="pic-tile glass">
                <FontAwesomeIcon className="info-icon" icon={this.getWeatherIcon(icon)}/>
                <small className="info-text">{description}</small>
            </div>
        )
    }
}


export default PicTile