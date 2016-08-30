export default function reducer(state={}, action) {
    switch(action.type) {
        case "LOGIN_SUCCESS": {
            state = {...state, ...action.payload};
            return state;
        }
        case "STATE_CHANGED": {
            state = {...state, stateChanged:action.payload};
        }
        default:
            return state;
    }
};