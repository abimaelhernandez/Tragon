import React, {Component} from 'react';
import AddVendor from '../components/AddVendor/AddVendor.jsx';

export default class AddVendor extends Component {
  constructor(props){
    super()
    this.state = {
      vendorName: ""
    }
  }

   componentDidMount() {
      AddVendor.fetchVendors()
        .then((AddVendor) => {
          this.setState({ AddVendor });
        });
    }

    submitVendor = () => {
      axios.post('/AddVendor', {
        //
        Name: this.state.vendorName
      })
  }
  render() {
      return (
        <div className="row">
          <h2> Vendor Page</h2>
          Vendorname: <input
            onChange={this.updateVendor}
            placeholder="Enter vendorname"
            value={this.state.vendorName}>
          </input>
            <br/>
          <button onClick={this.submitVendor}>
            Add Vendor
          </button>
        </div>
      );
    }
}
