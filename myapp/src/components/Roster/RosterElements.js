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

  &collapse {
    height: 340px;
  };
`;

export const RosterListCardHeader = styled(Card.Header)`
  text-align: center;
  height: 340px;
`;

export const RosterListCardBody = styled(Card.Body)`
  max-height: 300px;
  overflow-y: scroll;
`;

export const RosterListCardName = styled(Card.Title)`
  font-size: 17pt;
  font-weight: bold;
  color: black;
`;

export const RosterListCardPosition = styled.div`
  font-size: 15pt;
  color: black;
`;

export const RosterListToggle = styled(Accordion.Toggle)`
  &:active, &:hover, &:focus{
    background-color: rgba(0, 0, 0, 0.03);
    border-color: rgba(0, 0, 0, 0.03);
  };

  background-color: rgba(0, 0, 0, 0.03);
  border-color: rgba(0, 0, 0, 0.03);
  height: 315px;
`;

export const RosterBodySection = styled.div`
  padding-bottom: 5px;
`;

export const DeleteMemberButton = styled.div`
  margin-top: 15px;
`;
