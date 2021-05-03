import React from 'react';
import Burger from './Burger';
import {
  NavNew,
  NavLink,
} from './NavbarElements';
import boatImage from '../../assets/logo.PNG';

function Navbar() {
  return (
    <NavNew>
      <div className="logo">
        <NavLink to="/" activeStyle>
          <img src={boatImage} alt="Logo" width={40} />
        </NavLink>
      </div>
      <Burger />
    </NavNew>
  );
}

export default Navbar;
