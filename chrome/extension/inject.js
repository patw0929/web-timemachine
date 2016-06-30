import React from 'react';
import { render } from 'react-dom';
import Root from '../../app/containers/Root';
import '!style!css!./style.css';
const createStore = require('../../app/store/configureStore');

const injectDOM = document.createElement('div');
injectDOM.className = 'inject-web-timemachine';
document.body.insertBefore(injectDOM, document.body.firstChild);
document.body.classList.add('_wtm-inserted');
render(<Root store={createStore({})} />, injectDOM);
