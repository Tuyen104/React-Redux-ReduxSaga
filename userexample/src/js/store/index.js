import {createStore, applyMiddleware} from 'redux';
import rootReducer from '../reducers';
import forbiddenWordsMiddleware from '../middleware/index';
import createSagaMiddleware from 'redux-saga';
import rootSaga from '../sagas';

const initialiseSagaMiddleware = createSagaMiddleware();

const store = createStore(rootReducer, applyMiddleware(forbiddenWordsMiddleware, initialiseSagaMiddleware));

initialiseSagaMiddleware.run(rootSaga);

export default store;