import * as firebase from 'firebase';

export function loadProjectSuccess(project) {
    return {
        type: 'GET_PROJECT_DATA',
        payload: project
    }
}

export function getProjectByKey(key) {
    return function(dispatch) {
        const dbRef = firebase.database().ref(key);
        dbRef.on('value', (snap) => {
            const data = snap.val();
            dispatch(loadProjectSuccess(data));
        });
    }
}