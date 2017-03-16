import React from 'react';
import ReactDOM from 'react-dom';
import firebase from 'firebase';
import App from './App';
import './index.css';

  firebase.initializeApp({
    apiKey: "AIzaSyB98jV5a7E3tNY5ooUXebFkGtZoo4Eu5kM",
    authDomain: "pseudogram-b3982.firebaseapp.com",
    databaseURL: "https://pseudogram-b3982.firebaseio.com",
    storageBucket: "pseudogram-b3982.appspot.com",
    messagingSenderId: "739251029720"
  });

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
