import React from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/Button';

const AvatarVender = (props) => (
  <Card>
    <CardHeader
      title="URL Avatar"
      subtitle="Subtitle"
      avatar=""
    />
    <CardMedia
      overlay={<CardTitle title="Overlay title" subtitle="Overlay subtitle" />}
    >
    <img src={`${this.props.picture}`} alt="" />
    </CardMedia>
    <CardTitle title="Card title" subtitle="Card subtitle" />
    <CardText>
      Showing the vender info here
    </CardText>
    <CardActions>
      <Button label="Action1" />
      <Button label="Action2" />
    </CardActions>
  </Card>
);

export default AvatarVender;
