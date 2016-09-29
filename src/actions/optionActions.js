/* eslint-disable */
import * as firebase from 'firebase';

export function getOptionListSuccess(data) {
    return {
        type: 'GET_OPTION_LIST',
        payload: {...data}
    }
}

export function clearOptionListSuccess(data) {
    return {
        type: 'GET_OPTION_LIST',
        payload: {data}
    }
}

export function getOptionListByKey(projectKey, itemKey, itemTitle) {
    return function(dispatch) {
        const optionListRefs = firebase.database().ref('projects').child(projectKey).child('categoryItems').child(itemKey).child('refs');
        optionListRefs.on('value', (snap) => {
            dispatch(getOptionListSuccess({data:{...snap.val()}, itemTitle:itemTitle, selected:true, itemKey:itemKey}));
        });
    }
}

export function clearOptionList() {
    return function(dispatch) {
        dispatch(clearOptionListSuccess({}));
    }
}