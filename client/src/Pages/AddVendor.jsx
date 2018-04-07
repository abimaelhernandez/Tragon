import React, {Component} from 'react';

export default class AddVendor extends Component {
  state = {
    name: '',
    tag: '',
    location: ''
  }

   componentDidMount() {
      AddVendor.fetchMembers()
        .then((AddVendor) => {
          this.setState({ AddVendor });
        });
    }

    submitVendor = () => {
      axios.post('/AddVendor', {
        Name: this.state.userName
      })

     render() {
      return (
        <div className="row">
          <h2> Vendor Page</h2>
          <Link to="/member">New Vendor</Link>
          <table className="table">
            <thead>
              <VendorHeader />
            </thead>
            <tbody>
              {
                this.state.members.map((Vendor) =>
                  <VendorRow
                    key={Vendor.id}
                    Vendor={Vendor}
                  />
                )
              }
            </tbody>
          </table>
        </div>
      );
    }
  };
}
