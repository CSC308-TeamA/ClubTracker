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
            <NavLink to='/discussion/users' activeStyle>
            Users
            </NavLink>
        </li>
    </Ul>
    )
}

export default RightNav