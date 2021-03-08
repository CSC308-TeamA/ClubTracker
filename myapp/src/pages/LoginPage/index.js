import React from 'react'
import { Form, Button } from 'react-bootstrap'
import Padding from '../../components/Padding'
import { NavLink, NewDiv, NewCard, Center } from './LoginPageElements'

export const Login = () => (
    <>
    <Padding />
        <Center>LOG IN</Center>
        <NewDiv>
            <NewCard>
                <Form>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                        <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    <Form.Group controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Check me out" />
                    </Form.Group>
                    <Button variant="primary" type="Log In">
                        <NavLink to="/discussion">Log In</NavLink>
                    </Button>
                </Form>
            </NewCard>
        </NewDiv>
        <NewDiv>
            <NewCard>
                <NewCard.Body>
                    <NewCard.Title>Haven't signed up?</NewCard.Title>
                    <NewCard.Text>
                    Click below to sign up.
                    </NewCard.Text>
                    <Button variant="primary" type="Log In">
                        <NavLink to="/signup">Sign Up</NavLink>
                    </Button>
                </NewCard.Body>
            </NewCard>
        </NewDiv>
    </>
)
