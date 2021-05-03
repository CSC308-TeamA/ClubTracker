import React from 'react';
import {
  Header,
  NavLink,
  Nav,
  NavLinkLogo,
} from './FooterElements';
import boatImage from '../../assets/logo.PNG';

function Footer() {
  return (
    <Header>
      <Nav>
        <NavLink href="https://twitter.com/frc2046?lang=en" activeStyle>
          Twitter
        </NavLink>
        <NavLink href="https://www.instagram.com/bearmetal2046/?hl=en" activeStyle>
          Instagram
        </NavLink>
        <NavLink href="https://www.facebook.com/FRC2046/" activeStyle>
          Facebook
        </NavLink>
        <NavLinkLogo to="/">
          <img src={boatImage} alt="Logo" width={40} />
        </NavLinkLogo>
        <NavLink href="https://twitter.com/frc2046?lang=en" activeStyle>
          Twitter
        </NavLink>
        <NavLink href="https://www.instagram.com/bearmetal2046/?hl=en" activeStyle>
          Instagram
        </NavLink>
        <NavLink href="https://www.thebluealliance.com/team/2046" activeStyle>
          Blue Alliance
        </NavLink>
      </Nav>
    </Header>
  );
}

export default Footer;
