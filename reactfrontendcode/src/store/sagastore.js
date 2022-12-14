import {createStore,applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga';
import sagareducer from './reducer/sagareducer';

import rootsagageneratorfunction from './mysaga';

const sagaMiddleware=createSagaMiddleware();

let store1=createStore(sagareducer,applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootsagageneratorfunction);

export default store1