
import React, {Component} from 'react';





export default class VendorPage extends Component {
  return (
    <VendorForm
      vendor={props.vendor}
      onChange={props.onChange}
      onSave={props.onSave}
    />
  );
}
