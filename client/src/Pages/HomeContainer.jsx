import React, {Component} from 'react';
import Select from 'react-select';
import {Switch, Route, withRouter} from 'react-router-dom';
import Vendor from '../components/profile/AvatarVender.jsx';
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

  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" render={(props) => <Home submitSearch={this.submitSearch} /> } />
          <Route path="/vendor" component={Vendor} />
        </Switch>
      </div>
    );
  }
}

export default withRouter(HomeContainer)
