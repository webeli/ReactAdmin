/* eslint-disable */
import * as firebase from 'firebase';

export function getOptionListSuccess(data) {
    return {
        type: 'GET_OPTION_LIST',
        payload: data
    }
}

export function getOptionListByKey(projectKey, itemKey) {
    return function(dispatch) {
        const optionListRefs = firebase.database().ref(projectKey).child('categoryItems').child(itemKey).child('refs');
        optionListRefs.on('value', (snap) => {
            dispatch(getOptionListSuccess(snap.val()));
        });
    }
}