import * as data from '../actions/data'

const initialState = {
    users: undefined,
    loaded: true,
};

export default (state = initialState, action) => {
    switch (action.type) {
        case data.USER_SUCCESS:
            return {...state, users: action.payload.users};
        case data.USER_UPDATE_REQUEST:
            return {...state, loaded: false};
        case data.USER_UPDATE_SUCCESS:
        case data.USER_UPDATE_FAILURE:
            return {...state, users: action.payload.users, loaded: true};
        default:
            return state
    }
}
