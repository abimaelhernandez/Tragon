import React, {Component} from 'react';
import {Redirect} from 'react-router-dom';
import Button from 'material-ui/Button';

export default class SearchBar extends Component {
  state = {
    search: ''
  }

  updateSearch = (event) => {
    this.setState({
      search: event.target.value
    })
  }

  newSearch = () => {
    this.props.submitSearch(this.state.search);
    this.setState({
      search: ''
    })
  }

  render() {

    return (
      <div>
        <form className="SearchBar">
        <input
          onChange={this.updateSearch}
          className='FieldInput'
          type="text"
          placeholder="Que se te antoja, paisa?"
          value={this.state.search}
          />
      </form>
      <Button
        type="submit"
        className="SearchButton"
        variant="raised"
        style={{ color: "white", backgroundColor: "#108f8f"}}
        onClick={this.newSearch}
        onClick={this.newSearch}>
        Search
      </Button>
    </div>
    )
  }
}
