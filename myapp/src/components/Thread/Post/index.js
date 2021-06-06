/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React from 'react';
import {
  UserInfo,
  Username,
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
