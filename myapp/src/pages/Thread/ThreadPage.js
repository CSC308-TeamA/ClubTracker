import React, { useState, useEffect, Component } from 'react';
import axios from 'axios';

import Thread from '../../components/Thread/Thread';
import Form from '../../components/Thread/Form';
import './thread.css';

function ThreadPage(props) {
  const { thread } = props.match.params;

  const [posts, setPosts] = useState([]);

  async function fetch() {
    try {
      const response = await axios.get(`http://localhost:5000/discussion/${thread}`);
      return response.data;
    } catch (error) {
      console.log(error);
      return false;
    }
  }

  async function makePostCall(post) {
    try {
      const response = await axios.post(`http://localhost:5000/discussion/${thread}`, post);
      return response;
    } catch (error) {
      console.log(error);
      return false;
    }
  }

  async function makeDeleteCall(post) {
    try {
      const response = await axios.delete(`http://localhost:5000/discussion/${thread}`,
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
    console.log(post);
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
      />
      <Form handleSubmit={createPost} />
    </>
  );
}

export default ThreadPage;
