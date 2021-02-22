import React from 'react'

import Padding from '../components/Padding';
import Navbar from '../components/Discussion/Nav';
import Cards from '../components/Discussion/Cards';
import Thread from '../components/Discussion/ThreadList';

export const DiscussionBoard = () => (
  <>
    <Padding />
    {/* <Navbar /> */}

    <div className="navfix">
      <div>
        <h2>WELCOME TO THE DISCUSSION BOARD</h2>
      </div>

      <Cards />
      {/* <Thread /> */}
    </div>
  </>
)