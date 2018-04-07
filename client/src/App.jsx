import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import HeaderBar from './components/home/HeaderBar.jsx';
import HomeContainer from './Pages/HomeContainer.jsx';
import Profile from './Pages/Profile.jsx';
import AvatarVender from './components/profile/AvatarVender.jsx';
import MyGoogleMap from './components/Map/MapConfig.jsx';
import Vendor from './components/VendorPage/VendorPage.jsx';


const App = ({history}) => (
  <BrowserRouter>
      <div>
        <header>
        <HeaderBar />
        </header>
        <main id="main-content">
        <Switch>
          <Route path="user" component={Profile} />
          <Route path="vendor" component={AvatarVender} />
          <Route path="/" component={HomeContainer} />
        </Switch>
        </main>
    </div>
  </BrowserRouter>
)

export default App;
