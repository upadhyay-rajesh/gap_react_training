package com.product.entity;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class Employee {
	
	@Id
	private String empid;
	private String emppass;
	public String getEmpid() {
		return empid;
	}
	public void setEmpid(String empid) {
		this.empid = empid;
	}
	public String getEmppass() {
		return emppass;
	}
	public void setEmppass(String emppass) {
		this.emppass = emppass;
	}
	

}
