import React, {Component} from 'react';
import { Vendor } from '../../Pages/AddVendor';

export default class AddVendor extends Component => {
  return (
    <form>
      <h1>Manage member</h1>

      <Input
        name={props.vendor.name}
        category={props.vendor.category}
        location={props.vendor.location}
        value={props.vendor}
        onChange={props.onChange}
      />

      <Button
        label="Save"
        className="btn btn-default"
        onClick={props.onSave}
      />
    </form>
  );
};
