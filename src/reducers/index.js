import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';
import auth, * as fromAuth from './auth';
import data from './data';

export default combineReducers({
    auth: auth,
    data: data,
    router: routerReducer
})

export const isAuthenticated = state => fromAuth.isAuthenticated(state.auth)
export const accessToken = state => fromAuth.accessToken(state.auth)
export const isAccessTokenxpired = state => fromAuth.isAccessTokenxpired(state.auth)
export const refreshToken = state => fromAuth.refreshToken(state.auth)
export const isRefreshTokenExpired = state => fromAuth.isRefreshTokenExpired(state.auth)
export const authErrors = state => fromAuth.errors(state.auth)