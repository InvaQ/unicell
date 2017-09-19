import { combineReducers } from 'redux';
import userReducer from './userReducer';
import { authStateReducer } from 'redux-oauth';

export default combineReducers({
  auth: authStateReducer,
  users: userReducer
});
