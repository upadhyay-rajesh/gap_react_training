import React, { Component } from 'react'
import {connect} from 'react-redux';

function mapStateToProps(state){
    return {
        statevalueinprops:state
    }
}

class App3 extends Component {
    state = {  } 
    render() { 
        return (
            <div>
                    this value is in App3  {this.props.statevalueinprops}
            </div>
        );
    }
}
 
export default connect(mapStateToProps)(App3);