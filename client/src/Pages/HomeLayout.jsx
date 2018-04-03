import React, {Component} from 'react';
import Select from 'react-select';
import {Switch, Route, withRouter} from 'react-router-dom';

import Results from './Results.jsx';
import Home from './HomePage.jsx'

class HomeLayout extends Component {
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
      this.setState({
        vendors: data
      })
    })
    .catch((error) => {
      console.error(error);
    })
    this.props.history.push(`/search?query=${query}`)
  }

  shouldComponentUpdate(nextState) {
    return nextState.vendors !== this.state.vendors
  }

  render() {
    return (
      <div>
        <Switch>
          <Route path="/" render={(props) => <Home submitSearch={this.submitSearch} /> } />
          <Route path={`${this.props.location.pathname}${this.props.location.search}`}
            render={(props) => <Results {...props}/> } />
        </Switch>
      </div>
    );
  }
}

export default withRouter(HomeLayout)
