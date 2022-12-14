import React, { Component } from 'react';
import EmployeeService from './service/employeeservice';
class EditProductComponent extends Component {
    state = { 
        productid:this.props.match.params.pid,
        pdetail:{},
        productId:'',
        productName:'',
        productSpecification:'',
        price:''
     } 
     changeProductIdHandler=(event)=>{
        this.setState({productId:event.target.value})
      }
      changeProductnameHandler=(event)=>{
        this.setState({productName:event.target.value})
      }
      changeProductspecHandler=(event)=>{
        this.setState({productSpecification:event.target.value})
      }
      changeProductpriceHandler=(event)=>{
        this.setState({price:event.target.value})
      }
      editProduct=(e)=>{
        let product={
            productId:this.state.productId,
            productName:this.state.productName,
            productSpecification:this.state.productSpecification,
            price:this.state.price
          } 
          console.log("product is "+JSON.stringify(product));
          EmployeeService.editProduct(this.state.productId,product).then(res=>{
            console.log("edit Success");
        })
      }
     componentDidMount(){
        EmployeeService.getProduct(this.state.productid).then(res=>{
            this.setState({productId:res.data.productId,productName:res.data.productName,
            productSpecification:res.data.productSpecification,
            price:res.data.price})
        })
     }
    render() { 
        return (<div>
            <form>
                    Product Id : <input type="text" value={this.state.productId} onChange={this.changeProductIdHandler}></input><br />
                    Product Name : <input type="text" value={this.state.productName} onChange={this.changeProductnameHandler}></input><br />
                    Product Specification : <input type="text" value={this.state.productSpecification} onChange={this.changeProductspecHandler}></input><br />
                    Product Price : <input type="text" value={this.state.price} onChange={this.changeProductpriceHandler}></input><br />
                    <input type="button" value="Edit" onClick={this.editProduct}></input>
                </form>
        </div>);
    }
}
 
export default EditProductComponent;