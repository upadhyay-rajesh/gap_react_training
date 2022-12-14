package com.product.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.product.entity.Employee;
import com.product.entity.Product;
import com.product.exception.ProductNotExistException;

@Service("p2")
public class Product1Service implements ProductServiceInterface {

	@Override
	public String createProductService(Product product) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public List<Product> getAllService() {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public Product getProductService(String pid)throws ProductNotExistException {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public Product editProductService(Product p) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public String deleteProductService(String pid) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public Employee loginEmp(String empid, String emppass) {
		// TODO Auto-generated method stub
		return null;
	}

}
