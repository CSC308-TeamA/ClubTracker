import styled from 'styled-components';
import { NavLink as Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';

export const CardHoover = styled(Card)`
  &:hover {
    background-color: #ddd;
  }
`;

export const UpdateText = styled.div`
  float: right;
  width: 20%;
  p {
    margin-bottom: 0px;
    color: blue;
  }
`;

export const DescriptionText = styled(Card.Text)`
  float: left;
  width: 80%;
  color: black;
`;

export const NavLink = styled(Link)`
  color: black;
  &.active {
    color: blue;
  }
`;
