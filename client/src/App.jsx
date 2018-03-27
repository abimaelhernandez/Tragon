import React from 'react';
import Mongo from './MongoTest';
//https://tragon-8e6ce.firebaseapp.com/__/auth/handler
const App = () => (
  <div>
    <Mongo />
    <div class="fb-login-button"
      data-width="50"
      data-max-rows="1"
      data-size="large"
      data-button-type="login_with"
      data-show-faces="false"
      data-auto-logout-link="false"
      data-use-continue-as="false">
    </div>
  </div>
)

export default App;
