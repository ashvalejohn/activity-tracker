import React from 'react';

const Block = (props) => {
  return <div 
    onMouseEnter={() => {props.displayActivity(props.activity);}} 
    onMouseLeave={() => {props.displayActivity(null);}}
    className={`block__gradient block__gradient--${parseInt(props.feeling / 10, 10)}`}></div>;
}

export default Block;