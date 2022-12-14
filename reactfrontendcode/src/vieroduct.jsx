import React, { Component } from 'react';
import EmployeeService from './service/employeeservice';

class ViewProductComponent extends Component {
    state = { 
        productid:this.props.match.params.pid,
        pdetail:{}
     } 
     componentDidMount(){
        EmployeeService.getProduct(this.state.productid).then(res=>{
            this.setState({pdetail:res.data})
        })
     }
    render() { 
        return (<div>
            <p>Product Detail</p>
            <div>
                <label>Product Id</label>
                <div>{this.state.pdetail.productId}</div>
            </div>
            <div>
                <label>Product Name</label>
                <div>{this.state.pdetail.productName}</div>
            </div>
            <div>
                <label>Product Specification</label>
                <div>{this.state.pdetail.productSpecification}</div>
            </div>
            <div>
                <label>Product Price</label>
                <div>{this.state.pdetail.price}</div>
            </div>
        </div>);
    }
}
 
export default ViewProductComponent;