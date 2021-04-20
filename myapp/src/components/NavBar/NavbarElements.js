import { FaBars } from 'react-icons/fa';
import { NavLink as Link } from 'react-router-dom';
import styled from 'styled-components';
import { NavDropdown } from 'react-bootstrap';

export const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  @media (max-width: 768px) {
    flex-flow: column nowrap;
    background-color: #222;
    position: fixed;
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
    top: 0;
    right: 0;
    height: 100vh;
    width: 300px;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;
    li {
      color: black;
    }
  }
`;

export const NavNew = styled.nav`
  background: yellow;
  height: 80px;
  display: flex;
  justify-content: space-between;
  padding: 0.5rem calc((100vw - 1000px) / 2);
  z-index: 99;
  font-weight: 600;
  font-size: 0.9rem;
  text-transform: uppercase;
  margin: 100 20px;
  text-decoration: none;
  letter-spacing: 1.75px;
  width: 100%;
  align-items: center;
  margin-right: -24px;
  position: fixed;
  .logo {
    padding: 15px 0;
  }
`;

export const NavLink = styled(Link)`
  color: black;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  &.active {
    color: #000;
  }
  &:hover {
    color: #000;
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
  margin-left: 24px;
  &:hover {
    transition: all 0.2s ease-in-out;
    background: #256ce1;
  }
`;

export const DropDownBody = styled(NavDropdown)`
  color: yellow;
  display: flex;
  align-items: center;
  text-decoration: none;
  height: 100%;
  cursor: pointer;
  &.active {
    color: white;
  }
  &:hover {
    color: white;
  }
  margin: 0 auto;
  .dropdown-menu {
    background-color: yellow;
  }
`;

export const DropDownContainer = styled(NavDropdown.Item)`
  width: 10.5em;
  margin: 0 auto;
  font-weight: 600;
  font-size: 0.9rem;
  text-transform: uppercase;
  
`;

export const DropDownHeader = styled.a`
  width: 10.5em;
  margin: 0 auto;
  font-weight: 600;
  font-size: 0.9rem;
  text-transform: uppercase;
  color: black;
  &:hover {
    color: #555;
  }
`;

export const StyledBurger = styled.div`
  width: 2rem;
  height: 2rem;
  position: fixed;
  top: 15px;
  right: 20px;
  z-index: 20;
  display: none;
  @media (max-width: 768px) {
    display: flex;
    justify-content: space-around;
    flex-flow: column nowrap;
  }
  div {
    width: 2rem;
    height: 0.25rem;
    background-color: ${({ open }) => open ? '#ccc' : '#333'};
    border-radius: 10px;
    transform-origin: 1px;
    transition: all 0.3s linear;
    &:nth-child(1) {
      transform: ${({ open }) => open ? 'rotate(45deg)' : 'rotate(0)'};
    }
    &:nth-child(2) {
      transform: ${({ open }) => open ? 'translateX(100%)' : 'translateX(0)'};
      opacity: ${({ open }) => open ? 0 : 1};
    }
    &:nth-child(3) {
      transform: ${({ open }) => open ? 'rotate(-45deg)' : 'rotate(0)'};
    }
  }
`;