/* eslint-disable no-underscore-dangle */
import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';

import rootReducer from '~/redux/reducers/rootReducer';
import rootSaga from '~/redux/sagas/rootSaga';

const devTools = process.env.NODE_ENV === 'test'
    ? (x) => x
    : window.__REDUX_DEVTOOLS_EXTENSION__
    && window.__REDUX_DEVTOOLS_EXTENSION__();

const sagaMiddleware = createSagaMiddleware();
const store = createStore(
    rootReducer,
    compose(
        applyMiddleware(sagaMiddleware),
        devTools,
    ),
);

sagaMiddleware.run(rootSaga);

export default store;
