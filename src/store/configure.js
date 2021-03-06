import thunk from 'redux-thunk';
import logger from 'redux-logger';
import promise from 'redux-promise-middleware';
import { persistStore, persistReducer } from 'redux-persist';
import { createStore, compose, applyMiddleware } from 'redux';
import FilesystemStorage from 'redux-persist-filesystem-storage';

import config from '../configs/config';
import * as env from '../constants/env';
import rootReducer from '../reducers/index';

let enhancers;

if (config.env === env.DEVELOPMENT) {
  enhancers = [applyMiddleware(thunk, promise, logger)];
} else {
  enhancers = [applyMiddleware(thunk, promise)];
}

if (config.env === env.DEVELOPMENT && window.__REDUX_DEVTOOLS_EXTENSION__) {
  enhancers.push(window.__REDUX_DEVTOOLS_EXTENSION__());
}

const persistConfig = {
  key: 'root',
  storage: FilesystemStorage,
  whitelist: [],
};
const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(persistedReducer, compose(...enhancers));
const persistor = persistStore(store);

export { store, persistor, persistReducer };
