import styled from 'styled-components';
import { Accordion, Card } from 'react-bootstrap';

export const TeamRoster = styled.div`
  margin: 15px 0px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

export const RosterList = styled(Accordion)`
  margin: 10px;
`;

export const RosterListCard = styled(Card)`
  width: 18rem;
  color: black;
`;

export const RosterListCardHeader = styled(Card.Header)`
    text-align: center;
`;

export const RosterListCardTitle = styled(Card.Title)`
    font-size: 16pt;
    font-weight: bold;
`;
