import React from "react"
import ReactDOM from "react-dom"
import {compose, withProps} from "recompose"
import {withScriptjs, withGoogleMap, GoogleMap, Marker} from "react-google-maps"

<<<<<<< HEAD
 const MyGoogleMap = compose(
  withProps({
    googleMapURL:"https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places",
    loadingElement: <div style={{height: `100%`}} />,
  containerElement:<div style={{height: `1000px`}}/>,
mapElement:<div style={{height:`100%`}}/>,
=======
const MyGoogleMap = compose(
  withProps({
    googleMapURL:"https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places",
    loadingElement: <div style={{height: `100%`}} />,
  containerElement:<div style={{height: `999px`}}/>,
    mapElement:<div style={{height:`100%`}}/>,
>>>>>>> master
  }),
  withScriptjs,
  withGoogleMap
)((props) =>
  <GoogleMap
    defaultZoom = {8}
    defaultCenter={{ lat:19.397925, lng:-99.171663}}
  >
     {props.isMarkerShown && <Marker position={{ lat:19.397925, lng:-99.171663 }} />}
  </GoogleMap>
)

  class MyFancyComponent extends React.Component{
   state = {
<<<<<<< HEAD
     isMarkerShown: true,
=======
     isMarkerShown: false,
>>>>>>> master
   }
    componentDidMount(){
      this.delayedShowMarker()
    }

    delayedShowMarker = () => {
      setTimeout(()=>{
        this.setState({isMarkerShown: true })
      }, 3000)
    }

    handleMarker = () => {
      this.setState({isMarkerShown: false })
      this.delayedShowMarker()
    }

<<<<<<< HEAD


=======
>>>>>>> master
    render(){
      return (
        <MyGoogleMap
          isMarkerShown={this.state.isMarkerShown}
          onMarkerClick={this.handleMarkerClick}
        />
      )
    }
  }

export default MyGoogleMap;
