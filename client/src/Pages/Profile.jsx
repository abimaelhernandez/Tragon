import React, {Component} from 'react';
import UserAvatar from '../components/UserProfile/UserAvatar';

export default class Profile extends Component {
  state = {
    person: [],
  }

  render() {
    const {picture, name} = this.state.person;
    return (
      <div>
        <UserAvatar name={name} picture={picture} />
      </div>
    );
  }
}
