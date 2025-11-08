import type{ Product, Category } from '../types';

const API_BASE = '/api';

export const api = {
  // Получить все категории
  getCategories: async (): Promise<Category[]> => {
    const response = await fetch(`${API_BASE}/categories`);
    if (!response.ok) throw new Error('Failed to fetch categories');
    return await response.json();
  },

  // Получить все продукты
  getProducts: async (): Promise<Product[]> => {
    const response = await fetch(`${API_BASE}/products`);
    if (!response.ok) throw new Error('Failed to fetch products');
    return await response.json();
  },

  // Получить популярные продукты
  getFeaturedProducts: async (): Promise<Product[]> => {
    const response = await fetch(`${API_BASE}/products/featured`);
    if (!response.ok) throw new Error('Failed to fetch featured products');
    return await response.json();
  },

  // Получить продукты по категории
  getProductsByCategory: async (categoryId: number): Promise<Product[]> => {
    const response = await fetch(`${API_BASE}/products/category/${categoryId}`);
    if (!response.ok) throw new Error('Failed to fetch category products');
    return await response.json();
  }
};