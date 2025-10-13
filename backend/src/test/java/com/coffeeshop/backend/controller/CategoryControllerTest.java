// src/test/java/com/coffeeshop/backend/controller/CategoryControllerTest.java
package com.coffeeshop.backend.controller;

import com.coffeeshop.backend.entity.Category;
import com.coffeeshop.backend.repository.CategoryRepository;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;

import java.util.Arrays;
import java.util.List;
import java.util.Optional;

import static org.mockito.Mockito.when;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

@WebMvcTest(CategoryController.class)
class CategoryControllerTest {

    @Autowired
    private MockMvc mockMvc;

    @MockBean
    private CategoryRepository categoryRepository;

    @Autowired
    private ObjectMapper objectMapper;

    @Test
    void whenGetAllCategories_thenReturnOrderedActiveCategories() throws Exception {
        // given
        Category category1 = new Category();
        category1.setId(1);
        category1.setName("Coffee");
        category1.setDisplayOrder(1);
        category1.setIsActive(true);

        Category category2 = new Category();
        category2.setId(2);
        category2.setName("Tea");
        category2.setDisplayOrder(2);
        category2.setIsActive(true);

        List<Category> categories = Arrays.asList(category1, category2);

        when(categoryRepository.findActiveCategoriesOrdered()).thenReturn(categories);

        // when & then
        mockMvc.perform(get("/categories")
                .contentType(MediaType.APPLICATION_JSON))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.length()").value(2))
                .andExpect(jsonPath("$[0].id").value(1))
                .andExpect(jsonPath("$[0].name").value("Coffee"))
                .andExpect(jsonPath("$[1].id").value(2))
                .andExpect(jsonPath("$[1].name").value("Tea"));
    }

    @Test
    void whenGetCategoryById_thenReturnCategory() throws Exception {
        // given
        Category category = new Category();
        category.setId(1);
        category.setName("Coffee");
        category.setDescription("Hot coffee drinks");
        category.setIsActive(true);

        when(categoryRepository.findById(1)).thenReturn(Optional.of(category));

        // when & then
        mockMvc.perform(get("/categories/1")
                .contentType(MediaType.APPLICATION_JSON))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.id").value(1))
                .andExpect(jsonPath("$.name").value("Coffee"))
                .andExpect(jsonPath("$.description").value("Hot coffee drinks"))
                .andExpect(jsonPath("$.isActive").value(true));
    }

    @Test
    void whenGetCategoryById_notFound_thenReturnNull() throws Exception {
        // given
        when(categoryRepository.findById(999)).thenReturn(Optional.empty());

        // when & then
        mockMvc.perform(get("/categories/999")
                .contentType(MediaType.APPLICATION_JSON))
                .andExpect(status().isOk())
                .andExpect(content().string(""));
    }

    @Test
    void whenGetAllCategories_emptyList_thenReturnEmptyArray() throws Exception {
        // given
        when(categoryRepository.findActiveCategoriesOrdered()).thenReturn(Arrays.asList());

        // when & then
        mockMvc.perform(get("/categories")
                .contentType(MediaType.APPLICATION_JSON))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.length()").value(0));
    }
}