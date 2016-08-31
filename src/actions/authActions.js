import * as firebase from 'firebase';
import { push } from 'react-router-redux';

export function updateAuthData(data) {
    return {
        type: 'UPDATE_USER_DATA',
        payload: data
    }
}

export function loginUser(email, password) {
    return function(dispatch) {
        firebase.auth().signInWithEmailAndPassword(email, password).then(function(success){
            dispatch(updateAuthData(success));
        }).catch(function(error) {
            //console.log('ERROR: ', error);
        });
    }
}

export function signOutUser() {
    return function(dispatch) {
        firebase.auth().signOut().then(function(success){
            dispatch(updateAuthData(success));
        });
    }
}

export function onAuthStateChanged() {
    return function(dispatch) {
        firebase.auth().onAuthStateChanged(function(user) {
            if (user) {
                dispatch(push('/projects'));
            } else {
                dispatch(push('/login'));
            }
        });

    }
}