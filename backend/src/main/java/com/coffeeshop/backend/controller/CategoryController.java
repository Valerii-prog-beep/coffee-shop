package com.coffeeshop.backend.controller;

import com.coffeeshop.backend.entity.Category;
import com.coffeeshop.backend.repository.CategoryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/categories")
@CrossOrigin(origins = "http://localhost:5175") // Для фронтенда
public class CategoryController {
    
    @Autowired
    private CategoryRepository categoryRepository;
    
    @GetMapping
    public List<Category> getAllCategories() {
        return categoryRepository.findActiveCategoriesOrdered();
    }
    
    @GetMapping("/{id}")
    public Category getCategoryById(@PathVariable Integer id) {
        return categoryRepository.findById(id).orElse(null);
    }
}
