import React, {Component} from 'react';
import firebase from 'firebase';
import {firebaseAuth} from '../components/auth/client.js'
import FBLogin from '../components/auth/Login.js'

import Results from './Results.jsx';
import Home from './HomePage.jsx'

export default class HomeContainer extends Component {
  state = {
    isAuthenticated: false,
    vendors: null
  }

  componentDidMount(){

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

  componentWillUnmount() {

  }
  render() {
    firebaseAuth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({
          isAuthenticated: true
        });
      } else {
        this.setState({
          isAuthenticated: false
        });
      }
    });
    return (
      <div>
        {this.state.vendors ? (
          <Results vendors={this.state.vendors} />
        ) : (
          <Home submitSearch={this.submitSearch} />
        )}
      </div>
    );
  }
}
