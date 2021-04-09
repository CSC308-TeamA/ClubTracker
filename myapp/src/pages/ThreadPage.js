import React, { useState, useEffect, Component } from 'react'
import axios from 'axios'

import Thread from '../components/Discussion/Thread';
import Form from '../components/Discussion/Form'
import Padding from '../components/Padding';
import '../styles/thread.css';
import pfp1 from '../assets/profiles/pfp1.gif';
import pfp2 from '../assets/profiles/pfp2.gif';
import pfp3 from '../assets/profiles/pfp3.gif';

function ThreadPage(props) {
  const thread = props.match.params.thread;

  console.log(thread);

  const [posts, setPosts] = useState([
    {
      userId: 'id1',
      comment: 'comment text'
    },
    {
      userId: 'id2',
      comment: 'comment text2'
    }
  ]);

  function removePost() {
    console.log("Hey");
  }

  return (
    <>
      <Padding />
      <Padding />
      <Thread
        postData = {posts}
        removePost = {removePost}
      />
    </>
  );
}

export default ThreadPage;

/*  async function fetch() {
    try {
      const response = await axios.get('http://localhost:5000/discussions/thread');
      return response.data;
    }

    catch (error) {
      console.log(error);
      return false;
    }
  }

  useEffect(() => {
    fetch().then(result => {
      if (result)
        setPosts(result);
    });
  }, []);

  function updatePage() {
    fetch().then(result => {
      if (result)
        setPosts(result);
    });
  }

  async function makePostCall(post) {
    try {
      const response = await axios.post('http://localhost:5000/discussions/thread', post);
      return response;
    }

    catch (error) {
      console.log(error);
      return false;
    }
  }

  function updatePage(post) {
    makePostCall(post).then(result => {
      if (result && result.status === 201)
        setPosts([...posts, result.data]);
    });
  }*/
