import { FaBars } from 'react-icons/fa';
import { NavLink as Link } from 'react-router-dom';
import styled from 'styled-components';
import { NavDropdown, Nav, Navbar as NB } from 'react-bootstrap';

export const NavNew = styled(Nav)`
  background: #000;
  height: 80px;
  display: flex;
  justify-content: space-between;
  padding: 0.5rem calc((100vw - 1000px) / 2);
  z-index: 99;
  font-family: Roboto;
  font-weight: 600;
  font-size: 0.75rem;
  text-transform: uppercase;
  margin: 100 20px;
  text-decoration: none;
  letter-spacing: 1.75px;
  width: 100%;
  position: fixed;
`;

export const NavLink = styled(Link)`
  color: yellow;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  &.active {
    color: white;
  }
  &:hover {
    color: white;
  }
`;

export const Bars = styled(FaBars)`
  display: none;
  color: #fff;
  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;

export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: -24px;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavBtn = styled.nav`
  display: flex;
  align-items: center;
  margin-right: 24px;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavBtnLink = styled(Link)`
  border-radius: 4px;
  background: #256ce1;
  padding: 10px 22px;
  color: #fff;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  /* Second Nav */
  margin-left: 24px;
  &:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #010606;
  }
`;

export const DropDownBody = styled(NavDropdown)`
  color: yellow;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  &.active {
    color: white;
  }
  &:hover {
    color: white;
  }
  width: 10.5em;
  margin: 0 auto;
  .dropdown-menu {
    background-color: yellow;
  }
`;

export const DropDownContainer = styled(NavDropdown.Item)`
  width: 10.5em;
  margin: 0 auto;
  
  font-family: Roboto;
  font-weight: 600;
  font-size: 0.75rem;
  text-transform: uppercase;
  
`;

export const DropDownHeader = styled.a`
  width: 10.5em;
  margin: 0 auto;

  font-family: Roboto;
  font-weight: 600;
  font-size: 0.75rem;
  text-transform: uppercase;
  color: yellow;
  &:hover {
    color: white;
  }
`;