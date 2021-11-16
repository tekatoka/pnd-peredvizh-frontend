import { SET_IS_LOADED } from '../actions/loader';

const initialState = {
  isLoaded: false
};

export default function runtime(state = initialState, action) {
  switch (action.type) {
    case SET_IS_LOADED:
      return Object.assign({}, state, {
        isLoaded: true
      });
    default:
      return state;
  }
}
