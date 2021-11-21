import subpagesService from "../services/subpages.service";

export const GET_SUBPAGE_BY_SLUG_REQUEST = "GET_SUBPAGE_BY_SLUG_REQUEST";
export const GET_SUBPAGE_BY_SLUG_SUCCESS = "GET_SUBPAGE_BY_SLUG_SUCCESS";
export const GET_SUBPAGE_BY_SLUG_FAILURE = "GET_SUBPAGE_BY_SLUG_FAILURE";

export function getSubpageBySlug(slug) {
  return function (dispatch) {
    dispatch(request());
    subpagesService.getSubpageBySlug(slug).then(
      (res) => {
        dispatch(success(res.data));
      },
      (error) => {
        dispatch(failure(error.toString()));
      }
    );
  };

  function request() {
    return { type: GET_SUBPAGE_BY_SLUG_REQUEST };
  }
  function success(payload) {
    return { type: GET_SUBPAGE_BY_SLUG_SUCCESS, payload };
  }
  function failure(error) {
    return { type: GET_SUBPAGE_BY_SLUG_FAILURE, error };
  }
}
