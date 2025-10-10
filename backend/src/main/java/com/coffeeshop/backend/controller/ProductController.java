package com.coffeeshop.backend.controller;

import com.coffeeshop.backend.entity.Product;
import com.coffeeshop.backend.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/products")
@CrossOrigin(origins = "http://localhost:5175")
public class ProductController {
    
    @Autowired
    private ProductRepository productRepository;
    
    @GetMapping
    public List<Product> getAllProducts() {
        return productRepository.findByIsAvailableTrue();
    }
    
    @GetMapping("/featured")
    public List<Product> getFeaturedProducts() {
        return productRepository.findByIsFeaturedTrueAndIsAvailableTrue();
    }
    
    @GetMapping("/category/{categoryId}")
    public List<Product> getProductsByCategory(@PathVariable Integer categoryId) {
        return productRepository.findByCategoryIdAndIsAvailableTrue(categoryId);
    }
    
    @GetMapping("/{id}")
    public Product getProductById(@PathVariable Integer id) {
        return productRepository.findById(id).orElse(null);
    }
}