import React, { useState, useEffect, Component } from 'react';
import axios from 'axios';

import Thread from '../../components/Thread/Thread';
import Form from '../../components/Thread/Form';
import Padding from '../../components/Padding';
import './thread.css';
import pfp1 from '../../assets/profiles/pfp1.gif';
import pfp2 from '../../assets/profiles/pfp2.gif';
import pfp3 from '../../assets/profiles/pfp3.gif';

function ThreadPage(props) {
  const thread = props.match.params.thread;

  const [posts, setPosts] = useState([
    {
      user: "objectId",
      date: "date",
      post: "I am saying this on a thread!"
    },
    {
      user: "objectId#2",
      date: "date",
      post: "No way! Me too!"
    }
  ]);

  function removePost() {
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
