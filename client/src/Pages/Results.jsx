import React, { Component } from 'react';
import MyGoogleMap from '../components/Map/MapConfig.jsx'

export default class Results extends Component {
 state = {
   vendors: []
 }

 componentDidMount() {
   this.setState({
     vendors: this.props.vendors
   })
 }

 render() {
   return (
     <div>
       <form>
         <input
           placeholder="Search for..."
           onChange={this.handleInputChange}
         />
       </form>
       <MyGoogleMap />
     </div>
   )
 }
}
