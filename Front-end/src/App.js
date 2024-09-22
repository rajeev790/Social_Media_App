// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './components/Login';
import Signup from './components/Signup';
import Feed from './components/Feed';
import Post from './components/Post';
import Notifications from './components/Notifications';
import Profile from './components/Profile';
import Explore from './components/Explore';

const App = () => {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Signup} />
          <Route path="/feed" component={Feed} />
          <Route path="/post/:id" component={Post} />
          <Route path="/notifications" component={Notifications} />
          <Route path="/profile/:username" component={Profile} />
          <Route path="/explore" component={Explore} />
          <Route path="/" exact component={Feed} /> {/* Default route */}
        </Switch>
      </div>
    </Router>
  );
};

export default App;
