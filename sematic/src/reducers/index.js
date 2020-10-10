import { combineReducers } from 'redux';
import users from './users';
import notifications from './notifications';
import addUserModal from './addUserModal';
import app from './app';

export default combineReducers({
  users,
  notifications,
  addUserModal,
  app
});
