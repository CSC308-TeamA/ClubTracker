import React from 'react';
import PropTypes from 'prop-types';
import { Button, Card } from 'react-bootstrap';
import {
  DescriptionText,
  Edit,
  CardHoover,
  ProfileLeft,
} from './ThreadElements';
import Profile from '../Profile';

function ThreadBody({ characterData, removeCharacter }) {
  const rows = characterData.map((row, index) => (
    <CardHoover>
      <Card.Body>
        <ProfileLeft>
          <Profile
            picture={row.picture}
            name={row.name}
            user={row.user}
            position={row.position}
          />
        </ProfileLeft>
        <DescriptionText>
          { row.comment }
        </DescriptionText>
        <Edit>
          <Button onClick={() => removeCharacter(index)}>Delete</Button>
        </Edit>
      </Card.Body>
    </CardHoover>
  ));

  return (
    <tbody>
      {rows}
    </tbody>
  );
}

ThreadBody.propTypes = {
  characterData: PropTypes.node.isRequired,
  removeCharacter: PropTypes.func.isRequired,
};

export default ThreadBody;
