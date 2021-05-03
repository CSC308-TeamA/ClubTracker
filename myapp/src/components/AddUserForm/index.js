import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  Form, Row, Col, Button,
} from 'react-bootstrap';
import {
  AddUserButton,
  AddUserModal,
  Title,
  FirstSection,
  Section,
  AddUserLabel,
  PrivateComponent,
  PrivateLabel,
  StatusComponent,
  StatusRadio,
  StatusLabel,
  SpecializationComponent,
  SpecializationRadio,
  SpecializationLabel,
  SubmitButton,
} from './AddUserFormElements';

function AddUserForm({ handleSubmit }) {
  const [person, setPerson] = useState({
    member_first_name: '',
    member_last_name: '',
    member_last_name_private: false,
    member_email: '',
    member_email_private: false,
    member_cell_number: '',
    member_cell_number_private: false,
    member_status: '',
    member_position: '',
    member_specialization: [],
    member_quote: '',
    member_grade: '',
    member_shirt_size: '',
    member_gender: '',
    ec1_name: '',
    ec1_email: '',
    ec1_phone_number: '',
    ec1_relation_to_member: '',
    ec2_name: '',
    ec2_email: '',
    ec2_phone_number: '',
    ec2_relation_to_member: '',
  });

  // const [validated, setValidated] = useState(false);
  const [show, setShow] = useState(false);

  const [statusValue, setStatusValue] = useState('0');
  const status = [
    { id: 1, name: 'Active' },
    { id: 2, name: 'Inactive' },
  ];

  const positions = [
    { id: 0, name: '' },
    { id: 1, name: 'Director of Competitions' },
    { id: 2, name: 'Lead' },
    { id: 3, name: 'Lead Mentor' },
    { id: 4, name: 'Member' },
    { id: 5, name: 'Mentor' },
    { id: 6, name: 'Parent' },
    { id: 7, name: 'President' },
    { id: 8, name: 'Secretary of Communications' },
    { id: 9, name: 'Vice President' },
  ];

  const [specializations, setSpecializations] = useState({
    Assembly: false,
    Business: false,
    Design: false,
    'Drive Team': false,
    Electronics: false,
    Fabrication: false,
    Media: false,
    Programming: false,
    'Pit Crew': false,
    Scouting: false,
    Other: false,
  });

  const grades = [
    { id: 0, name: '' },
    { id: 1, name: '8' },
    { id: 2, name: '9' },
    { id: 3, name: '10' },
    { id: 4, name: '11' },
    { id: 5, name: '12' },
    { id: 6, name: 'N/A' },
  ];

  const shirtSizes = [
    { id: 0, name: '' },
    { id: 1, name: 'XXS' },
    { id: 2, name: 'XS' },
    { id: 3, name: 'S' },
    { id: 4, name: 'M' },
    { id: 5, name: 'L' },
    { id: 6, name: 'XL' },
    { id: 7, name: 'XXL' },
    { id: 8, name: 'XXXL' },
  ];

  const genders = [
    { id: 0, name: '' },
    { id: 1, name: 'Female' },
    { id: 2, name: 'Male' },
    { id: 3, name: 'Other' },
  ];

  function handleShow() {
    setShow(true);
  }

  function handleChange(event) {
    const { name, value } = event.target;
    const temp = { ...person };

    temp[name] = value;
    setPerson(temp);
  }

  function handlePrivateClick(event) {
    const { name } = event.target;
    const temp = { ...person };

    temp[name] = !temp[name];
    setPerson(temp);
  }

  function handleCheckClick(event) {
    const { name } = event.target;
    const temp = { ...specializations };

    temp[name] = !temp[name];
    setSpecializations(temp);
  }

  function handleClose() {
    // setValidated(false);
    setShow(false);
    setPerson({
      member_first_name: '',
      member_last_name: '',
      member_last_name_private: false,
      member_email: '',
      member_email_private: false,
      member_cell_number: '',
      member_cell_number_private: false,
      member_status: '',
      member_position: '',
      member_specialization: [],
      member_quote: '',
      member_grade: '',
      member_shirt_size: '',
      member_gender: '',
      ec1_name: '',
      ec1_email: '',
      ec1_phone_number: '',
      ec1_relation_to_member: '',
      ec2_name: '',
      ec2_email: '',
      ec2_phone_number: '',
      ec2_relation_to_member: '',
    });
  }

  function checkValid() {
    // Implement Validity check here (part of next story)
    const isValid = true;
    return isValid;
  }

  function submitForm() {
    if (checkValid() === false) {
      // Change elements to color red or have a note pop up
      // Part of next story
    }

    // setValidated(true);

    if (checkValid() === true) {
      Object.keys(specializations).forEach((sp) => {
        if (specializations[sp]) {
          person.member_specialization.push(sp);
        }
      });

      handleSubmit(person);
      handleClose();
    }
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
          <AddUserModal.Title>
            <Title>Add a New Member</Title>
          </AddUserModal.Title>
          <Button variant="link" onClick={handleClose}> X </Button>
        </AddUserModal.Header>

        <AddUserModal.Body>
          <Form onSubmit={submitForm}>
            <FirstSection>Member Information</FirstSection>
            <Form.Group as={Row}>
              <Col>
                <AddUserLabel> First Name </AddUserLabel>
                <Form.Control
                  type="text"
                  name="member_first_name"
                  id="member_first_name"
                  value={person.member_first_name}
                  placeholder="John"
                  onChange={handleChange}
                />
              </Col>

              <Col>
                <Row>
                  <AddUserLabel as={Col}> Last Name </AddUserLabel>
                  <PrivateComponent as={Col}>
                    <Form.Check
                      type="checkbox"
                      name="member_last_name_private"
                      id="member_last_name_private"
                      value={person.member_last_name_private}
                      checked={person.member_last_name_private}
                      onChange={handlePrivateClick}
                    />
                    <PrivateLabel>Private</PrivateLabel>
                  </PrivateComponent>
                </Row>
                <Form.Control
                  type="text"
                  name="member_last_name"
                  id="member_last_name"
                  value={person.member_last_name}
                  placeholder="Doe"
                  onChange={handleChange}
                />
              </Col>
            </Form.Group>

            <Form.Group as={Row}>
              <Col>
                <Row>
                  <AddUserLabel as={Col}> Email </AddUserLabel>
                  <PrivateComponent as={Col}>
                    <Form.Check
                      type="checkbox"
                      name="member_email_private"
                      id="member_email_private"
                      value={person.member_email_private}
                      checked={person.member_email_private}
                      onChange={handlePrivateClick}
                    />
                    <PrivateLabel>Private</PrivateLabel>
                  </PrivateComponent>
                </Row>
                <Form.Control
                  as={Col}
                  type="email"
                  name="member_email"
                  id="member_email"
                  value={person.member_email}
                  placeholder="email@email.com"
                  onChange={handleChange}
                />
              </Col>

              <Col>
                <Row>
                  <AddUserLabel as={Col}> Cell Number </AddUserLabel>
                  <PrivateComponent as={Col}>
                    <Form.Check
                      type="checkbox"
                      name="member_cell_number_private"
                      id="member_cell_number_private"
                      value={person.member_cell_number_private}
                      checked={person.member_cell_number_private}
                      onChange={handlePrivateClick}
                    />
                    <PrivateLabel>Private</PrivateLabel>
                  </PrivateComponent>
                </Row>

                <Form.Control
                  type="texr"
                  name="member_cell_number"
                  id="member_cell_number"
                  value={person.member_cell_number}
                  placeholder="555-555-5555"
                  onChange={handleChange}
                />
              </Col>
            </Form.Group>

            <Form.Group as={Row}>
              <Col>
                <AddUserLabel> Member Status </AddUserLabel>
                <br />
                {status.map((s) => (
                  <StatusComponent>
                    <StatusRadio
                      key={s.id}
                      inline
                      type="radio"
                      name="Status"
                      id={`radio${s.id}`}
                      value={s.name}
                      checked={statusValue === s.name}
                      onChange={(e) => {
                        setStatusValue(e.currentTarget.value);
                        handleChange(e);
                      }}
                    />
                    <StatusLabel>{s.name}</StatusLabel>
                  </StatusComponent>
                ))}
              </Col>

              <Col>
                <AddUserLabel> Position </AddUserLabel>
                <Form.Control
                  as="select"
                  defaultValue=""
                  name="member_position"
                  onChange={handleChange}
                >
                  {positions.map((p) => (
                    <option
                      key={p.id}
                      value={p.name}
                      id={p.id}
                    >
                      {p.name}
                    </option>
                  ))}
                </Form.Control>
              </Col>
            </Form.Group>

            <Form.Group as={Col}>
              <Row>
                <AddUserLabel> Specialization </AddUserLabel>
              </Row>

              <Row>
                {Object.keys(specializations).map((special, index) => (
                  <SpecializationComponent>
                    <SpecializationRadio
                      key={special}
                      inline
                      type="checkbox"
                      name={special}
                      id={`checkbox${index}`}
                      value={special}
                      checked={specializations[special]}
                      onChange={handleCheckClick}
                    />
                    <SpecializationLabel>{special}</SpecializationLabel>
                  </SpecializationComponent>
                ))}
              </Row>
            </Form.Group>

            <Form.Group as={Col}>
              <Row>
                <AddUserLabel> Quote </AddUserLabel>
              </Row>

              <Row>
                <Form.Control
                  as="textarea"
                  name="member_quote"
                  id="member_quote"
                  value={person.member_quote}
                  placeholder="Throw it back to Stack Attack."
                  rows={3}
                  onChange={handleChange}
                />
              </Row>
            </Form.Group>

            <Form.Group as={Row}>
              <Col>
                <AddUserLabel> Grade </AddUserLabel>
                <Form.Control
                  as="select"
                  defaultValue=""
                  name="member_grade"
                  onChange={handleChange}
                >
                  {grades.map((g) => (
                    <option
                      key={g.id}
                      value={g.name}
                      id={g.id}
                    >
                      {g.name}
                    </option>
                  ))}
                </Form.Control>
              </Col>

              <Col>
                <AddUserLabel> Shirt Size </AddUserLabel>
                <Form.Control
                  as="select"
                  defaultValue=""
                  name="member_shirt_size"
                  onChange={handleChange}
                >
                  {shirtSizes.map((size) => (
                    <option
                      key={size.id}
                      value={size.name}
                      id={size.id}
                    >
                      {size.name}
                    </option>
                  ))}
                </Form.Control>
              </Col>

              <Col>
                <AddUserLabel> Gender </AddUserLabel>
                <Form.Control
                  as="select"
                  defaultValue=""
                  name="member_gender"
                  onChange={handleChange}
                >
                  {genders.map((g) => (
                    <option
                      key={g.id}
                      value={g.name}
                      id={g.id}
                    >
                      {g.name}
                    </option>
                  ))}
                </Form.Control>
              </Col>
            </Form.Group>

            <Section>Emergency Contact 1</Section>
            <Form.Group as={Row}>
              <Col>
                <AddUserLabel> Full Name </AddUserLabel>
                <Form.Control
                  type="text"
                  name="ec1_name"
                  id="ec1_name"
                  value={person.ec1_name}
                  placeholder="John Doe"
                  onChange={handleChange}
                />
              </Col>

              <Col>
                <AddUserLabel> Relation to Member </AddUserLabel>
                <Form.Control
                  type="text"
                  name="ec1_relation_to_member"
                  id="ec1_relation_to_member"
                  value={person.ec1_relation_to_member}
                  placeholder="Parent"
                  onChange={handleChange}
                />
              </Col>
            </Form.Group>

            <Form.Group as={Row}>
              <Col>
                <AddUserLabel> Email </AddUserLabel>
                <Form.Control
                  type="email"
                  name="ec1_email"
                  id="ec1_email"
                  value={person.ec1_email}
                  placeholder="email@email.com"
                  onChange={handleChange}
                />
              </Col>

              <Col>
                <AddUserLabel> Cell Number </AddUserLabel>
                <Form.Control
                  type="text"
                  name="ec1_phone_number"
                  id="ec1_phone_number"
                  value={person.ec1_phone_number}
                  placeholder="555-555-5555"
                  onChange={handleChange}
                />
              </Col>
            </Form.Group>

            <Section>Emergency Contact 2</Section>
            <Form.Group as={Row}>
              <Col>
                <AddUserLabel> Full Name </AddUserLabel>
                <Form.Control
                  type="text"
                  name="ec2_name"
                  id="ec2_name"
                  value={person.ec2_name}
                  placeholder="John Doe"
                  onChange={handleChange}
                />
              </Col>

              <Col>
                <AddUserLabel> Relation to Member </AddUserLabel>
                <Form.Control
                  type="text"
                  name="ec2_relation_to_member"
                  id="ec2_relation_to_member"
                  value={person.ec2_relation_to_member}
                  placeholder="Parent"
                  onChange={handleChange}
                />
              </Col>
            </Form.Group>

            <Form.Group as={Row}>
              <Col>
                <AddUserLabel> Email </AddUserLabel>
                <Form.Control
                  type="email"
                  name="ec2_email"
                  id="ec2_email"
                  value={person.ec2_email}
                  placeholder="email@email.com"
                  onChange={handleChange}
                />
              </Col>

              <Col>
                <AddUserLabel> Cell Number </AddUserLabel>
                <Form.Control
                  type="text"
                  name="ec2_phone_number"
                  id="ec2_phone_number"
                  value={person.ec2_phone_number}
                  placeholder="555-555-5555"
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
