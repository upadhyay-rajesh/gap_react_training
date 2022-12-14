package com.product.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.product.dao.ProductDAOInterface;
import com.product.entity.Employee;
import com.product.entity.Product;
import com.product.exception.ProductNotExistException;

@Service("p1")
@Transactional
public class ProductService implements ProductServiceInterface {
	
	@Autowired
	private ProductDAOInterface pDAO;

	@Override
	public String createProductService(Product product) {
		pDAO.save(product);
		return "product created successfully";
	}

	@Override
	public List<Product> getAllService() {
		// TODO Auto-generated method stub
		return pDAO.findAll();
	}

	@Override
	public Product getProductService(String pid)throws ProductNotExistException {
		// TODO Auto-generated method stub
		Product pp2=null;
		//Product pp=pDAO.getById(pid);
		
		Optional<Product> pp1=pDAO.findById(pid);
		
		if(pp1.isPresent()) {
			pp2=pp1.get();
		}
		else {
			throw new ProductNotExistException("product not found for given id "+pid);
		}
		
		return pp2;
	}

	@Override
	public Product editProductService(Product p) {
		// TODO Auto-generated method stub
		return pDAO.saveAndFlush(p);
	}

	@Override
	public String deleteProductService(String pid) {
		// TODO Auto-generated method stub
		pDAO.deleteById(pid);
		return "product deleted";
	}

	@Override
	public Employee loginEmp(String empid, String emppass) {
		// TODO Auto-generated method stub
		return pDAO.loginEmp(empid,emppass);
	}

}











