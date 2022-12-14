import React, { Component } from 'react';

class MainBody extends Component {
    state = { 
        message:"hello react"
     } 
    render() { 
        return (
            <div>

                <button onClick={()=>this.props.mymethod(this.state.message)}>message me</button>

            </div>
        );
    }
}
 
export default MainBody;