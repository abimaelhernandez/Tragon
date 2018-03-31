import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Button from 'material-ui/Button';

export default class Searchbar extends Component {
  state = {
    search: ''
  }

  componentDidMount() {

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
      <Link to={`/search?query=${this.state.search}`}><Button
        type="submit"
        className="SearchButton"
        variant="raised"
        color="primary"
        onClick={this.newSearch}>
        Search
      </Button></Link>
    </div>
    )
  }
}
