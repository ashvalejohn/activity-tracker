import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <nav>
      <ul>
        <li><Link to='/check-in'>Check In</Link></li>
        <li><Link to='/report'>Report</Link></li>
      </ul>
    </nav>
  )
}

export default Nav;