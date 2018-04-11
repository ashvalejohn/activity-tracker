import React, { Component } from 'react';
import './styles/App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Nav from './components/nav';
import CheckIn from './components/check-in';
import Report from './components/report';

class App extends Component {
  state = {
    response: ""
  };

  componentDidMount() {
    this.callApi()
      .then(res => this.setState({ response: res.express }))
      .catch(err => console.log(err));
  }

  callApi = async () => {
    const response = await fetch("/api/reports");
    const body = await response.json();

    if (response.status !== 200) throw Error(body.message);

    return body;
  };

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
        <p className="App-intro">{this.state.response}</p>
      </div>
    );
  }
}

export default App;