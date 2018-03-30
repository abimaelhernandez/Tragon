import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import HeaderBar from './components/home/HeaderBar.jsx';
import Home from './Pages/HomePage.jsx';
import Profile from './Pages/Profile.jsx';
import MyGoogleMap from './components/Map/MapConfig.jsx';
//import HeaderBar from './components/home/HeaderBar.jsx';

const App = () => (
  <div>
    <BrowserRouter>
      <main>
      <HeaderBar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path={`/search/:query`} render={(props) => <Results {...props}/> } />
        <Route path={`/user`} render={(props) => <Profile {...props}/> } />
        <Route path={`/map`} render={(props)=> <MyGoogleMap {...props}/> } />
    </Switch>
      </main>
    </BrowserRouter>
  </div>
)

export default App;
