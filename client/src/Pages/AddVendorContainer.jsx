import React, {Component} from 'react';
import AddVendor from '../components/AddVendor/AddVendor';

export default class AddVendorContainer extends Component {
  state = {
  }

  submitVendor = (name, category, location) => {
    axios.post('/addvendor', {
      name: `${name}`,
      category: `${category}`,
      location: `${location}`,
    })
      .then((res) => {
        console.log(`${res} success`);
      })
      .catch((error) => {
        console.error(error);
      });
  }

  render() {
    return (
      <div className="row">
        <h2> Vendor Page</h2>
        <AddVendor submitVendor={this.submitVendor} />
      </div>
    );
  }
}
