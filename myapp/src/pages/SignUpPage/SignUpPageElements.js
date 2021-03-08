import styled from 'styled-components';
import { NavLink as Link } from 'react-router-dom';
import { Card } from 'react-bootstrap'

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

export const NewDiv = styled.div`
  padding: 10px;
`;

export const NewCard = styled(Card)`
  padding: 10px;
  color: black;
`;

export const Center = styled.h2`
  text-align: center;
`;