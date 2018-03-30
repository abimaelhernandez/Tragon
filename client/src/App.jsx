import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import HeaderBar from './components/home/HeaderBar.jsx';
import HomeContainer from './Pages/HomeContainer.jsx';
import Profile from './Pages/Profile.jsx';


const App = () => (
    <BrowserRouter>
      <main>
        <HeaderBar />
        <Switch>
          <Route path="/" component={HomeContainer} />
          <Route path={"/user/:id"} component={Profile} />
            <Route path={`/map`} render={(props)=> <MyGoogleMap {...props}/> } />
        </Switch>
      </main>
    </BrowserRouter>
)

export default App;
