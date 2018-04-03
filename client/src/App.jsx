import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import HeaderBar from './components/home/HeaderBar.jsx';
import HomeLayout from './Pages/HomeLayout.jsx';
import Profile from './Pages/Profile.jsx';

const App = () => (
    <BrowserRouter>
      <main>
        <HeaderBar />

          <Route path="/" component={HomeLayout} />

      </main>
    </BrowserRouter>
)

export default App;
