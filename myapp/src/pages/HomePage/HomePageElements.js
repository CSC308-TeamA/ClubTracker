import styled from 'styled-components';
import { Card } from 'react-bootstrap'
import { NavLink as Link } from 'react-router-dom';

export const Bandiv = styled.div`
    position: relative;
    height: 100vh;
    justify-content: center;
    align-items: center;
    background-color: pink;
`;

export const Image = styled.img`
    width: 100%;
    max-height: 100%;
    height: auto;
    position: relative;
    bottom: 0;
    margin: auto;
    padding: 10px;
`;

export const Title = styled.h1`
    height: 180px;
    padding: 10px;
    font-weight: 600;
    font-size: 5rem;
    text-transform: uppercase;
    text-decoration: none;
    letter-spacing: 1.75px;
    margin: auto;
    width: 100%;
    text-align: center;
    position: absolute;
`;

export const CardChange = styled(Card)`
    background-color: white;
    color: grey;
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

