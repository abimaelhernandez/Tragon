import React from 'react';
<<<<<<< 51268c9a9892cc80be4c2ec17b4f0c14fd4318ad
import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom';

import HeaderBar from './components/home/HeaderBar.jsx';
import Home from './Pages/HomePage.jsx';
import Results from './Pages/Results.jsx';
import Profile from './Pages/Profile.jsx';

const App = () => (
  <div>
    <BrowserRouter>
      <main>
      <HeaderBar />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path={`/search/:query`} render={(props) => <Results {...props}/> } />
        <Route path={`/user/:id`} render={(props) => <Profile {...props}/> } />
      </Switch>
      </main>
    </BrowserRouter>
=======
import AppBarMenue from './AppBar.jsx'

const App = () => (
  <div>
      <AppBarMenue />
    HELLO WORLD!
>>>>>>> currently working on AppBarMenue
  </div>
)

export default App;
