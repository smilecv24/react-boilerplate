import * as data from '../actions/data'

const initialState = {
    data: undefined
};

export default (state = initialState, action) => {

    switch (action.type) {
        case data.ECHO:
            return {...state, data: action.payload};
        default:
            return state
    }
}
