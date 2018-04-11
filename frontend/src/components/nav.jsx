import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav = () => {
  return (
    <nav>
      <ul>
        <li><NavLink to='/check-in'>Check In</NavLink></li>
        <li><NavLink to='/report'>Report</NavLink></li>
      </ul>
    </nav>
  )
}

export default Nav;