import firebase from 'firebase';

const config = {
  apiKey: `${process.env.apiKey}`,
  authDomain: process.env.authDomain,
  databaseURL: 'https://tragon-8e6ce.firebaseio.com',
  storageBucket: process.env.storageBucket,
  messagingSenderId: process.env.messagingSenderId
};

firebase.initializeApp(config);

export const ref = firebase.database().ref();
export const firebaseAuth = firebase.auth;
export const provider = new firebase.auth.FacebookAuthProvider();
