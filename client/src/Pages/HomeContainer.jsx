import React, {Component} from 'react';
import Select from 'react-select';
import {Switch, Route, withRouter} from 'react-router-dom';

import Results from './Results.jsx';
import Home from './HomePage.jsx'

class HomeContainer extends Component {
  state = {
    selectedOption: '',
    vendors: []
  }

  submitSearch = (query) => {
    axios.get('/search', {
      params: {
        query: `${query}`
      }
    })
    .then(({data}) => {
      console.log(data)
      this.setState({
        vendors: data
      })
    })
    .catch((error) => {
      console.error(error);
    })
    this.props.history.push(`/search?query=${query}`)
  }

  shouldComponentUpdate(nextProps) {
    return nextProps.location !== this.props.location
  }

  componentWillUnmount() {

  }

  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" render={(props) => <Home submitSearch={this.submitSearch} /> } />
          <Route path={`${this.props.location}`} render={(props) => <Results vendors={this.state.vendors} {...props} /> } />
        </Switch>
      </div>
    );
  }
}

export default withRouter(HomeContainer)
