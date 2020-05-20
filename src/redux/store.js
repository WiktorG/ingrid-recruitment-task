/* eslint-disable no-underscore-dangle */
import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import rootReducer from '~/redux/reducers/rootReducer';
import rootSaga from '~/redux/sagas/rootSaga';

const persistConfig = {
    key: 'root',
    storage,
};

const devTools = window.__REDUX_DEVTOOLS_EXTENSION__
    ? window.__REDUX_DEVTOOLS_EXTENSION__() : compose;

const persistedReducer = persistReducer(persistConfig, rootReducer);

const sagaMiddleware = createSagaMiddleware();
const store = createStore(
    persistedReducer,
    compose(
        applyMiddleware(sagaMiddleware),
        devTools,
    ),
);

sagaMiddleware.run(rootSaga);

export const persistor = persistStore(store);

export default store;
