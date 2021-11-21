import peopleService from "../services/people.service";

export const GET_PEOPLELIST_REQUEST = "GET_PEOPLELIST_REQUEST";
export const GET_PEOPLELIST_SUCCESS = "GET_PEOPLELIST_SUCCESS";
export const GET_PEOPLELIST_FAILURE = "GET_PEOPLELIST_FAILURE";

export const GET_PERSON_BY_SLUG_REQUEST = "GET_PERSON_BY_SLUG_REQUEST";
export const GET_PERSON_BY_SLUG_SUCCESS = "GET_PERSON_BY_SLUG_SUCCESS";
export const GET_PERSON_BY_SLUG_FAILURE = "GET_PERSON_BY_SLUG_FAILURE";

export function getPeopleList() {
  return function (dispatch) {
    dispatch(request());
    peopleService.getPeopleList().then(
      (res) => {
        dispatch(success(res.data));
      },
      (error) => {
        dispatch(failure(error.toString()));
      }
    );
  };

  function request() {
    return { type: GET_PEOPLELIST_REQUEST };
  }
  function success(payload) {
    return { type: GET_PEOPLELIST_SUCCESS, payload };
  }
  function failure(error) {
    return { type: GET_PEOPLELIST_FAILURE, error };
  }
}

export function getPersonBySlug(slug) {
    return function (dispatch) {
      dispatch(request());
      peopleService.getPersonBySlug(slug).then(
        (res) => {
          dispatch(success(res.data[0]));
        },
        (error) => {
          dispatch(failure(error.toString()));
        }
      );
    };
  
    function request() {
      return { type: GET_PERSON_BY_SLUG_REQUEST };
    }
    function success(payload) {
      return { type: GET_PERSON_BY_SLUG_SUCCESS, payload };
    }
    function failure(error) {
      return { type: GET_PERSON_BY_SLUG_FAILURE, error };
    }
  }
