import {createStore,combineReducers, applyMiddleware} from 'redux';
import counterincrement from './reducer/increment';
import counterdecrement from './reducer/decrement';

import counter from './reducer/myreducer';
import productReducer from './reducer/productreducer';

import {configureStore} from '@reduxjs/toolkit';
import thunk from 'redux-thunk';

import createSagaMiddleware from 'redux-saga';

import rootSaga from './sagas';

const initialState={};

const sagaMiddleware=createSagaMiddleware();

let store1=createStore(counter,applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootSaga);


/*
export default configureStore({
  reducer:counter
})
*/

  export default store1;
  