export default function reducer(state={}, action) {
    switch(action.type) {
        case "CHANGE_PROJECT": {
            state = {...state, name: action.payload};
            return state;
        }
        default:
            return state;
    }
};