import {Form,Button} from 'semantic-ui-react';
import {useForm} from 'react-hook-form';
import EmployeeService from '../service/employeeservice';

export default function Register(){

    const {register,handleSubmit,formState:{errors}} =useForm();

    const onSubmit=(data)=>{
        console.log(data);
        EmployeeService.createProduct(data).then(res=>{
            console.log("Registration Success");
        })
    }

    return (
        <div>
            <Form onSubmit={handleSubmit(onSubmit)}>
                <Form.Group widths='equal'>
                <Form.Field>
                    <label>Product Id</label>
                    <input type="text" {...register("productId",{required:true,minLength:3,maxLength:8})}/>
                </Form.Field>
                {errors.productId && <p>product id is required and length must be between 3 and 8</p>}
                <Form.Field>
                    <label>Product Name</label>
                    <input type="text" {...register("productName",{required:true,pattern:/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{4,9}$/})} />
                </Form.Field>
                {errors.productName && <p>product name is required and must have lower case</p>}
                <Form.Field>
                    <label>Product Specification</label>
                    <input type="text" {...register("productSpecification")}/>
                </Form.Field>
                <Form.Field>
                    <label>Product Price</label>
                    <input type="text" {...register("price")}/>
                </Form.Field>
                </Form.Group>
                <Button type="submit" secondary>Add Product</Button>
                <button class="ui facebook button">
  <i class="facebook icon"></i>
  Facebook
</button>
<button class="ui twitter button">
  <i class="twitter icon"></i>
  Twitter
</button>
<button class="ui google plus button">
  <i class="google plus icon"></i>
  Google Plus
</button>
<button class="ui vk button">
  <i class="vk icon"></i>
  VK
</button>
<button class="ui linkedin button">
  <i class="linkedin icon"></i>
  LinkedIn
</button>
<button class="ui instagram button">
  <i class="instagram icon"></i>
  Instagram
</button>
<button class="ui youtube button">
  <i class="youtube icon"></i>
  YouTube
</button>
            </Form>

        </div>
    )
}