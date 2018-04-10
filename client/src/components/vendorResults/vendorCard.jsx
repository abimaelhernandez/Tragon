import React, {Component} from 'react'
import ReactDOM  from 'react-dom'
import Card, { CardActions, CardContent, CardMedia } from 'material-ui/Card';
import { withStyles } from 'material-ui/styles';
import Typography from 'material-ui/Typography';

const Styles = {
  card : {
    maxWith:345,
  },
  media: {
    height:200,
  },
};
////
export default class VendorCard extends Component{
   constructor(){
     super()

   }
/////////

////////
   render(){
     return(
     <div>
       {props.points.map(function(obj){
         return
       })}
       <Card className>
         <CardMedia
           className
           image
           title="Vendors information"
           />
         <CardContent>
           <Typography gutterBottom variant ='headline' component='h2'>
             Vendor
           </Typography>
         </CardContent>

       </Card>
       <p>{console.log('hello World im heree yaaaaaa diggggggg')}</p>
     </div>
    )
  }
}
