import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const FormDiv = styled.div`
  float: left;
  width: 50%;
  padding: 10px;
`;

export const MapOuter = styled.div`
  position: relative;
  text-align: right;
  height: 500px;
  width: 600px;
`;

export const NavLink = styled(Link)`
  color: white;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  font-weight: 600;
  font-size: 0.75rem;
  text-transform: uppercase;
  margin: 100 20px;
  text-decoration: none;
  letter-spacing: 1.75px;
`;

export const GmapCanvas = styled.div`
  overflow: hidden;
  background: none !important;
  height: 500px;
  width: 600px;
`;

export const Line = styled.hr`
  border: 2px solid white;
  `;