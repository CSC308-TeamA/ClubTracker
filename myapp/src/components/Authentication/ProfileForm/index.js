import React, {useState} from 'react'
import pfp2 from '../../../assets/profiles/pfp2.gif';
import { Form, InputGroup, Col } from 'react-bootstrap'


function ProfileForm(props) {
    const [person, setPerson] = useState(
        {
            first: '',
            last: '',
            phone: '',
            user: '',
            email: '',
            password: '',
            role: '',
            position: '',
            specialization: '',
            picture: pfp2,
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
          { first: '', last: '', phone: '', 
          user: '', email: '', password: '', 
          role: '', position: '', specialization: '' }
        );
    }

    return (
        <>
            <Form.Row>
                <Form.Group as={Col} md="4" controlId="validationCustom01">
                    <Form.Label>First name</Form.Label>
                    <Form.Control
                        required
                        type="text"
                        name="first"
                        id="first"
                        placeholder="John"
                        value={person.first}
                        onChange={handleChange} 
                    />
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} md="4" controlId="validationCustom02">
                    <Form.Label>Last name</Form.Label>
                    <Form.Control
                        required
                        type="text"
                        name="last"
                        id="last"
                        placeholder="Doe"
                        value={person.last}
                        onChange={handleChange} 
                    />
                </Form.Group>
            </Form.Row>
            <Form.Row>
                <Form.Group as={Col} md="4" controlId="validationCustom04">
                    <Form.Label>Username</Form.Label>
                    <InputGroup hasValidation>
                        <InputGroup.Prepend>
                        <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
                            </InputGroup.Prepend>
                            <Form.Control
                                type="text"
                                name="user"
                                id="user"
                                placeholder="user123"
                                value={person.user}
                                onChange={handleChange} 
                                aria-describedby="inputGroupPrepend"
                                required
                            />
                        <Form.Control.Feedback type="invalid">
                            Please choose a username.
                        </Form.Control.Feedback>
                    </InputGroup>
                </Form.Group>

                <Form.Group as={Col} md="4" controlId="validationCustom03">
                        <Form.Label>Phone</Form.Label>
                        <Form.Control
                            type="text"
                            name="phone"
                            id="phone"
                            placeholder="(555) 555-5555"
                            value={person.phone}
                            onChange={handleChange} 
                        />
                </Form.Group>
            </Form.Row>
            
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>

            <Form.Row>
                <Form.Group as={Col} controlId="validationCustom05">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                        type="text"
                        name="email"
                        id="email"
                        placeholder="name@email.com"
                        value={person.email}
                        onChange={handleChange} 
                    />


                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        type="text"
                        name="password"
                        id="password"
                        placeholder="password"
                        value={person.password}
                        onChange={handleChange} 
                    />
                </Form.Group>
            </Form.Row>

            <Form.Group controlId="validationCustom06">
                <Form.Label>Role</Form.Label>
                <Form.Control
                    as="select"
                    size="sm"
                    custom 
                    type="text"
                    name="role"
                    id="role"
                    placeholder="Admin"
                    value={person.role}
                    onChange={handleChange}>
                        <option>Admin</option>
                        <option>Officer</option>
                        <option>Member</option>
                </Form.Control>
            </Form.Group>

            <Form.Row>
                <Form.Group as={Col} controlId="validationCustom07">
                    <Form.Label>Position</Form.Label>
                    <Form.Control
                        as="select"
                        size="sm"
                        custom 
                        type="text"
                        name="position"
                        id="position"
                        placeholder="None"
                        value={person.position}
                        onChange={handleChange}>
                            <option>None</option>
                            <option>Parent</option>
                            <option>Mentor</option>
                            <option>Lead</option>
                            <option>Alumni</option>
                </Form.Control>
                </Form.Group>
                <Form.Group as={Col} controlId="validationCustom08">
                    <Form.Label>Specialization</Form.Label>
                    <Form.Control
                        as="select"
                        size="sm"
                        custom
                        type="text"
                        name="specialization"
                        id="specialization"
                        value={person.specialization}
                        onChange={handleChange}>
                            <option>None</option>
                            <option>Design</option>
                            <option>Frabrication</option>
                            <option>Electronics</option>
                            <option>Assembly</option>
                            <option>Programming</option>
                            <option>Media</option>
                            <option>Business</option>
                            <option>Scoutin</option>
                            <option>Pit Crew</option>
                            <option>Drive</option>
                            <option>Other</option>
                </Form.Control>
                </Form.Group>
            </Form.Row>

            <div className="mb-3">
                <Form.File 
                    id="formcheck-api-regular"
                    name="picture"
                    value={person.picture}>
                <Form.File.Label>Optional: Profile Picture</Form.File.Label>
                <Form.File.Input />
                </Form.File>
            </div>

            <input type="button" value="Submit" onClick={submitForm} />

        </>
    );
}


export default ProfileForm;