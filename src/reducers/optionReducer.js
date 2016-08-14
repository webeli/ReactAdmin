export default function reducer(state={}, action) {
    switch(action.type) {
        case "CHANGE_OPTIONS": {
            state = {...state, name: action.payload};
            break;
        }
    }
    return state;
};