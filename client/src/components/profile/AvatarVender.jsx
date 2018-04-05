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
  <div>
    <Card>
      <CardMedia>
        <img src={`${props.picture}`} alt="" />
      </CardMedia>
      <CardContent>
        <Typography gutterBottom variant="headline" component="h2">
          Vendor Goes here
        </Typography>
        <Typography component="p">
          Showing the vender info here
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" label="Action1" />
        <Button size="small" label="Action2" />
      </CardActions>
    </Card>
  </div>
);

export default withStyles(styles)(AvatarVender);
