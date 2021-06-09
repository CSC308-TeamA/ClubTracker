// import React, { useState } from 'react';
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import {
  Col, Form, Row,
} from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import {
  LoginForm, LoginFormTitle, PasswordCheck, PasswordLabel,
  LoginButton, NoAccount,
} from './LoginPageElements';
import { loginErrors, emailEndings } from './LoginPageProperties';

function Login({ history, link }) {
  const [account, setAccount] = useState({
    email: '',
    password: '',
  });

  const [passwordCheck, setPasswordCheck] = useState(false);
  const [showPassword, setShowPassword] = useState('password');

  const [showError, setShowError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const [validated, setValidated] = useState(false);

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
        console.log(emailEndings.includes(account.email.slice(-4)));
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

  async function makeLoginAttempt(user) {
    try {
      const response = await axios.patch(`${link}login`, user, { withCredentials: true });
      return response;
    } catch (error) {
      return false;
    }
  }

  async function loginAttempt(user) {
    let loggedIn = false;

    await makeLoginAttempt(user).then((result) => {
      if (result.status !== 201) {
        setErrorMessage(result.data);
        console.log(errorMessage);
        loggedIn = false;
      } else {
        setValidated(true);
        loggedIn = true;
      }
    });

    return loggedIn;
  }

  async function submitForm() {
    const inputValid = checkInput();
    if (!inputValid) {
      setShowError(true);
      console.log('NOPE');
      console.log(showError);
      setValidated(false);
      return;
    }

    const loginValid = await loginAttempt(account);
    if (!loginValid) {
      setShowError(true);
      setValidated(false);
      return;
    }

    if (inputValid && loginValid && validated) {
      history.push('/home');
    }
  }

  return (
    <LoginForm>
      <LoginForm.Body>
        <LoginFormTitle>Log In</LoginFormTitle>
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
};

export default Login;
