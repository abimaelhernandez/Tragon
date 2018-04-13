import React from 'react';
import ProfilePage from '../components/home/ProfileComp.jsx';

 class Profile extends React.Component {
  state = {
    person: []
  }


  render() {
    return (
      <div>
      <ProfilePage />
      </div>
    );
  }
}

export default Profile;
