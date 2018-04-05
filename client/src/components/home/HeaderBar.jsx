import React from 'react';
import {Link} from 'react-router-dom';

import AppBar from 'material-ui/AppBar';
import Button from 'material-ui/Button';
import Toolbar from 'material-ui/Toolbar';

const HeaderBar = () => (
    <AppBar id='appBar'>
        <Toolbar>
          <Link to="/"><Button id='tabButtonHome' color="inherit">Home</Button></Link>
          <Link to="user"><Button id='AvatarVender' label="profile" color="inherit">Profile</Button></Link>
          <Link to="vendor"><Button id='AvatarVender' label="profile" color="inherit">AddVendor</Button></Link>
          <div className='Log'><Button id='Login' label="Userlogin" color="inherit">Log in</Button></div>
        </Toolbar>
    </AppBar>
);

  export default HeaderBar;
