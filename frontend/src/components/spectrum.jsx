import React from 'react';

const Spectrum = (props) => {
  return(
    <input id='spectrum' className='spectrum' type='range' onChange={(e) => {props.moveSlider(e);}} />
  )
}

export default Spectrum;