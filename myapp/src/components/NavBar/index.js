import React from 'react';
import {
  Bars,
  NavNew,
  NavLink,
  NavMenu,
  NavBtn,
  NavBtnLink,
  DropDownBody,
  DropDownContainer, 
  DropDownHeader
} from './NavbarElements';
import boatImage from '../../assets/logo.PNG';

const Navbar = () => {
  return (
    <>
      {/* <NB collapseOnSelect expand="lg" className="justify-content-center">
        <NB.Toggle aria-controls="responsive-navbar-nav" />
        <NB.Collapse id="responsive-navbar-nav">
 */}
          <NavNew className="mr-auto">
            <Bars />
            <NavLink to='/'>
                <img src={boatImage} alt="Logo" width={40}/>
            </NavLink>
            <NavMenu>
              <NavLink to='/first' activeStyle>
                FIRST
              </NavLink>
              <NavLink to='/about' activeStyle>
                About
              </NavLink>
              <NavLink to='/outreach' activeStyle>
                Outreach
              </NavLink>
              <NavLink to='/sponsor' activeStyle>
                Sponsors
              </NavLink>
              <DropDownBody 
                title={<DropDownHeader>
                  More
                </DropDownHeader>}
                id="collasible-nav-dropdown">
                <DropDownContainer href="/calendar">Calendar</DropDownContainer>
                <DropDownContainer href="/pictures">Pictures</DropDownContainer>
                <DropDownContainer href="/teamroster">Team Roster</DropDownContainer>
                <DropDownContainer href="/resources">Resources</DropDownContainer>
              </DropDownBody>
            </NavMenu>
            <NavBtn>
              <NavBtnLink to='/login'>Log In</NavBtnLink>
            </NavBtn>
          </NavNew>
        {/* </NB.Collapse>
     </NB> */}
    </>
  );
};

export default Navbar;