import * as firebase from 'firebase';

export function addCategory(projectKey, data) {
    return function() {
        const categoriesRef = firebase.database().ref('projects').child(projectKey).child('categories');
        categoriesRef.push({
            title: data
        });
    }
}
export function addCategoryItem(projectKey, categoryKey, data) {
    return function() {
        // Create new ref and store item data
        const categoryItemsRef = firebase.database().ref('projects').child(projectKey).child('categoryItems');
        const categoryItemKey = categoryItemsRef.push().key;
        categoryItemsRef.child(categoryItemKey).set({
            title: data,
            key: categoryItemKey
        });
        // Store ref to category parent
        const categoryRefs = firebase.database().ref('projects').child(projectKey).child('categories').child(categoryKey).child("refs");
        categoryRefs.child(categoryItemKey).set({categoryItemKey});
    }
}
export function addItemOption(projectKey, data) {
    return function() {
        const itemOptionsRef = firebase.database().ref('projects').child(projectKey).child('itemOptions');
        itemOptionsRef.push({
            title: data
        });
    }
}
export function setProjectSettings(projectKey, data) {
    return function() {
        const projectSettingsRef = firebase.database().ref('projects').child(projectKey).child('projectSettings');
        projectSettingsRef.set({...data});
    }
}