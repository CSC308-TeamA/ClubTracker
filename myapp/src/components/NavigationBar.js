import React from 'react';
import { Link } from 'react-router-dom';
import "../styles/styles.scss"

export const NavigationBar = () => (
  
  <header>
    <div className="container">
      <div className="inner-header">
        <div className="logo">
          <Link to="/">ROBOTICS</Link>
        </div>
        <div className="navigation">
          <nav>
            <Link to="/about">About</Link>
            <Link to="/recources">Resources</Link>
            <Link to="/sponsor">Sponsor</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/teamroster">Team Roster</Link>
            <Link to="/calendar">Calendar</Link>
          </nav>
        </div>
      </div>
    </div>
  </header>
)