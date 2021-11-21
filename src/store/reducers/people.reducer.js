import {
  GET_PEOPLELIST_REQUEST,
  GET_PEOPLELIST_SUCCESS,
  GET_PEOPLELIST_FAILURE,
  GET_PERSON_BY_SLUG_REQUEST,
  GET_PERSON_BY_SLUG_SUCCESS,
  GET_PERSON_BY_SLUG_FAILURE,
} from "../actions/people.actions";

export default function register(
  state = {
    isLoading: false,
    peopleList: [],
    selectedPerson: null,
    errorMessage: "",
  },
  action
) {
  switch (action.type) {
    case GET_PEOPLELIST_REQUEST:
      return Object.assign({}, state, {
        isLoading: true,
      });
    case GET_PEOPLELIST_SUCCESS:
      return Object.assign({}, state, {
        isLoading: false,
        peopleList: action.payload,
        errorMessage: "",
      });
    case GET_PEOPLELIST_FAILURE:
      return Object.assign({}, state, {
        isLoading: false,
        errorMessage: action.payload,
      });
    case GET_PERSON_BY_SLUG_REQUEST:
      return Object.assign({}, state, {
        isLoading: true,
      });
    case GET_PERSON_BY_SLUG_SUCCESS:
      return Object.assign({}, state, {
        isLoading: false,
        selectedPerson: action.payload,
        errorMessage: "",
      });
    case GET_PERSON_BY_SLUG_FAILURE:
      return Object.assign({}, state, {
        isLoading: false,
        errorMessage: action.payload,
      });
    default:
      return state;
  }
}