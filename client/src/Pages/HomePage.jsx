import React, {Component} from 'react';
import Select from 'react-select';
import {Switch, Route, Redirect} from 'react-router-dom';

import Results from './Results.jsx';
import Searchbar from '../components/home/SearchBar.jsx';
import LocationMenu from '../components/home/DropDown.jsx';

export default class Home extends Component {
  state = {
    selectedOption: '',
    vendors: [],
    query: ''
  }

  componentDidMount() {

  }

  submitSearch = (query) => {
    axios.get('/search', {
      params: {
        query: `${query}`
      }
    })
    .then((data) => {
      let vendors = data.data;
      this.setState({
        vendors: vendors,
        query: `${query}`
      })
      console.log(this.state)
    })
    .catch((error) => {
      console.error(error);
    })
  }

  componentWillUnmount(){

  }

  render() {
    return (
      <div>
        <div id="primary-content">
          <Searchbar submitSearch={this.submitSearch}/>
          <LocationMenu />
        <Switch>
          <Route path={`/search?query=${this.state.query}`}
            render={(props) => <Results vendors={this.state.vendors} {...props}/> } />
        </Switch>
      </div>
    </div>
    );
  }
}
