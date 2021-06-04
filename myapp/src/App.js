import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Navbar from './components/NavBar';
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

class App extends Component {
  render() {
    return (
      <>
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
              <Route path="/create_board" render={(props) => <CreateBoard {...props} />} />
              <Route path="/discussion/:thread" render={(props) => <ThreadPage {...props} />} />
            </Switch>
          </Layout>
          <Footer />
        </Router>
      </>
    );
  }
}

export default App;
