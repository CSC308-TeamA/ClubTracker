import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Padding from '../components/Padding';
import Cards from '../components/Discussion/Cards';

function DiscussionBoard() {
  const [groups, setGroups] = useState([
    {
      groupName: "Robot",
      threads: [
        {
          name: "Meeting 4/20",
          url: "Meeting-4-20",
          description: "This is a thread",
          dateCreated: "Date object",
          lastModified: "Date object",
          numPosts: 3
        },
        {
          name: "Meeting 4/21",
          url: "Meeting-4-21",
          description: "This is a thread 2",
          dateCreated: "Date object",
          lastModified: "Date object",
          numPosts: 3
        }
      ]
    },
    {
      groupName: "Competition",
      threads: [
        {
          name: "League",
          url: "League",
          description: "There is a competition",
          dateCreated: "Date object",
          lastModified: "Date object",
          numPosts: 10
        }
      ]
    }
  ]);

  async function fetch() {
    try {
      const response = await axios.get("http://localhost:5000/discussion");
      return response.data;
    }
    catch (error) {
      console.log(error);
      return false;
    }
  }

  useEffect(() => {
    fetch().then(result => {
      if (result) {
        setGroups(result);
        console.log("hello");
      }
    });
  }, []);

  return (
    <>
      <Padding />
      <h2>WELCOME TO THE DISCUSSION BOARD</h2>
      <Cards groupData={groups} />
    </>
  );
}

export default DiscussionBoard;
