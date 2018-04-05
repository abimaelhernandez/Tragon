import React, {Component} from 'react';

import AvatarVender from '../components/profile/AvatarVender.jsx';

export default class Profile extends Component {
  state = {
    person: []
  }

  componentDidMount() {
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
    const {picture, name} = this.state.person
    return (
      <div>
        <ul>
          <AvatarVender name={name} picture={picture} />
        </ul>
      </div>
    )
  }
}
