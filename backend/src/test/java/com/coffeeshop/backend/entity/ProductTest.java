// src/test/java/com/coffeeshop/backend/entity/ProductTest.java
package com.coffeeshop.backend.entity;

import org.junit.jupiter.api.Test;
import java.math.BigDecimal;
import static org.junit.jupiter.api.Assertions.*;

class ProductTest {
    
    @Test
    void testProductCreation() {
        // Создаем категорию
        Category category = new Category();
        category.setId(1);
        category.setName("Coffee");
        category.setDescription("Hot coffee drinks");
        
        // Создаем продукт
        Product product = new Product();
        product.setId(1);
        product.setName("Espresso");
        product.setDescription("Strong black coffee");
        product.setPrice(new BigDecimal("2.50"));
        product.setImageUrl("/images/espresso.png");
        product.setCategory(category);
        product.setIsAvailable(true);
        product.setIsFeatured(true);
        product.setPreparationTime(3);
        product.setCalories(5);
        product.setIngredients("Coffee beans, Water");
        
        // Проверяем все поля
        assertEquals(1, product.getId());
        assertEquals("Espresso", product.getName());
        assertEquals("Strong black coffee", product.getDescription());
        assertEquals(new BigDecimal("2.50"), product.getPrice());
        assertEquals("/images/espresso.png", product.getImageUrl());
        assertEquals(category, product.getCategory());
        assertTrue(product.getIsAvailable());
        assertTrue(product.getIsFeatured());
        assertEquals(3, product.getPreparationTime());
        assertEquals(5, product.getCalories());
        assertEquals("Coffee beans, Water", product.getIngredients());
        assertNotNull(product.getCreatedAt());
    }
    
    @Test
    void testProductEqualsAndHashCode() {
        Category category = new Category();
        category.setId(1);
        category.setName("Coffee");
        
        Product product1 = new Product();
        product1.setId(1);
        product1.setName("Latte");
        product1.setPrice(new BigDecimal("3.50"));
        product1.setCategory(category);
        
        Product product2 = new Product();
        product2.setId(1);
        product2.setName("Latte");
        product2.setPrice(new BigDecimal("3.50"));
        product2.setCategory(category);
        
        assertEquals(product1, product2);
        assertEquals(product1.hashCode(), product2.hashCode());
    }
    
    @Test
    void testProductNotEquals() {
        Category category = new Category();
        category.setId(1);
        category.setName("Coffee");
        
        Product product1 = new Product();
        product1.setId(1);
        product1.setName("Espresso");
        product1.setPrice(new BigDecimal("2.50"));
        product1.setCategory(category);
        
        Product product2 = new Product();
        product2.setId(2);
        product2.setName("Latte");
        product2.setPrice(new BigDecimal("3.50"));
        product2.setCategory(category);
        
        assertNotEquals(product1, product2);
    }
    
    @Test
    void testDefaultValues() {
        Product product = new Product();
        product.setId(1);
        product.setName("Test Product");
        product.setPrice(new BigDecimal("1.00"));
        
        // Создаем минимальную категорию
        Category category = new Category();
        category.setId(1);
        category.setName("Test Category");
        product.setCategory(category);
        
        // Проверяем значения по умолчанию
        assertTrue(product.getIsAvailable());
        assertFalse(product.getIsFeatured());
        assertEquals(5, product.getPreparationTime());
        assertNotNull(product.getCreatedAt());
    }
    
    @Test
    void testProductWithDifferentPrices() {
        Category category = new Category();
        category.setId(1);
        category.setName("Coffee");
        
        Product cheapProduct = new Product();
        cheapProduct.setId(1);
        cheapProduct.setName("Black Coffee");
        cheapProduct.setPrice(new BigDecimal("1.50"));
        cheapProduct.setCategory(category);
        
        Product expensiveProduct = new Product();
        expensiveProduct.setId(2);
        expensiveProduct.setName("Specialty Coffee");
        expensiveProduct.setPrice(new BigDecimal("5.75"));
        expensiveProduct.setCategory(category);
        
        assertEquals(new BigDecimal("1.50"), cheapProduct.getPrice());
        assertEquals(new BigDecimal("5.75"), expensiveProduct.getPrice());
    }
}
