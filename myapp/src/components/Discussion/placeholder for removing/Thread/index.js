import React from 'react';
import PropTypes from 'prop-types';
import Card from 'react-bootstrap/Card';
import ThreadHeader from '../ThreadHeader';
import ThreadBody from '../ThreadBody';

function Thread({ characterData, removeCharacter }) {
  return (
    <Card>
      <ThreadHeader />
      <ThreadBody
        characterData={characterData}
        removeCharacter={removeCharacter}
      />
    </Card>
  );
}

Thread.propTypes = {
  characterData: PropTypes.node.isRequired,
  removeCharacter: PropTypes.func.isRequired,
};

export default Thread;
