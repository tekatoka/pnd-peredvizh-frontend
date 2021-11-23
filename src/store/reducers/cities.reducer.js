import {
  GET_CITIES_REQUEST,
  GET_CITIES_SUCCESS,
  GET_CITIES_FAILURE,
  SET_MAP_REQUEST,
  SET_MAP_SUCCESS,
} from "../actions/cities.actions";

export default function register(
  state = {
    isLoading: false,
    isMapLoading: false,
    citiesList: null,
    errorMessage: "",
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
    default:
      return state;
  }
}
