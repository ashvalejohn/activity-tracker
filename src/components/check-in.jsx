import React from 'react';
import Spectrum from './spectrum';

const CheckIn = () => {
  return (
    <div>
      <form>
        <label>What’d you do for the last 30 minutes?
          <textarea></textarea>
        </label>
        <label>How’d you feel about it?
          <Spectrum />
        </label>
      </form>
    </div>
  );
}

export default CheckIn;