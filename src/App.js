import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Nav from './components/nav';
import CheckIn from './components/check-in';
import Report from './components/report';

class App extends Component {
  render() {
    return (
      <Router className="App">
        <div>
          <Route path='/' component={Nav} />
          <Route path='/report' component={Report} />
          <Route default path='/check-in' component={CheckIn} />
        </div>
      </Router>
    );
  }
}

export default App;
