import React from 'react';
import Burger from './Burger';
import {
  NavNew
} from './NavbarElements';

const Navbar = () => {
  return (
    <>
      <NavNew>
        <Burger />
      </NavNew>
    </>
  )
}

export default Navbar