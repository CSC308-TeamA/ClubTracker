import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Padding from '../../components/Padding';
import Cards from '../../components/Discussion/Cards';

function DiscussionBoard() {
  const [groups, setGroups] = useState([]);

  async function fetch() {
    try {
      const response = await axios.get('http://localhost:5000/discussion');
      return response.data;
    } catch (error) {
      console.log(error);
      return false;
    }
  }

  useEffect(() => {
    fetch().then((result) => {
      if (result) {
        setGroups(result);
      }
    });
  }, []);

  async function makeDeleteCall(thread) {
    try {
      const response = await axios.delete('http://localhost:5000/discussion',
        {
          data: thread,
        });
      return response;
    } catch (error) {
      console.log(error);
      return false;
    }
  }

  function updatePage() {
    fetch().then((result) => {
      if (result) {
        setGroups(result);
      }
    });
  }

  function deleteThread(thread) {
    makeDeleteCall(thread).then((result) => {
      if (result) {
        console.log(result);
        updatePage();
      }
    });
  }

  return (
    <>
      <Padding />
      <Padding />
      <table>
        <tr>
          <td>
            <h2>WELCOME TO THE DISCUSSION BOARD</h2>
          </td>
          <td>
            <a href="/create_board">
              <button>New Board</button>
            </a>
          </td>
        </tr>
      </table>
      <Cards groupData={groups} deleteThread={deleteThread} />
    </>
  );
}

export default DiscussionBoard;
