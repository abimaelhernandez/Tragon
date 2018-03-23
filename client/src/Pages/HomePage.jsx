import React from 'react';
import HeaderBar from '../components/home/HeaderBar.jsx';

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
          <HeaderBar />
      </div>
    );
  }
}
