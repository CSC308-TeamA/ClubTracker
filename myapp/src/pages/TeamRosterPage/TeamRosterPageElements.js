import styled from 'styled-components';
import { Card, Button } from 'react-bootstrap'

export const CardChange = styled(Card)`
  background-color: yellow;
  color: black;
`;

export const Hoover = styled(Button)`
  color: black;
  &:hover {
    background-color: lightgrey;
  }
`;
