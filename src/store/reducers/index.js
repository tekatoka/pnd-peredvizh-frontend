import { combineReducers } from 'redux';
import modal from './modal';
import loader from './loader';

export default combineReducers({
  modal,
  loader
});
