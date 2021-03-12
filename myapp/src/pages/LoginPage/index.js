import React, {useState} from 'react'
import { Form, Button } from 'react-bootstrap'
import Padding from '../../components/Padding'
import { NavLink, NewDiv, NewCard, Center } from './LoginPageElements'
import LoginCheck from '../../components/Authentication/LoginCheck'

function Login() { 
    const [setCharacters] = useState([
        {
            email: 'john@email.com',
            password: 'password',
        },
      ]);

    function updateList(person) {
        setCharacters([person]);
    }

    return (
        <>
        <Padding />
            <Center>LOG IN</Center>
            <NewDiv>
                <NewCard>
                    <Form>
                        <LoginCheck handleSubmit={updateList}/>
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
                        <Button variant="primary" type="Sign Up">
                            <NavLink to="/signup">Sign Up</NavLink>
                        </Button>
                    </NewCard.Body>
                </NewCard>
            </NewDiv>
        </>
   );  
}

export default Login;