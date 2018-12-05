import React, { Component } from 'react';
import axios from 'axios';

class NewUser extends Component {
    state = {
        addNewCreature:false,
        newCreature:{
            name:"",
            description:""
        }
    }
    toggleAddNewCreature = () => {
        const addNewCreature = !this.state.addNewCreature
        this.setState({addNewCreature})

      };
    handleChange = (e) => {
        // const name = e.target.name
        // const value = e.target.value
        const { name, value } = e.target
        const newCreature = { ...this.state.newCreature }
        newCreature[name] = value
        this.setState({ newCreature })
      }
      handleSubmit = (e)=>{
        e.preventDefault()
        axios.post('/api/creatures', this.state.newCreature).then(res => {
            // when we get that data back, we need to navigate to the new creatures page
            console.log(res.data)
            this.props.history.push(`/creatures/${res.data._id}`)
          })
      }
    render() {
        return (
            <div>
                {this.state.addNewCreature?
                <div>
                <h3>Sign-Up</h3>
                <form onSubmit={this.handleSubmit}>
          <div>
            <label htmlFor="name"> Name: </label>
            <input  value={this.state.newCreature.name} onChange = {this.handleChange} type="text" name="name"/>
          </div>
          <div>
            <label htmlFor="description">Description: </label>
            <input  value={this.state.newCreature.description} onChange = {this.handleChange} type="description" name="description"/>
          </div>
          <button type="submit">Create New Creature</button>
        </form>
        </div>
               :null }
               <button onClick={this.toggleAddNewCreature}>
                {this.state.addNewCreature
                  ? 'Hide'
                  : 'Add New Creature'}
              </button>
        
            </div>
        );
    }
}

export default NewUser;