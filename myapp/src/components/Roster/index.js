import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';
import profileSilhouette from '../../assets/profileSilhouette.png';
import {
  TeamRoster, RosterList, RosterListCard, RosterListCardHeader,
  RosterListCardName, RosterListCardPosition, RosterListToggle,
  RosterBodySection, DeleteMemberButton, RosterListCardBody,
} from './RosterElements';

function Roster({ characterData, removeCharacter, logInStatus }) {
  return (
    <TeamRoster>
      {characterData.map((row) => (
        <RosterList key={row._id}>
          <RosterListCard>
            <RosterListCardHeader>
              <RosterListToggle eventKey={row._id}>
                <RosterListCardName>
                  {row.member_first_name}
                  {' '}
                  {row.member_last_name_private ? '' : row.member_last_name}
                </RosterListCardName>
                <RosterListCard.Img variant="top" src={profileSilhouette} />
                {row.member_position
                  ? (
                    <RosterListCardPosition>
                      {row.member_position}
                    </RosterListCardPosition>
                  )
                  : ''}
              </RosterListToggle>
            </RosterListCardHeader>

            <RosterList.Collapse eventKey={row._id}>
              <RosterListCardBody>
                <RosterListCard.Text>
                  <RosterBodySection>
                    <b>Email: </b>
                    {!row.member_email_private ? row.member_email : ''}
                  </RosterBodySection>
                  <RosterBodySection>
                    <b>Phone Number: </b>
                    {!row.member_cell_number_private ? row.member_cell_number : ''}
                  </RosterBodySection>
                  <RosterBodySection>
                    <b>Member Status: </b>
                    {row.member_status ? row.member_status : ''}
                  </RosterBodySection>
                  <RosterBodySection>
                    <b>Specialization(s): </b>
                    {row.member_specialization ? row.member_specialization.join(', ') : ''}
                  </RosterBodySection>
                  <RosterBodySection>
                    <b>Quote: </b>
                    {row.member_quote ? row.member_quote : ''}
                  </RosterBodySection>
                  {logInStatus
                    ? (
                      <DeleteMemberButton>
                        <Button block onClick={() => removeCharacter(row._id)}>
                          Delete Member
                        </Button>
                      </DeleteMemberButton>
                    )
                    : <div />}
                </RosterListCard.Text>
              </RosterListCardBody>
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
  logInStatus: PropTypes.bool.isRequired,
};

export default Roster;
