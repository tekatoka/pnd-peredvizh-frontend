import {
  GET_CITIES_REQUEST,
  GET_CITIES_SUCCESS,
  GET_CITIES_FAILURE,
} from "../actions/cities.actions";

export default function register(
  state = {
    isLoading: false,
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
    case   GET_CITIES_FAILURE:
      return Object.assign({}, state, {
        isLoading: false,
        errorMessage: action.payload,
      });
    default:
      return state;
  }
}
