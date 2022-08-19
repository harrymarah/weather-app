import React from "react";
import '../styles/info-tile.css'
import '../styles/glass-style.css'


const infoTile = (props) => {
    return (
        <div className="info-tile glass">
            <h3 className="number-data">{props.weatherData}</h3>
            <small className="info-text">{props.description}</small>
        </div>
    )
}

export default infoTile