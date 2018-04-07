import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import firebase from 'firebase';

import HeaderBar from './components/home/HeaderBar.jsx';
import Login from './components/auth/Login.js'
import HomeContainer from './Pages/HomeContainer.jsx';
import Profile from './Pages/Profile.jsx';
import AvatarVender from './components/profile/AvatarVender.jsx';

const App = ({history}) => (
  <BrowserRouter>
      <div>
        <HeaderBar />
        <main id="main-content">
        <Switch>
          <Route exact path="/login" component={Login} />
          <Route path="/user" component={Profile} />
          <Route path="/vendor" component={AvatarVender} />
          <Route path="/" component={HomeContainer} />
        </Switch>
        </main>
    </div>
  </BrowserRouter>
)

export default App;
