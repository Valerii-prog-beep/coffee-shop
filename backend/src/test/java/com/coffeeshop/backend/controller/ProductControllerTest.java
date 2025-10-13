// src/test/java/com/coffeeshop/backend/controller/ProductControllerTest.java
package com.coffeeshop.backend.controller;

import com.coffeeshop.backend.entity.Category;
import com.coffeeshop.backend.entity.Product;
import com.coffeeshop.backend.repository.ProductRepository;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;

import java.math.BigDecimal;
import java.util.Arrays;
import java.util.List;
import java.util.Optional;

import static org.mockito.Mockito.when;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

@WebMvcTest(ProductController.class)
class ProductControllerTest {

    @Autowired
    private MockMvc mockMvc;

    @MockBean
    private ProductRepository productRepository;

    @Autowired
    private ObjectMapper objectMapper;

    @Test
    void whenGetAllProducts_thenReturnAvailableProducts() throws Exception {
        // given
        Category category = new Category();
        category.setId(1);
        category.setName("Coffee");

        Product product1 = new Product();
        product1.setId(1);
        product1.setName("Espresso");
        product1.setPrice(new BigDecimal("2.50"));
        product1.setCategory(category);
        product1.setIsAvailable(true);

        Product product2 = new Product();
        product2.setId(2);
        product2.setName("Latte");
        product2.setPrice(new BigDecimal("3.50"));
        product2.setCategory(category);
        product2.setIsAvailable(true);

        List<Product> products = Arrays.asList(product1, product2);

        when(productRepository.findByIsAvailableTrue()).thenReturn(products);

        // when & then
        mockMvc.perform(get("/products")
                .contentType(MediaType.APPLICATION_JSON))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.length()").value(2))
                .andExpect(jsonPath("$[0].id").value(1))
                .andExpect(jsonPath("$[0].name").value("Espresso"))
                .andExpect(jsonPath("$[1].id").value(2))
                .andExpect(jsonPath("$[1].name").value("Latte"));
    }

    @Test
    void whenGetFeaturedProducts_thenReturnFeaturedProducts() throws Exception {
        // given
        Category category = new Category();
        category.setId(1);
        category.setName("Coffee");

        Product featuredProduct = new Product();
        featuredProduct.setId(1);
        featuredProduct.setName("Special Blend");
        featuredProduct.setPrice(new BigDecimal("4.50"));
        featuredProduct.setCategory(category);
        featuredProduct.setIsFeatured(true);
        featuredProduct.setIsAvailable(true);

        List<Product> featuredProducts = Arrays.asList(featuredProduct);

        when(productRepository.findByIsFeaturedTrueAndIsAvailableTrue()).thenReturn(featuredProducts);

        // when & then
        mockMvc.perform(get("/products/featured")
                .contentType(MediaType.APPLICATION_JSON))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.length()").value(1))
                .andExpect(jsonPath("$[0].id").value(1))
                .andExpect(jsonPath("$[0].name").value("Special Blend"))
                .andExpect(jsonPath("$[0].isFeatured").value(true))
                .andExpect(jsonPath("$[0].isAvailable").value(true));
    }

    @Test
    void whenGetProductsByCategory_thenReturnCategoryProducts() throws Exception {
        // given
        Category coffeeCategory = new Category();
        coffeeCategory.setId(1);
        coffeeCategory.setName("Coffee");

        Product product1 = new Product();
        product1.setId(1);
        product1.setName("Espresso");
        product1.setCategory(coffeeCategory);
        product1.setIsAvailable(true);

        Product product2 = new Product();
        product2.setId(2);
        product2.setName("Americano");
        product2.setCategory(coffeeCategory);
        product2.setIsAvailable(true);

        List<Product> coffeeProducts = Arrays.asList(product1, product2);

        when(productRepository.findByCategoryIdAndIsAvailableTrue(1)).thenReturn(coffeeProducts);

        // when & then
        mockMvc.perform(get("/products/category/1")
                .contentType(MediaType.APPLICATION_JSON))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.length()").value(2))
                .andExpect(jsonPath("$[0].name").value("Espresso"))
                .andExpect(jsonPath("$[1].name").value("Americano"));
    }

    @Test
    void whenGetProductById_thenReturnProduct() throws Exception {
        // given
        Category category = new Category();
        category.setId(1);
        category.setName("Coffee");

        Product product = new Product();
        product.setId(1);
        product.setName("Espresso");
        product.setDescription("Strong coffee");
        product.setPrice(new BigDecimal("2.50"));
        product.setCategory(category);
        product.setIsAvailable(true);

        when(productRepository.findById(1)).thenReturn(Optional.of(product));

        // when & then
        mockMvc.perform(get("/products/1")
                .contentType(MediaType.APPLICATION_JSON))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.id").value(1))
                .andExpect(jsonPath("$.name").value("Espresso"))
                .andExpect(jsonPath("$.description").value("Strong coffee"))
                .andExpect(jsonPath("$.price").value(2.50))
                .andExpect(jsonPath("$.isAvailable").value(true));
    }

    @Test
    void whenGetProductById_notFound_thenReturnNull() throws Exception {
        // given
        when(productRepository.findById(999)).thenReturn(Optional.empty());

        // when & then
        mockMvc.perform(get("/products/999")
                .contentType(MediaType.APPLICATION_JSON))
                .andExpect(status().isOk())
                .andExpect(content().string(""));
    }

    @Test
    void whenGetProductsByCategory_empty_thenReturnEmptyArray() throws Exception {
        // given
        when(productRepository.findByCategoryIdAndIsAvailableTrue(1)).thenReturn(Arrays.asList());

        // when & then
        mockMvc.perform(get("/products/category/1")
                .contentType(MediaType.APPLICATION_JSON))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.length()").value(0));
    }

    @Test
    void whenGetFeaturedProducts_empty_thenReturnEmptyArray() throws Exception {
        // given
        when(productRepository.findByIsFeaturedTrueAndIsAvailableTrue()).thenReturn(Arrays.asList());

        // when & then
        mockMvc.perform(get("/products/featured")
                .contentType(MediaType.APPLICATION_JSON))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.length()").value(0));
    }
}