import logo from './logo.svg';
import './App.css';
import Parent from './parent';
import Register from './component/register';
import Register1 from './component/register1';
import HomeComponent from './homecomponent';
import ViewProductComponent from './vieroduct';
import EditProductComponent from './editproduct';
import MyQueryProductComponent from './MyQueryProductComponent';
import  './mycustom.css';
import React, { Component } from 'react';
import UseContextDemo from './usecontextdemo';
import PropTypes from 'prop-types';

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import StateHooks from './statehookdemo';
import MyTable from './mytable';
import UserErrorBoundary from './usererrorboundary';
import ErrorBoundary from './ErrorBoundary';

class App extends Component {
  render(){
  return (
    <div className="App">
      <Router>
        <div>
          <Switch>
            <Route path="/" component={HomeComponent} exact></Route>
            <Route path="/register" component={Register}></Route>
            <Route path="/displayall" component={Parent}></Route>
            <Route path="/view/:pid" component={ViewProductComponent}></Route>
            <Route path="/edit/:pid" component={EditProductComponent}></Route>
            <Route path="/account" component={MyQueryProductComponent}></Route>
          </Switch>
        </div>
       
      </Router>

      <StateHooks></StateHooks>
      <UseContextDemo></UseContextDemo>

      {this.props.propString}
      {this.props.propNumber}

      {this.props.propString ? "i am string":"i am not string"}

      <MyTable></MyTable>

      <ErrorBoundary>
          
        <UserErrorBoundary></UserErrorBoundary>
      </ErrorBoundary>
    </div>
  );
}
}

App.propTypes={
  propString:PropTypes.string,
  propNumber:PropTypes.number
}

App.defaultProps={
  propString:parseInt(76),
  propNumber:34
}
export default App;
