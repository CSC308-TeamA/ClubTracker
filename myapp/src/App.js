/* eslint-disable react/jsx-props-no-spreading */
import React, { useState, useEffect } from 'react';
import axios from 'axios';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';

import Footer from './components/Footer';
import First from './pages/FirstPage';
import About from './pages/AboutPage';
import Home from './pages/HomePage';
import Sponsor from './pages/SponsorPage';
import Contact from './pages/ContactPage';
import TeamRoster from './pages/TeamRosterPage';
import Calendar from './pages/CalendarPage';
import Login from './pages/LoginPage';
import SignUp from './pages/SignUpPage';

import Pictures from './pages/PicturePage';
import Layout from './components/Layout';

import DiscussionBoard from './pages/Discussion/DiscussionBoard';
import CreateBoard from './pages/Discussion/CreateBoard';
import ThreadPage from './pages/Thread/ThreadPage';

export default function App() {
  const [logInStatus, setLogInStatus] = useState(false);
  // TODO: CHANGE THIS TO 45 MIN IN MS LATER
  const TEN_SECONDS_MS = 10000;

  const link = 'http://localhost:5000/'; // For testing
  // let link = 'https://clubtracker-backend.herokuapp.com/';

  async function fetch() {
    try {
      const response = await axios.get(link, { withCredentials: true });
      return response;
    } catch (error) {
      return false;
    }
  }

  useEffect(() => {
    const interval = setInterval(() => {
      fetch().then((result) => {
        if (result.status === 201) {
          setLogInStatus(true);
        }
      });
    }, TEN_SECONDS_MS);

    return () => clearInterval(interval);
  }, []);

  return (
    <Router>
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
            </Nav>
            {logInStatus
              ? <Nav.Link href="/logout">Log Out</Nav.Link>
              : (
                <>
                  <Nav.Link href="/login">Log In</Nav.Link>
                  <Nav.Link href="/signup">Sign Up</Nav.Link>
                </>
              )}
          </Navbar.Collapse>
        </Navbar>

        <div className="container mt-3">
          <Layout>
            <Switch>

              <Route exact path={['/', '/home']} component={Home} />
              {' '}
              <Route path="/about" component={About} />
              <Route path="/sponsor" component={Sponsor} />
              <Route path="/contact" component={Contact} />
              <Route
                path="/teamroster"
                render={(props) => (
                  <TeamRoster
                    {...props}
                    logInStatus={logInStatus}
                    link={link}
                  />
                )}
              />
              <Route path="/calendar" component={Calendar} />
              <Route path="/first" component={First} />
              <Route path="/pictures" component={Pictures} />

              <Route
                path="/login"
                render={(props) => (
                  <Login
                    {...props}
                    link={link}
                  />
                )}
              />
              <Route path="/signup" component={SignUp} />
              {/* TODO: ADD PATH FOR LOG OUT */}
              <Route
                exact
                path="/discussion"
                render={(props) => (
                  <DiscussionBoard
                    {...props}
                    logInStatus={logInStatus}
                    link={link}
                  />
                )}
              />
              <Route
                path="/create_board"
                render={(props) => (
                  <CreateBoard
                    {...props}
                    logInStatus={logInStatus}
                    link={link}
                  />
                )}
              />
              <Route
                path="/discussion/:thread"
                render={(props) => (
                  <ThreadPage
                    {...props}
                    logInStatus={logInStatus}
                    link={link}
                  />
                )}
              />
            </Switch>
          </Layout>
          <Footer />
        </div>
      </div>
    </Router>
  );
}
