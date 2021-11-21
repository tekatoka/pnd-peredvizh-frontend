import { GET_EVENTLIST_REQUEST, GET_EVENTLIST_SUCCESS, GET_EVENTLIST_FAILURE } from '../actions/events.actions';

export default function register(state = {
    isLoading: false,
    eventList: [],
    errorMessage: ''
}, action) {
    switch (action.type) {
        case GET_EVENTLIST_REQUEST:
            return Object.assign({}, state, {
                isLoading: true
            });
        case GET_EVENTLIST_SUCCESS:
            return Object.assign({}, state, {
                isLoading: false,
                eventList: action.payload,
                errorMessage: ''
            });
        case GET_EVENTLIST_FAILURE:
            return Object.assign({}, state, {
                isLoading: false,
                errorMessage: action.payload,
            });
        default:
            return state; 
    }
}
