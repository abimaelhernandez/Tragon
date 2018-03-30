import React from 'react';
import Select from 'react-select';
import {Switch, Route, Redirect} from 'react-router-dom';

import Home from './HomePage.jsx'
import Results from './Results.jsx';

export default class Landing extends React.Component {
  state = {
    selectedOption: '',
    vendors: [],
    fireRedirect: false
  }

  componentWillReceiveProps = (nextProps) => {
    this.setState({ fireRedirect: false })
  }

  handleChange = (selectedOption) => {
    this.setState({ selectedOption });
    console.log(`Selected: ${selectedOption.label}`);
  }

  submitSearch = (query) => {
    console.log(this.props)
    console.log(this.props.location)
    axios.get('/search', {
      params: {
        query: `${query}`
      }
    })
    .then((data) => {
      let vendors = data.data;
      this.setState({
        vendors: vendors,
        fireRedirect: true
      })
      if (this.state.fireRedirect) {
        (<Redirect to={"/search"} />)
      }
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
        <div id="primary-content">
          <Home submitSearch={this.submitSearch} />
        <Switch>
          <Route path={`/search?:query`} render={(props) => <Results {...props}/> } />
        </Switch>
        </div>
      </div>
    );
  }
}
