import React from 'react';
import { render } from 'react-dom';
import './assets/styles/reset.css';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

setTimeout(() => {
  render(<App />, document.getElementById('root'));
}, 1000);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
