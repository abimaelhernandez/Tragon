import * as React from 'react';
import { Link } from 'react-router-dom';
import { vendorSchema } from '../../database/schema.js';
import { VendorPage } from './page';

interface State {
  vendor: VendorEntity;
}

export class VendorPageContainer extends React.Component<{}, State> {
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

  private onFieldValueChange(fieldName: string, value: string) {
    const nextState = {
      ...this.state,
      vendor: {
        ...this.state.member,
        [fieldName]: value,
      }
    };

    this.setState(nextState);
  }



  render() {
    return (
      <MemberPage
        member={this.state.member}
        onChange={this.onFieldValueChange}
        onSave={this.onSave}
      />
    );
  }
}
