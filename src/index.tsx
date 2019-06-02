import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import postsReducer from './_store/reducers/posts.reducer';
import {combineEpics, createEpicMiddleware} from 'redux-observable';

import {Provider} from 'react-redux';
import {applyMiddleware, combineReducers, createStore} from 'redux';
import commentsReducer from "./_store/reducers/comments.reducer";
import {commentsEffect} from "./_store/effects/comments.effects";
import {postsEffect} from "./_store/effects/posts.effects";
import { composeWithDevTools } from 'redux-devtools-extension';
import Axios from "axios-observable";
import {AxiosRequestConfig} from "axios";
import {of} from 'rxjs';

/** Interceptors */

Axios.interceptors.request.use((config: AxiosRequestConfig) => {
    if (process.env.REACT_APP_ENV === 'prod' && config.url === 'https://jsonplaceholder.typicode.com/comments') {
        config.url += '?postId=1';
    }

    return config;
}, (error) => {
    return of(new Error(error));
});

/** Redux */

const observableMiddleware = createEpicMiddleware();

const reducers = combineReducers({
    postsReducer,
    commentsReducer
});

const store = createStore(reducers, composeWithDevTools(applyMiddleware(observableMiddleware)));

observableMiddleware.run(combineEpics(
    commentsEffect,
    postsEffect
));

ReactDOM.render(<Provider store={store}><App/></Provider>, document.getElementById('root'));

