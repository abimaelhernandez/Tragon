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

  newVendor = () => {
    const {
      name,
      category,
      location,
    } = this.state;
    this.props.submitVendor(name, category, location);
    this.setState({
      name: '',
      category: '',
      location: '',
    });
  }

  render() {
    return (
      <div>
        <section>
          <input
            placeholder="Name"
            value={this.state.name}
            onChange={this.updateName}
          /> <br />
          <input
            placeholder="Category"
            value={this.state.category}
            onChange={this.updateCategory}
          /> <br />
          <input
            placeholder="Location"
            value={this.state.location}
            onChange={this.updateLocation}
          /> <br />
        </section>
        <Button
          type="submit"
          color="primary"
          varient="raised"
          label="Save"
          onClick={this.newVendor}
        >
        Add Vendor Info
        </Button>
      </div>
    );
  }
}
