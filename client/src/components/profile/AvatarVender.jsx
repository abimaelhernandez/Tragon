import React from 'react';
import Card, {CardActions, CardContent, CardMedia} from 'material-ui/Card';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography'
import {withStyles} from 'material-ui/styles';

const styles = {
  card: {
    maxWidth: 345,
  },
  media: {
    height: 200,
  },
};

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

export default withStyles(styles)(AvatarVender);
