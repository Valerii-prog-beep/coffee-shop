import { useState, useEffect } from 'react';
import type{ Product, Category } from '../types';
import { api } from '../services/api';

export const useProducts = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [featuredProducts, setFeaturedProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const [categoriesData, productsData, featuredData] = await Promise.all([
          api.getCategories(),
          api.getProducts(),
          api.getFeaturedProducts()
        ]);
        
        setCategories(categoriesData);
        setProducts(productsData);
        setFeaturedProducts(featuredData);
        setError(null);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to fetch data');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return { products, categories, featuredProducts, loading, error };
};