import React from 'react';

const Block = (props) => {
  return <div 
    onMouseEnter={() => {props.displayActivity(props.activity);}} 
    onMouseLeave={() => {props.displayActivity(null);}}
    className={`block__gradient block__gradient--${props.feeling > 50 ? "good" : "bad"}`}></div>;
}

export default Block;