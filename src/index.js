import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import * as firebase from 'firebase';

// Initialize Firebase
var config = {
apiKey: "AIzaSyD5B_DssWCtBgWn_2-Cy0LhTZGeErAYAJE",
authDomain: "100meter.firebaseapp.com",
databaseURL: "https://100meter.firebaseio.com",
storageBucket: "project-8799195801841300390.appspot.com",
};
firebase.initializeApp(config);

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
