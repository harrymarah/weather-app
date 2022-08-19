import React, {Component} from 'react'
import '../styles/search-bar.css'
import '../styles/glass-style.css'


class SearchBar extends Component {
    constructor(props){
        super(props)
        this.state = {location: ''}
    }

    onInputChange(location) {
        this.setState({location})
        this.props.onLocationSearch(location)
    }

    render() {
        return (
            <div>
                <input 
                    value={this.state.location}
                    onChange={event => this.onInputChange(event.target.value)} 
                    placeholder="Enter a location..." 
                    className="search-bar glass"
                    />
            </div>
            
        )
    }
}

export default SearchBar