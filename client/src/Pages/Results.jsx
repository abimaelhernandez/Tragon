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
