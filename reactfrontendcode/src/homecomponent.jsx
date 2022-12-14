import React, { Component } from 'react';
import {BrowserRouter as Router, Switch, Route,Link} from 'react-router-dom';

class HomeComponent extends Component {
    state = {  } 
    addproduct=()=>{
        this.props.history.push('/register');
    }
    displayproduct=()=>{
        this.props.history.push('/displayall');
    }
    render() { 
        return (<div>
            <Link to="/register">Add Product</Link>
            <Link to="/displayall">Display All Product</Link>
            <Link to="/myquery?name=Rajesh&address=Bangalore">Add Product</Link>
            <Link to="/account?name=rajesh1234&pass=abcd453">hello query</Link>

            <button onClick={this.addproduct}>Add Product</button>
            <button onClick={this.displayproduct}>Display Product</button>

        </div>);
    }
}
 
export default HomeComponent;