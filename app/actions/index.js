import _ from 'lodash';
import axios from 'axios';
import { FETCH_ARCHIVE_DATA } from './types';

export function fetchArchiveData(url) {
  const archiveOrgUrl = 'https://web.archive.org/cdx/search/cdx?url={{0}}&output=json&fl=timestamp';

  return dispatch => {
    axios.get(archiveOrgUrl.replace('{{0}}', url)).then(response => {
      let data = response.data;
      data.shift();
      data = _.uniqWith(data, (a, b) => a[0] === b[0]);

      dispatch({
        type: FETCH_ARCHIVE_DATA,
        payload: data,
      });
    }).catch(error => {
      console.log('fetchArchiveData error', error);
      alert('Archive.org is busy, please try again.');
    });
  };
}
