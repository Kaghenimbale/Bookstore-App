import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <h2>BookStore CMS</h2>
      <ul>
        <li>
          <NavLink to="/">BOOKS</NavLink>
        </li>
        <li>
          <NavLink to="categories">CATEGORIES</NavLink>
        </li>
      </ul>
      <div className="profile">Profile</div>
    </nav>
  );
};

export default Navbar;
