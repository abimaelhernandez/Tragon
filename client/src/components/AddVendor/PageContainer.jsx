import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import { vendorSchema } from '../../database/schema.js';
import { VendorPage } from './page';


export default class VendorPageContainer extends Component {
  constructor() {
    super();

    this.state = {
      vendor: {
        name: String,
        category: String,
        location: {
          type:{type:String},
          coordinates:[Number,Number]
        },
        picture: String,
        expenses: Number,
        review : [{
          body: String,
          ObjectId: String,
          }]
      }
    };

    this.onFieldValueChange = this.onFieldValueChange.bind(this);
    this.onSave = this.onSave.bind(this);
  }

onFieldValueChange => {
    const nextState = {
      this.state,
      vendor: {
      this.state.vendor,
        [fieldName]: value,
      }
    };

    this.setState(nextState);
  }



  render() {
    return (
      <MemberPage
        vendor={this.state.vendor}
        onChange={this.onFieldValueChange}
        onSave={this.onSave}
      />
    );
  }
}
