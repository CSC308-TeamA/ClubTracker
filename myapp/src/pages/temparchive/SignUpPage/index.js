import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import Padding from '../../components/Padding';
import {
  NavLink, NewDiv, NewCard, Center, NewModal,
} from './SignUpPageElements';
import ProfileForm from '../../components/Authentication/ProfileForm';
import ProfilePreview from '../../components/Authentication/ProfilePreview';
import pfp3 from '../../assets/profiles/pfp3.gif';

function SignUp() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [characters, setCharacters] = useState([
    {
      first: 'John',
      last: 'Doe',
      phone: '(555) 555-5555',
      user: 'johndoe123',
      email: 'john@email.com',
      password: 'password',
      role: 'Advisor',
      position: 'Lead',
      specialization: 'Swerve Drive',
      picture: pfp3,
    },
  ]);
  function updateList(person) {
    setCharacters([person]);
  }
  return (
    <>
      <Padding />
      <Center>Sign Up Here!</Center>
      <NewDiv>
        <NewCard>
          <Form>
            <ProfileForm handleSubmit={updateList} />

            <Button variant="primary" onClick={handleShow}>
              Discussion
            </Button>
            <NewModal show={show} onHide={handleClose}>
              <NewModal.Header closeButton>
                <NewModal.Title>
                  Hello 👋! Thank you for signing up.
                  Please confirm your information below.
                </NewModal.Title>
              </NewModal.Header>
              <NewModal.Body>
                <ProfilePreview characterData={characters} />
                <p>
                  You can proceed to the discussion board or stay here...
                  only if you want to...
                </p>
              </NewModal.Body>
              <NewModal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                  Close
                </Button>
                <Button variant="primary" onClick={handleClose}>
                  <NavLink to="/discussion">Go to discussion</NavLink>
                </Button>
              </NewModal.Footer>
            </NewModal>
          </Form>
        </NewCard>
      </NewDiv>
      <NewDiv>
        <NewCard>
          <NewCard.Body>
            <NewCard.Title>Already signed up?</NewCard.Title>
            <NewCard.Text>
              Click below to log in.
            </NewCard.Text>
            <Button variant="primary" type="Log In">
              <NavLink to="/login">Log In</NavLink>
            </Button>
          </NewCard.Body>
        </NewCard>
      </NewDiv>
    </>
  );
}

export default SignUp;
