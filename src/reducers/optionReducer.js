export default function reducer(state={}, action) {
    switch(action.type) {
        case "GET_OPTION_LIST": {
            state = {}; // TODO Seems to mutate state in the spread operator? Use this hack for now...
            state = {...state, ...action.payload};
            return state;
        }
        default:
            return state;
    }
};