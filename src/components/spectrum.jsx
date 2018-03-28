import React, { Component } from 'react';

class Spectrum extends Component{
  constructor(props){
    super(props);
    this.state = {
      color: '#BADA55',
    }

    this.moveSlider = this.moveSlider.bind(this);
  }

  moveSlider(e){
    e.preventDefault();
    console.log(e.target.value);
  }

  render(){
    return(
      <input id='spectrum' className='spectrum' type='range' onChange={(e) => {this.moveSlider(e);}} />
    )
  }
}

export default Spectrum;