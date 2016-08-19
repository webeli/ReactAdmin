import * as firebase from 'firebase';

// Load Individual Project
export function loadProjectSuccess(project) {
    return {
        type: 'GET_PROJECT_DATA',
        payload: project
    }
}

export function getProjectByKey(key) {
    return function(dispatch) {
        const projectRef = firebase.database().ref(key);
        projectRef.on('value', (snap) => {
            const data = snap.val();
            dispatch(loadProjectSuccess(data));
        });
    }
}

