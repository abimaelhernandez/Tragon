import React from 'react';
import {Link} from 'react-router-dom';

import AppBar from 'material-ui/AppBar';
import Button from 'material-ui/Button';
import Toolbar from 'material-ui/Toolbar';

const HeaderBar = ({authenticated}) => (
  <AppBar id='appBar'>
      <Toolbar>
        <Link to="/"><Button id='tabButtonHome' color="inherit">Home</Button></Link>
        <Link to="user"><Button id='AvatarVender' label="profile" color="inherit">Profile</Button></Link>
        <Link to="vendor"><Button id='AvatarVender' label="add-vendor" color="inherit">Add A New Vendor</Button></Link>
        <Link to="login"><div className='Log'><Button id='Log-in' label="log-in" color="inherit">Login</Button></div></Link>
      </Toolbar>
  </AppBar>
);

  export default HeaderBar;
