/* eslint-disable import/extensions */
import React from 'react';
import ReactDom from 'react-dom';
import App from './components/App';

ReactDom.hydrate(<App />, document.getElementById('shipping'));
