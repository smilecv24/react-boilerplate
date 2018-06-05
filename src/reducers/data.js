import * as data from '../actions/data'

const initialState = {
    users: undefined,
};

export default (state = initialState, action) => {
    console.log(action.payload);
    switch (action.type) {
        case data.USER_SUCCESS:
            return {...state, users: action.payload.users};
        default:
            return state
    }
}
