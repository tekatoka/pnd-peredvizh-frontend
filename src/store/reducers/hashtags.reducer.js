import {
  GET_HASHTAGS_LIST_REQUEST,
  GET_HASHTAGS_LIST_SUCCESS,
  GET_HASHTAGS_LIST_FAILURE,
  GET_ENTITIES_BY_HASHTAG_REQUEST,
  GET_ENTITIES_BY_HASHTAG_SUCCESS,
  GET_ENTITIES_BY_HASHTAG_FAILURE
} from "../actions/hashtags.actions";

export default function register(
  state = {
    isLoading: false,
    hashtagsList: null,
    selectedHashtag: null,
    errorMessage: "",
  },
  action
) {
  switch (action.type) {
    case GET_HASHTAGS_LIST_REQUEST:
      return Object.assign({}, state, {
        isLoading: true,
      });
    case GET_HASHTAGS_LIST_SUCCESS:
      return Object.assign({}, state, {
        isLoading: false,
        hashtagsList: action.payload,
        errorMessage: "",
      });
    case GET_HASHTAGS_LIST_FAILURE:
      return Object.assign({}, state, {
        isLoading: false,
        errorMessage: action.payload,
      });
    case GET_ENTITIES_BY_HASHTAG_REQUEST:
      return Object.assign({}, state, {
        isLoading: true,
      });
    case GET_ENTITIES_BY_HASHTAG_SUCCESS:
      return Object.assign({}, state, {
        isLoading: false,
        selectedHashtag: action.payload ? action.payload : "not found",
        errorMessage: "",
      });
    case GET_ENTITIES_BY_HASHTAG_FAILURE:
     
      return Object.assign({}, state, {
        isLoading: false,
        errorMessage: action.payload,
        selectedHashtag: "not found"
      });
    default:
      return state;
  }
}
