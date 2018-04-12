import React from "react"
import {compose, withProps} from "recompose";
import {GOOGLE_API} from '../../../../env.js';
import {withScriptjs, withGoogleMap, GoogleMap, Marker,Infowindow} from "react-google-maps";

const googleMapKey = `https://maps.googleapis.com/maps/api/js?key=${process.env.GOOGLE_API}`;

const MyGoogleMap = compose(
  withProps({
    googleMapURL: {googleMapKey},
    loadingElement: <div style={{ height: `75%` }} />,
    containerElement: <div style={{ height: `450px` }} />,
    mapElement: <div style={{ height: `50%` }} />
  }),
  withScriptjs,
  withGoogleMap
)(props =>
  (<GoogleMap
    defaultZoom={11}
    defaultCenter={{ lat: 19.397925, lng: -99.171663 }}
  >
    {props.points.map(obj => (<Marker
      position={{
        lat: obj.location.coordinates[0],
        lng: obj.location.coordinates[1]
      }}
      key={obj._id}
    />))}
   </GoogleMap>));

export default MyGoogleMap;
// resize to fit with the result page with vendor card
