import React, {Component} from 'react';
import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom';
import {firebaseAuth} from './components/auth/client.js'
import HeaderBar from './components/home/HeaderBar.jsx';
import Login from './components/auth/Login.jsx'
import HomeContainer from './Pages/HomeContainer.jsx';
import Profile from './Pages/Profile.jsx';
import AvatarVender from './components/profile/AvatarVender.jsx';

const AuthenticatedRoute = ({component: Component, authenticated, ...rest}) => {
  return (
    <Route
      {...rest}
      render={(props) => authenticated === true
          ? <Component {...props} {...rest} />
          : <Redirect to={{pathname: '/login'}} /> } />
  )
}
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
      } else {
        this.setState({
          isAuthenticated: false,
          user: undefined
        })
      }
    });
  }
  logout = (e) => {
    e.preventDefault();
    firebaseAuth().signOut().then(() => {
      this.setState({
        isAuthenticated: false,
        user: undefined
      })
    });
  }
  render() {
    return (
      <BrowserRouter>
        <div>
          <HeaderBar authenticated={this.state.isAuthenticated} logout={this.logout} />
          <main id="main-content">
            <Switch>
              <Route exact path="/login" component={Login} />
              <AuthenticatedRoute authenticated={this.state.isAuthenticated} path="/user" component={Profile} />
              <AuthenticatedRoute authenticated={this.state.isAuthenticated} path="/vendor" component={AvatarVender} />
              <Route path="/" render={(props) => <HomeContainer {...props} /> } />
            </Switch>
          </main>
        </div>
      </BrowserRouter>
    )
  }
}
