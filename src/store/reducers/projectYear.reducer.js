import {
  GET_PROJECT_YEAR_REQUEST,
  GET_PROJECT_YEAR_SUCCESS,
  GET_PROJECT_YEAR_FAILURE,
} from "../actions/projectYear.actions";

export default function register(
  state = {
    isLoading: false,
    current: null,
    errorMessage: "",
  },
  action
) {
  switch (action.type) {
    case GET_PROJECT_YEAR_REQUEST:
      return Object.assign({}, state, {
        isLoading: true,
      });
    case GET_PROJECT_YEAR_SUCCESS:
      return Object.assign({}, state, {
        isLoading: false,
        current: action.payload,
        errorMessage: "",
      });
    case GET_PROJECT_YEAR_FAILURE:
      return Object.assign({}, state, {
        isLoading: false,
        errorMessage: action.payload,
      });
    default:
      return state;
  }
}
