import axios from 'axios';

const url="http://localhost:10000";

class EmployeeService{
    getAllProductRecord(){

        axios.interceptors.response.use(response=>response,error=>{
            window.location.href='/register';
        })

        return axios.get(url+"/displayAllProduct");
    }

    getProduct(pid){
        return axios.get(url+"/displayProduct/"+pid);
    }

    createProduct(product){
        return axios.post(url+"/addProduct",product);
    }
    deleteProduct(pid){
        return axios.delete(url+"/deleteProduct/"+pid);
    }
    editProduct(pid,product){
        return axios.put(url+"/editProduct/"+pid,product);
    }

}

export default new EmployeeService()