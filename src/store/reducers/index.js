import { combineReducers } from 'redux';
import modal from './modal.reducer';
import people from "./people.reducer";
import events from "./events.reducer";
import subpage from "./subpages.reducer";
import projectYear from "./projectYear.reducer";
import cities from "./cities.reducer";
import blog from "./blog.reducer";
import team from "./team.reducer";
import hashtags from "./hashtags.reducer";

import { RESET_STORE } from '../actions/store.actions';

const appReducer = combineReducers({
  modal,
  events,
  people,
  subpage,
  projectYear,
  cities,
  blog,
  team,
  hashtags
});

const rootReducer = (state, action) => {
  if (action.type === RESET_STORE) {
    state = undefined;
  }
  return appReducer(state, action)
}

export default rootReducer;