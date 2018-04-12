import React, {Component} from 'react';
import MyGoogleMap from './MapConfig.jsx'

export default class MapResult extends Component {
  state = {
    isMarkerShown: true
  }

  componentDidMount(){
    this.delayedShowMarker()
  }

  delayedShowMarker = () => {
    setTimeout(()=>{
      this.setState({isMarkerShown: true })
    }, 1000)
  }

  handleMarker = () => {
    this.setState({isMarkerShown: false })
    this.delayedShowMarker()
  }

  render(){
    return (
      <MyGoogleMap
        isMarkerShown={this.state.isMarkerShown}
        onMarkerClick={this.handleMarkerClick}
      />
    )
  }
}
