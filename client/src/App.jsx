import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import HeaderBar from './components/home/HeaderBar.jsx';
import HomeContainer from './Pages/HomeContainer.jsx';
import Profile from './Pages/Profile.jsx';
import AvatarVender from './components/profile/AvatarVender.jsx';
import MyGoogleMap from './components/Map/MapConfig.jsx';

const App = () => (
  <BrowserRouter>
      <div>
        <header>
        <HeaderBar />
        </header>
        <main id="main-content">
        <Switch>
          <Route path="/" component={HomeContainer} />
          <Route path={"/user/:id"} component={Profile} />
          <Route path={"/vendor"} component={AvatarVender} />
        </Switch>
        </main>
    </div>
  </BrowserRouter>
)

export default App;
