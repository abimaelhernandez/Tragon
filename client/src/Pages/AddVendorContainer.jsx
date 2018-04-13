import React, {Component} from 'react';
import AddVendor from '../components/AddVendor/AddVendor';

export default class AddVendorContainer extends Component {
  state = {
    vendor: {
      name: String,
      category: String,
      location: {
        type: {type: String},
        coordinates: [Number, Number],
      },
      picture: String,
      expenses: Number,
      review: [{
        body: String,
        ObjectId: String,
      }],
    },
  }

    submitVendor = () => {
      axios.post('/AddVendor', {
        Name: this.state.vendor.name,
      });
    }

    render() {
      return (
        <div className="row">
          <h2> Vendor Page</h2>
          <AddVendor onSave={this.onSave} />
        </div>
      );
    }
}
