import React, {Component} from 'react';
import Select from 'react-select';
import {Switch, Route, withRouter} from 'react-router-dom';
import Results from './Results.jsx';
import Home from './HomePage.jsx';
import Profile from './Profile.jsx';




export default class HomeContainer extends Component {
  state = {
    vendors: null
  }
  submitSearch = (query) => {
    axios.get('/search', {
      params: {
        query: `${query}`
      }
    })
    .then(({data}) => {
      this.setState({
        vendors: data
      })
    })
    .catch((error) => {
      console.error(error);
    })
    this.props.history.push(`/search?query=${query}`)
  }
  shouldComponentUpdate(nextProps, nextState) {
    return this.state.vendors !== nextState.vendors
  }
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" render={(props) => <Home submitSearch={this.submitSearch} /> } />
          <Route path='/profile' components={Profile} />
        </Switch>
      </div>
    );
  }
}
