import EmployeeService from '../../../service/employeeservice';

export const displayAllProduct=()=> async(dispatch)=>{
    try{
        const result=await EmployeeService.getAllProductRecord()
       
        dispatch({
            type:'displayAllProduct',
            payload:result.data
        });
    }
    catch(err){
        console.log(err);
    }
}

export const addProduct=(product)=> async(dispatch)=>{
    try{
        const result=await EmployeeService.createProduct(product)
       
        dispatch({
            type:'addProduct',
            payload:result.data
        });
    }
    catch(err){
        console.log(err);
    }
}
export const editProduct=(id,product)=> async(dispatch)=>{
    try{
        const result=await EmployeeService.editProduct(id,product)
       
        dispatch({
            type:'editProduct',
            payload:product
        });
    }
    catch(err){
        console.log(err);
    }
}
export const deleteProduct=(id)=> async(dispatch)=>{
    try{
        const result=await EmployeeService.deleteProduct(id)
       
        dispatch({
            type:'deleteProduct',
            payload:{id}
        });
    }
    catch(err){
        console.log(err);
    }
}
export const viewProduct=(id)=> async(dispatch)=>{
    try{
        const result=await EmployeeService.getProduct(id)
       
        dispatch({
            type:'viewProduct',
            payload:result.data
        });
    }
    catch(err){
        console.log(err);
    }
}