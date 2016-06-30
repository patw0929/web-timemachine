import React from 'react';
import ReactDOM from 'react-dom';
import Root from '../../app/containers/Root';

const injectDOM = document.createElement('div');
injectDOM.className = 'inject-web-timemachine-root';
document.body.appendChild(injectDOM);

const createStore = require('../../app/store/configureStore');
ReactDOM.render(
  <Root store={createStore({})} />,
  document.querySelector('.inject-web-timemachine-root')
);
