import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  Form, Row, Col, Button,
} from 'react-bootstrap';
import {
  AddUserButton,
  AddUserModal,
  AddUserLabel,
  SubmitButton,
} from './AddUserFormElements';

function AddUserForm({ handleSubmit }) {
  const [person, setPerson] = useState({
    name: '',
    role: '',
    position: '',
    specialization: [],
    email: '',
    phone_number: '',
    quote: '',
  });

  const roles = [
    { id: 1, name: 'Advisor' },
    { id: 2, name: 'Officer' },
    { id: 3, name: 'Member' },
  ];

  const [specializations, setSpecializations] = useState({
    Design: false,
    Fabrication: false,
    Electronics: false,
    Assembly: false,
    Programming: false,
    Media: false,
    Business: false,
    Scouting: false,
    'Pit Crew': false,
    'Drive Team': false,
    Other: false,
  });

  const [validated, setValidated] = useState(false);

  const [show, setShow] = useState(false);

  const [radioValue, setRadioValue] = useState('0');

  function handleChange(event) {
    const { name, value } = event.target;
    const temp = { ...person };

    if (name !== 'specialization') {
      temp[name] = value;
    }

    setPerson(temp);
  }

  function handleClose() {
    setValidated(false);
    setShow(false);
    setPerson({
      name: '',
      role: '',
      position: '',
      specialization: [],
      email: '',
      phone_number: '',
      quote: '',
    });
  }

  function submitForm(event) {
    const form = event.currentTarget;

    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);

    if (form.checkValidity() === true) {
      Object.keys(specializations).forEach((sp) => {
        if (specializations[sp]) {
          person.specialization.push(sp);
        }
      });

      person.specialization.sort();
      handleSubmit(person);
      handleClose();
    }
  }

  function handleShow() {
    setShow(true);
  }

  function handleCheckClick(event) {
    const { name } = event.target;
    const temp = { ...specializations };

    temp[name] = !temp[name];
    setSpecializations(temp);
  }

  return (
    <div>
      <AddUserButton variant="primary" onClick={handleShow}>
        + Add a Member
      </AddUserButton>

      <AddUserModal
        size="lg"
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <AddUserModal.Header>
          <AddUserModal.Title>Add a New Member</AddUserModal.Title>
          <Button variant="link" onClick={handleClose}> X </Button>
        </AddUserModal.Header>

        <AddUserModal.Body>
          <Form noValidate validated={validated} onSubmit={submitForm}>
            <Form.Group as={Row}>
              <AddUserLabel column md="3">Name</AddUserLabel>
              <Col md="9">
                <Form.Control
                  required
                  type="text"
                  name="name"
                  id="name"
                  value={person.name}
                  placeholder="Name"
                  onChange={handleChange}
                />
                <Form.Control.Feedback type="invalid">
                  Please enter a name.
                </Form.Control.Feedback>
              </Col>
            </Form.Group>

            <Form.Group as={Row}>
              <AddUserLabel column md="3"> Email </AddUserLabel>
              <Col md="9">
                <Form.Control
                  required
                  type="email"
                  name="email"
                  id="email"
                  value={person.email}
                  placeholder="email@email.com"
                  onChange={handleChange}
                />
                <Form.Control.Feedback type="invalid">
                  Please enter an email.
                </Form.Control.Feedback>
              </Col>
            </Form.Group>

            <Form.Group as={Row}>
              <AddUserLabel column md="3"> Phone Number </AddUserLabel>
              <Col md="9">
                <Form.Control
                  required
                  type="text"
                  name="phone_number"
                  id="phone_number"
                  value={person.phone_number}
                  placeholder="555-555-5555"
                  onChange={handleChange}
                />
                <Form.Control.Feedback type="invalid">
                  Please enter a phone number.
                </Form.Control.Feedback>
              </Col>
            </Form.Group>

            <Form.Group as={Row}>
              <AddUserLabel column md="3"> Role </AddUserLabel>
              <Col md="9">
                {roles.map((radio) => (
                  <Form.Check
                    required
                    key={roles.id}
                    inline
                    label={radio.name}
                    type="radio"
                    name="role"
                    id={`radio${roles.id}`}
                    value={radio.name}
                    checked={radioValue === radio.name}
                    onChange={(e) => {
                      setRadioValue(e.currentTarget.value);
                      handleChange(e);
                    }}
                  />
                ))}
                <Form.Control.Feedback type="invalid">
                  Please select a role.
                </Form.Control.Feedback>
              </Col>
            </Form.Group>

            <Form.Group as={Row}>
              <AddUserLabel column md="3"> Position </AddUserLabel>
              <Col md="9">
                <Form.Control
                  required
                  type="text"
                  name="position"
                  id="position"
                  value={person.position}
                  placeholder="Member"
                  onChange={handleChange}
                />
                <Form.Control.Feedback type="invalid">
                  Please enter a position.
                </Form.Control.Feedback>
              </Col>
            </Form.Group>

            <Form.Group as={Row}>
              <AddUserLabel column md="3"> Specialization </AddUserLabel>
              <Col md="9">
                {Object.keys(specializations).map((checkbox, index) => (
                  <Form.Check
                    key={checkbox}
                    inline
                    label={checkbox}
                    type="checkbox"
                    name={checkbox}
                    id={`checkbox${index}`}
                    value={checkbox}
                    checked={specializations[checkbox]}
                    onChange={handleCheckClick}
                  />
                ))}
              </Col>
            </Form.Group>

            <Form.Group as={Row}>
              <AddUserLabel column md="3"> Quote </AddUserLabel>
              <Col md="9">
                <Form.Control
                  as="textarea"
                  name="quote"
                  id="quote"
                  value={person.quote}
                  placeholder="Throw it back to Stack Attack."
                  rows={3}
                  onChange={handleChange}
                />
              </Col>
            </Form.Group>

            <SubmitButton>
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </SubmitButton>
          </Form>
        </AddUserModal.Body>
      </AddUserModal>
    </div>
  );
}

AddUserForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
};

export default AddUserForm;
