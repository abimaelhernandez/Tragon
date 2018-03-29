import React from 'react';
import MyGoogleMap from '../components/Map/MapConfig.jsx';

import axios from 'axios';

import CardExampleWithAvatar from '../components/profile/AvatarVender.jsx';


export default class Profile extends React.Component {
  state = {
    persons: data.data
  }



  componentDidMount() {
    axios.get(`/profile`)
      .then(res => {
        const user = res.data;
        this.setState({ persons });
      })
  }



///import import React, {Component} from 'react'


  render() {
    return (
      <div>
      <ul>
        <AvatarVender vendors={this.state.persons} />
      </ul>
        <MyGoogleMap/>
      </div>
    )
  }
}
 ///mine
 // import React, {Component} from 'react'
 // import MyGoogleMap from '../components/Map/MapConfig.jsx';
 //
 // const Profile = () => (
 //
 //   <div>
 //     <MyGoogleMap />
 //   </div>
 // )
 //
 // export default Profile;
