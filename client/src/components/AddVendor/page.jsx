
import * as React from 'react';


interface Props {
  vendor: VendorEntity;
  onChange: (fieldName: string, value: string) => void;
  onSave: () => void;
}

export const VendorPage: React.StatelessComponent<Props> = (props) => {
  return (
    <VendorForm
      vendor={props.vendor}
      onChange={props.onChange}
      onSave={props.onSave}
    />
  );
}
