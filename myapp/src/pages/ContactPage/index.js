  
import React from 'react'
import Padding from '../../components/Padding';
import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import {
  FormDiv,
  MapOuter,
  NavLink,
  GmapCanvas, 
  Line
} from './ContactPageElements';
import { ReactComponent as Facebook } from '../../assets/socials/facebook.svg';
import { ReactComponent as Instagram } from '../../assets/socials/instagram.svg';
import { ReactComponent as Twitter } from '../../assets/socials/twitter.svg';


export const Contact = () => (
  <>
    <Padding />
    <h2>Contact Us!</h2>
    <Line />
    
    <FormDiv>
      <h4>Enter your information here:</h4>
      <Form>
        <Form.Row>
          <Form.Group as={Col} controlId="FirstName">
            <Form.Label>First Name</Form.Label>
            <Form.Control type="first" placeholder="First name" />
          </Form.Group>
          <Form.Group as={Col} controlId="LastName">
            <Form.Label>Last Name</Form.Label>
            <Form.Control type="last" placeholder="Last name" />
          </Form.Group>
        </Form.Row>
        <Form.Group controlId="exampleForm.ControlInput1">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="name@example.com" />
        </Form.Group>
        <Form.Group controlId="exampleForm.ControlTextarea1">
          <Form.Label>Tell us why you would like to contact us</Form.Label>
          <Form.Control as="textarea" rows={5} />
        </Form.Group>
        <Button variant="warning" type="submit">
          Submit
        </Button>
      </Form>
    </FormDiv>
    <FormDiv>
      <MapOuter>
        <GmapCanvas>
          <iframe 
            title="THS Map"
            width="600" 
            height="500" 
            id="gmap_canvas" 
            src="https://maps.google.com/maps?q=tahoma%20high%20school&t=&z=13&ie=UTF8&iwloc=&output=embed" 
            frameborder="0" 
            scrolling="no" 
            marginheight="0" 
            marginwidth="0">
          </iframe>
          <br />
        </GmapCanvas>
      </MapOuter>
    </FormDiv>
    
    <h2>Don't forget to visit our social media!</h2>
    <p>
      <NavLink to="https://www.facebook.com/FRC2046/" activeStyle>
        <Facebook /> Facebook
      </NavLink>
    </p>
    <p>
      <NavLink to="https://www.instagram.com/bearmetal2046/?hl=en" activeStyle>
        <Instagram /> Instagram
      </NavLink>
    </p>
    <p>
      <NavLink to="https://twitter.com/frc2046?lang=en" activeStyle>
        <Twitter /> Twitter
      </NavLink>
    </p>
  </>
)