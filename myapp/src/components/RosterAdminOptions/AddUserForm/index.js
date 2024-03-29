import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  Alert, Button, Form, Row, Col,
} from 'react-bootstrap';
import {
  AddUserModal, Title, FirstSection, Section, AddUserLabel,
  PrivateComponent, PrivateLabel, StatusComponent, StatusRadio, StatusLabel,
  SpecializationComponent, SpecializationRadio, SpecializationLabel,
  SubmitButton,
} from './AddUserFormElements';
import {
  status, positions, grades, shirtSizes, genders, errorMap, emailEndings,
} from './AddUserFormProperties';

function AddUserForm({ handleSubmit, handleHide, showForm }) {
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

  const [validated, setValidated] = useState(false);
  const [showError, setShowError] = useState(false);
  const [statusValue, setStatusValue] = useState('0');

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

  const [requiredInfo, setRequiredInfo] = useState({
    member_first_name: false,
    member_last_name: false,
    member_email: false,
    member_cell_number: false,
    member_status: false,
    member_position: false,
    ec1_name: false,
    ec1_email: false,
    ec1_phone_number: false,
    ec1_relation_to_member: false,
  });

  const [requiredValidForm, setRequiredValidForm] = useState({
    member_email: false,
    member_cell_number: false,
    ec1_email: false,
    ec1_phone_number: false,
    ec2_email: false,
    ec2_phone_number: false,
  });

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

  function resetValidation() {
    setRequiredInfo({
      member_first_name: false,
      member_last_name: false,
      member_email: false,
      member_cell_number: false,
      member_status: false,
      member_position: false,
      ec1_name: false,
      ec1_email: false,
      ec1_phone_number: false,
      ec1_relation_to_member: false,
    });
    setRequiredValidForm({
      member_email: false,
      member_cell_number: false,
      ec1_email: false,
      ec1_phone_number: false,
      ec2_email: false,
      ec2_phone_number: false,
    });
  }

  function handleClose() {
    setValidated(false);
    handleHide();
    setStatusValue('0');
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
    setSpecializations({
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
    resetValidation();
    setShowError(false);
  }

  function checkRequiredInfo() {
    const temp = { ...requiredInfo };
    const requiredKeys = Object.keys(requiredInfo);
    let isValid = true;

    requiredKeys.forEach((requirement) => {
      if ((person[requirement] !== '') || (person[requirement].trim() !== '')) {
        temp[requirement] = true;
      } else {
        isValid = false;
      }
    });

    setRequiredInfo(temp);
    return isValid;
  }

  function checkRequiredValidForm() {
    const temp = { ...requiredValidForm };
    const validFormKeys = Object.keys(requiredValidForm);
    let isValid = true;

    validFormKeys.forEach((form) => {
      const inputValue = person[form];

      if (form.includes('ec2') && inputValue.trim() === '') {
        temp[form] = true;
      } else if (form.includes('email')) {
        if ((inputValue.split('@').length > 1) && (emailEndings.includes(inputValue.slice(-4)))) {
          temp[form] = true;
        } else {
          isValid = false;
        }
      } else if (form.includes('number')) {
        const phoneNum = inputValue.split('-');

        if (inputValue.split('-').length === 3) {
          if ((phoneNum[0].length === 3) && (phoneNum[1].length === 3)
          && (phoneNum[2].length === 4) && (!Number.isNaN(phoneNum[0]))
          && (!Number.isNaN(phoneNum[1])) && (!Number.isNaN(phoneNum[2]))) {
            temp[form] = true;
          } else {
            isValid = false;
          }
        } else {
          isValid = false;
        }
      }
    });

    setRequiredValidForm(temp);
    return isValid;
  }

  function checkValid() {
    resetValidation();

    const enteredAllInfo = checkRequiredInfo();
    const allValidForm = checkRequiredValidForm();

    if (enteredAllInfo && allValidForm) {
      setValidated(true);
      return true;
    }

    setShowError(true);
    return false;
  }

  function submitForm() {
    const isValid = checkValid();

    if (isValid === false && validated === false) {
      const element = document.getElementById('AddUserModal');
      element.scrollIntoView(true);
      return;
    }

    if (isValid === true && validated === true) {
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
    <AddUserModal
      id="AddUserModal"
      size="lg"
      show={showForm}
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
        <Alert show={showError} variant="danger" onClose={() => setShowError(false)} dismissible>
          Please fix the following errors:
          {Object.entries(requiredInfo).map((required) => (
            !required[1]
              ? (
                <div>
                  Please enter an input for
                  <b>
                    &nbsp;
                    &apos;
                    {errorMap[required[0]]}
                    &apos;
                  </b>
                </div>
              )
              : ''
          ))}
          {Object.entries(requiredValidForm).map((required) => {
            if (!required[1]) {
              if (required[0].includes('email')) {
                return (
                  <div>
                    Invalid form for
                    <b>
                      &nbsp;
                      &apos;
                      {errorMap[required[0]]}
                      &apos;
                    </b>
                    . Must be email@email.com
                  </div>
                );
              }
              return (
                <div>
                  Invalid form for
                  <b>
                    &nbsp;
                    &apos;
                    {errorMap[required[0]]}
                    &apos;
                  </b>
                  . Must be ###-###-####
                </div>
              );
            }
            return ('');
          })}
        </Alert>
        <Form>
          <FirstSection>Member Information</FirstSection>
          <Form.Group as={Row}>
            <Col>
              <AddUserLabel> First Name </AddUserLabel>
              <Form.Control
                type="text"
                name="member_first_name"
                id="member_first_name"
                value={person.member_first_name.trim()}
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
                value={person.member_last_name.trim()}
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
                type="text"
                name="member_email"
                id="member_email"
                value={person.member_email.trim()}
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
                value={person.member_cell_number.trim()}
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
                    name="member_status"
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
                value={person.ec1_relation_to_member.trim()}
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
                value={person.ec1_email.trim()}
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
                value={person.ec1_phone_number.trim()}
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
                value={person.ec2_relation_to_member.trim()}
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
                value={person.ec2_email.trim()}
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
                value={person.ec2_phone_number.trim()}
                placeholder="555-555-5555"
                onChange={handleChange}
              />
            </Col>
          </Form.Group>

          <SubmitButton>
            <Button variant="primary" onClick={submitForm}>
              Submit
            </Button>
          </SubmitButton>
        </Form>
      </AddUserModal.Body>
    </AddUserModal>
  );
}

AddUserForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  handleHide: PropTypes.func.isRequired,
  showForm: PropTypes.bool.isRequired,
};

export default AddUserForm;
