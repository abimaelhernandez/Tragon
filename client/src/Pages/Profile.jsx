import React from 'react';
import MyGoogleMap from '../components/Map/MapConfig.jsx';

import CardExampleWithAvatar from '../components/profile/AvatarVender.jsx';


export default class Profile extends React.Component {
  state = {
    person: []
  }

  componentDidMount = () => {
    axios.get(`/profile`,{
      params: {
        id: '${id}'
      }
    })
      .then(res => {
        const person = res.data;
        this.setState({ person });

      })
      .catch ((error) => {
        console.log(error)
      })
     }




///import import React, {Component} from 'react'


  render() {
    return (
      <div>
        {console.log(this.state.person)}
        <ul>
          <CardExampleWithAvatar vendors={this.state.person} picture={this.state.person.picture} />
        </ul>
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
