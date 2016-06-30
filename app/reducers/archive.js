import { FETCH_ARCHIVE_DATA } from '../actions/types';

export default (state = [], action) => {
  switch (action.type) {
    case FETCH_ARCHIVE_DATA:
      return action.payload;

    default:
      return state;
  }
};
