import React from 'react';
import './TopBar.css';

const NavBar = () => {
  return (
    <nav>
      <ul className="nav-bar">
        <li><a href="/">Home</a></li>
        <li><a href="/friends">Friends</a></li>
        <li><a href="/profile">Profile</a></li>
        <li><a href="/StartSession">StartSession</a></li>
      </ul>
    </nav>
  );
};

export default NavBar;