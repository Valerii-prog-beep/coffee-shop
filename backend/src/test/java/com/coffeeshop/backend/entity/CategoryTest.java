package com.coffeeshop.backend.entity;

import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.*;

class CategoryTest {
    
    @Test
    void testCategoryCreation() {
        Category category = new Category();
        category.setId(1);
        category.setName("Coffee");
        category.setDescription("Hot coffee drinks");
        category.setImageUrl("/images/coffee.png");
        category.setDisplayOrder(1);
        category.setIsActive(true);
        
        assertEquals(1, category.getId());
        assertEquals("Coffee", category.getName());
        assertEquals("Hot coffee drinks", category.getDescription());
        assertEquals("/images/coffee.png", category.getImageUrl());
        assertEquals(1, category.getDisplayOrder());
        assertTrue(category.getIsActive());
    }
    
    @Test
    void testCategoryEqualsAndHashCode() {
        Category category1 = new Category();
        category1.setId(1);
        category1.setName("Coffee");
        category1.setDescription("Hot drinks");
        
        Category category2 = new Category();
        category2.setId(1);
        category2.setName("Coffee");
        category2.setDescription("Hot drinks");
        
        // Lombok @Data автоматически генерирует equals и hashCode
        assertEquals(category1, category2);
        assertEquals(category1.hashCode(), category2.hashCode());
    }
    
    @Test
    void testCategoryNotEquals() {
        Category category1 = new Category();
        category1.setId(1);
        category1.setName("Coffee");
        
        Category category2 = new Category();
        category2.setId(2);
        category2.setName("Tea");
        
        assertNotEquals(category1, category2);
    }
    
    @Test
    void testDefaultValues() {
        Category category = new Category();
        category.setId(1);
        category.setName("Coffee");
        
        assertEquals(0, category.getDisplayOrder());  // default value
        assertTrue(category.getIsActive());           // default value
        assertNotNull(category.getCreatedAt());       // auto-set value
    }
}
