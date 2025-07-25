import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav className="navbar">
      <NavLink to="/" className="logo">TaskMaster</NavLink>
      <ul className="nav-links">
        <li>
          <NavLink to="/home" className={({isActive}) => 
            isActive ? 'active' : ''
          }>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/Your-Task" className={({ isActive }) => 
            isActive ? 'active' : ''
          }>
            Today's Tasks
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" className={({ isActive }) => 
            isActive ? 'active' : ''
          }>
            About
          </NavLink>
        </li>
        <li>
          <NavLink to="/services" className={({ isActive }) => 
            isActive ? 'active' : ''
          }>
            Services
          </NavLink>
        </li>
        <li>
          <NavLink to="/blog" className={({ isActive }) => 
            isActive ? 'active' : ''
          }>
            Blog
          </NavLink>
        </li>
        <li>
          <NavLink to="/" className={({ isActive }) => 
            isActive ? 'active' : ''
          }>
            logOut
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;

