/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable no-alert */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import axios from 'axios';
// import {Redirect} from "react-router-dom";
import PropTypes from 'prop-types';
import { Form as BootStrapForm, Col } from 'react-bootstrap';
import { NewCard } from './CreateBoardElements';

function CreateBoard({ history, logInStatus, link }) {
  const [board, setBoard] = useState(
    {
      groupName: '',
      name: '',
      description: '',
    },
  );

  function handleChange(event) {
    const { name, value } = event.target;
    if (name === 'group') {
      setBoard(
        {
          groupName: value,
          name: board.name,
          description: board.description,
        },
      );
    }
    if (name === 'name') {
      setBoard(
        {
          groupName: board.groupName,
          name: value,
          description: board.description,
        },
      );
    }
    if (name === 'description') {
      setBoard(
        {
          groupName: board.groupName,
          name: board.name,
          description: value,
        },
      );
    }
  }

  async function makePostCall(thread) {
    try {
      const response = await axios.post(`${link}discussion`, thread);
      return response;
    } catch (error) {
      // console.log(error);
      return false;
    }
  }

  function postThread(thread) {
    if (thread.groupName === '') {
      alert('Please enter a group name');
      return;
    }
    if (thread.name === '') {
      alert('Please enter a thread name');
      return;
    }
    if (thread.description === '') {
      alert('Please enter a description');
      return;
    }
    makePostCall(thread).then((result) => {
      if (result) {
        const { threads } = result.data[0];
        const newThread = threads[threads.length - 1].url;
        history.push(`/discussion/${newThread}`);
      }
    });
  }

  function submitForm() {
    if (board.group === '') {
      alert('Please provide a group name');
      return;
    }
    if (board.name === '') {
      alert('Please provide a name for your thread');
      return;
    }
    if (board.description === '') {
      alert('Please provide a description for your thread');
      return;
    }

    postThread(
      {
        groupName: board.groupName,
        threads: [
          {
            name: board.name,
            description: board.description,
          },
        ],
      },
    );
  }

  return (
    <>
      <h2>CREATE A BOARD</h2>

      {logInStatus
        ? (
          <NewCard>
            <BootStrapForm>
              <BootStrapForm.Row>
                <BootStrapForm.Group as={Col} controlId="formBasicPassword">
                  <label htmlFor="group">Group</label>
                  <select name="group" id="group" onChange={handleChange}>
                    <option value="">pick a group</option>
                    <option value="Robot">Robot</option>
                    <option value="Competition">Competition</option>
                  </select>
                </BootStrapForm.Group>
                <BootStrapForm.Group as={Col} controlId="formBasicPassword">
                  <label htmlFor="name">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={board.name}
                    onChange={handleChange}
                  />
                </BootStrapForm.Group>
              </BootStrapForm.Row>
              <BootStrapForm.Row>
                <BootStrapForm.Group as={Col} controlId="formBasicPassword">
                  <label htmlFor="description">Description</label>
                  <input
                    type="text"
                    name="description"
                    value={board.description}
                    onChange={handleChange}
                  />
                </BootStrapForm.Group>
                <input type="button" value="Create" onClick={submitForm} />
              </BootStrapForm.Row>
            </BootStrapForm>
          </NewCard>
        )
        : <h2>YOU ARE NOT LOGGED IN</h2>}
    </>
  );
}

CreateBoard.propTypes = {
  history: PropTypes.any.isRequired,
  logInStatus: PropTypes.bool.isRequired,
  link: PropTypes.string.isRequired,
};

export default CreateBoard;
