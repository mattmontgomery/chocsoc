import { applyMiddleware, combineReducers, createStore } from 'redux';
import * as reducers from './Reducers';
import createSagaMiddleware from 'redux-saga';
import { createLogger } from 'redux-logger';
import sagas from './Sagas';
const sagaMiddleware = createSagaMiddleware();

export default createStore(
    combineReducers(reducers),
    applyMiddleware(
        sagaMiddleware,
        createLogger({ collapsed: true })
    )
);

sagaMiddleware.run(sagas);
