import React, { Component } from 'react'
import {connect} from 'react-redux';
import CounterAction from  './store/reducer/action/myaction';
import App3 from './App3';

function mapStateToProps(state){
    return {
        statevalueinprops:state
    }
}
function mapDispatchToProps(dispatch){
    return{
        increment1:()=> dispatch(CounterAction.doIncrement()),
        decrement1: ()=> dispatch(CounterAction.doDecrement()),

        asyncincrement : ()=> dispatch(CounterAction.doincrementasync())
    }
}
class SagaAppComponent extends Component {
    state = {  } 
    render() { 
        return (
            <div>the current value is 
            {this.props.statevalueinprops}
                <br/><br/>
            
                <button onClick={this.props.increment1}>increment</button>
                <button onClick={this.props.decrement1}>decrement</button>

                <button onClick={this.props.asyncincrement}>async increment</button>

                <App3></App3>

            </div>
        );
    }
}
 
export default connect(mapStateToProps,mapDispatchToProps)(SagaAppComponent);