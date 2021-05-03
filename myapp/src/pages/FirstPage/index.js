import React from 'react';
import '../../styles/styles.scss';
import Image from 'react-bootstrap/Image';
import ResponsiveEmbed from 'react-bootstrap/ResponsiveEmbed';
import Padding from '../../components/Padding';
import firstLogo from '../../assets/first-logo.jpg';
import firstStats from '../../assets/frc-stats.jpg';
import {
  MainAbout,
  Center,
} from './FirstPageElements';

function First() {
  const FIRSTAboutParagraph = 'FIRST, which stands for “For the Inspiration and Recognition of Science and Technology,” is a nonprofit organization founded by Dean Kamen in 1989. Structured around a high-school robotics competition, the FIRST Robotics Competition is much more than just a competition, combining gracious professionalism with technology to create an environment that fosters a deeper appreciation for science and technology. Professional mentors as well as college students partner with teams to teach students valuable engineering and professional skills while helping the team succeed. Furthermore, FIRST teams are encouraged to spread the word to increase appreciation of Science, Technology, Engineering & Math in society as a whole. In addition to the FIRST Robotics Competition, FIRST sponsors the FIRST Tech Challenge, designed for high school teams that may not have the resources to participate in the FIRST Robotics Competition. For younger students, FIRST has developed the FIRST Lego League and FIRST Lego League Jr. programs. For More Information, Visit';

  const FIRSTFoundedParagraph = 'FIRST was founded 1989 and based in Manchester, NH, FIRST is a 501(c)(3) not-for-profit public charity designed to inspire young people\'s interest and participation in science and technology, and to motivate them to pursue education and career opportunities in STEM fields.';

  return (
    <>
      <Padding />
      <h2>What is the FIRST Robotics Competition?</h2>
      <hr />
      <MainAbout>
        <p>
          <img src={firstLogo} alt="firstLogo" />
          {FIRSTAboutParagraph}
          <a href="FIRSTInspires.org"> FIRSTInspires.org</a>
        </p>
      </MainAbout>
      <ResponsiveEmbed aspectRatio="16by9">
        <iframe title="FIRST Inspiratioin" width="560" height="315" src="https://www.youtube.com/embed/WlK7S7-Kx70" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
      </ResponsiveEmbed>
      <Center>
        <Image src={firstStats} fluid />
      </Center>

      <p>{FIRSTFoundedParagraph}</p>
    </>
  );
}
export default First;
