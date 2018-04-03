import React from "react"
import {compose, withProps} from "recompose"
import {withScriptjs, withGoogleMap, GoogleMap, Marker} from "react-google-maps"

const MyGoogleMap = compose(
  withProps({
    googleMapURL:"https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places",
    loadingElement: <div style={{height: `75%`}} />,
    containerElement:<div style={{height: `750px`}}/>,
    mapElement:<div style={{height:`75%`}}/>,
  }),
  withScriptjs,
  withGoogleMap
)((props) =>
  <GoogleMap
    defaultZoom = {11}
    defaultCenter={{ lat:19.397925, lng:-99.171663}}
  >
  <Marker
    position={{lat: 19.397925, lng: -99.103199}}
    draggable={true}
    />
     {props.isMarkerShown && <Marker position={{ lat:19.397925, lng:-99.171663 }} />}
  </GoogleMap>
)

export default MyGoogleMap;
