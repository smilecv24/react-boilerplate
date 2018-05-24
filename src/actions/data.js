import {RSAA} from 'redux-api-middleware'

export const ECHO = '@@auth/ECHO';
export const ECHO_FAIL= '@@auth/ECHO_FAIL';
export const ECHO_ERROR = '@@auth/ECHO_ERROR';


export const echo = (token) => ({
    [RSAA]: {
        endpoint: '/api/echo/',
        method: 'GET',
        headers: {'Authorization': token},
        types: [
            ECHO_ERROR, ECHO, ECHO_FAIL
        ]
    }
});

