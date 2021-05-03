import React from 'react';
import PropTypes from 'prop-types';
import {
  NewLI, NewB, NewUL,
} from './ProfilePreviewElements';

function ProfilePreview({ characterData }) {
  const rows = characterData.map((row) => (
    <>
      <img src={row.picture} alt="" />
      <NewUL>
        <NewLI>
          <NewB>Name</NewB>
          :
          {' '}
          { row.first }
          {' '}
          { row.last }
        </NewLI>
        <NewLI>
          <NewB>User👤</NewB>
          :
          {' '}
          { row.user }
        </NewLI>
        <NewLI>
          <NewB>Email</NewB>
          :
          {' '}
          { row.email }
        </NewLI>
        <NewLI>
          <NewB>Password</NewB>
          :
          {' '}
          { row.password }
        </NewLI>
        <NewLI>
          <NewB>Phone</NewB>
          :
          {' '}
          { row.phone }
        </NewLI>
        <NewLI>
          <NewB>Role</NewB>
          :
          {' '}
          { row.role }
        </NewLI>
        <NewLI>
          <NewB>Position</NewB>
          :
          {' '}
          { row.position }
        </NewLI>
        <NewLI>
          <NewB>Specialization</NewB>
          :
          {' '}
          { row.specialization }
        </NewLI>
      </NewUL>
    </>
  ));

  return (
    <>
      {rows}
    </>
  );
}

ProfilePreview.propTypes = {
  characterData: PropTypes.node.isRequired,
};

export default ProfilePreview;
