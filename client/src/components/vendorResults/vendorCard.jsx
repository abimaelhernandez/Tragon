import React, {Component} from 'react'
import ReactDOM  from 'react-dom'
import Card, { CardActions, CardContent, CardMedia } from 'material-ui/Card';
import { withStyles } from 'material-ui/styles';
import Typography from 'material-ui/Typography';
import MyGoogleMap from '../../components/Map/MapConfig.jsx'

const Styles = {
  card : {
    maxWith:40,
  },
  media: {
    height:100,
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
     console.log(this.props)
     return(
     <div>
       {this.props.points.map(function(obj){
         return <Card>
                  <CardMedia
                    image={obj.picture}
                    title="Vendors information"
                    key={obj._id}
                    />
                    <CardContent>
                      <Typography gutterBottom variant ='headline' component='h2'>
                        {obj.name}
                      </Typography>
                        <Typography  gutterBottom variant ='headline' component='h2'>
                          {obj.category}
                        </Typography>
                          <Typography paragraph>
                           {obj.review[0].body}
                          </Typography>
                            <Typography>
                              expenses level {obj.expenses}
                            </Typography>
                            <MyGoogleMap loc={obj.location} />
                    </CardContent>
                </Card>
       })}

       <p>{console.log('hello World im heree yaaaaaa diggggggg')}</p>
     </div>
    )
  }
}
