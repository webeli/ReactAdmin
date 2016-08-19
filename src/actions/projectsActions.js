import * as firebase from 'firebase';

// Load All Projects
export function loadAllProjectsSuccess(projects) {
    return {
        type: 'GET_ALL_PROJECTS_DATA',
        payload: projects
    }
}
export function getAllProjects() {
    return function(dispatch) {
        const dbRef = firebase.database().ref();
        dbRef.on('value', (snap) => {
            const data = snap.val();
            console.log("getAllProjects:", data);
            dispatch(loadAllProjectsSuccess(data));
        });
    }
}