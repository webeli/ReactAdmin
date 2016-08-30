import * as firebase from 'firebase';

// Load All Projects
export function loginSuccess(data) {
    return {
        type: 'LOGIN_SUCCESS',
        payload: data
    }
}

export function loginUser(email, password) {
    return function(dispatch) {
        firebase.auth().signInWithEmailAndPassword(email, password).then(function(success){
            console.log('SUCCESS: ', success);
            dispatch(loginSuccess(success));
        }).catch(function(error) {
            console.log('ERROR: ', error);
        });
    }
}

export function stateChangedSuccess(data) {
    return {
        type: 'STATE_CHANGED',
        payload: data
    }
}

export function onAuthStateChanged() {
    return function(dispatch) {
        firebase.auth().onAuthStateChanged().then(function(success){
            console.log("onAuthStateChangeSuccess", success);
            dispatch(stateChangedSuccess(success));
        }).catch(function(error) {
            console.log("onAuthStateChangeError", error);
        });
    }
}
export function checkAuth() {
    return {
        type: 'GET_AUTH',
        payload: firebase.User
    }
}