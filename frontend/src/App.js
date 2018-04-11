import React, { Component } from 'react';
import './styles/App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Nav from './components/nav';
import CheckIn from './components/check-in';
import Report from './components/report';

class App extends Component {
  render() {
    return (
      <div className="App">
      <Router>
        <div>
          <Nav />
          <Switch>
            <Route path="/check-in" component={CheckIn} />
            <Route path="/report" component={Report} />
          </Switch>
        </div>
      </Router>
      </div>
    );
  }
}

export default App;