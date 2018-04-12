import React from 'react';
import SearchBar from '../components/home/SearchBar';
import LocationMenu from '../components/home/LocationMenu';

const Home = (props) => (
  <div>
    <SearchBar submitSearch={props.submitSearch} />
    <LocationMenu />
  </div>
);

export default Home;
