import React, {Component} from 'react';
import Button from 'material-ui/Button';
import SearchBar from '../components/home/SearchBar.jsx'
import LocationMenu from '../components/home/DropDown.jsx'

const Home = (props) => (
  <div>
    <SearchBar submitSearch={props.submitSearch} />
    <LocationMenu />
  </div>
)

export default Home
