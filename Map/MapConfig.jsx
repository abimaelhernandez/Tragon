import React from "react"
import ReactDom from "react-dom"
import {withScriptjs, withGoogleMap, GoogleMap, Marker} from "react-google-maps"

const elGoogleMap = withScriptjs(withGoogleMap((props) =>
  <GoogleMap
    defaultZoom = {8}
    defaultCenter={{ lat:19.397925, lng:-99.171663}}
  >
    {props.isMarkerShown && <Marker position={{ lat:19.397925, lng:-99.171663 }} />}
  </GoogleMap>
))

<elGoogleMap isMarkerShown/>
<elGoogleMap isMarkerShown={false}/>
