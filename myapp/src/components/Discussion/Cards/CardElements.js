import styled from 'styled-components';
import { NavLink as Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';

export const CardElement = styled(Card)`
  margin-bottom: 10px;
`;

export const TitleText = styled(Card.Title)`
  float: left;
  width: 80%;
  color: black;
  &:hover {
    background-color: #ddd;
  }
`;

export const DescriptionText = styled(Card.Text)`
  float: left;
  width: 80%;
  color: black;
  padding-bottom: 10px;
`;

export const ThreadTitle = styled(Card.Title)`
  float: left;
  width: 80%;
  color: black;
  text-decoration: underline;
  &:hover {
    color: blue;
  }
`;

export const NavLink = styled(Link)`
  color: black;
  &.active {
    color: blue;
  }
`;

export const DescriptionInfo = styled.div`
  width: 66%;
  float: left;
`;

export const Delete = styled.div`
  float: right;
`;

export const HR = styled.hr`
  border: 1px solid lightgrey;
`;
