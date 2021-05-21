import React from 'react';
import {
  UserInfo,
  Name,
  Username,
  Role
} from './PostElements';

function Post(props) {
  return (
    <>
      <UserInfo>
        <p>{props.name}</p>
      </UserInfo>
    </>
  );
}

export default Post;
