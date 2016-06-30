import { combineReducers } from 'redux';
import archiveReducer from './archive';

export default combineReducers({
  archive: archiveReducer,
});
