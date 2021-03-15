import React, {useState} from 'react'
import { Form } from 'react-bootstrap'


function ProfileForm(props) {

    const [person, setPerson] = useState(
        {
            email: '',
            password: '',
        }
    );

    function handleChange(event) {
        const value = event.target.value;
        setPerson({
            ...person, 
            [event.target.name]: value
        });
    }

    function submitForm() {
        props.handleSubmit(person);
        setPerson(
          {email: '', password: ''}
        );
    }

    return (
        <>
            <Form.Group md="4" controlId="validationCustom01">
                <Form.Label>Email Address</Form.Label>
                <Form.Control
                    type="text"
                    name="email"
                    id="email"
                    placeholder="name@email.com"
                    value={person.email}
                    onChange={handleChange} 
                />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>

            <Form.Group md="4" controlId="validationCustom02">
                <Form.Label>Password</Form.Label>
                <Form.Control
                    type="text"
                    name="password"
                    id="password"
                    placeholder="password"
                    value={person.password}
                    onChange={handleChange} 
                />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>

            {/* <input type="button" value="Submit" onClick={submitForm} /> */}
        </>
    );
}


export default ProfileForm;