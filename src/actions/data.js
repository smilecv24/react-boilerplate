import {RSAA} from 'redux-api-middleware'

export const USER_REQUEST = '@@auth/USER_REQUEST';
export const USER_SUCCESS = '@@auth/USER_SUCCESS';
export const USER_FAILURE = '@@auth/USER_FAILURE';


export const getUsers = (token) => ({
    [RSAA]: {
        endpoint: '/api/echo/',
        method: 'GET',
        headers: {'Authorization': token},
        types: [
            USER_REQUEST, USER_SUCCESS, USER_FAILURE
        ]
    }
});

