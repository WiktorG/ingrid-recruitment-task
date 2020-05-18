/* eslint-disable no-underscore-dangle */
import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';

import rootReducer from '~/redux/reducers/rootReducer';
import rootSaga from '~/redux/sagas/rootSaga';

// TODO: fix devtools with tests bug
const devTools = typeof window === 'object' ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__() : null;
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
