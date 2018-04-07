
import React, {Component} from 'react';


interface Props {
  vendor: VendorEntity;
  onChange: (fieldName: string, value: string) => void;
  onSave: () => void;
}


export default class VendorPage extends Component {
  return (
    <VendorForm
      vendor={props.vendor}
      onChange={props.onChange}
      onSave={props.onSave}
    />
  );
}
