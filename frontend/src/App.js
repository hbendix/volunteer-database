import React from 'react';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import NavBar from './components/navbar.js';
import HomePage from './pages/home.js';
import SearchPage from './pages/search.js';
import AboutPage from './pages/about.js';
import SignupPage from './pages/signup.js';
import SignupVolunteerPage from './pages/signup_volunteer';
import StoryBook from './pages/storybook.js';
import NewProject from './pages/newproject.js';
import Style from './pages/style.js';
import UserProfile from './components/UserProfile/Profile.component';
import Profile from './components/Profile/Profile.component';
import Footer from './pages/footer';
import './App.css';
import './about.css';

function App() {
  return (
    <Router>
      <div className='App'>
        <NavBar />
        <Switch>
          <Route path='/' exact component={HomePage} />
          <Route path='/about' exact component={AboutPage} />
          <Route path='/search' exact component={SearchPage} />
          <Route path='/signup' exact component={SignupPage} />
          <Route path='/signup/volunteer' exact component={SignupVolunteerPage} />
          <Route path='/storybook' exact component={StoryBook} />
          <Route path='/newproject' exact component={NewProject} />
          <Route path='/userprofile' exact component={UserProfile} />
          <Route path='/profile' exact component={Profile} />
          <Route path='/style' exact component={Style} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
