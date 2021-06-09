/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import { AccountInput } from './SignUpPageElements';

function SignUp({ link }) {
  const [account, setAccount] = useState({
    username: '',
    email: '',
    password: '',
  });

  function handleChange(event) {
    const { value } = event.target;
    setAccount({
      ...account,
      [event.target.name]: value,
    });
  }

  async function handleSubmit() {
    try {
      const response = await axios.post(`${link}signup`, account);
      return response;
    } catch (error) {
      // console.log(error);
      return false;
    }
  }

  function submitForm() {
    if (account.username === '') {
      // alert('Please enter username');
      return;
    }
    if (account.email === '') {
      // alert('Please enter email');
      return;
    }
    if (account.password === '') {
      // alert('Please enter password');
      return;
    }

    account.session_token = '';
    handleSubmit();
    setAccount({
      username: '',
      email: '',
      password: '',
    });
  }

  return (
    <>
      <form>
        <label htmlFor="username">Username</label>
        <AccountInput
          type="text"
          name="username"
          id="username"
          value={account.username}
          onChange={handleChange}
        />
        <label htmlFor="email">Email</label>
        <AccountInput
          type="text"
          name="email"
          id="email"
          value={account.email}
          onChange={handleChange}
        />
        <label htmlFor="password">password</label>
        <AccountInput
          type="text"
          name="password"
          id="password"
          value={account.password}
          onChange={handleChange}
        />
        <input type="button" value="Create Account" onClick={submitForm} />
      </form>
    </>
  );
}

SignUp.propTypes = {
  link: PropTypes.string.isRequired,
};

export default SignUp;
