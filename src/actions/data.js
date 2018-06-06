import {RSAA} from 'redux-api-middleware'

export const USER_REQUEST = '@@data/USER_REQUEST';
export const USER_SUCCESS = '@@data/USER_SUCCESS';
export const USER_FAILURE = '@@data/USER_FAILURE';

export const USER_UPDATE_REQUEST = '@@data/USER_UPDATE_REQUEST';
export const USER_UPDATE_SUCCESS = '@@data/USER_UPDATE_SUCCESS';
export const USER_UPDATE_FAILURE = '@@data/USER_UPDATE_FAILURE';

export const USER_DELETE_REQUEST = '@@data/USER_DELETE_REQUEST';
export const USER_DELETE_SUCCESS = '@@data/USER_DELETE_SUCCESS';
export const USER_DELETE_FAILURE = '@@data/USER_DELETE_FAILURE';


export const getUsers = (token) => ({
    [RSAA]: {
        endpoint: '/api/users/',
        method: 'GET',
        headers: {'Authorization': 'Bearer ' + token},
        types: [
            USER_REQUEST, USER_SUCCESS, USER_FAILURE
        ]
    }
});

export const updateUser = (token, user) => ({
    [RSAA]: {
        endpoint: '/api/user/' + user.id + '/',
        method: 'PUT',
        headers: {'Authorization': 'Bearer ' + token, 'Content-Type': 'application/json'},
        body: JSON.stringify({...user}),
        types: [
            USER_UPDATE_REQUEST, USER_UPDATE_SUCCESS, USER_UPDATE_FAILURE
        ]
    }
});

export const deleteUser = (token, pk) => ({
    [RSAA]: {
        endpoint: '/api/user/' + pk + '/',
        method: 'DELETE',
        headers: {'Authorization': 'Bearer ' + token, 'Content-Type': 'application/json'},
        types: [
            USER_DELETE_REQUEST, USER_DELETE_SUCCESS, USER_DELETE_FAILURE
        ]
    }
});

