import React from 'react';
import Block from './block';
import { reports } from '../reports.js';

const Report = () => {
  console.log(reports);
  return (
    <div className='report'>
      <h2 className='report__title'>Here’s how you felt about your day:</h2>
      <div className='report__blocks'>
        {
          reports.map((report, index) => {
            return <Block activity={report.activity} feeling={report.feeling} key={index}/>
          })
        }
      </div>
    </div>
  );
}

export default Report;