import * as firebase from 'firebase';
import { push } from 'react-router-redux';

// Load All Projects
export function loginSuccess(data) {
    return {
        type: 'USER_DATA_SUCCESS',
        payload: data
    }
}

export function signOutSuccess(data) {
    return {
        type: 'USER_DATA_SUCCESS',
        payload: data
    }
}

export function updateUser(data) {

}

export function loginUser(email, password) {
    return function(dispatch) {
        firebase.auth().signInWithEmailAndPassword(email, password).then(function(success){
            dispatch(loginSuccess(success));
        }).catch(function(error) {
            //console.log('ERROR: ', error);
        });
    }
}

export function signOutUser() {
    return function(dispatch) {
        firebase.auth().signOut().then(function(success){
            dispatch(signOutSuccess(success));
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