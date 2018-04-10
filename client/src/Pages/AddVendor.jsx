import React, {Component} from 'react';

export default class AddVendor extends Component {
  state = {
    name: '',
    tag: '',
    location: ''
  }

  addNewVendor = () => {
    axios.post()
  }

  render() {
    return(
      <div>
        Name: <input></input>
        location: <input></input>
        Price: <input></input>


      </div>
    )
  }
}
