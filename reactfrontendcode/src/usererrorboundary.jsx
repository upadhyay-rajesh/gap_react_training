import React, { Component } from 'react';

class UserErrorBoundary extends Component {

    constructor(props){
        super(props);
        this.state = { 
            c:0
         } 
         this.clickHeading=this.clickHeading.bind(this);
    }
    clickHeading(){
        this.setState(({c})=>({
            c:c+1
        }))
     }

    render() { 
        if(this.state.c===5){
            throw Error("here is error value should not be 5")
        }
        return (
            <div>
                <h1 onClick={this.clickHeading}>{this.state.c}</h1>
            </div>
        );
    }
}
 
export default UserErrorBoundary;