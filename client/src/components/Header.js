import React from 'react';
import {Link} from 'react-router-dom'; 

export default function Header() {
  return (
    <div>
      <nav className="navbar navbar-expand-md navbar-dark bg-dark mb-4">
       <Link to="/"><h1 className="header navbar-brand">M2M-Eksamen</h1></Link>
        <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
            <Link to="/live" style={{ textDecoration: 'none' }}>
              Livefeed
            </Link>
            </li>

            <li className="nav-item active">
            <Link to="/overview" style={{ textDecoration: 'none' }}>
              Overview
            </Link>
            </li>
        </ul>
      </nav>
    </div>
  )
}
