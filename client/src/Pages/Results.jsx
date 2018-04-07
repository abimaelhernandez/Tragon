import React, { Component } from 'react';
import MyGoogleMap from '../components/Map/MapConfig.jsx'

export default class Results extends Component {
  constructor(props){
    super(props)
    this.state = {
      vendors: []
    }
  }

 componentDidMount() {
   this.setState({
     vendors: this.props.vendors
   })
 }

 render() {
   const points =
   return (
     <div>
       {console.log('THIS IS THE PROPS NOW', this.props.vendors.map(function(obj){
         return obj.location.coordinates;
       }))}
       <MyGoogleMap />
     </div>
   )
 }
}
