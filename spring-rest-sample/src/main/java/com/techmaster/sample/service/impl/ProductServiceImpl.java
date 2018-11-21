package com.techmaster.sample.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.techmaster.sample.model.Product;
import com.techmaster.sample.repository.ProductRepository;
import com.techmaster.sample.service.ProductService;

@Service
public class ProductServiceImpl implements ProductService {

	@Autowired
	ProductRepository repository;

	@Override
	public List<Product> getAll() {
		return repository.findAll();
	}

}
