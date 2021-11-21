import {
     LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT_SUCCESS,
} from '../actions/user';
import { REGISTER_FAILURE, REGISTER_REQUEST, REGISTER_SUCCESS } from '../actions/user_unused';

const authenticated = localStorage.getItem('authenticated');
export default function auth(state = {
    isFetching: false,
    isAuthenticated: authenticated,
}, action) {
    switch (action.type) {
        case LOGIN_SUCCESS:
            return Object.assign({}, state, {
                isFetching: false,
                isAuthenticated: true,
                errorMessage: '',
            });
        case LOGIN_FAILURE:
            return Object.assign({}, state, {
                isFetching: false,
                isAuthenticated: false,
                errorMessage: action.payload,
            });
        case LOGOUT_SUCCESS:
            return Object.assign({}, state, {
                isAuthenticated: false,
            });
        default:
            return state;
    }
}


export default function register(state = {
    isFetching: false,
    errorMessage: ''
}, action) {
    switch (action.type) {
        case REGISTER_REQUEST:
            return Object.assign({}, state, {
                isFetching: true,
            });
        case REGISTER_SUCCESS:
            return Object.assign({}, state, {
                isFetching: false,
                errorMessage: '',
            });
        case REGISTER_FAILURE:
            return Object.assign({}, state, {
                isFetching: false,
                errorMessage: action.payload,
            });
        default:
            return state; 
    }
}

