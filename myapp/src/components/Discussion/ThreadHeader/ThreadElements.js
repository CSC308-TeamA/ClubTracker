import styled from 'styled-components';
import Card from 'react-bootstrap/Card'

export const DescriptionText = styled(Card.Text)`
  float: left;
  width: 80%;
`;

export const Title = styled.div`
  text-align: center;
  font-size: 2rem;
  color: black;
  &.active {
    color: blue;
  }
`;

export const ProfileLeft = styled.div`
  float: left;
  width: 20%;
`;