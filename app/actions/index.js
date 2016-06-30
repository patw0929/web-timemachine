import _ from 'lodash';
import axios from 'axios';
import {
  FETCH_ARCHIVE_DATA,
  FETCH_REQUEST_STARTING,
  FETCH_REQUEST_CANCEL,
} from './types';

export function fetchArchiveData(url, page = 0) {
  const archiveCounter = 'https://web.archive.org/cdx/search/cdx?url={{0}}&showNumPages=true';
  const archiveOrgUrl = 'https://web.archive.org/cdx/search/cdx?url={{0}}&output=json&fl=timestamp';
  let totalPages = 0;

  return dispatch => {
    dispatch({
      type: FETCH_REQUEST_STARTING,
    });

    axios.get(archiveCounter.replace('{{0}}', url)).then(response => {
      totalPages = +response.data;
      return axios.get(`${archiveOrgUrl.replace('{{0}}', url)}&page=${page}`);
    })
    .then(response => {
      let data = response.data;
      data.shift();
      data = _.uniqWith(data, (a, b) => a[0] === b[0]);

      dispatch({
        type: FETCH_ARCHIVE_DATA,
        payload: {
          data,
          page,
          totalPages,
          isFetching: false,
        },
      });
    })
    .catch(error => {
      console.log('fetchArchiveData error', error);
      dispatch({
        type: FETCH_REQUEST_CANCEL,
      });
      alert('Archive.org is busy, please try again.');
    });
  };
}
