import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './pages/home';

class App extends Component {

  render() {
    return(
      <Switch>
        <Route path='/' component={Home} />
      </Switch>
    )
  }

}

export default App;
