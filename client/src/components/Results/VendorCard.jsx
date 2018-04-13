import React from 'react';
import Card, {CardContent, CardMedia} from 'material-ui/Card';
import Typography from 'material-ui/Typography';

const VendorCard = (props) => (
  <div>
    {props.points.map(obj =>
      (
        <Card key={obj._id}>
          <CardMedia
            image={obj.picture}
            title="Vendors information"
          />
          <CardContent>
            <Typography gutterBottom variant="headline" component="h2">
              {obj.name}
            </Typography>
            <Typography gutterBottom variant="headline" component="h2">
              {obj.category}
            </Typography>
            <Typography paragraph>
              {obj.review[0].body}
            </Typography>
            <Typography>
              expenses level {obj.expenses}
            </Typography>
          </CardContent>
        </Card>
      ))}
  </div>
);

export default VendorCard;
