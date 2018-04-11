import React, { Component } from 'react';
import Spectrum from './spectrum';

class CheckIn extends Component {
  constructor(props) {
    super(props);

    this.state = {
      feeling: "50",
      activity: "",
    };

    this.moveSlider = this.moveSlider.bind(this);
    this.recordActivity = this.recordActivity.bind(this);
  }

  moveSlider(e) {
    e.preventDefault();
    this.setState({
      feeling: e.target.value
    });
  }

  recordActivity(e){
    e.preventDefault();
    this.setState({
      activity: e.target.value,
    });
  }

  render() {
    return <div className="check-in">
        <form action="/api/reports" method="POST">
          <label className="check-in__label">
            What did you do for the last 30 minutes?
            <textarea name="activity" className='check-in__activity' onChange={e => {
                this.recordActivity(e);
              }} placeholder="Paired socks, wrote thank you cards, flossed teeth." />
          </label>
          <label className="check-in__label">
            How do you feel about it?
            <Spectrum moveSlider={this.moveSlider} />
          </label>
          <input className="check-in__submit" type="submit" value="Save" />
        </form>
      </div>;
  }
}

export default CheckIn;

// Question: is it better to use onChange for the <textarea> or should I wait to save that text when the user hits "SAVE"?