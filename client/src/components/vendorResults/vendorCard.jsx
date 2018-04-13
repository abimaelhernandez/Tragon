import React, {Component} from 'react'
import ReactDOM  from 'react-dom'
import MyGoogleMap from '../../components/Map/MapConfig.jsx'
import Card, { CardActions, CardContent, CardMedia } from 'material-ui/Card';
import Typography from 'material-ui/Typography';
import { withStyles } from 'material-ui/styles';
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
                    <Grid container spacing ={24}>
                      <Grid item xs={8} sm={4}>
                        <Paper className={'name'}>
                          <Typography gutterBottom variant='headline' component='h2'>
                            {obj.name}
                          </Typography>
                        </Paper>
                      </Grid>
                      <Grid item xs={8} sm={4}>
                        <Paper className={'category'}>
                          <Typography gutterBottom variant='headline' component='h2'>
                            {obj.category}
                          </Typography>
                        </Paper>
                      </Grid>
                      <Grid item xs={8} sm={4}>
                        <Paper className={'review'}>
                          <Typography  variant='body 2' component='h2' >
                            {obj.review[0].body}
                          </Typography>
                        </Paper>
                      </Grid>
                      <Grid item xs={8} sm={4}>
                        <Paper className='expences'>
                          <Typography gutterBottom component='h2'>
                            expenses level {obj.expenses}
                          </Typography>
                        </Paper>
                      </Grid>
                      <Grid item xs={4} sm={3}>
                          <Paper className='map'>
                              <MyGoogleMap loc={obj.location} />
                          </Paper>
                      </Grid>
                    </Grid>
                    </CardContent>
                </Card>
       })}
     </div>
    )
  }
}
