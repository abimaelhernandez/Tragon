import firebase from 'firebase';
import {AUTH_CONFIG} from '../../../env.js'

const config = {
  apiKey:`${AUTH_CONFIG.apiKey}`,
  authDomain: `${AUTH_CONFIG.authDomain}`,
  databaseURL: `${AUTH_CONFIG.databaseURL}`,
  storageBucket: `${AUTH_CONFIG.storageBucket}`,
  messagingSenderId: `${AUTH_CONFIG.messagingSenderId}`
};

firebase.initializeApp(config);

export const ref = firebase.database().ref();
export const auth = firebase.auth;
export const provider = new firebase.auth.FacebookAuthProvider();
