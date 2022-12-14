package com.product.service;

import java.util.List;

import com.product.entity.Employee;
import com.product.entity.Product;
import com.product.exception.ProductNotExistException;

public interface ProductServiceInterface {

	String createProductService(Product product);

	List<Product> getAllService();

	Product getProductService(String pid)throws ProductNotExistException;

	Product editProductService(Product p);

	String deleteProductService(String pid);

	Employee loginEmp(String empid, String emppass);

}
