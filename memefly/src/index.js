import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, }  from 'react-router-dom';
import * as serviceWorker from './serviceWorker';

import {createStore, applyMiddleware} from "redux";
import { logger } from 'redux-logger';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';

import App from './App';
import './index.scss';
import combineReducers from "./store/reducers";


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;

const store= createStore(combineReducers, composeEnhancers(applyMiddleware( thunk, logger)));

ReactDOM.render(<Provider store={store}> <Router><App /></Router> </Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
