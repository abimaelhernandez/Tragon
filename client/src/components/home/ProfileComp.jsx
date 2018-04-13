import React from 'react';
import Avatar from 'material-ui/Avatar';
import UserName from './UserName.jsx';
import Card, { CardContent, CardMedia } from 'material-ui/Card';
import Favorites from './Favorites.jsx'

const style = {
    width: 160,
    height: 160,
}

const styles = {
   width: 151,
   height: 151,
}


const ProfilePage = (props) => (
  <div>
  <div>
    <Card className='ProfileCard' style={{backgroundColor: "rgba(253,247,255, 0.8)"}}>
    <UserName  />
    <Avatar id='UserAvatar' style={style} alt='Avatar' src='../css/profilepic.jpg' className='Picture' />
   </Card>
 </div>
 <div>
   <Favorites />
  </div>
</div>
)


export default ProfilePage;
