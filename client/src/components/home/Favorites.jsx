import React from 'react';
import Card, { CardContent, CardMedia } from 'material-ui/Card';
import Typography from 'material-ui/Typography';
import RatingStars from './RatingComp.jsx';

const style ={
    width: 151,
    height: 151,

}

const Favorites = () =>  (
  <div>
  <div>
       <Card className='Fav' style={{backgroundColor: "rgba(253,247,255, 0.8)"}} >
         <CardMedia  className='puesto1'
          image="../../../css/puesto3.jpg"
           title="carnitas"
           style={style}
           />

         <CardContent className='Favtext'>
            <Typography variant="headline">La Roma</Typography>
            <Typography variant="subheading" color="textSecondary">
            Carnitas
            <p>Great service & food is just delicious! If you ever have a chance while visiting Mexico, city you must stop by.</p>
            </Typography>
          </CardContent>
       </Card>
     </div>
     <div>
          <Card className='Fav' style={{backgroundColor: "rgba(253,247,255, 0.8)"}} >
            <CardMedia  className='puesto2'
             image="../../../css/puesto2.jpg"
              title="Tacos"
              style={style}
              />

            <CardContent className='Favtext'>
               <Typography variant="headline">Col del Valle</Typography>
               <Typography variant="subheading" color="textSecondary">
               Tacos
               <p>The food is so good! Tacos de gisado Mmmmm...s.</p>
               </Typography>
             </CardContent>
          </Card>
        </div>
        <div>
             <Card className='Fav' style={{backgroundColor: "rgba(253,247,255, 0.8)"}} >
               <CardMedia  className='puesto3'
                image="../../../css/puesto4.jpeg"
                 title="carnitas"
                 style={style}
                 />

               <CardContent className='Favtext'>
                  <Typography variant="headline">La Roma</Typography>
                  <Typography variant="subheading" color="textSecondary">
                  Tortas
                  <p>Never had a torta that was so delicious, will defenetly come back.</p>
                  </Typography>
                </CardContent>
             </Card>

           </div>
      </div>
    );
export default Favorites;
