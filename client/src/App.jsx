import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import HeaderBar from './components/home/HeaderBar.jsx';
import Home from './Pages/HomePage.jsx';
import Profile from './Pages/Profile.jsx';

const App = () => (
  <div>
    <BrowserRouter>
      <main>
        <HeaderBar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path={"/user/:id"} component={Profile} />
        </Switch>
      </main>
    </BrowserRouter>
  </div>
)

export default App;
