import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import './styles/index.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import store from './store';
import { Provider } from 'react-redux';
import * as firebase from 'firebase';
import * as authActions from './actions/authActions';

// Initialize Firebase
var config = {
    apiKey: "AIzaSyD5B_DssWCtBgWn_2-Cy0LhTZGeErAYAJE",
    authDomain: "100meter.firebaseapp.com",
    databaseURL: "https://100meter.firebaseio.com",
    storageBucket: "project-8799195801841300390.appspot.com",
};
firebase.initializeApp(config);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);

store.dispatch(authActions.onAuthStateChanged());