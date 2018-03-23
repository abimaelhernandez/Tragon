import React from 'react';
import AppBar from 'material-ui/AppBar';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';


const HeaderBar = (props) => (
  <div>
    <AppBar title='Tragón!'>
      <DropDownMenu>
        <MenuItem primaryText="Home"/>
        <MenuItem primaryText="Map View"/>
      </DropDownMenu>
    </AppBar>
  </div>
);

export default HeaderBar;
