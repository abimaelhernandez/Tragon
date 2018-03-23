import React from 'react';
import DrawerMenue from '../components/home/HeaderBar.jsx';

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
          <DrawerMenue />
      </div>
    );
  }
}
