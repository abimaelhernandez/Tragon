import React from 'react';

import AvatarVender from '../components/profile/AvatarVender.jsx';


export default class Profile extends React.Component {
  state = {
    person: []
  }

  componentDidMount = () => {
    console.log('hello')
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

  render() {
    return (
      <div>
        <ul>
          <AvatarVender vendors={this.state.person} picture={this.state.person.picture} />
        </ul>
      </div>
    )
  }
}
