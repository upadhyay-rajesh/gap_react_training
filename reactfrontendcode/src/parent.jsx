import  { Component } from 'react';
import Child from './child';
import EmployeeService from './service/employeeservice';

import {displayAllProduct,deleteProduct} from "./store/reducer/action/productaction";
import {connect,useSelector,useDispatch} from 'react-redux';


const mapStateToProps = state =>{
    return {
        statevalueinprops:state
    }
}




class Parent extends Component {

   // let statevalueinprops=useSelector(state=>state);
   //const dispatch=useDispatch();
    constructor(props){
        super(props);
    }
    state = { 
        myname:"Rajesh",
        employees:[]
          /*  {
                "name":"Mohan",
                "password":"abcd",
                "email":"abc@yahoo.com",
                "address":"Bangalore"
            },
            {
                "name":"Mohan1",
                "password":"abcd1",
                "email":"abc1@yahoo.com",
                "address":"Bangalore1"
            },
            {
                "name":"Mohan2",
                "password":"abcd2",
                "email":"abc2@yahoo.com",
                "address":"Bangalore2"
            }
        ]*/
     } 

     componentDidMount(){
       /* EmployeeService.getAllProductRecord().then((res)=>{
           this.setState({employees:res.data})
           
           console.log(res);
        }).catch(function(e){
           
        })*/
        this.props.displayAllProduct();
     }

     add=()=>{
          this.setState({myname:"Preeti"})  
     }

     viewproduct=(id)=>{
        this.props.history.push(`/view/${id}`)
     }

     editproduct=(id)=>{
        this.props.history.push(`/edit/${id}`)
     }

     deleteproduct=(id)=>{
        /*EmployeeService.deleteProduct(id).then((res)=>{
            this.setState({employees:this.state.employees.filter(e=>e.productId!==id)})
            
         })*/
         this.props.deleteProduct(id);

     }


     /*
     1. create handler for function
     2. register or bind handler inside constructor of component
     */

    render() { 
        const { statevalueinprops = [] } = this.props;
        return (

            <div>
                i am parent component

                {this.state.myname}

                <Child name={this.state.myname}  mydata={this.state.employees}></Child>

                <table border="5">
                    <thead>
                        <tr><th></th><th>Name</th><th>Password</th><th>Email</th><th>Address</th></tr>
                    </thead>
                    <tbody>
                        
                        {
                            this.props.statevalueinprops.map((emp,index)=>
                                <tr key={index}>
                                    <td>{index+1}</td>
                                    <td>{emp.productId}</td>
                                    <td>{emp.productName}</td>
                                    <td>{emp.productSpecification}</td>
                                    <td>{emp.price}</td>
                                    <td>
                                        <button onClick={()=>this.viewproduct(emp.productId)}>view</button>
                                        <button onClick={()=>this.deleteproduct(emp.productId)}>delete</button>
                                        <button onClick={()=>this.editproduct(emp.productId)}>edit</button>
                                    </td>
                                </tr>
                            )
                        }

                    </tbody>
                </table>

                <button onClick={()=>this.add()}>click me</button>

            </div>
            
        );
    }
}
 
export default connect(mapStateToProps,{displayAllProduct,deleteProduct})(Parent);