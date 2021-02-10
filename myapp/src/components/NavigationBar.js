import "../styles/navbar.styles.scss";
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import boatImage from '../assets/logo.PNG';

export const NavigationBar = () => (
  <Navbar className="navbar-container">
  <Navbar.Brand href="/">Robotics Team</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <div className="link-container link-container__left">
        <Nav.Link href="/">Home</Nav.Link>
        <Nav.Link href="/resources">Resources</Nav.Link>
        <Nav.Link href="/about">About</Nav.Link>
      </div>
      <img src={boatImage} className="logo" alt="logo" width={100} />
      <div className="link-container link-container__right">
        <Nav.Link href="/sponsor">Sponsor</Nav.Link>
        <Nav.Link href="/contact">Contact</Nav.Link>
        <NavDropdown title="Resources" id="basic-nav-dropdown">
          <NavDropdown.Item href="/calendar">Calendar</NavDropdown.Item>
          <NavDropdown.Item href="/pictures">Pictures</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="/teamroster">Team Roster</NavDropdown.Item>
        </NavDropdown>
      </div>
    </Nav>
  </Navbar.Collapse>
</Navbar>

)
