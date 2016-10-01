import * as firebase from 'firebase';

export function addProject(data) {
    return function() {
        const projectsRef = firebase.database().ref('projects');
        projectsRef.push({
            projectSettings: {
                projectName: data
            }
        });
    }
}
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
        // Store item ref to category parent refs
        const categoryRefs = firebase.database().ref('projects').child(projectKey).child('categories').child(categoryKey).child("refs");
        categoryRefs.child(categoryItemKey).set(categoryItemKey);
    }
}
export function addItemOption(projectKey, itemKey, data) {
    return function() {
        // Create new ref and store option data
        const itemOptionsRef = firebase.database().ref('projects').child(projectKey).child('itemOptions');
        const itemOptionsKey = itemOptionsRef.push().key;
        itemOptionsRef.child(itemOptionsKey).set({
            active: data.active,
            attribute: data.attribute,
            default: data.default,
            desc: data.desc,
            image: data.image,
            price: Number(data.price),
            title: data.title,
            key: itemOptionsKey
        });
        // Store option ref to item parent refs
        const itemRefs = firebase.database().ref('projects').child(projectKey).child('categoryItems').child(itemKey).child("refs");
        itemRefs.child(itemOptionsKey).set(itemOptionsKey)
    }
}
export function setItemOption(projectKey, optionKey, data) {
    return function() {
        // Create new ref and store option data
        const itemOptionRef = firebase.database().ref('projects').child(projectKey).child('itemOptions').child(optionKey);
        itemOptionRef.set({
            active: data.active,
            attribute: data.attribute,
            default: data.default,
            desc: data.desc,
            image: data.image,
            price: Number(data.price),
            title: data.title,
            key: optionKey
        });
    }
}
export function setProjectSettings(projectKey, data) {
    return function() {
        const projectSettingsRef = firebase.database().ref('projects').child(projectKey).child('projectSettings');
        projectSettingsRef.set({...data});
    }
}