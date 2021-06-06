import React, { useState } from 'react';
import { CommentInput } from './FormElements';

function Form(props) {
  const [person, setPerson] = useState(
    {
      user: '',
      post: '',
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
    props.handleSubmit(person);
    setPerson(
      { user: '', post: '' },
    );
  }

  return (
    <>
      <form>
        <label htmlFor="user">User</label>
        <CommentInput
          type="text"
          name="user"
          id="user"
          value={person.user}
          onChange={handleChange}
        />
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

export default Form;
