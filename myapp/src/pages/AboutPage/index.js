import React from 'react'
import "../../styles/styles.scss";
import Padding from '../../components/Padding/';
// import {
//   FormDiv,
//   MapOuter,
//   NavLink,
//   GmapCanvas, 
//   Line
// } from './AboutPageElements';
import Image from 'react-bootstrap/Image'
import teamImage from '../../assets/teamPhoto.jpg'

export const About = () => (
  <>
    <Padding />
      <Image src={teamImage} fluid />

      <h2>ABOUT US</h2>
      <p>Welocome to Robotics (####) team page.</p>
      <p>We are part of FIRST Robotics and our rookie year was ####</p>
      <p>Please explore our webpage and social media</p>
      
      <h2>OUR MISSION</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
      
      <h2>OUR HISTORY</h2>
      <p>Welocome to Robotics (####) team page.</p>
      <p>We are part of FIRST Robotics and our rookie year was ####</p>
      <p>Please explore our webpage and social media</p>
      
      <h2>MENTORS AND VOLUNTEERS</h2>
      <p>Welocome to Robotics (####) team page.</p>
      <p>We are part of FIRST Robotics and our rookie year was ####</p>
      <p>Please explore our webpage and social media</p>
      
      <h2>SUBTEAMS</h2>
      <p>Welocome to Robotics (####) team page.</p>
      <p>We are part of FIRST Robotics and our rookie year was ####</p>
      <p>Please explore our webpage and social media</p>
      
      <h2>AWARDS</h2>
      <p>Welocome to Robotics (####) team page.</p>
      <p>We are part of FIRST Robotics and our rookie year was ####</p>
      <p>Please explore our webpage and social media</p>
  </>

)