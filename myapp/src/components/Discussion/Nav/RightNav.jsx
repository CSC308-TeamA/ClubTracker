import React from 'react';
import {
    NavLink,
    Ul
} from './NavbarElements';

const RightNav = ({ open }) => {
  return (
    <Ul open={open}>
        <li>
            <NavLink to='/discussion' activeStyle>
            Discussion Home
            </NavLink>
        </li>
        <li>
            <NavLink to='/thread' activeStyle>
            Annoucements
            </NavLink>
        </li>
        <li>
            <NavLink to='/thread' activeStyle>
            General
            </NavLink>
        </li>
        <li>
            <NavLink to='/thread' activeStyle>
            Robot
            </NavLink>
        </li>
        <li>
            <NavLink to='/thread' activeStyle>
            Competition
            </NavLink>
        </li>
    </Ul>
    )
}

export default RightNav