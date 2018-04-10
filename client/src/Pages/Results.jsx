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

 componentWillUnmount(){
   this.setState({
     vendors: null
   })
 }
 
 //const points =
 render() {
   let local = this.props.vendors
   return (
     <div>
       <MyGoogleMap points={local}/>
     </div>
   )
 }
}
