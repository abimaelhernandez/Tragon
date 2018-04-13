import React from 'react';
import Card from 'material-ui/Card';
import Avatar from 'material-ui/Avatar';
import Favorites from './Favorites';
import UserName from './UserName';

const style = {
  width: 160,
  height: 160,
};

const ProfilePage = ({name, picture}) => (
  <div>
    {console.log({name, picture})}
    <div>
      <Card className='ProfileCard' style={{backgroundColor: "rgba(253,247,255, 0.8)"}}>
        <UserName name={name} />
        <Avatar id='UserAvatar' style={style} alt="User Picture" src="css/KjLaEtNu.jpeg" className='Picture' />
      </Card>
    </div>
    <div>
      <Favorites />
    </div>
  </div>
);


export default ProfilePage;
