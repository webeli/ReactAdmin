import * as firebase from 'firebase';

// Load Option List
export function getOptionListSuccess(data) {
    return {
        type: 'GET_OPTION_LIST',
        payload: data
    }
}

export function getOptionListByKey(projectKey, itemKey) {
    return function(dispatch) {
        let optionListRefs = firebase.database().ref(projectKey).child('categoryItems').child(itemKey).child('refs');
        let optionsRef = firebase.database().ref(projectKey).child('itemOptions');
        let optionData = null;
        optionListRefs.once('value', (snap) => {
            optionData = [];
            Object.keys(snap.val()).map(key => {
                optionsRef.child(key).on('value', (snaps) => {
                    optionData.push({key:key,...snaps.val()});
                })
            });
            dispatch(getOptionListSuccess(optionData));
        });
    }
}