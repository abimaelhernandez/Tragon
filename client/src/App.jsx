import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import HeaderBar from './components/home/HeaderBar.jsx';
import Home from './Pages/HomePage.jsx';
import Profile from './Pages/Profile.jsx';
//import HeaderBar from './components/home/HeaderBar.jsx';

const App = () => (
  <div>
    <BrowserRouter>
      <main>
      <HeaderBar />
      <Switch>
        <Route path="/" component={Home} />
        <Route path={`/search/:query`} render={(props) => <Results {...props}/> } />
        <Route exact path={`/user/:id`} render={(props) => <Profile {...props}/> } />
      </Switch>
      </main>
    </BrowserRouter>
  </div>
)

export default App;
