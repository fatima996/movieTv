import React, { Component } from 'react';
import {BrowserRouter, Route, Switch } from "react-router-dom";
import './App.css';

import  Movie  from './components/Movie';
import  Tv  from './components/Tv';
import Form from './components/Form';
import Details from './components/Details';


class App extends Component {
  render() {
    return (
    <BrowserRouter>
    <div>
      <Form />
    <Switch>
    <Route path="/" component={Movie} exact/>
    <Route path="/tv" component={Tv}/>
    <Route path="/tv/details" component={Details}/>
    <Route path="/details" component={Details}/>
      </Switch>
    </div>
    
    </BrowserRouter>
    );
  }
}

export default App;
