export default function reducer(state={}, action) {
    switch(action.type) {
        case "USER_DATA_SUCCESS": {
            state = {...state, ...action.payload};
            return state;
        }
        default:
            return state;
    }
};