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
        <div>
          {console.log("Load Results")}
          "Please show up"
        </div>
      </div>
    )
  }
}
