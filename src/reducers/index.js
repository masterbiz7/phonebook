import { combineReducers } from 'redux';
import contact from './contacts';
import form from './form';

export default combineReducers({
  contacts,
  form
});