import React from 'react';

const Block = (props) => {
  return (
    <div className={`block block--${props.feeling > 50 ? 'good' : 'bad'}`}>
      <p className='block__activity'>{props.activity}</p>
    </div>
  );
}

export default Block;