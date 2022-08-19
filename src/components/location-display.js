import React from 'react'
import '../styles/location-display.css'
import '../styles/glass-style.css'

const LocationDisplay = (props) => {
    return (
        <div className='location-heading glass'>Current Weather for {props.location}</div>
    )
}

export default LocationDisplay