package com.product.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.product.entity.Employee;
import com.product.entity.Product;

@Repository
public interface ProductDAOInterface extends JpaRepository<Product, String>{

	@Query("from com.product.entity.Employee ee where ee.empid=:ee1 and ee.emppass=:ee2")
	Employee loginEmp(@Param("ee1")String empid, @Param("ee2")String emppass);

}
