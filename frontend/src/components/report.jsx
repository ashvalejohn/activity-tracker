import React, { Component } from 'react';
import Block from './block';

class Report extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activityText: null,
      reports: []
    };

    this.displayActivity = this.displayActivity.bind(this);
  }

  componentDidMount() {
    this.callApi()
      .then(res => this.setState({ reports: res.reports }))
      .catch(err => console.log(err));
  }

  callApi = async () => {
    const response = await fetch("/api/reports");
    const body = await response.json();

    if (response.status !== 200) throw Error(body.message);

    return body;
  };

  displayActivity(activity) {
    this.setState({
      activityText: activity
    });
  }

  render() {
    return (
      <div className="report">
        <h2 className="report__title">Here’s how you felt about your day:</h2>
        {this.state.activityText !== null ? (
          <div className="block__activity">{this.state.activityText}</div>
        ) : null}
        <div className="report__blocks">
          {this.state.reports.map((report, index) => {
            return (
              <Block
                feeling={report.feeling}
                key={index}
                activity={report.activity}
                time={report.time}
                displayActivity={this.displayActivity}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

export default Report;