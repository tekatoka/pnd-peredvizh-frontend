import { GET_EVENTLIST_REQUEST, GET_EVENTLIST_SUCCESS, GET_EVENTLIST_FAILURE, GET_EVENT_BY_SLUG_REQUEST, GET_EVENT_BY_SLUG_SUCCESS, GET_EVENT_BY_SLUG_FAILURE } from '../actions/events.actions';

export default function register(state = {
    isLoading: false,
    eventList: null,
    selectedEvent: null,
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
        case GET_EVENT_BY_SLUG_REQUEST:
        return Object.assign({}, state, {
            isLoading: true,
        });
        case GET_EVENT_BY_SLUG_SUCCESS:
        return Object.assign({}, state, {
            isLoading: false,
            selectedEvent: action.payload,
            errorMessage: "",
        });
        case GET_EVENT_BY_SLUG_FAILURE:
        return Object.assign({}, state, {
            isLoading: false,
            errorMessage: action.payload,
            selectedEvent: "not found"
        });
        default:
            return state; 
    }
}
