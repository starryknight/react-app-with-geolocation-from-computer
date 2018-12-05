import React, { Component } from 'react';

class Location extends Component {
    state = {
        position:{}
    }
 
     getLocation=()=> {
        // if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((location)=>{
                // console.log(location.coords)
                let position = {...this.state.position}
                position = location.coords
                this.setState({position:position})
                
                
            });
        
    }
    
   
    render() {
        return (
            <div>
                <p>Click the button to get your coordinates.</p>

<button onClick={this.getLocation}>Get your location</button>
<p>Your latitude: {this.state.position.latitude}</p>
<p>Your longitude: {this.state.position.longitude}</p>
<p id="demo"></p>

            </div>
        );
    }
}

export default Location;