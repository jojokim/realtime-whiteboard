import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

// import firebase package //
import * as firebase from 'firebase';
import firestore from "firebase/firestore";

// configure firebase //
var config = {
    apiKey: "AIzaSyDqbv9LVpjEuoFJHyCHAV2IIMOfhGTEqJ0",
    authDomain: "demofirebaseterps.firebaseapp.com",
    databaseURL: "https://demofirebaseterps.firebaseio.com",
    projectId: "demofirebaseterps",
    storageBucket: "",
    messagingSenderId: "179866760241"
  };
  
firebase.initializeApp(config);
firebase.firestore().enablePersistence();

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
