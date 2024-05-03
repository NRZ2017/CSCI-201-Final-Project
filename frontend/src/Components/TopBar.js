import React from 'react';
import './TopBar.css';

const NavBar = () => {
  return (
    <nav>
      <ul className="nav-bar">
        <li><a href="/">HOME</a></li>
        <li><a href="/friends">FRIENDS</a></li>
        <li><a href="/profile">PROFILE</a></li>
        <li><a href="/StartSession">START SESSION</a></li>
      </ul>
    </nav>
  );
};

export default NavBar;