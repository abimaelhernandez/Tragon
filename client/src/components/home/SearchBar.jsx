import React, {Component} from 'react';
import Button from 'material-ui/Button';

export default class Searchbar extends Component {
  state = {
    search: ''
  }

  updateSearch = (event) => {
    this.setState({

    })
  }

  newSearch = () => {

  }

  render() {
    return (
      <div>
        <form className='SearchBar'>
        <input
          onChange={this.updateSearch}
          className='field'
          type="text"
          placeholder="Que se te antoja, paisa?"
          value={this.state.search}
          />
      </form>
      <Button className="searchButton" variant="raised" color="primary">
        Search
      </Button>
    </div>
    )
  }
}
