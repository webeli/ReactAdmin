import * as firebase from 'firebase';

export function addCategory(projectKey) {
    return function() {
        const categoriesRef = firebase.database().ref('projects').child(projectKey).child('categories');
        categoriesRef.push({
            title: "New category"
        });
    }
}

export function addCategoryItem(projectKey) {
    return function() {
        const itemOptionsRef = firebase.database().ref('projects').child(projectKey).child('itemOptions');
        itemOptionsRef.push({
            title: "New category"
        });
    }
}