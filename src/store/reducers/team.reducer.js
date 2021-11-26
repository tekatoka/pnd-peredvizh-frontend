import {
  GET_TEAM_MEMBERS_LIST_REQUEST,
  GET_TEAM_MEMBERS_LIST_SUCCESS,
  GET_TEAM_MEMBERS_LIST_FAILURE,
  GET_TEAM_MEMBER_BY_SLUG_REQUEST,
  GET_TEAM_MEMBER_BY_SLUG_SUCCESS,
  GET_TEAM_MEMBER_BY_SLUG_FAILURE,
} from "../actions/team.actions";

export default function register(
  state = {
    isLoading: false,
    teamList: null,
    selectedTeamMember: null,
    errorMessage: "",
  },
  action
) {
  switch (action.type) {
    case GET_TEAM_MEMBERS_LIST_REQUEST:
      return Object.assign({}, state, {
        isLoading: true,
      });
    case GET_TEAM_MEMBERS_LIST_SUCCESS:
      return Object.assign({}, state, {
        isLoading: false,
        teamList: action.payload,
        errorMessage: "",
      });
    case GET_TEAM_MEMBERS_LIST_FAILURE:
      return Object.assign({}, state, {
        isLoading: false,
        errorMessage: action.payload,
      });
    case GET_TEAM_MEMBER_BY_SLUG_REQUEST:
      return Object.assign({}, state, {
        isLoading: true,
      });
    case GET_TEAM_MEMBER_BY_SLUG_SUCCESS:
      return Object.assign({}, state, {
        isLoading: false,
        selectedTeamMember: action.payload ? action.payload : "not found",
        errorMessage: "",
      });
    case GET_TEAM_MEMBER_BY_SLUG_FAILURE:
     
      return Object.assign({}, state, {
        isLoading: false,
        errorMessage: action.payload,
        selectedTeamMember: "not found"
      });
    default:
      return state;
  }
}
