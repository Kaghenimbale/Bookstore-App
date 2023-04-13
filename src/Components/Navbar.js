import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaUser } from 'react-icons/fa';

const Navbar = () => (
  <nav className="navbar">
    <div className="navlink">
      <h2 className="logo">BookStore CMS</h2>
      <ul className="navlists">
        <li>
          <NavLink className="navlist" to="/">
            BOOKS
          </NavLink>
        </li>
        <li>
          <NavLink className="navlist" to="categories">
            CATEGORIES
          </NavLink>
        </li>
      </ul>
    </div>
    <div className="profile-container">
      <FaUser className="profile" />
    </div>
  </nav>
);

export default Navbar;
