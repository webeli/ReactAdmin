export default function reducer(state={}, action) {
    switch(action.type) {
        case "GET_ALL_PROJECTS_DATA": {
            state = {...action.payload};
            return state;
        }
        default:
            return state;
    }
};