import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import HomePage from "./components/HomePage"
import CreaturePage from "./components/CreaturePage"
import NavBar from './components/NavBar';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
        <NavBar />
          <h1>Whatsapppp </h1>
       
        <Switch>
          <Route exact path="/" component={HomePage}/>
          <Route exact path="/creatures/:creatureId" component={CreaturePage}/>
        </Switch>
        </div>
      </Router>
      
    );
  }
}

export default App;
