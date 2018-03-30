import React from 'react';
import Select from 'react-select';
import Search from '../components/home/Search.jsx';
import SearchBar from '../components/home/SearchBar.jsx';
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
    axios.get('/search', {
      params: {
        query: `${query}`
      }
    })
    .then((data) => {
      console.log(data)
    })
    .catch((error) => {
      console.error(error);
    })
  }

  render() {
  	const { selectedOption } = this.state;
  	const value = selectedOption && selectedOption.value;

    return (
      <div>
        <div>
          <Searchbar submitSearch={this.submitSearch}/>
          </div>
          <div>
          <LocationMenu />
        </div>
      </div>
    );
  }
}
