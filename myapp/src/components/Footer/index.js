import React from 'react';
import {
  Header,
  NavLink,
  Nav
} from './FooterElements';
import boatImage from '../../assets/logo.PNG';

const Footer = () => {
  return (
    <>
      <Header>
        <Nav>
          <NavLink to="https://twitter.com/frc2046?lang=en" activeStyle>
            Twitter
          </NavLink>
          <NavLink to="https://www.instagram.com/bearmetal2046/?hl=en" activeStyle>
            Instagram
          </NavLink>
          <NavLink to="https://www.facebook.com/FRC2046/" activeStyle>
            Facebook
          </NavLink>
          <NavLink to='/'>
            <img src={boatImage} alt="Logo" width={40}/>
          </NavLink>
          <NavLink to="https://twitter.com/frc2046?lang=en" activeStyle>
            Twitter
          </NavLink>
          <NavLink to="https://www.instagram.com/bearmetal2046/?hl=en" activeStyle>
            Instagram
          </NavLink>
          <NavLink to="https://www.thebluealliance.com/team/2046" activeStyle>
            Blue Alliance
          </NavLink>
        </Nav>
      </Header>
    </>
  );
};

export default Footer;