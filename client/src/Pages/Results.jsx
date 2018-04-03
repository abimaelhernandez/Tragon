import React, {Component} from 'react';

export default class Results extends Component {
  state = {
    vendors: []
  }

  componentDidMount() {
    this.setState({
      vendors: this.props.vendors
    })
  }

  render() {
    return (
      <div>
        <div className="center-content">
          <center>
          "MAP GOES HERE"
          </center>
        </div>
      </div>
    )
  }
}
