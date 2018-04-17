import React from 'react';
import Card, { CardContent, CardMedia } from 'material-ui/Card';
import Typography from 'material-ui/Typography';
import Paper from 'material-ui/Paper';
import Grid from 'material-ui/Grid';
import MyGoogleMap from '../../components/Map/MapConfig';

const VendorCard = (props) => (
 <div>
   {props.points.map((obj) => {
     return (
       <Card style={{backgroundColor: "rgba(253,247,255, 0.8)"}}className="card" key={obj._id}>
         <CardContent>
           <Grid container spacing={24}>
             <Grid item xs={8} sm={4}>
               <Paper className="name">
                 <Typography gutterBottom variant="headline" component="h2">
                   {obj.name}
                 </Typography>
               </Paper>
             </Grid>
             <Grid item xs={8} sm={4}>
               <Paper className="category">
                 <Typography gutterBottom variant="headline" component="h2">
                   {obj.category}
                 </Typography>
               </Paper>
             </Grid>
             <Grid item lg={4} sm={4}>
               <Paper className="review">
                 <Typography variant="body2" component="h2" >
                   {obj.review[0].body}
                 </Typography>
               </Paper>
             </Grid>
             <Grid item lg={4} sm={4}>
               <Paper className="expenses">
                 <Typography gutterBottom variant="body2"component="h2">
                   expenses level {obj.expenses}
                 </Typography>
               </Paper>
             </Grid>
             <Grid item xs={4} sm={3}>
               <Paper className="map">
                 <MyGoogleMap loc={obj.location} />
               </Paper>
             </Grid>
           </Grid>
         </CardContent>
       </Card>
     );
   })}
 </div>
);

export default VendorCard;
