import eventsService from "../services/events.service";

export const GET_EVENTLIST_REQUEST = "GET_EVENTLIST_REQUEST";
export const GET_EVENTLIST_SUCCESS = "GET_EVENTLIST_SUCCESS";
export const GET_EVENTLIST_FAILURE = "GET_EVENTLIST_FAILURE";

export const GET_EVENT_BY_SLUG_REQUEST = "GET_EVENT_BY_SLUG_REQUEST";
export const GET_EVENT_BY_SLUG_SUCCESS = "GET_EVENT_BY_SLUG_SUCCESS";
export const GET_EVENT_BY_SLUG_FAILURE = "GET_EVENT_BY_SLUG_FAILURE";

export function getEventsList() {
  return function (dispatch) {
    dispatch(request());
    eventsService.getEventsList().then(
      (res) => {
        dispatch(success(res.data));
      },
      (error) => {
        dispatch(failure(error.toString()));
      }
    );
  };

  function request() {
    return { type: GET_EVENTLIST_REQUEST };
  }
  function success(payload) {
    return { type: GET_EVENTLIST_SUCCESS, payload };
  }
  function failure(error) {
    return { type: GET_EVENTLIST_FAILURE, error };
  }
}

export function getEventBySlug(slug) {
  return function (dispatch) {
    dispatch(request());
    eventsService.getEventBySlug(slug).then(
      (res) => {
        dispatch(success(res.data[0]));
      },
      (error) => {
        dispatch(failure(error.toString()));
      }
    );
  };

  function request() {
    return { type: GET_EVENT_BY_SLUG_REQUEST };
  }
  function success(payload) {
    return { type: GET_EVENT_BY_SLUG_SUCCESS, payload };
  }
  function failure(error) {
    return { type: GET_EVENT_BY_SLUG_FAILURE, error };
  }
}
