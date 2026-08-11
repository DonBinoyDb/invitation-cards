import React, { createContext, useContext, useState, useEffect } from 'react';
import type { Product } from '../data/products';
import { products as initialProducts } from '../data/products';
import { supabase } from '../lib/supabaseClient';

interface ProductContextType {
  productsList: Product[];
  categories: string[];
  addProduct: (product: Product) => Promise<void>;
  updateProduct: (id: string, updates: Partial<Product>) => Promise<void>;
  toggleVisibility: (id: string) => Promise<void>;
  addCategory: (category: string) => Promise<void>;
  removeCategory: (category: string) => Promise<void>;
  isLoading: boolean;
}

const ProductContext = createContext<ProductContextType | undefined>(undefined);

export const ProductProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [productsList, setProductsList] = useState<Product[]>([]);
  const [categories, setCategories] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchCategories = async () => {
    const { data, error } = await supabase.from('categories').select('name');
    if (!error && data) {
      setCategories(data.map(c => c.name));
    } else {
      console.error("Failed to fetch categories", error);
    }
  };

  const fetchProducts = async () => {
    const { data, error } = await supabase.from('products').select('*');
    
    if (error) {
      console.error("Failed to fetch products", error);
      return;
    }

    if (data && data.length === 0) {
      console.log("Database is empty. Seeding initial products...");
      // Seed the database with initial products
      for (const p of initialProducts) {
        // Ensure category exists first
        await supabase.from('categories').insert({ name: p.category });
        
        await supabase.from('products').insert({
          id: p.id,
          title: p.title,
          category: p.category,
          price: p.price,
          image: p.image,
          gallery: p.gallery,
          description: p.description,
          details: p.details,
          hidden: p.hidden || false
        });
      }
      // Re-fetch after seeding
      const reFetch = await supabase.from('products').select('*');
      if (reFetch.data) setProductsList(reFetch.data as Product[]);
    } else {
      setProductsList(data as Product[]);
    }
  };

  useEffect(() => {
    const loadData = async () => {
      setIsLoading(true);
      await fetchCategories();
      await fetchProducts();
      setIsLoading(false);
    };
    loadData();
  }, []);

  const addProduct = async (product: Product) => {
    // Optimistic UI update
    setProductsList(prev => [product, ...prev]);
    
    const { error } = await supabase.from('products').insert({
      id: product.id,
      title: product.title,
      category: product.category,
      price: product.price,
      image: product.image,
      gallery: product.gallery,
      description: product.description,
      details: product.details,
      hidden: product.hidden || false
    });

    if (error) {
      console.error("Failed to add product", error);
      await fetchProducts(); // Revert on failure
    }
  };

  const updateProduct = async (id: string, updates: Partial<Product>) => {
    // Optimistic UI update
    setProductsList(prev => prev.map(p => p.id === id ? { ...p, ...updates } : p));
    
    const { error } = await supabase.from('products').update(updates).eq('id', id);
    if (error) {
      console.error("Failed to update product", error);
      await fetchProducts(); // Revert on failure
    }
  };

  const toggleVisibility = async (id: string) => {
    const product = productsList.find(p => p.id === id);
    if (!product) return;
    
    const newHiddenStatus = !product.hidden;
    
    // Optimistic UI update
    setProductsList(prev => prev.map(p => p.id === id ? { ...p, hidden: newHiddenStatus } : p));

    const { error } = await supabase.from('products').update({ hidden: newHiddenStatus }).eq('id', id);
    if (error) {
      console.error("Failed to toggle visibility", error);
      await fetchProducts(); // Revert on failure
    }
  };

  const addCategory = async (category: string) => {
    if (categories.includes(category)) return;

    // Optimistic UI update
    setCategories(prev => [...prev, category]);

    const { error } = await supabase.from('categories').insert({ name: category });
    if (error) {
      console.error("Failed to add category", error);
      await fetchCategories(); // Revert on failure
    }
  };

  const removeCategory = async (category: string) => {
    // Optimistic UI update
    setCategories(prev => prev.filter(c => c !== category));

    const { error } = await supabase.from('categories').delete().eq('name', category);
    if (error) {
      console.error("Failed to remove category", error);
      await fetchCategories(); // Revert on failure
    }
  };

  return (
    <ProductContext.Provider value={{ productsList, categories, addProduct, updateProduct, toggleVisibility, addCategory, removeCategory, isLoading }}>
      {children}
    </ProductContext.Provider>
  );
};

export const useProducts = () => {
  const context = useContext(ProductContext);
  if (context === undefined) {
    throw new Error('useProducts must be used within a ProductProvider');
  }
  return context;
};
