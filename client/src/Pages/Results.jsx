import React, { Component } from 'react';
import MyGoogleMap from '../components/Map/MapConfig.jsx';
import VendorCard from '../components/Results/VendorCard.jsx';

export default class Results extends Component {
  state = {
      vendors: [],
  }

  componentDidMount() {
    this.setState({
      vendors: this.props.vendors
    });
  }

 //const points =
 render() {
   const local = this.props.vendors
   return (
     <div>
       <VendorCard points={local}/>
     </div>
   )
 }
}
