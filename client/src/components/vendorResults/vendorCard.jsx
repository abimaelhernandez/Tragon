import React, {Component} from 'react'
import ReactDOM  from 'react-dom'
import Card, { CardActions, CardContent, CardMedia } from 'material-ui/Card';
import { withStyles } from 'material-ui/styles';
import Typography from 'material-ui/Typography';
import MyGoogleMap from '../../components/Map/MapConfig.jsx'
import Paper from 'material-ui/Paper';
import Grid from 'material-ui/Grid';

const Styles = {
  card : {
    maxWith:40,
  },
};
////

export default class VendorCard extends Component{
   constructor(props){
     super(props)

   }
///////// need to display name , expences , reviews
   // const local = this.props.vendors =>  points={local}/>
////////
   render(){
     return(
     <div>
       {this.props.points.map(function(obj){
         return <Card className='card'>
                  <CardMedia
                    image={obj.picture}
                    title="Vendors information"
                    />
                  <CardContent>
                        <Typography gutterBottom variant='headline' component='h2'>
                          {obj.name}
                        </Typography>
                        <Typography  className='category' component='h2'>
                          {obj.category}
                        </Typography>
                        <Typography className='review'paragraph>
                          {obj.review[0].body}
                        </Typography>
                        <Typography className='expences'>
                          expenses level {obj.expenses}
                        </Typography>
                        <MyGoogleMap loc={obj.location} />
                    </CardContent>
                </Card>
       })}
     </div>
    )
  }
}
