import styled from 'styled-components';
import { NavLink as Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button'

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

export const NewButton = styled(Button)`
  padding: 10px;
`;