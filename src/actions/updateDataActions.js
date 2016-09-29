import * as firebase from 'firebase';

export function addCategory(projectKey, title) {
    return function() {
        const categoriesRef = firebase.database().ref('projects').child(projectKey).child('categories');
        categoriesRef.push({
            title: "New category"
        });
    }
}
export function addCategoryItem(projectKey, title) {
    return function() {
        const itemOptionsRef = firebase.database().ref('projects').child(projectKey).child('itemOptions');
        itemOptionsRef.push({
            title: "New category"
        });
    }
}
export function addItemOption(projectKey, title) {
    return function() {
        const itemOptionsRef = firebase.database().ref('projects').child(projectKey).child('itemOptions');
        itemOptionsRef.push({
            title: "New category"
        });
    }
}
export function setProjectSettings(projectKey, data) {
    return function() {
        const projectSettingsRef = firebase.database().ref('projects').child(projectKey).child('projectSettings');
        projectSettingsRef.set({...data});
    }
}