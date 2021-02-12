import "../styles/navbar.styles.scss";
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import boatImage from '../assets/logo.PNG';

export const NavigationBar = () => (
  <Navbar collapseOnSelect expand="lg" className="navbar-container">
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
      <Nav className="mr-auto">
        <Navbar.Brand href="/">
          <img src={boatImage} alt="Logo" width={40}/>
          Bear Metal 2046
        </Navbar.Brand>   
        <div className="link-container link-container">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/first">FIRST</Nav.Link>
          <Nav.Link href="/about">About</Nav.Link>
          <Nav.Link href="/outreach">Outreach</Nav.Link>
          <Nav.Link href="/sponsor">Sponsors</Nav.Link>
          <NavDropdown title="More" id="collasible-nav-dropdown">
            <NavDropdown.Item href="/calendar">Calendar</NavDropdown.Item>
            <NavDropdown.Item href="/pictures">Pictures</NavDropdown.Item>
            <NavDropdown.Item href="/teamroster">Team Roster</NavDropdown.Item>
            <NavDropdown.Item href="/resources">Resources</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="/login">Login</NavDropdown.Item>
          </NavDropdown>
        </div>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
)
