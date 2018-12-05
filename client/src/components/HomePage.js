import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import axios from 'axios'
import NewUser from './NewUser';

class HomePage extends Component {
    state = {
        creatures:[]
    }
    componentDidMount() {
        // make an api call to get many creatures
        // On the server URL is '/api/users/'
        
        axios.get(`/api/creatures/`).then(res => {
          console.log(res.data)
          this.setState({
            creatures: res.data
            
          })
        })
      }
       
    render() {
        
        return (
            <div>
                <h1>Homepage</h1>
                
                {this.state.creatures.map((creature, i)=>(
                    
                    <Link key={i} to={`/creatures/${creature._id}`}>    {creature.name}</Link>
                    
                ))}
                <NewUser history={this.props.history}/>
            </div>
        );
    }
}

export default HomePage;