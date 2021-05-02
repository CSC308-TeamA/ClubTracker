import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';
import profileSilhouette from '../../assets/profileSilhouette.png';
import {
  TeamRoster,
  RosterList,
  RosterListCard,
  RosterListCardHeader,
  RosterListCardTitle,
} from './RosterElements';

function Roster({ characterData, removeCharacter }) {
  return (
    <TeamRoster>
      {characterData.map((row) => (
        <RosterList key={row._id}>
          <RosterListCard>
            <RosterListCardHeader>
              <RosterListCardTitle>
                {row.name}
              </RosterListCardTitle>

              <RosterList.Toggle as={Button} variant="link" eventKey={row._id}>
                <RosterListCard.Img variant="top" src={profileSilhouette} />
              </RosterList.Toggle>

              Position:
              {row.position}
              <br />
            </RosterListCardHeader>

            <RosterList.Collapse eventKey={row._id}>
              <RosterListCard.Body>
                <RosterListCard.Text>
                  Specialization:
                  {row.specialization ? row.specialization.join(', ') : ''}
                  Quote:
                  <i>{row.quote}</i>
                  <Button onClick={() => removeCharacter(row._id)}>
                    Delete
                  </Button>
                </RosterListCard.Text>
              </RosterListCard.Body>
            </RosterList.Collapse>
          </RosterListCard>
        </RosterList>
      ))}
    </TeamRoster>
  );
}

Roster.propTypes = {
  characterData: PropTypes.node.isRequired,
  removeCharacter: PropTypes.func.isRequired,
};

export default Roster;
