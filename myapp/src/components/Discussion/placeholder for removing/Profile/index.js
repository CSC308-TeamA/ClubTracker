import React from 'react';
import PropTypes from 'prop-types';
import {
  UserInfo,
  Name,
  Username,
  Position,
} from './ProfileElements';

function Profile({
  picture, name, user, position,
}) {
  return (
    <UserInfo>
      <img src={picture} alt="" />
      <Name>
        { name }
      </Name>
      <Username>
        👤
        { user }
      </Username>
      <Position>
        { position }
      </Position>
    </UserInfo>
  );
}

Profile.propTypes = {
  picture: PropTypes.node.isRequired,
  name: PropTypes.string.isRequired,
  user: PropTypes.string.isRequired,
  position: PropTypes.string.isRequired,
};

export default Profile;
