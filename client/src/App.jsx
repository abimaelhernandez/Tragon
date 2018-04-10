import React, {Component} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {firebaseAuth} from './components/auth/client.js'

import HeaderBar from './components/home/HeaderBar.jsx';
import Login from './components/auth/Login.jsx'
import HomeContainer from './Pages/HomeContainer.jsx';
import Profile from './Pages/Profile.jsx';
import AvatarVender from './components/profile/AvatarVender.jsx';

export default class App extends Component {
  state = {
    isAuthenticated: false,
    user: undefined
  }

  componentDidMount(){
    this.removeAuthListener = firebaseAuth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({
          isAuthenticated: true,
          user: user
        });
        console.log(user)
      }
    });
  }

  render() {
    return (
      <BrowserRouter>
        <div>
          <HeaderBar authenticated={this.state.isAuthenticated} />
          <main id="main-content">
            <Switch>
              <Route exact path="/login" component={Login} />
              <Route path="/user" component={Profile} />
              <Route path="/vendor" component={AvatarVender} />
              <Route path="/" render={(props) => <HomeContainer {...props} /> } />
            </Switch>
          </main>
        </div>
      </BrowserRouter>
    )
  }
}
