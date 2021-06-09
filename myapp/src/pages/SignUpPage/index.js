import React, { useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import {
  Alert,
  Col, Form, Row,
} from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import {
  SignupForm, SignupFormTitle, PasswordCheck, PasswordLabel,
  SignupButton, AlreadyHaveAccount,
} from './SignUpPageElements';
import {
  signupErrors, stdErrors, errorMap, emailEndings,
} from './SignUpPageProperties';

function SignUp({ history, link, setLogInStatus }) {
  const [account, setAccount] = useState({
    username: '',
    email: '',
    password: '',
  });

  const [passwordCheck, setPasswordCheck] = useState(false);
  const [showPassword, setShowPassword] = useState('password');

  const [showError, setShowError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  function handleChange(event) {
    const { name, value } = event.target;
    const temp = { ...account };

    temp[name] = value;
    setAccount(temp);
  }

  function handlePrivateClick() {
    setPasswordCheck(!passwordCheck);

    if (showPassword === 'password') {
      setShowPassword('text');
    } else {
      setShowPassword('password');
    }
  }

  function checkInput() {
    let noErrors = true;

    if (account.username.trim() === '') {
      signupErrors.noUsername = true;
      noErrors = false;
    } else {
      signupErrors.noUsername = false;
    }

    if (account.email.trim() === '') {
      signupErrors.noEmail = true;
      noErrors = false;
    } else {
      signupErrors.noEmail = false;
      if ((account.email.split('@').length > 1) && (emailEndings.includes(account.email.slice(-4)))) {
        signupErrors.wrongEmailForm = false;
      } else {
        signupErrors.wrongEmailForm = true;
        noErrors = false;
      }
    }

    if (account.password.trim() === '') {
      signupErrors.noPassword = true;
      noErrors = false;
    } else {
      signupErrors.noPassword = false;
    }

    return noErrors;
  }

  async function makeSignupAttempt() {
    try {
      const response = await axios.post(
        `${link}signup`, account, { withCredentials: true },
      );
      return response;
    } catch (error) {
      return false;
    }
  }

  async function signupAttempt() {
    let signnedUp = false;

    const result = await makeSignupAttempt();
    if (result.status !== 201) {
      await setErrorMessage(result.data);
      console.log(errorMessage);

      signnedUp = false;
    } else {
      signnedUp = true;
    }

    return signnedUp;
  }

  async function submitForm() {
    const inputValid = checkInput();
    if (!inputValid) {
      await setShowError(true);
      return;
    }

    const signupValid = await signupAttempt();
    if (!signupValid) {
      await setShowError(true);
      return;
    }

    if (inputValid && signupValid) {
      setLogInStatus(true);
      history.push('/home');
    }
  }

  return (
    <SignupForm>
      <SignupForm.Body>
        <SignupFormTitle>Sign Up</SignupFormTitle>
        <Alert show={showError} variant="danger" onClose={() => setShowError(false)} dismissible>
          {Object.entries(signupErrors).map((required) => {
            let msg = '';
            if (required[1]) {
              if (stdErrors.includes(required[0])) {
                msg = errorMap[required[0]];
              } else {
                msg = errorMessage;
              }
              return (
                <>
                  {msg}
                  <br />
                </>
              );
            }
            return msg;
          })}
        </Alert>
        <Form>
          <Form.Group>
            <Form.Label>Username</Form.Label>
            <Form.Control
              type="text"
              name="username"
              placeholder="username"
              value={account.username}
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group>
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="text"
              name="email"
              placeholder="email@gmail.com"
              value={account.email}
              onChange={handleChange}
            />
          </Form.Group>

          <Row>
            <Col>
              <PasswordLabel>Password</PasswordLabel>
            </Col>

            <PasswordCheck>
              <Form.Check
                type="checkbox"
                name="showPassword"
                id="showPassword"
                value={passwordCheck}
                checked={passwordCheck}
                onChange={handlePrivateClick}
              />
              <PasswordLabel>Show Password</PasswordLabel>
            </PasswordCheck>
          </Row>

          <Form.Control
            type={showPassword}
            id="password"
            name="password"
            placeholder="password"
            value={account.password}
            onChange={handleChange}
          />

          <SignupButton variant="primary" onClick={submitForm}>
            Sign Up
          </SignupButton>
        </Form>

        <AlreadyHaveAccount>
          Already have an account?
          <NavLink to="/login"> Log In!</NavLink>
        </AlreadyHaveAccount>
      </SignupForm.Body>
    </SignupForm>
  );
}

SignUp.propTypes = {
  history: PropTypes.any.isRequired,
  link: PropTypes.string.isRequired,
  setLogInStatus: PropTypes.func.isRequired,
};

export default SignUp;
