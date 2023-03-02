import React from 'react'
import '../styles/glass-style.css'
import '../styles/info-tile.css'
import '../styles/pic-tile.css'

const infoTile = (props) => {
  return (
    <div className="pic-tile glass">
      <h3 className="number-data">{props.weatherData}</h3>
      <small className="info-text">{props.description}</small>
    </div>
  )
}

export default infoTile
