import React, { useState, useEffect } from 'react';
import { Button, CardDeck, NavLink } from 'react-bootstrap';
import UserService from '../../services/user.service';
import { CardChange, Image } from './HomePageElements';
import PhotoGallery from '../../components/PhotoGallery';
import bannerImage from '../../assets/websiteBanner.jpg';

function Home() {
  const [, setContent] = useState('');

  useEffect(() => {
    UserService.getPublicContent().then(
      (response) => {
        setContent(response.data);
      },
      (error) => {
        const econtent = (error.response
          && error.response.data)
          || error.message
          || error.toString();

        setContent(econtent);
      },
    );
  }, []);

  const aboutUsParagraph = 'Just as the on-going space program does this, Bear Metal continues to instill interest in STEM and business careers while creating opportunities for students to broaden their educational horizons and simultaneously develop their interpersonal skills. We prepare members for the workforce by emphasizing hands on opportunities, accountability, teamwork, and leadership, which are the core values we impress upon our members. For us, robotics is not only about the skills we learn, but the lasting experiences that are the foundation of lifelong relationships.';

  const meetTheTeamText = 'Here we are! The team roster shows all our teams members with their roll and a quote from each of them.';

  const FIRSTText = 'FIRST robotics is a international robotis comptetition founded by Dean Kamen. More information can be found on their webpage!';

  const discussionBoardText = 'Check out our team\'s discussion board! Please be sure to log in or sign up first!';

  return (
    <>
      <Image src={bannerImage} alt="Banner" />
      <div>
        <h2>About Us</h2>
        <p>{aboutUsParagraph}</p>
      </div>
      <Button variant="warning" type="submit">
        <NavLink to="/about">Learn More</NavLink>
      </Button>

      <CardDeck>
        <CardChange>
          <CardChange.Body>
            <CardChange.Title>Meet the Team</CardChange.Title>
            <CardChange.Text>
              {meetTheTeamText}
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
              {FIRSTText}
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
              {discussionBoardText}
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
      </div>
      <Button variant="warning" type="submit">
        <NavLink to="/contact">Contact Us</NavLink>
      </Button>

      <h2>Photo Gallery</h2>
      <PhotoGallery />
    </>
  );
}

export default Home;
