import React, { useState } from 'react';
import PropTypes from 'prop-types';
import pfp4 from '../../../assets/profiles/pfp4.gif';

function Form({ handleSubmit }) {
  const [person, setPerson] = useState(
    {
      picture: pfp4,
      name: '',
      user: '',
      role: '',
      comment: '',
    },
  );

  function handleChange(event) {
    const { value } = event.target;
    setPerson({
      ...person,
      [event.target.name]: value,
    });
  }

  function submitForm() {
    handleSubmit(person);
    setPerson(
      {
        name: '', user: '', role: '', comment: '',
      },
    );
  }

  return (
    <form>
      <label htmlFor="picture">
        Picture
        <input
          type="text"
          name="picture"
          id="picture"
          value={person.picture}
        />
      </label>

      <label htmlFor="name">
        Name
        <input
          type="text"
          name="name"
          id="name"
          value={person.name}
          onChange={handleChange}
        />
      </label>

      <label htmlFor="user">
        User
        <input
          type="text"
          name="user"
          id="user"
          value={person.user}
          onChange={handleChange}
        />
      </label>

      <label htmlFor="role">
        Role
        <input
          type="text"
          name="role"
          id="role"
          value={person.role}
          onChange={handleChange}
        />
      </label>

      <label htmlFor="comment">
        Comment
        <input
          type="text"
          name="comment"
          id="comment"
          value={person.comment}
          onChange={handleChange}
        />
      </label>

      <input type="button" value="Submit" onClick={submitForm} />

    </form>
  );
}

Form.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
};

export default Form;
