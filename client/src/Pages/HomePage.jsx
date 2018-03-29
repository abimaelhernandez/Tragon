import React from 'react';
import Select from 'react-select';

import Searchbar from '../components/home/SearchBar.jsx';
import LocationMenu from '../components/home/DropDown.jsx';

export default class Home extends React.Component {
  state = {
    selectedOption: '',
    query: ''
  }

  handleChange = (selectedOption) => {
    this.setState({ selectedOption });
    console.log(`Selected: ${selectedOption.label}`);
  }

  submitSearch = (query) => {
    axios.get()
  }

  render() {
  	const { selectedOption } = this.state;
  	const value = selectedOption && selectedOption.value;

    return (
      <div>
        <div>
          <Searchbar />
          </div>
          <div>
          <LocationMenu />
        </div>
      </div>
    );
  }
}
