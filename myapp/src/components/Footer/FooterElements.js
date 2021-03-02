import { NavLink as Link } from 'react-router-dom';
import styled from 'styled-components';


export const Header = styled.header`
  position: static; 
  background-color: black;
  width: 100%;
  bottom: 0px;
  z-index: 10;
  font-family: Roboto;
  font-weight: 600;
  font-size: 0.75rem;
  text-transform: uppercase;
  margin: 100 20px;
  text-decoration: none;
  letter-spacing: 1.75px;
  border-top: 5px solid yellow;
`;

export const Nav = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px 1.5rem 10px 1.5rem;
  align-items: center;
  z-index: 9;
  bottom: calc(1 * (0.4rem + 30px));
  width: 100%;
`;

export const NavLink = styled.a`
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

export const NavLinkLogo = styled(Link)`
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

