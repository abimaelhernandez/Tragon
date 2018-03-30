import React from 'react';

import axios from 'axios';

import CardExampleWithAvatar from '../components/profile/AvatarVender.jsx';


export default class PersonList extends React.Component {
  state = {
    persons: []
  }

//

  componentDidMount() {
    axios.get(`/profile`)
      .then(res => {
        const persons = res.data;
        this.setState({ persons });
      })
  }

//

  render() {
    return (
      <div>
        {console.log(this.state.persons)}
        <ul>
          <AvatarVender vendors={this.state.persons} />
        </ul>
      </div>
    )
  }
}
