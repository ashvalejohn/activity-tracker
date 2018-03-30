import React, { Component } from 'react';
import Block from './block';
import { reports } from '../reports.js';

class Report extends Component{
  constructor(props){
    super(props);
    this.state = {
      activityText: null,
    }

    this.displayActivity = this.displayActivity.bind(this);
  }

  displayActivity(activity){
    this.setState({
      activityText: activity,
    });
  }

  render(){
    return (
      <div className='report'>
        <h2 className='report__title'>Here’s how you felt about your day:</h2>
        { this.state.activityText !== null ? <div className='block__activity'>{this.state.activityText}</div> : null }
        <div className='report__blocks'>
          {
            reports.map((report, index) => {
              return (
                <Block feeling={report.feeling} key={index} activity={report.activity} displayActivity={this.displayActivity} />
              )
            })
          }
        </div>
      </div>
    );
  }
}

export default Report;