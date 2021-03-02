
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Navbar from './components/NavBar/';
import Footer from './components/Footer/';

import { First } from './pages/FirstPage/';
import { About } from './pages/AboutPage/';
import { Home } from './pages/HomePage';
import Sponsor from './pages/SponsorPage/';
import { Contact } from './pages/ContactPage/';

import TeamRoster from './pages/TeamRoster';
import { Calendar } from './pages/CalendarPage/';
import { Login } from './pages/LoginPage/';
import SignUp from './pages/SignUpPage/';

import { Pictures } from './pages/PicturePage';
import { Layout } from './components/Layout';

import { DiscussionBoard } from './pages/DiscussionBoard';
import ThreadPage from './pages/ThreadPage';




class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Router>
          <Navbar />
          <Layout>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/about" component={About} />
              <Route path="/sponsor" component={Sponsor} />
              <Route path="/contact" component={Contact} />
              <Route path="/teamroster" component={TeamRoster} />
              <Route path="/calendar" component={Calendar} />
              <Route path="/login" component={Login} />
              <Route path="/signup" component={SignUp} />
              <Route path="/first" component={First} />
              <Route path="/pictures" component={Pictures} />
              <Route exact path="/discussion" component={DiscussionBoard} />
              <Route path="/thread" component={ThreadPage} />
            </Switch>
          </Layout>
          <Footer />
        </Router>
      </React.Fragment>
    );
  }
}

export default App;