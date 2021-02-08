
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { About } from './pages/AboutPage';
import { Home } from './pages/HomePage';
import { Resources } from './pages/ResourcesPage';
import { Contact } from './pages/ContactPage';
import { Sponsor } from './pages/SponsorPage';
import { Layout } from './components/Layout';
import { NavigationBar } from './components/NavigationBar';
import { Jumbotron } from './components/Jumbotron.js';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Router>
          <NavigationBar />
          <Jumbotron />
          <Layout>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/about" component={About} />
              <Route path="/resources" component={Resources} />
              <Route path="/sponsor" component={Sponsor} />
              <Route path="/contact" component={Contact} />
            </Switch>
          </Layout>
        </Router>
      </React.Fragment>
    );
  }
}

export default App;