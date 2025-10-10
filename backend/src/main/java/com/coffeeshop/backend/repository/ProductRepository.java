package com.coffeeshop.backend.repository;

import com.coffeeshop.backend.entity.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import java.util.List;

@Repository
public interface ProductRepository extends JpaRepository<Product, Integer> {
    
    List<Product> findByIsAvailableTrue();
    
    List<Product> findByIsFeaturedTrueAndIsAvailableTrue();
    
    List<Product> findByCategoryIdAndIsAvailableTrue(Integer categoryId);
    
    List<Product> findByCategoryIdAndIsAvailableTrueOrderByPriceAsc(Integer categoryId);
    
    @Query("SELECT p FROM Product p WHERE p.isAvailable = true ORDER BY p.createdAt DESC")
    List<Product> findAvailableProductsOrderByNewest();
}