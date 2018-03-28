import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

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
        <Route exact path="/" component={Home} />
        <Route path={`/search/:query`} render={(props) => <Results {...props}/> } />
        <Route path={`/user/:id`} render={(props) => <Profile {...props}/> } />
      </Switch>
      </main>
    </BrowserRouter>
  </div>
)

export default App;
