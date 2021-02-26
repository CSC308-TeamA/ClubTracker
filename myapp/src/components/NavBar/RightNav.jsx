import React from 'react';
import {
    NavLink,
    NavBtn,
    NavBtnLink,
    DropDownBody,
    DropDownContainer, 
    DropDownHeader, 
    Ul
} from './NavbarElements';

const RightNav = ({ open }) => {
  return (
    <Ul open={open}>
        <li>
            <NavLink to='/first' activeStyle>
            FIRST
            </NavLink>
        </li>
        <li>
            <NavLink to='/about' activeStyle>
            About
            </NavLink>
        </li>
        <li>
            <NavLink to='/outreach' activeStyle>
            Outreach
            </NavLink>
        </li>
        <li>
            <NavLink to='/sponsor' activeStyle>
            Sponsors
            </NavLink>
        </li>
        <li>  
            <NavLink to='/contact' activeStyle>
            Contact Us
            </NavLink>
        </li>
        <li>
            <DropDownBody 
                title={<DropDownHeader>
                    More
                </DropDownHeader>}
                id="collasible-nav-dropdown">
                <DropDownContainer href="/calendar">Calendar</DropDownContainer>
                <DropDownContainer href="/pictures">Pictures</DropDownContainer>
                <DropDownContainer href="/teamroster">Team Roster</DropDownContainer>
                <DropDownContainer href="/login">Log In</DropDownContainer>
            </DropDownBody>
        </li>
        <li>
            <NavBtn>
                <NavBtnLink to='/login'>Log In</NavBtnLink>
            </NavBtn>
        </li>
    </Ul>
    )
}

export default RightNav