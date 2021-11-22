import projectYearService from "../services/projectYear.service";

export const GET_PROJECT_YEAR_REQUEST = "GET_PROJECT_YEAR_REQUEST";
export const GET_PROJECT_YEAR_SUCCESS = "GET_PROJECT_YEAR_SUCCESS";
export const GET_PROJECT_YEAR_FAILURE = "GET_PROJECT_YEAR_FAILURE";

export function getProjectYear(year) {
  return function (dispatch) {
    dispatch(request());
    projectYearService.getByYear(year).then(
      (res) => {
        dispatch(success(res.data));
      },
      (error) => {
        dispatch(failure(error.toString()));
      }
    );
  };

  function request() {
    return { type: GET_PROJECT_YEAR_REQUEST };
  }
  function success(payload) {
    return { type: GET_PROJECT_YEAR_SUCCESS, payload };
  }
  function failure(error) {
    return { type: GET_PROJECT_YEAR_FAILURE, error };
  }
}
