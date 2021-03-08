import React, { useState } from 'react'
import { Form, Row, Col, Button } from 'react-bootstrap'

function AddUserForm(props) {
  return (
    <div>
      <Form>
        <Form.Group as={Row} controlId="formName">
          <Form.Label column md="4"> Name </Form.Label>
          <Col md="8">
            <Form.Control type="text" placeholder="John Doe" />
          </Col>
        </Form.Group>

        <Form.Group as={Row} controlId="formEmail">
          <Form.Label column md="4"> Email </Form.Label>
          <Col md="8">
            <Form.Control type="email" placeholder="email@email.com" />
          </Col>
        </Form.Group>

        <Form.Group as={Row} controlId="formPhoneNumber">
          <Form.Label column md="4"> Phone Number </Form.Label>
          <Col md="8">
            <Form.Control type="text" placeholder="(555) 555-5555" />
          </Col>
        </Form.Group>

        <Form.Group as={Row} controlId="formUserRole">
          <Form.Label column md="4"> Role </Form.Label>
          <Col md="8">
            {['radio'].map((type) => (
              <div key={`inline-${type}`} className="mb-3">
                <Form.Check inline label="Advisor" type={type} id={`inline-${type}-1`} />
                <Form.Check inline label="Officer" type={type} id={`inline-${type}-2`} />
                <Form.Check inline label="Member" type={type} id={`inline-${type}-2`} />
              </div>
            ))}
          </Col>
        </Form.Group>

        <Form.Group as={Row} controlId="formPosition">
          <Form.Label column md="4"> Position </Form.Label>
          <Col md="8">
            <Form.Control type="text" placeholder=" " />
          </Col>
        </Form.Group>

        <Form.Group as={Row} controlId="formSpecialization">
          <Form.Label column md="4"> Specialization </Form.Label>
          <Col md="8">
            <Form.Control type="text" placeholder=" " />
          </Col>
        </Form.Group>        

        <Form.Group as={Row} controlId="formQuote">
          <Form.Label column md="4"> Quote </Form.Label>
          <Col md="8">
            <Form.Control as="textarea" rows={3} />
          </Col>
        </Form.Group>
        
        <div style={{ padding: '10px', display: 'flex', justifyContent: 'center' }}>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </div>
      </Form>
    </div>
  );

}

export default AddUserForm;