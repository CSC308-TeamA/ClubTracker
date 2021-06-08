// import React, { useState } from 'react';
import React from 'react';
import {
  Button, Form, Row,
} from 'react-bootstrap';
import {
  LoginForm, ShowPasswordCheck,
} from './LoginPageElements';

function Login() {
  // const [account, setAccount] = useState({
  //   username: '',
  //   password: '',
  // });

  return (
    <LoginForm>
      <LoginForm.Body>
        <LoginForm.Title>Log In</LoginForm.Title>
        <Form>
          <Form.Group>
            <Form.Label>username</Form.Label>
            <Form.Control type="text" placeholder="username" />
          </Form.Group>

          <Form.Group>
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>

          <ShowPasswordCheck>
            <Form.Check type="checkbox" />
            <Form.Label>Show Password</Form.Label>
          </ShowPasswordCheck>

          <Button variant="primary">
            Log In
          </Button>
        </Form>
      </LoginForm.Body>
    </LoginForm>
  );
}

export default Login;
