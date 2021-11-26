import teamService from "../services/team.service";

export const GET_TEAM_MEMBERS_LIST_REQUEST = "GET_TEAM_MEMBERS_LIST_REQUEST";
export const GET_TEAM_MEMBERS_LIST_SUCCESS = "GET_TEAM_MEMBERS_LIST_SUCCESS";
export const GET_TEAM_MEMBERS_LIST_FAILURE = "GET_TEAM_MEMBERS_LIST_FAILURE";

export const GET_TEAM_MEMBER_BY_SLUG_REQUEST = "GET_TEAM_MEMBER_BY_SLUG_REQUEST";
export const GET_TEAM_MEMBER_BY_SLUG_SUCCESS = "GET_TEAM_MEMBER_BY_SLUG_SUCCESS";
export const GET_TEAM_MEMBER_BY_SLUG_FAILURE = "GET_TEAM_MEMBER_BY_SLUG_FAILURE";

export function getTeamMembersList() {
  return function (dispatch) {
    dispatch(request());
    teamService.getTeamMembersList().then(
      (res) => {
        dispatch(success(res.data));
      },
      (error) => {
        dispatch(failure(error.toString()));
      }
    );
  };

  function request() {
    return { type: GET_TEAM_MEMBERS_LIST_REQUEST };
  }
  function success(payload) {
    return { type: GET_TEAM_MEMBERS_LIST_SUCCESS, payload };
  }
  function failure(error) {
    return { type: GET_TEAM_MEMBERS_LIST_FAILURE, error };
  }
}

export function getTeamMemberBySlug(slug) {
    return function (dispatch) {
      dispatch(request());
      teamService.getTeamMemberBySlug(slug).then(
        (res) => {
          dispatch(success(res.data));
        },
        (error) => {
          dispatch(failure(error.toString()));
        }
      );
    };
  
    function request() {
      return { type: GET_TEAM_MEMBER_BY_SLUG_REQUEST };
    }
    function success(payload) {
      return { type: GET_TEAM_MEMBER_BY_SLUG_SUCCESS, payload };
    }
    function failure(error) {
      return { type: GET_TEAM_MEMBER_BY_SLUG_FAILURE, error };
    }
  }
