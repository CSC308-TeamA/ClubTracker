import React from 'react';
import { Jumbotron as Jumbo, Container } from 'react-bootstrap';
import "../styles/styles.scss"
import boatImage from '../assets/dog.png';


export const Jumbotron = () => (
  <div className="banner">
      <div className="container">
          <div className="main-text">ROBOTICSSSSS</div>
          <div className="main-image">
            <img src={boatImage} alt="dog"/>
          </div>
        <div className="scroll">
          <span>Scroll down</span>
        </div>
      </div>
      <div className="fixed-misc">Some Robotics Team</div>
    </div>
  // <Jumbo fluid className="jumbo">
  //   <div className="overlay"></div>
  //   <Container>
  //   <img src={boatImage} alt="dog"/>
  //     <h1>Welcome</h1>
  //     <p>Robotics Team</p>
  //   </Container>
  // </Jumbo>
)