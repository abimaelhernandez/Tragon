import {ref, firebaseAuth, provider} from './client.js'
import React, {Component} from 'react';

export default class FBLogin extends Component {

  componentDidMount() {
    checkLoginState()

    window.fbAsyncInit = function() {
      window.FB.init({
        appId: '163273487712660',
        cookie: true,
        xfbml: true,
        version: 'v2.6'
      });

    window.FB.Event.subscribe('auth.statusChange', (response) => {
      if (response.authResponse) {
        this.updateLoggedOutState()
      }
    })

    (function(d, s, id) {
      var js, fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) {
        return;
      }
      js = d.createElement(s);
      js.id = id;
      js.src = "https://connect.facebook.net/en_US/sdk.js";
      fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));
  }

  checkLoginState = () => {
    FB.getLoginStatus(function(response) {
      statusChangeCallback(response);
    });
  }

  auth = () => {
    return firebaseAuth().signInWithPopup(provider)
  }

  logout = () => {
    return firebaseAuth().signOut();
  }

  saveUser = (user) => {
    return ref.child(`users/${user.uid}`)
      .set(user)
      .then(() => user);
  }

  render(){
    (function(d, s, id) {
      var js, fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) return;
      js = d.createElement(s); js.id = id;
      js.src = 'https://connect.facebook.net/en_US/sdk.js#xfbml=1&autoLogAppEvents=1&version=v2.12&appId=163273487712660';
      fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));
    return(
      <div>
      <div id="fb-root"></div>
      <div className="fb-login-button"
      data-width="175" data-max-rows="1"
      data-size="large" data-button-type="continue_with"
      data-show-faces="false"
      data-auto-logout-link="false"
      data-use-continue-as="true"
      onClick={this.auth}>
      </div>
      </div>
    )
  }
}
