import React from 'react';

import CardExampleWithAvatar from '../components/profile/AvatarVender.jsx';


export default class Profile extends React.Component {
  state = {
    persons: data.data
  }



  componentDidMount() {
    axios.get(`/profile`)
      .then(res => {
        const persons = res.data;
        this.setState({ persons });
      })
  }



  render() {
    return (

      <ul>
        <AvatarVender vendors={this.state.persons} />
      </ul>
    )
  }
}
