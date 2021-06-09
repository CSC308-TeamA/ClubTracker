import React, { useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import {
  Alert,
  Col, Form, Row,
} from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import {
  LoginForm, LoginFormTitle, PasswordCheck, PasswordLabel,
  LoginButton, NoAccount,
} from './LoginPageElements';
import {
  loginErrors, stdErrors, errorMap, emailEndings,
} from './LoginPageProperties';

function Login({ history, link, setLogInStatus }) {
  const [account, setAccount] = useState({
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

    if (account.email.trim() === '') {
      loginErrors.noEmail = true;
      noErrors = false;
    } else {
      loginErrors.noEmail = false;
      if ((account.email.split('@').length > 1) && (emailEndings.includes(account.email.slice(-4)))) {
        loginErrors.wrongEmailForm = false;
      } else {
        loginErrors.wrongEmailForm = true;
        noErrors = false;
      }
    }

    if (account.password.trim() === '') {
      loginErrors.noPassword = true;
      noErrors = false;
    } else {
      loginErrors.noPassword = false;
    }

    return noErrors;
  }

  async function makeLoginAttempt() {
    try {
      const response = await axios.patch(
        `${link}login`, account, { withCredentials: true },
      );
      return response;
    } catch (error) {
      return false;
    }
  }

  async function loginAttempt() {
    let loggedIn = false;

    const result = await makeLoginAttempt();
    if (result.status !== 201) {
      await setErrorMessage(result.data);
      loggedIn = false;
    } else {
      loggedIn = true;
    }

    return loggedIn;
  }

  async function submitForm() {
    const inputValid = checkInput();
    if (!inputValid) {
      await setShowError(true);
      return;
    }

    const loginValid = await loginAttempt();
    if (!loginValid) {
      await setShowError(true);
      return;
    }

    if (inputValid && loginValid) {
      setLogInStatus(true);
      history.push('/home');
    }
  }

  return (
    <LoginForm>
      <LoginForm.Body>
        <LoginFormTitle>Log In</LoginFormTitle>
        <Alert show={showError} variant="danger" onClose={() => setShowError(false)} dismissible>
          {Object.entries(loginErrors).map((required) => {
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

          <LoginButton variant="primary" onClick={submitForm}>
            Log In
          </LoginButton>
        </Form>

        <NoAccount>
          Don&apos;t have an account?
          <NavLink to="/signup"> Sign up for one!</NavLink>
        </NoAccount>
      </LoginForm.Body>
    </LoginForm>
  );
}

Login.propTypes = {
  history: PropTypes.any.isRequired,
  link: PropTypes.string.isRequired,
  setLogInStatus: PropTypes.func.isRequired,
};

export default Login;
