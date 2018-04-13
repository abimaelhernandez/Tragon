import React, { Component } from 'react';
import VendorCard from '../components/Results/VendorCard';

export default class Results extends Component {
 render() {
   const local = this.props.vendors
   return (
     <div>
       <VendorCard points={local}/>
     </div>
   )
 }
}
