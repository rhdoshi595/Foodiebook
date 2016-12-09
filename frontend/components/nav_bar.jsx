import React from 'react';
import { Link } from 'react-router';

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="container">
        <div className="navbar-left-icon">
          <Link to="/" className="navbar-logo">
            foodiebook
          </Link>
        </div>


      </div>
    </nav>
  );
};

export default NavBar;
