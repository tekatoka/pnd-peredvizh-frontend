import {
  GET_SUBPAGE_BY_SLUG_REQUEST,
  GET_SUBPAGE_BY_SLUG_SUCCESS,
  GET_SUBPAGE_BY_SLUG_FAILURE,
} from "../actions/subpages.actions";

export default function register(
  state = {
    isLoading: false,
    current: null,
    errorMessage: "",
  },
  action
) {
  switch (action.type) {
    case GET_SUBPAGE_BY_SLUG_REQUEST:
      return Object.assign({}, state, {
        isLoading: true,
      });
    case GET_SUBPAGE_BY_SLUG_SUCCESS:
      return Object.assign({}, state, {
        isLoading: false,
        current: action.payload,
        errorMessage: "",
      });
    case GET_SUBPAGE_BY_SLUG_FAILURE:
      return Object.assign({}, state, {
        isLoading: false,
        errorMessage: action.payload,
      });
    default:
      return state;
  }
}
