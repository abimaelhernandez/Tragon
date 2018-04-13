import React, {Component} from 'react';
import Button from 'material-ui/Button';

export default class AddVendor extends Component {
  state = {
    name: '',
    category: '',
    location: '',
  }

  updateName = (e) => {
    this.setState({
      name: e.target.value,
    });
  }

  updateCategory = (e) => {
    this.setState({
      category: e.target.value,
    });
  }

  updateLocation = (e) => {
    this.setState({
      location: e.target.value,
    });
  }

  render() {
    return (
      <div>
        <form>
          <input
            placeholder="Name"
            value={this.state.name}
            onChange={this.updateName}
          />
          <input
            placeholder="Category"
            value={this.state.category}
            onChange={this.updateCategory}
          />
          <input
            placeholder="Location"
            value={this.state.location}
            onChange={this.updateLocation}
          />
          <Button
            label="Save"
            className="btn btn-default"
            onClick={this.newVendor}
          >
          Add Vendor Info
          </Button>
        </form>
      </div>
    );
  }
}
