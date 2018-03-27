import React from 'react';
import HeaderBar from './components/home/HeaderBar.jsx';
import Search from './components/home/Search.jsx';
import LocationMenu from './components/home/DropDown.jsx';

const App = () => (
  <div>
    <div>
      <div>
        <HeaderBar />
          </div>
              <div>
                <Search />
              </div>
              <div>
              <LocationMenu />
              </div>
          </div>
  </div>
)

export default App;
