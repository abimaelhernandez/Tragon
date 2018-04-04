import React from 'react';
import {Link} from 'react-router-dom';

import AppBar from 'material-ui/AppBar';
import Button from 'material-ui/Button';
import Toolbar from 'material-ui/Toolbar';


  const HeaderBar = () => (
      <AppBar id='appBar'>
          <Toolbar>
            <Link to="/"><Button id='tabButtonHome' color="white">Home</Button></Link>
            <Link to="/user/:id"><Button id='AvatarVender' label="profile" color="white">Profile</Button></Link>
            <Link to="/vendor"><Button id='AvatarVender' label="profile" color="white">Profile</Button></Link>
            <div className='Log'><Button id='Login' label="Userlogin" color="inherit">Log in</Button></div>
          </Toolbar>
      </AppBar>
  );

  export default HeaderBar;
