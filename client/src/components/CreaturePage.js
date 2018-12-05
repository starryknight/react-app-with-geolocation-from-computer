import React, { Component } from 'react';
import axios from 'axios';
import Location from './Location'

class CreaturePage extends Component {
    state = {
        creature:{},
        editCreature:false,
        
    }

    componentDidMount() {
        // make an api call to get one single user
        // On the server URL is '/api/users/:userId'
        const creatureId = this.props.match.params.creatureId
        axios.get(`/api/creatures/${creatureId}`).then(res => {
          console.log(res.data)
          this.setState({
            creature: res.data
          })
        })
      }
      toggleEditCreature = () => {
        const editCreature = !this.state.editCreature
        this.setState({editCreature})

      };

      handleChange = (e) => {
        // const name = e.target.name
        // const value = e.target.value
        const { name, value } = e.target
        const creature = { ...this.state.creature }
        creature[name] = value
        this.setState({ creature })
      }
    
      

      handleUpdate = (event) => {
        event.preventDefault();
        if (this.props.match.params) {
            const creatureId = this.props.match.params.creatureId;
      
            axios
              .patch(`/api/creatures/${creatureId}`, this.state.creature)
              .then(res => {
                this.props.history.push(`/creatures/${creatureId}`);
              });
          }       
      };

    //   handleDelete = (creatureId) => {
    //  axios.delete(`/api/creatures/${creatureId}`).then(()=>{
    //      const newCreatures =[...this.state.creatures]
    //      const filtered = newCreatures.filter((creature)=>{
    //          return creature._id!==creatureId
    //      })
    //      this.setState({creatures:filtered})
    //     })
// };

    render() {
        return (
            <div>
                <h1>Welcome {this.state.creature.name}</h1>
                <a href={this.state.creature.description} download>Download Docs</a>
                <div>
                <div>
              {
                this.state.editCreature ? <div>
                    <form onSubmit={this.handleUpdate}>
                  <input
                  onChange = {this.handleChange}
                    name = "name"
                    value = {this.state.creature.name}
                    type="text"
                  />
                  <br/>
                  <br/>
                  <input
                  onChange = {this.handleChange}
                    name = "description"
                    value ={this.state.creature.description}
                    type="text"
                  />
                  <br />
                  <button type="submit">submit</button>
                  </form>
                </div>
                  : null
              }
            </div>
                <button onClick={this.toggleEditCreature}>
                {this.state.editCreature
                  ? 'Hide'
                  : 'Edit Creature'}
              </button>
              {/* <button onClick={this.handleDelete(this.state.creature._id)}>Delete Creature</button> */}
              <Location />
              </div>
            
            </div>

        );
    }
}

export default CreaturePage;