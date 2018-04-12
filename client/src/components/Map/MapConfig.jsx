import React from "react"
import {compose, withProps} from "recompose";
import {GOOGLE_API} from '../../../../env.js';
import {withScriptjs, withGoogleMap, GoogleMap, Marker,Infowindow} from "react-google-maps";

const MyGoogleMap = compose(
  withProps({
    googleMapURL:`https://maps.googleapis.com/maps/api/js?key=${GOOGLE_API}&callback=initMap`,
    loadingElement: <div style={{height: `75%`}} />,
    containerElement:<div style={{height: `450px`}}/>,
    mapElement:<div style={{height:`50%`}}/>,
  }),
  withScriptjs,
  withGoogleMap
)((props) =>
  <GoogleMap
    defaultZoom = {11}
    defaultCenter={{ lat:19.397925, lng:-99.171663}}
  >
  {console.log(props.points)}
  {props.points.map(function(obj){
    return <Marker
            position={{lat:obj.location.coordinates[0],
                       lng:obj.location.coordinates[1]}}
            key={obj._id}
            />
  })}
</GoogleMap>
)

export default MyGoogleMap;
//resize to fit with the result page with vendor card
