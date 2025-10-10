package com.coffeeshop.backend.repository;

import com.coffeeshop.backend.entity.Category;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import java.util.List;

@Repository
public interface CategoryRepository extends JpaRepository<Category, Integer> {
    
    List<Category> findByIsActiveTrue();
    
    List<Category> findByIsActiveTrueOrderByDisplayOrderAsc();
    
    @Query("SELECT c FROM Category c WHERE c.isActive = true ORDER BY c.displayOrder ASC")
    List<Category> findActiveCategoriesOrdered();
}