import {
  GET_CITIES_REQUEST,
  GET_CITIES_SUCCESS,
  GET_CITIES_FAILURE,
  SET_MAP_REQUEST,
  SET_MAP_SUCCESS,
  GET_EVENTS_BY_CITY_REQUEST,
  GET_EVENTS_BY_CITY_SUCCESS,
  GET_EVENTS_BY_CITY_FAILURE,
  GET_PEOPLE_BY_CITY_REQUEST,
  GET_PEOPLE_BY_CITY_SUCCESS,
  GET_PEOPLE_BY_CITY_FAILURE,
} from "../actions/cities.actions";

export default function register(
  state = {
    isLoading: false,
    isMapLoading: false,
    citiesList: null,
    errorMessage: "",
    selectedCity: null,
    isEventsLoading: false,
    isPeopleLoading: false
  },
  action
) {
  switch (action.type) {
    case GET_CITIES_REQUEST:
      return Object.assign({}, state, {
        isLoading: true,
      });
    case GET_CITIES_SUCCESS:
      return Object.assign({}, state, {
        isLoading: false,
        citiesList: action.payload,
        errorMessage: "",
      });
    case GET_CITIES_FAILURE:
      return Object.assign({}, state, {
        isLoading: false,
        errorMessage: action.payload,
      });
    case SET_MAP_REQUEST:
      return Object.assign({}, state, {
        isMapLoading: true,
      });
    case SET_MAP_SUCCESS:
      return Object.assign({}, state, {
        isMapLoading: false,
      });
    case GET_EVENTS_BY_CITY_REQUEST:
      return Object.assign({}, state, {
        isEventsLoading: true,
      });
    case GET_EVENTS_BY_CITY_SUCCESS:
      return Object.assign({}, state, {
        isEventsLoading: false,
        selectedCity: {
          ...state.selectedCity,
          id: action.payload.selectedCity,
          eventsInCity: action.payload.eventsInCity,
        },
        errorMessage: "",
      });
    case GET_EVENTS_BY_CITY_FAILURE:
      return Object.assign({}, state, {
        isEventsLoading: false,
        errorMessage: action.payload,
      });

    case GET_PEOPLE_BY_CITY_REQUEST:
      return Object.assign({}, state, {
        isPeopleLoading: true,
      });
    case GET_PEOPLE_BY_CITY_SUCCESS:
      return Object.assign({}, state, {
        isPeopleLoading: false,
        selectedCity: {
          ...state.selectedCity,
          id: action.payload.selectedCity,
          peopleInCity: action.payload.peopleInCity,
        },
        errorMessage: "",
      });
    case GET_PEOPLE_BY_CITY_FAILURE:
      return Object.assign({}, state, {
        isPeopleLoading: false,
        errorMessage: action.payload,
      });
    default:
      return state;
  }
}
