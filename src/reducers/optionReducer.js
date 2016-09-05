export default function reducer(state={}, action) {
    switch(action.type) {
        case "GET_OPTION_LIST": {
            state = {...action.payload};
            return state;
        }
        default:
            return state;
    }
};