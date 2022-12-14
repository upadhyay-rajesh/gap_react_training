package com.product.exception;

import java.util.Date;

import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.context.request.WebRequest;

@ControllerAdvice
public class ProductGlobalException {
	
	@ExceptionHandler(value = {Exception.class})
	public ResponseEntity<Object> handleProductException(Exception ex,WebRequest request){
		ErrorMessage er=new ErrorMessage(new Date(),ex.getMessage());
		
		return new ResponseEntity<>(er,new HttpHeaders(),HttpStatus.INTERNAL_SERVER_ERROR);
	}

}
