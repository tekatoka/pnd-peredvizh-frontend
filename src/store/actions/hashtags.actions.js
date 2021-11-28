import hashtagsService from "../services/hashtags.service";

export const GET_HASHTAGS_LIST_REQUEST = "GET_HASHTAGS_LIST_REQUEST";
export const GET_HASHTAGS_LIST_SUCCESS = "GET_HASHTAGS_LIST_SUCCESS";
export const GET_HASHTAGS_LIST_FAILURE = "GET_HASHTAGS_LIST_FAILURE";

export const GET_ENTITIES_BY_HASHTAG_REQUEST = "GET_ENTITIES_BY_HASHTAG_REQUEST";
export const GET_ENTITIES_BY_HASHTAG_SUCCESS = "GET_ENTITIES_BY_HASHTAG_SUCCESS";
export const GET_ENTITIES_BY_HASHTAG_FAILURE = "GET_ENTITIES_BY_HASHTAG_FAILURE";

export function getAllHashtags() {
  return function (dispatch) {
    dispatch(request());
    hashtagsService.getAllHashtags().then(
      (res) => {
        dispatch(success(res.data));
      },
      (error) => {
        dispatch(failure(error.toString()));
      }
    );
  };

  function request() {
    return { type: GET_HASHTAGS_LIST_REQUEST };
  }
  function success(payload) {
    return { type: GET_HASHTAGS_LIST_SUCCESS, payload };
  }
  function failure(error) {
    return { type: GET_HASHTAGS_LIST_FAILURE, error };
  }
}

export function getEntitiesByHashtag(tag) {
    return function (dispatch) {
      dispatch(request());
      hashtagsService.getEntitiesByHashtag(tag).then(
        (res) => {
          dispatch(success(res.data));
        },
        (error) => {
          dispatch(failure(error.toString()));
        }
      );
    };
  
    function request() {
      return { type: GET_ENTITIES_BY_HASHTAG_REQUEST };
    }
    function success(payload) {
      return { type: GET_ENTITIES_BY_HASHTAG_SUCCESS, payload };
    }
    function failure(error) {
      return { type: GET_ENTITIES_BY_HASHTAG_FAILURE, error };
    }
  }
