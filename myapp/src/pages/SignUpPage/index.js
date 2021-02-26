import React from 'react'
import { Form, Button, InputGroup, Col, Row } from 'react-bootstrap'
import Padding from '../../components/Padding'

function SignUp() {

    return (
        <>
        <Padding />
        <h2>Sign Up Here!</h2>
        <Form>
        {/* <Form noValidate validated={validated} onSubmit={handleSubmit}> */}
            <Form.Row>
                <Form.Group as={Col} md="4" controlId="validationCustom01">
                <Form.Label>First name</Form.Label>
                <Form.Control
                    required
                    type="text"
                    placeholder="First name"
                />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} md="4" controlId="validationCustom02">
                <Form.Label>Last name</Form.Label>
                <Form.Control
                    required
                    type="text"
                    placeholder="Last name"
                />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} md="4" controlId="validationCustomUsername">
                <Form.Label>Username</Form.Label>
                <InputGroup hasValidation>
                    <InputGroup.Prepend>
                    <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
                    </InputGroup.Prepend>
                    <Form.Control
                    type="text"
                    placeholder="Username"
                    aria-describedby="inputGroupPrepend"
                    required
                    />
                    <Form.Control.Feedback type="invalid">
                    Please choose a username.
                    </Form.Control.Feedback>
                </InputGroup>
                </Form.Group>
            </Form.Row>
            <Form.Row>
                <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
                </Form.Group>
            </Form.Row>

            <Form.Group controlId="exampleForm.SelectCustomSizeLg">
                <Form.Label>Role</Form.Label>
                <Form.Control as="select" size="sm" custom>
                <option>Coach</option>
                <option>Alum</option>
                <option>Parent</option>
                <option>Member</option>
                <option>Lead Member</option>
                </Form.Control>
            </Form.Group>
            <div className="mb-3">
                <Form.File id="formcheck-api-regular">
                <Form.File.Label>Optional: Profile Picture</Form.File.Label>
                <Form.File.Input />
                </Form.File>
            </div>

            <Button variant="primary" type="submit">
                Submit
            </Button>
            </Form>
        </>
    );
}

export default SignUp;