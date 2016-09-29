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
        const projectRef = firebase.database().ref('projects').child(key);
        projectRef.on('value', (snap) => {
            const value = snap.val();
            const key = snap.key;
            const data = {...value,projectKey:key};
            dispatch(loadProjectSuccess(data));
        });
    }
}

