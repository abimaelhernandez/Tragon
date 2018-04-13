import React from 'react';
import SearchBar from '../components/Home/SearchBar.jsx';
import LocationMenu from '../components/Home/LocationMenu.jsx';

const Home = (props) => (
  <div>
    <SearchBar submitSearch={props.submitSearch} />
    <LocationMenu />
  </div>
);

export default Home;
