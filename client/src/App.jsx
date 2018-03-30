import React from 'react';
import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom';

import HeaderBar from './components/home/HeaderBar.jsx';
import Landing from './Pages/Landing.jsx';

import Profile from './Pages/Profile.jsx';

const App = () => (
  <div>
    <BrowserRouter>
      <main>
        <HeaderBar />
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route path={"/user/:id"} component={Profile} />
        </Switch>
      </main>
    </BrowserRouter>
  </div>
)

export default App;
