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
        {console.log(this.props)}
        `HELLO YOU'VE REACHED THE RESULTS PAGE`
      </div>
    )
  }
}
