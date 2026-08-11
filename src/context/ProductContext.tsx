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
      // Fallback to initial products if DB fails
      setProductsList([...initialProducts]);
      return;
    }

    const dbProducts = (data || []) as Product[];
    
    // Merge hardcoded initialProducts with dbProducts
    // dbProducts override initialProducts if they have the same ID
    const mergedProducts = [...initialProducts];
    
    for (const dbP of dbProducts) {
      const index = mergedProducts.findIndex(p => p.id === dbP.id);
      if (index !== -1) {
         mergedProducts[index] = dbP; // Override hardcoded with DB version
      } else {
         mergedProducts.unshift(dbP); // New product from DB, add to top
      }
    }
    
    setProductsList(mergedProducts);
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
    const existingProduct = productsList.find(p => p.id === id);
    if (!existingProduct) return;
    
    const updatedProduct = { ...existingProduct, ...updates };

    // Optimistic UI update
    setProductsList(prev => prev.map(p => p.id === id ? updatedProduct : p));
    
    // Upsert to DB: If it's a hardcoded product being edited for the first time, it inserts. Otherwise updates.
    const { error } = await supabase.from('products').upsert({
      id: updatedProduct.id,
      title: updatedProduct.title,
      category: updatedProduct.category,
      price: updatedProduct.price,
      image: updatedProduct.image,
      gallery: updatedProduct.gallery,
      description: updatedProduct.description,
      details: updatedProduct.details,
      hidden: updatedProduct.hidden || false
    });

    if (error) {
      console.error("Failed to update product", error);
      await fetchProducts(); // Revert on failure
    }
  };

  const toggleVisibility = async (id: string) => {
    const product = productsList.find(p => p.id === id);
    if (!product) return;
    
    const newHiddenStatus = !product.hidden;
    const updatedProduct = { ...product, hidden: newHiddenStatus };
    
    // Optimistic UI update
    setProductsList(prev => prev.map(p => p.id === id ? updatedProduct : p));

    // Upsert to ensure hardcoded products can be hidden and saved to DB
    const { error } = await supabase.from('products').upsert({
      id: updatedProduct.id,
      title: updatedProduct.title,
      category: updatedProduct.category,
      price: updatedProduct.price,
      image: updatedProduct.image,
      gallery: updatedProduct.gallery,
      description: updatedProduct.description,
      details: updatedProduct.details,
      hidden: updatedProduct.hidden
    });

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
