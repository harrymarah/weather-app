import React from 'react'
import '../styles/location-display.css'
import '../styles/glass-style.css'

const LocationDisplay = (props) => {
  return (
    <div className="location-heading glass">
      <h2>Current Weather for {props.location}</h2>
    </div>
  )
}

export default LocationDisplay
