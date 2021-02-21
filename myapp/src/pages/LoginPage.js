import React from 'react'
import Form from 'react-bootstrap/form'
import Button from 'react-bootstrap/Button'
import Padding from '../components/Padding/'
import styled from 'styled-components';
import { NavLink as Link } from 'react-router-dom';;


const NavLink = styled(Link)`
    color: yellow;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;
    &.active {
    color: white;
    }
    &:hover {
    color: white;
    }
`;

export const Login = () => (
    <>
    <Padding />
        <h2>LOG IN PLS</h2>
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
    </>
)