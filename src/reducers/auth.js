import jwtDecode from 'jwt-decode'
import * as auth from '../actions/auth'

const initialState = {
    access: undefined,
    refresh: undefined,
    loaded: true,
    errors: {}
};

export default (state = initialState, action) => {

    switch (action.type) {
        case auth.LOGIN_REQUEST:
            return {
                ...state,
                loaded: false
            };
        case auth.LOGIN_SUCCESS:
            return {
                access: {
                    token: action.payload.access,
                    ...jwtDecode(action.payload.access)
                },
                refresh: {
                    token: action.payload.refresh,
                    ...jwtDecode(action.payload.refresh)
                },
                loaded: true,
                errors: {}
            };
        case auth.TOKEN_RECEIVED:
            return {
                ...state,
                access: {
                    token: action.payload.access,
                    ...jwtDecode(action.payload.access)
                },
                loaded: true
            };
        case auth.LOGIN_FAILURE:
        case auth.TOKEN_FAILURE:
            return {
                access: undefined,
                refresh: undefined,
                errors: action.payload.response || {
                    'non_field_errors': action.payload.statusText
                },
                loaded: true,
            };
        case auth.LOGOUT:
            return {
                access: undefined,
                refresh: undefined,
                errors: {},
                loaded: true
            };
        default:
            return state
    }
}

export function accessToken(state) {
    if (state.access) {
        return state.access.token
    }
}

export function refreshToken(state) {
    if (state.refresh) {
        return state.refresh.token
    }
}

export function isAccessTokenxpired(state) {
    if (state.access && state.access.exp) {
        return 1000 * state.access.exp - (new Date()).getTime() < 500000
    }
    return true
}

export function isRefreshTokenExpired(state) {
    if (state.refresh && state.refresh.exp) {
        return 1000 * state.refresh.exp - (new Date()).getTime() < 500000
    }
    return true
}

export function isAuthenticated(state) {
    return !isRefreshTokenExpired(state)
}

export function errors(state) {
    return state.errors
}
