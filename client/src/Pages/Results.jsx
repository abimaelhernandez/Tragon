import React, { Component } from 'react';
import MyGoogleMap from '../components/Map/MapConfig';
import VendorCard from '../components/Results/VendorCard';

export default class Results extends Component {
  state = {
      vendors: [],
  }

  componentDidMount() {
    this.setState({
      vendors: this.props.vendors
    });
  }

  componentWillUnmount() {
    this.setState({
      vendors: null,
    });
  }

 componentWillUnmount(){
   this.setState({
     vendors: null
   })
 }

 //const points =
 render() {
   const local = this.props.vendors
   return (
     <div>
       <VendorCard points={local} />
     </div>
   )
 }
}
