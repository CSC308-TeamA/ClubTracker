import React from 'react';
import '../../styles/styles.scss';
import Image from 'react-bootstrap/Image';
import teamImage from '../../assets/teamPhoto.jpg';
import awards from '../../assets/awards.PNG';
import girlsGen from '../../assets/girlsGen2017.png';
import win19 from '../../assets/2019win.jpg';
import win12 from '../../assets/2012win.jpg';
import fair1 from '../../assets/fairBooth.jpg';

import {
  Line, SubHead, Left, Center,
} from './AboutPageElements';

function About() {
  const aboutParagraph = 'Just as the on-going space program does this, Bear Metal continues to instill interest in STEM and business careers while creating opportunities for students to broaden their educational horizons and simultaneously develop their interpersonal skills. We prepare members for the workforce by emphasizing hands on opportunities, accountability, teamwork, and leadership, which are the core values we impress upon our members. For us, robotics is not only about the skills we learn, but the lasting experiences that are the foundation of lifelong relationships.';

  const communityParagraph = 'Bear Metal focuses on fostering the curiosity of children. Within the Maple Valley community there are seven FLL teams, all started by Bear Metal alumni and students who have attended past robotics camps. Four of the FLL teams are supported through our school district by Bear Metal mentors and members. FLL has also inspired the creation of an after-school robotics club at Maple View Middle School for students who cannot make the full-time commitment that FLL requires, but are still interested in robotics.';

  const ourMissionParagraph = 'Bear Metal strives to offer members and mentors the opportunities to develop their own skills, reach new people, and make an impact. To achieve this, our team focuses on hands-on learning, mentoring, and teamwork. Our varied backgrounds foster personal growth. We aim to leave a positive, lasting impression in our community by inspiring more people to pursue their passions.';

  const diversityParagraph = '“Genius has no race. Strength has no gender”. Women like Katherine Johnson and Sally Ride propelled advancement in the space industry through their leadership and skill. Just as these women opened opportunities for females, Bear Metal has created an inclusive environment encouraging female involvement by hosting the first offseason FRC event in Washington state exclusively for females in FIRST, called Girls’ Generation.';

  const subTeamsParagraph = 'At Bear Metal, we believe that the best way to gain experience is through hands on learning. Members study the six pillars of robotics: design, electronics, fabrication, assembly, programming, and business, to gain industry applicable skills. Bear Metal fosters interest in STEM learning through robotics camps, classes and workshops';

  return (
    <>
      <h2>ABOUT US</h2>
      <Line />
      <SubHead>
        <h3>Welcome to Robotics 2046 team page!</h3>
        <Image src={teamImage} fluid />
      </SubHead>

      <p>{aboutParagraph}</p>
      <p>We are part of FIRST Robotics and our rookie year was 2015.</p>
      <p>Please feel free to explore our webpage and social media below.</p>

      <Center>
        <h2>COMMUNITY</h2>
        <img src={fair1} alt="fairBooth" />
        <p>{communityParagraph}</p>
      </Center>

      <h2>OUR MISSION</h2>
      <p>{ourMissionParagraph}</p>

      <Left>
        <h2>DIVERSITY</h2>
        <img src={girlsGen} alt="girlsGen" />
        <p>{diversityParagraph}</p>
      </Left>

      <h2>SUBTEAMS</h2>
      <p>{subTeamsParagraph}</p>

      <h2>AWARDS</h2>
      <p>Here are some notable awards from the past years.</p>
      <p>2019:</p>
      <Image src={win19} fluid />
      <Image src={awards} fluid />
      <p>2012:</p>
      <Image src={win12} fluid />

      <h2>OUR ROBOTS</h2>
      <p>2007: Epic</p>
      <p>2008: Catalyst</p>
      <p>2009: Bearenstein</p>
      <p>2010: Odyssey</p>
      <p>2011: Ursa Major &amp; Ursa Minor</p>
      <p>2012: Bearmageddon</p>
    </>

  );
}

export default About;
