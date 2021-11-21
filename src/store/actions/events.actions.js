import eventsService from "../services/events.service";

export const GET_EVENTLIST_REQUEST = "GET_EVENTLIST_REQUEST";
export const GET_EVENTLIST_SUCCESS = "GET_EVENTLIST_SUCCESS";
export const GET_EVENTLIST_FAILURE = "GET_EVENTLIST_FAILURE";

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
