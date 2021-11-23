import citiesService from "../services/cities.service";

export const GET_CITIES_REQUEST = "GET_CITIES_REQUEST";
export const GET_CITIES_SUCCESS = "GET_CITIES_SUCCESS";
export const GET_CITIES_FAILURE = "GET_CITIES_FAILURE";

export const SET_MAP_REQUEST = "SET_MAP_REQUEST";
export const SET_MAP_SUCCESS = "SET_MAP_SUCCESS";

export const GET_EVENTS_BY_CITY_REQUEST = "GET_EVENTS_BY_CITY_REQUEST";
export const GET_EVENTS_BY_CITY_SUCCESS = "GET_EVENTS_BY_CITY_SUCCESS";
export const GET_EVENTS_BY_CITY_FAILURE = "GET_EVENTS_BY_CITY_FAILURE";

export const GET_PEOPLE_BY_CITY_REQUEST = "GET_PEOPLE_BY_CITY_REQUEST";
export const GET_PEOPLE_BY_CITY_SUCCESS = "GET_PEOPLE_BY_CITY_SUCCESS";
export const GET_PEOPLE_BY_CITY_FAILURE = "GET_PEOPLE_BY_CITY_FAILURE";

export function getCities() {
  return function (dispatch) {
    dispatch(request());
    citiesService.getCities().then(
      (res) => {
        dispatch(success(res.data));
      },
      (error) => {
        dispatch(failure(error.toString()));
      }
    );
  };

  function request() {
    return { type: GET_CITIES_REQUEST };
  }
  function success(payload) {
    return { type: GET_CITIES_SUCCESS, payload };
  }
  function failure(error) {
    return { type: GET_CITIES_FAILURE, error };
  }
}

export function getEventsByCity(cityId) {
  return function (dispatch) {
    dispatch(request());
    citiesService.getEventsByCity(cityId).then(
      (res) => {
        dispatch(success(res.data));
      },
      (error) => {
        dispatch(failure(error.toString()));
      }
    );
  };

  function request() {
    return { type: GET_EVENTS_BY_CITY_REQUEST };
  }
  function success(events) {
    return { type: GET_EVENTS_BY_CITY_SUCCESS, payload: { selectedCity: cityId, eventsInCity: events } };
  }
  function failure(error) {
    return { type: GET_EVENTS_BY_CITY_FAILURE, error };
  }
}

export function getPeopleByCity(cityId) {
  return function (dispatch) {
    dispatch(request());
    citiesService.getPeopleByCity(cityId).then(
      (res) => {
        dispatch(success(res.data));
      },
      (error) => {
        dispatch(failure(error.toString()));
      }
    );
  };

  function request() {
    return { type: GET_PEOPLE_BY_CITY_REQUEST };
  }
  function success(people) {
    return { type: GET_PEOPLE_BY_CITY_SUCCESS, payload: {selectedCity: cityId, peopleInCity: people} };
  }
  function failure(error) {
    return { type: GET_PEOPLE_BY_CITY_FAILURE, error };
  }
}

export function setMapLoading(isLoading) {
  if (isLoading) {
    return {
      type: SET_MAP_REQUEST,
    };
  } else {
    return {
      type: SET_MAP_SUCCESS,
    };
  }
}
