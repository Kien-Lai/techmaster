package com.techmaster.sample.service;

import java.util.List;

import com.techmaster.sample.model.Product;

public interface ProductService {

	List<Product> getAll();
	
	void create(Product product);

}
