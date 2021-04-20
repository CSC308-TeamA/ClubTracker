import React from 'react'
import Padding from '../../components/Padding';
import { CardChange, Image } from './HomePageElements';
import { Button, CardDeck, NavLink } from 'react-bootstrap'
import PhotoGallery from '../../components/PhotoGallery/';
import bannerImage from '../../assets/websiteBanner.jpg';


export const Home = () => (
  <>
    <Padding />
    <Image src={bannerImage} alt="Banner"/>
    <div>
      <h2>About Us</h2>
      <p>Just as the on-going space program does this, Bear Metal continues to instill interest in STEM and business careers while creating opportunities for students to broaden their educational horizons and simultaneously develop their interpersonal skills. We prepare members for the workforce by emphasizing hands on opportunities, accountability, teamwork, and leadership, which are the core values we impress upon our members. For us, robotics is not only about the skills we learn, but the lasting experiences that are the foundation of lifelong relationships.</p>
    </div>
    <Button variant="warning" type="submit">
        <NavLink to="/about">Learn More</NavLink>
    </Button>

    <CardDeck>
      <CardChange>
          <CardChange.Body>
              <CardChange.Title>Meet the Team</CardChange.Title>
              <CardChange.Text>
              Here we are! The team roster shows all our teams members wiht their roll and a quote from each of them.
              </CardChange.Text>
          </CardChange.Body>
          <CardChange.Footer>
              <Button variant="warning" type="submit">
                  <NavLink to="/about">About Us</NavLink>
              </Button>
          </CardChange.Footer>
      </CardChange>
      <CardChange>
          <CardChange.Body>
              <CardChange.Title>FIRST Robotics</CardChange.Title>
              <CardChange.Text>
              FIRST robotics is a international robotis comptetition founded by Dean Kamen. More information can be found on their webpage!
              </CardChange.Text>
          </CardChange.Body>
          <CardChange.Footer>
              <Button variant="warning" type="submit">
                  <NavLink to="/first">FIRST</NavLink>
              </Button>
          </CardChange.Footer>
      </CardChange>
      <CardChange>
          <CardChange.Body>
              <CardChange.Title>Discussion Board</CardChange.Title>
              <CardChange.Text>
              Check out our team's discussion board! Please be sure to log in or sign up first!
              </CardChange.Text>
          </CardChange.Body>
          <CardChange.Footer>
              <Button variant="warning" type="submit">
                  <NavLink to="/discussion">Discussion board</NavLink>
              </Button>
          </CardChange.Footer>
      </CardChange>
    </CardDeck>
    
    <div>
      <h2>Sponsor us!</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ligula tortor, suscipit vitae sem eget, venenatis accumsan erat. Cras pharetra.</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sed ante et lectus tincidunt pretium quis non lorem. Vivamus sit amet fringilla nulla. Nullam eu magna in ex tempus scelerisque. Sed eu lectus odio. Ut eget ipsum vitae magna rutrum egestas. Pellentesque feugiat elementum turpis ut tempor. Etiam et efficitur.</p>
    </div>
    <Button variant="warning" type="submit">
        <NavLink to="/contact">Contact Us</NavLink>
    </Button>
    
    <h2>Photo Gallery</h2>
    <PhotoGallery />
  </>
)