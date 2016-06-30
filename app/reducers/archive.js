import {
  FETCH_REQUEST_STARTING,
  FETCH_ARCHIVE_DATA,
  FETCH_REQUEST_CANCEL,
} from '../actions/types';

const initialState = {
  data: [],
  page: 0,
  totalPages: 0,
  isFetching: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_REQUEST_STARTING:
      return Object.assign({}, state, {
        isFetching: true,
      });

    case FETCH_ARCHIVE_DATA:
      return action.payload;

    case FETCH_REQUEST_CANCEL:
      return Object.assign({}, state, {
        isFetching: false,
      });

    default:
      return state;
  }
};
