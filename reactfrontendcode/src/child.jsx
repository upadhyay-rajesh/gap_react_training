import React, { Component } from 'react';

class Child extends Component {
    state = { 
        employees2:[]
     } 
    render() { 
        return (
            <div>i am child
                {this.props.name}
              
              
            </div>
        );
    }
}
 
export default Child;