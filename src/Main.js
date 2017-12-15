import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import About from './About.js';
import View from './View.js';
import Send from './Send.js';

class Main extends Component {
  render() {
    return (
        <Switch>
          <Route path='/about' component={About} />
          <Route path='/view' component={View} />
          <Route path='/send' component={Send} />
        </Switch>
    );
  }
}

export default Main;
