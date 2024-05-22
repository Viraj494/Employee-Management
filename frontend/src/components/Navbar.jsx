import React from 'react';
import { FaUserCircle } from 'react-icons/fa';

function Navbar() {
  return (
    <nav className="navbar bg-primary" data-bs-theme="dark">
      <div className="container-fluid">
        <a href='/home' className="navbar-brand">Employee Management System</a>
        <div className="dropdown ms-auto">
          <button 
            className="btn btn-primary dropdown-toggle" 
            type="button" 
            id="dropdownMenuButton" 
            data-bs-toggle="dropdown" 
            aria-expanded="false"
          >
            <FaUserCircle size={32} className="text-white" />
          </button>
          <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="dropdownMenuButton">
            <li><a className="dropdown-item" href="/profile">View Profile</a></li>
            <li><a className="dropdown-item" href="/logout">Logout</a></li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
