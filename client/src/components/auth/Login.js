import firebase from 'firebase';
import {ref, firebaseAuth, provider} from './client.js'
import React, {Component} from 'react';

export default class FBLogin extends Component {

  componentDidMount() {
    window.fbAsyncInit = function() {
      window.FB.init({
        appId: '163273487712660',
        cookie: true,
        xfbml: true,
        version: 'v2.12'
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
}

  handleFacebook = (e) => {
    e.preventDefault();
    firebaseAuth().signInWithPopup(provider)
    .then((result) => {
      const token = result.credential.accessToken;
      const user = result.user;
      console.log(`${user} is signed in`)
    })
    .catch((error) => {
      console.error(error);
    });
  }

  checkLoginState = () => {
    FB.getLoginStatus(function(response) {
      statusChangeCallback(response);
    });
  }

  logout = () => {
    return firebaseAuth().signOut();
  }

  saveUser = (user) => {
    return ref.child(`users/${user.uid}`)
      .set(user)
      .then(() => user);
  }

  render() {
    return (
      <div className="fb-login-button"
      data-width="175" data-max-rows="1"
      data-size="large" data-button-type="continue_with"
      data-show-faces="false"
      data-auto-logout-link="false"
      data-use-continue-as="true"
      onClick={this.handleFacebook}>
      </div>
    );
  }
}
