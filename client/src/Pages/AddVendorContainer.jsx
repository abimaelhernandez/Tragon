import React, {Component} from 'react';
import AddVendor from '../components/AddVendor/AddVendor';
import {GOOGLE_API} from '../../../env';

export default class AddVendorContainer extends Component {
  componentDidMount() {
    const script = document.createElement('script');
    script.src = `https://maps.googleapis.com/maps/api/js?key=${GOOGLE_API}`;
    document.body.appendChild(script);
  }

  geoCodeLocation = (address) => {
    console.log('Fire geoCodeLocation');
    const geocoder = new google.maps.Geocoder();
    geocoder.geocode(
      {
        'address': `${address}`,
        'region': 'MX'
      },
      (results, status) => {
        if (status === google.maps.GeocoderStatus.OK && results.length > 0) {
          const {location} = results[0].geometry;
          return location;
        }
      }
    );
  }

  submitVendor = (name, category, location) => {
    this.geoCodeLocation(location);
    axios.post('/addvendor', {
      name: `${name}`,
      category: `${category}`,
      location: {
        type: 'Point',
        coordinates: `${location}`,
      },
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
        <center>
          <h2 style={{color: 'white'}}>Add a New Vendor</h2>
          <AddVendor submitVendor={this.submitVendor} />
        </center>
      </div>
    );
  }
}
