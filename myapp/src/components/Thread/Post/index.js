import React from 'react';
import {
  UserInfo,
  Name,
  Username,
  Role
} from './PostElements';

function Post(props) {
  // Put in a get request to get user info
  return (
    <>
      <UserInfo>
        <Username>{props.user}</Username>
      </UserInfo>
    </>
  );
}

export default Post;
