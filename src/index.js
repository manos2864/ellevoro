import React from 'react';
import { hydrate, render } from "react-dom";
import './index.css';
import App from './containers/App';
import {createStore} from 'redux';
import reducer from './store/reducers/reducer';
import {Provider} from 'react-redux';
import {BrowserRouter} from 'react-router-dom';

import * as serviceWorker from './serviceWorker';

const store = createStore(reducer);

const rootElement = document.getElementById('root');

const app = <BrowserRouter basename="/"><Provider store={store}><App /></Provider></BrowserRouter>;

// Default Language here and in reducer
localStorage.setItem('languageCode', 'en');

if (rootElement.hasChildNodes()) {
  hydrate(app, rootElement)
} else {
  render(app, rootElement);
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
