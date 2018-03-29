import React from 'react';
import MyGoogleMap from '../components/Map/MapConfig.jsx';

import axios from 'axios';

import CardExampleWithAvatar from '../components/profile/AvatarVender.jsx';


export default class PersonList extends React.Component {
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



///import import React, {Component} from 'react'


  render() {
    return (

      <ul>
        <AvatarVender vendors={this.state.persons} />
          <MyGoogleMap />
      </ul>
    )
  }
}
