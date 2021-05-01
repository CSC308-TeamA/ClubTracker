import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Router, Switch, Route } from 'react-router-dom';

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';

import First from './pages/FirstPage';
import About from './pages/AboutPage';
import Home from './pages/HomePage';
import Sponsor from './pages/SponsorPage';
import Contact from './pages/ContactPage';
import TeamRoster from './pages/TeamRosterPage';
import Calendar from './pages/CalendarPage';
// import Login from './pages/LoginPage';
// import SignUp from './pages/SignUpPage';
import Pictures from './pages/PicturePage';
import Layout from './components/Layout';
import DiscussionBoard from './pages/DiscussionBoard';
import ThreadPage from './pages/ThreadPage';
import Footer from './components/Footer';
import Login from './pages/LoginPage';
import Register from './pages/RegisterPage';
// import Profile from './components/Profile/';
import BoardUser from './components/BoardUser';
import BoardModerator from './components/BoardModerator';
import BoardAdmin from './components/BoardAdmin';

import { logout } from './actions/auth';
import { clearMessage } from './actions/message';

import { history } from './helpers/history';

export default function App() {
  const [showModeratorBoard, setShowModeratorBoard] = useState(false);
  const [showAdminBoard, setShowAdminBoard] = useState(false);

  const { user: currentUser } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    history.listen(() => {
      dispatch(clearMessage()); // clear message when changing location
    });
  }, [dispatch]);

  useEffect(() => {
    if (currentUser) {
      setShowModeratorBoard(currentUser.roles.includes('ROLE_MODERATOR'));
      setShowAdminBoard(currentUser.roles.includes('ROLE_ADMIN'));
    }
  }, [currentUser]);

  const logOut = () => {
    dispatch(logout());
  };
  return (
    <Router history={history}>
      <div>
        <Navbar sticky="top" bg="warning">
          <Navbar.Brand href="/">Bear Metal</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="/home">Home</Nav.Link>
              <Nav.Link href="/first">FIRST</Nav.Link>
              <Nav.Link href="/about">About Us</Nav.Link>
              <Nav.Link href="/sponsor">Sponsors</Nav.Link>
              <Nav.Link href="/contact">Contact Us</Nav.Link>
              <Nav.Link href="/discussion">Discussion Board</Nav.Link>
              <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                <NavDropdown.Item href="/calendar">Calendar</NavDropdown.Item>
                <NavDropdown.Item href="/pictures">Pictures</NavDropdown.Item>
                <NavDropdown.Item href="/teamroster">Team Roster</NavDropdown.Item>
              </NavDropdown>

              {showModeratorBoard && (
                <Nav.Link href="/mod">Moderator Board</Nav.Link>
              )}

              {showAdminBoard && (
                <Nav.Link href="/admin">Admin Board</Nav.Link>
              )}

              {currentUser && (
                <Nav.Link href="/user">User</Nav.Link>
              )}
            </Nav>

            {currentUser ? (
              <Nav>
                <Nav.Link href="/profile">{currentUser.username}</Nav.Link>
                <Nav.Link eventKey={2} href="/login" onClick={logOut}>
                  Log Out
                </Nav.Link>
              </Nav>
            ) : (
              <Nav>
                <Nav.Link href="/login">Login</Nav.Link>
                <Nav.Link eventKey={2} href="/register">
                  Sign Up
                </Nav.Link>
              </Nav>
            )}
          </Navbar.Collapse>
        </Navbar>

        <div className="container mt-3">
          <Layout>
            <Switch>
              <Route exact path={['/', '/home']} component={Home} />
              <Route path="/about" component={About} />
              <Route path="/sponsor" component={Sponsor} />
              <Route path="/contact" component={Contact} />
              <Route path="/teamroster" component={TeamRoster} />
              <Route path="/calendar" component={Calendar} />
              <Route path="/first" component={First} />
              <Route path="/pictures" component={Pictures} />
              <Route exact path="/discussion" component={DiscussionBoard} />
              <Route path="/thread" component={ThreadPage} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/register" component={Register} />
              {/* <Route exact path="/profile" component={Profile} /> */}
              <Route path="/user" component={BoardUser} />
              <Route path="/mod" component={BoardModerator} />
              <Route path="/admin" component={BoardAdmin} />
            </Switch>
          </Layout>
          <Footer />
        </div>
      </div>
    </Router>
  );
}
