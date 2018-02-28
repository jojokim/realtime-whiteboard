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
   // fetch from firebase //

};
firebase.initializeApp(config);
firebase.firestore().enablePersistence();

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
