import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'semantic-ui-css/semantic.min.css';
//import store1 from './store/mystore';
import store1 from './store/sagastore';

import SagaAppComponent from './SagaAppComponent'

import {Provider} from 'react-redux';
import CounterAction from  './store/reducer/action/myaction';
import App2 from './App2';


//step 6 subscribe value of state
//store1.subscribe(()=>console.log(store1.getState()));

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  //step 3 bound application th store
  <Provider store={store1}>
  <React.StrictMode>
    <SagaAppComponent></SagaAppComponent>
  </React.StrictMode>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
