/* eslint-disable no-console */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import Cards from '../../components/Discussion/Cards';

function DiscussionBoard({ logInStatus, link }) {
  const [groups, setGroups] = useState([]);

  async function fetch() {
    try {
      const response = await axios.get(`${link}discussion`);
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
      const response = await axios.delete(`${link}discussion`,
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
      <table>
        <tr>
          <td>
            <h2>WELCOME TO THE DISCUSSION BOARD</h2>
          </td>
          <td>
            {logInStatus
              ? (
                <a href="/create_board">
                  <button type="submit">New Board</button>
                </a>
              )
              : <div />}
          </td>
        </tr>
      </table>
      <Cards
        groupData={groups}
        deleteThread={deleteThread}
        logInStatus={logInStatus}
        link={link}
      />
    </>
  );
}

DiscussionBoard.propTypes = {
  logInStatus: PropTypes.bool.isRequired,
  link: PropTypes.string.isRequired,
};

export default DiscussionBoard;
