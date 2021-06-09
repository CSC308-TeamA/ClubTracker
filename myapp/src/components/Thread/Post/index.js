/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
  UserInfo,
  Username,
} from './PostElements';

function Post(props) {
  const [username, setUsername] = useState('');

  async function fetch() {
    try {
      const response = await axios.get(`${props.link}username/${props.user}`);
      return response.data;
    } catch (error) {
      // console.log(error);
      return false;
    }
  }

  useEffect(() => {
    fetch().then((result) => {
      if (result) {
        setUsername(result[0]);
      }
    });
  }, []);

  // Put in a get request to get user info
  return (
    <>
      <UserInfo>
        <Username>{username}</Username>
      </UserInfo>
    </>
  );
}

export default Post;
