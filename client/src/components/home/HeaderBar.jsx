import React from 'react';
import AppBar from 'material-ui/AppBar';
import Button from 'material-ui/Button';
import Toolbar from 'material-ui/Toolbar';


  const HeaderBar = (props) => (
    <div>
      <AppBar id='appBar'>
          <Toolbar>
            <Button id='tabButtonHome' color="inherit">Home</Button>
            <Button id='profilePage' label="profile" color="inherit">Profile</Button>
            <div className='Log'><Button id='Login' label="Userlogin" color="inherit">Log in</Button></div>
          </Toolbar>
      </AppBar>
    </div>
  );

  export default HeaderBar;
