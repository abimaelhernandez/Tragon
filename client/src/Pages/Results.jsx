import React, { Component } from 'react'

export default class Results extends Component {
 state = {
   query: '',
 }

 handleInputChange = () => {
   this.setState({
     query: this.search.value
   })
 }

 getInfo = () => {
  axios.get(`${API_URL}?api_key=${API_KEY}&prefix=${this.state.query}&limit=7`)
    .then(({ data }) => {
      this.setState({
        results: data.data
      })
    })
}

 render() {
   return (
     <form>
       <input
         placeholder="Search for..."
         onChange={this.handleInputChange}
       />
       <p>{this.state.query}</p>
     </form>
   )
 }
}
