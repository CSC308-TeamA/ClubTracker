import React, { useState } from 'react'
import { Accordion, Form, Row, Col, Button, Modal, ButtonGroup, ToggleButton } from 'react-bootstrap'
import styles from '../styles/TeamRoster.module.css'

function AddUserForm(props) {
  function randID() {
    var id = '';
    for (var i = 0; i < 4; i++) {
      id += Math.floor(Math.random() * 10);
    }

    return id;
  }

  const [person, setPerson] = useState({
    id: randID(),
    name: '',
    role: '',
    position: '',
    specialization: '',
    email: '',
    phone_number: '',
    quote: ''
  });

  function handleChange(event) {
    const { name, value } = event.target;
    var temp = { ...person };

    temp[name] = value;

    setPerson(temp);
  }

  const [validated, setValidated] = useState(false);

  function submitForm(event) {
    const form = event.currentTarget;

    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);

    if (form.checkValidity() === true) {
      props.handleSubmit(person);
      handleClose();
    }
  }

  const [show, setShow] = useState(false);

  function handleClose() {
    setValidated(false);
    setShow(false);
    setPerson({
      id: randID(),
      name: '',
      role: '',
      position: '',
      specialization: '',
      email: '',
      phone_number: '',
      quote: ''
    })
  }

  function handleShow() {
    setShow(true);
  }

  const [radioValue, setRadioValue] = useState('0');

  const roles = [
    { name: 'Advisor' },
    { name: 'Officer' },
    { name: 'Member' }
  ]

  return (
    <div>
      <Button variant="primary" onClick={handleShow} className={styles.addUserForm}>
        + Add a Member
      </Button>

      <Modal size="lg" show={show} onHide={handleClose} backdrop="static" keyboard={false}>
        <Modal.Header>
          <Modal.Title>Add a New Member</Modal.Title>
          <Button variant="link" onClick={handleClose}> X </Button>
        </Modal.Header>
        <Modal.Body>
          <Form noValidate validated={validated} onSubmit={submitForm}>
            <Form.Group as={Row}>
              <Form.Label column md="3"> Name </Form.Label>
              <Col md="9">
                <Form.Control
                  required type="text" name="name" id="name"
                  value={person.name} placeholder="Name"
                  onChange={handleChange} />
                <Form.Control.Feedback type="invalid">
                  Please enter a name.
                </Form.Control.Feedback>
              </Col>
            </Form.Group>

            <Form.Group as={Row}>
              <Form.Label column md="3"> Email </Form.Label>
              <Col md="9">
                <Form.Control
                  required type="email" name="email" id="email"
                  value={person.email} placeholder="email@email.com"
                  onChange={handleChange} />
                <Form.Control.Feedback type="invalid">
                  Please enter an email.
                </Form.Control.Feedback>
              </Col>
            </Form.Group>

            <Form.Group as={Row}>
              <Form.Label column md="3"> Phone Number </Form.Label>
              <Col md="9">
                <Form.Control
                  required type="text" name="phone_number" id="phone_number"
                  value={person.phone_number} placeholder="555-555-5555"
                  onChange={handleChange} />
                <Form.Control.Feedback type="invalid">
                  Please enter a phone number.
                </Form.Control.Feedback>
              </Col>
            </Form.Group>

            {/* FIX THIS RADIO BUTTON */}
            <Form.Group as={Row}>
              <Form.Label column md="3"> Role </Form.Label>
              <Col md="9">
                {roles.map((radio, index) => (
                  <Form.Check
                    key={index} inline label={radio.name}
                    type="radio" name="role" id={`radio${index}`}
                    value={radio.name} checked={radioValue === radio.name}
                    onChange={(e) => {
                      setRadioValue(e.currentTarget.value);
                      handleChange(e);
                    }}>
                  </Form.Check>
                ))}
              </Col>
            </Form.Group>

            <Form.Group as={Row}>
              <Form.Label column md="3"> Position </Form.Label>
              <Col md="9">
                <Form.Control
                  type="text" name="position" id="position"
                  value={person.position}
                  onChange={handleChange} />
              </Col>
            </Form.Group>

            {/* FIX THIS INTO DROPDOWN */}
            {/*         
            <option value="Design">Design</option>
            <option value="Fabrication">Fabrication</option>
            <option value="Programming">Programming</option>
            */}
            <Form.Group as={Row}>
              <Form.Label column md="3"> Specialization </Form.Label>
              <Col md="9">
                <Form.Control
                  type="text" name="specialization" id="specialization"
                  value={person.specialization}
                  onChange={handleChange} />
              </Col>
            </Form.Group>

            <Form.Group as={Row}>
              <Form.Label column md="3"> Quote </Form.Label>
              <Col md="9">
                <Form.Control
                  as="textarea" name="quote" id="quote"
                  value={person.quote} placeholder="Throw it back to Stack Attack."
                  rows={3}
                  onChange={handleChange} />
              </Col>
            </Form.Group>

            <div className={styles.addUserFormSumbitButton}>
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </div>
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  );

}

export default AddUserForm;

{/* <div className={styles.addUserForm}>
  <Accordion className={styles.addUserFormAccordion}>
    <div className={styles.addUserFormButton} >
      <Accordion.Toggle as={Button} variant="primary" eventKey="0">
        + Add a Member
          </Accordion.Toggle>
    </div>

    <Accordion.Collapse eventKey="0">
      <Form noValidate validated={validated} onSubmit={submitForm}>
        <Form.Group as={Row}>
          <Form.Label column md="3"> Name </Form.Label>
          <Col md="9">
            <Form.Control
              required type="text" name="name" id="name"
              value={person.name} placeholder="Name"
              onChange={handleChange} />
            <Form.Control.Feedback type="invalid">
              Please enter a name.
                </Form.Control.Feedback>
          </Col>
        </Form.Group>

        <Form.Group as={Row}>
          <Form.Label column md="3"> Email </Form.Label>
          <Col md="9">
            <Form.Control
              required type="email" name="email" id="email"
              value={person.email} placeholder="email@email.com"
              onChange={handleChange} />
            <Form.Control.Feedback type="invalid">
              Please enter an email.
                </Form.Control.Feedback>
          </Col>
        </Form.Group>

        <Form.Group as={Row}>
          <Form.Label column md="3"> Phone Number </Form.Label>
          <Col md="9">
            <Form.Control
              required type="text" name="phone_number" id="phone_number"
              value={person.phone_number} placeholder="(555) 555-5555"
              onChange={handleChange} />
            <Form.Control.Feedback type="invalid">
              Please enter a phone number.
                </Form.Control.Feedback>
          </Col>
        </Form.Group>

        FIX THIS RADIO BUTTON 
        <Form.Group as={Row}>
          <Form.Label column md="3"> Role </Form.Label>
          <Col md="9">
            {['radio'].map((type) => (
              <div key={`inline-${type}`} className="mb-3">
                <Form.Check required inline label="Advisor" type={type} id={`inline-${type}-1`} feedback="Please choose a role." />
                <Form.Check inline label="Officer" type={type} id={`inline-${type}-2`} />
                <Form.Check inline label="Member" type={type} id={`inline-${type}-2`} />
              </div>
            ))}
          </Col>
        </Form.Group>

        <Form.Group as={Row}>
          <Form.Label column md="3"> Position </Form.Label>
          <Col md="9">
            <Form.Control
              type="text" name="position" id="position"
              value={person.position}
              onChange={handleChange} />
          </Col>
        </Form.Group>

        FIX THIS INTO DROPDOWN 
        <Form.Group as={Row}>
          <Form.Label column md="3"> Specialization </Form.Label>
          <Col md="9">
            <Form.Control
              type="text" name="specialization" id="specialization"
              value={person.specialization}
              onChange={handleChange} />
          </Col>
        </Form.Group>

        <Form.Group as={Row}>
          <Form.Label column md="3"> Quote </Form.Label>
          <Col md="9">
            <Form.Control
              as="textarea" name="quote" id="quote"
              value={person.quote} placeholder="Throw it back to Stack Attack."
              rows={3}
              onChange={handleChange} />
          </Col>
        </Form.Group>

        <div className={styles.addUserFormButton}>
          <Button variant="primary" type="submit">
            Submit
              </Button>
        </div>
      </Form>
    </Accordion.Collapse>
  </Accordion>
</div> */}