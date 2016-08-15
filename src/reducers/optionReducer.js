export default function reducer(state={}, action) {
    switch(action.type) {
        case "CHANGE_OPTION_KEY": {
            debugger;
            state = {...state, key: action.payload};
            break;
        }
    }
    return state;
};