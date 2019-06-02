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

