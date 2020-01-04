import { combineReducers } from 'redux';
import users from './users';
import notifications from './notifications';

export default combineReducers({
  users,
  notifications,
});
