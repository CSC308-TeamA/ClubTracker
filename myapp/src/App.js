
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { About } from './pages/AboutPage';
import { Home } from './pages/HomePage';
import { Resources } from './pages/ResourcesPage';
import { Contact } from './pages/ContactPage';
import { Sponsor } from './pages/SponsorPage';
import { Calendar } from './pages/Calendar';
import { Login } from './pages/LoginPage';
import TeamRoster from './pages/TeamRoster';
import { First } from './pages/FirstPage';
import { Outreach } from './pages/OutreachPage';
import { Pictures } from './pages/PicturePage';

import { Layout } from './components/Layout';
import { NavigationBar } from './components/NavigationBar';
import { Footer } from './components/Footer';

import "./styles/styles.scss";


class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Router>
          <NavigationBar />
          {/* <Jumbotron /> */}
      
          <Layout>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/about" component={About} />
              <Route path="/resources" component={Resources} />
              <Route path="/sponsor" component={Sponsor} />
              <Route path="/contact" component={Contact} />
              <Route path="/teamroster" component={TeamRoster} />
              <Route path="/calendar" component={Calendar} />
              <Route path="/login" component={Login} />
              <Route path="/first" component={First} />
              <Route path="/outreach" component={Outreach} />
              <Route path="/pictures" component={Pictures} />
            </Switch>
          </Layout>
          <Footer />
        </Router>
      </React.Fragment>
    );
  }
}

export default App;