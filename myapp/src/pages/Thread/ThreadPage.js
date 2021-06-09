/* eslint-disable no-shadow */
/* eslint-disable no-console */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Thread from '../../components/Thread/Thread';
import Form from '../../components/Thread/Form';
import './thread.css';

function ThreadPage({
  match,
  logInStatus,
  sessionId,
  link,
}) {
  const { thread } = match.params;

  const [posts, setPosts] = useState([]);

  async function fetch() {
    try {
      const response = await axios.get(`${link}discussion/${thread}`);
      return response.data;
    } catch (error) {
      console.log(error);
      return false;
    }
  }

  async function makePostCall(post) {
    try {
      const response = await axios.post(`${link}discussion/${thread}`, post);
      return response;
    } catch (error) {
      console.log(error);
      return false;
    }
  }

  async function makeDeleteCall(post) {
    try {
      const response = await axios.delete(`${link}discussion/${thread}`,
        {
          data: post,
        });
      return response;
    } catch (error) {
      console.log(error);
      return false;
    }
  }

  useEffect(() => {
    fetch().then((result) => {
      if (result) {
        setPosts(result);
      }
    });
  }, []);

  function createPost(post) {
    makePostCall(post).then((result) => {
      if (result) {
        fetch().then((result) => {
          setPosts(result);
        });
      }
    });
  }

  function deletePost(post) {
    makeDeleteCall(post).then((result) => {
      if (result) {
        fetch().then((result) => {
          setPosts(result);
        });
      }
    });
  }

  return (
    <>
      <Thread
        postData={posts}
        removePost={deletePost}
        logInStatus={logInStatus}
        link={link}
      />
      {logInStatus
        ? <Form handleSubmit={createPost} sessionId={sessionId} link={link} />
        : <div />}
    </>
  );
}

export default ThreadPage;
