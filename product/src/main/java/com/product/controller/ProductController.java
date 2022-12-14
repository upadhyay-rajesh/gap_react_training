package com.product.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.product.entity.Employee;
import com.product.entity.Product;
import com.product.exception.ProductNotExistException;
import com.product.service.ProductServiceInterface;

@RestController
@CrossOrigin("*")
public class ProductController {
	
	@Autowired
	@Qualifier("p1")
	private ProductServiceInterface pService;
	
	
	
	@PostMapping("addProduct")
	public String addProduct(@RequestBody Product product) {
		return pService.createProductService(product);
	}
	
	@GetMapping("displayAllProduct")
	public List<Product> getAll(){
		return pService.getAllService();
	}
	
	@GetMapping("displayProduct/{pid}")
	public Product getProductById(@PathVariable("pid") String pid)throws ProductNotExistException{
		return pService.getProductService(pid);
	}
	
	@PutMapping("editProduct/{pid}")
	public Product editProductById(@PathVariable("pid") String pid, @RequestBody Product p){
		p.setProductId(pid);
		return pService.editProductService(p);
	}
	
	@DeleteMapping("deleteProduct/{pid}")
	public String deleteProductById(@PathVariable("pid") String pid){
		return pService.deleteProductService(pid);
	}
	
	@GetMapping("login/{empid}/{emppass}")
	public Employee loginEmp(@PathVariable("empid") String empid,@PathVariable("emppass") String emppass) {
		return pService.loginEmp(empid,emppass);
	}
	
}


























