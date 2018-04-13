import React, { Component } from 'react';
import VendorCard from '../components/Results/VendorCard';

export default class Results extends Component {
  state = {
      vendors: [],
  }

  componentDidMount() {
    this.setState({
      vendors: this.props.vendors
    });
  }

  componentWillUnmount() {
    this.setState({
      vendors: null,
    });
  }

  render() {
    const local = this.props.vendors;
    return (
      <div>
        <VendorCard points={local} />
      </div>
    );
  }
}
