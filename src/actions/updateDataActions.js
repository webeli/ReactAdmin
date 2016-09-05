import * as firebase from 'firebase';

export function addCategory(projectKey) {
    return function() {
        const ref = firebase.database().ref(projectKey).child('categories');
        ref.push({
            title: "New category"
        });
    }
}

export function addItemOption(projectKey) {
    return function() {
        const itemOptionsRef = firebase.database().ref(projectKey).child('itemOptions');
        itemOptionsRef.push({
            title: "New category"
        });
    }
}