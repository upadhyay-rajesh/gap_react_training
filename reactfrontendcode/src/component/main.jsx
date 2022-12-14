import React, { Component } from 'react';
import Header from './header';
import MainBody from './mainbody';
import Footer from './footer';

class Main extends Component {
    state = { 
        m1:""
     } 


    displayMessage=(msg)=>{
        this.setState({m1:msg})
    }

    render() { 
        return (
            <div>

                <Header m2={this.state.m1}></Header>
                            <MainBody mymethod={this.displayMessage}></MainBody>
                <Footer m3={this.state.m1}></Footer>
            </div>
        );
    }
}
 
export default Main;