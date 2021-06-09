/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import { CommentInput } from './FormElements';

function Form({ handleSubmit, sessionId, link }) {
  const [person, setPerson] = useState(
    {
      post: '',
    },
  );

  async function fetch(session) {
    try {
      const response = await axios.get(`${link}userid/${session}`);
      return response.data[0];
    } catch (error) {
      // console.log(error);
      return false;
    }
  }

  function handleChange(event) {
    const { value } = event.target;
    setPerson({
      ...person,
      [event.target.name]: value,
    });
  }

  function submitForm() {
    fetch(sessionId).then((result) => {
      person.user = result;
      handleSubmit(person);
      setPerson(
        { post: '' },
      );
    });
  }

  return (
    <>
      <form>
        <label htmlFor="post">Comment</label>
        <CommentInput
          type="text"
          name="post"
          id="post"
          value={person.post}
          onChange={handleChange}
        />
        <input type="button" value="Post" onClick={submitForm} />
      </form>
    </>
  );
}

Form.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  sessionId: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};

export default Form;
