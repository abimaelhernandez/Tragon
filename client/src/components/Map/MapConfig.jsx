import React from "react"
import {compose, withProps} from "recompose";
import {GOOGLE_API} from '../../../../env.js';
import {withScriptjs, withGoogleMap, GoogleMap, Marker,Infowindow} from "react-google-maps";

const MyGoogleMap = compose(
  withProps({
    googleMapURL:`https://maps.googleapis.com/maps/api/js?key=${GOOGLE_API}&callback=initMap`,
    loadingElement: <div style={{height: `25%`}} />,
  containerElement:<div style={{height: `200px`}}/>,
mapElement:<div style={{height:`50%`}}/>,
  }),
  withScriptjs,
  withGoogleMap
)((props) =>
  <GoogleMap
    defaultZoom = {11}
    defaultCenter={{ lat:19.397925, lng:-99.171663}}
  >
  {console.log('THIS IS THE GOOGLE MAP COMP!!', props.loc)}
     <Marker
            position={{lat:props.loc.coordinates[0],
                       lng:props.loc.coordinates[1]}}
            />
</GoogleMap>
)

export default MyGoogleMap;
//resize to fit with the result page with vendor card
