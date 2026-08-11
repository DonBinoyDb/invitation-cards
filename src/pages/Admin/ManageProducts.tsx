import React, { useState } from 'react';
import { useProducts } from '../../context/ProductContext';
import type { Product } from '../../data/products';
import { compressImage } from '../../utils/imageCompressor';
import { Plus, X, Upload, Box, DollarSign, Tag, Search, FileText, Package, Eye, EyeOff, Edit, Trash2, Layers, AlertCircle } from 'lucide-react';

const ManageProducts = () => {
  const { productsList, categories, addProduct, updateProduct, toggleVisibility, addCategory, removeCategory } = useProducts();
  const [isAdding, setIsAdding] = useState(false);
  const [editingProductId, setEditingProductId] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  
  // Form State
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState<string>(categories[0] || 'Wedding');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState('');
  const [gallery, setGallery] = useState<string[]>([]);
  const [uploadError, setUploadError] = useState<string | null>(null);
  const [size, setSize] = useState('Standard');
  const [material, setMaterial] = useState('Premium Cardstock');
  const [includes, setIncludes] = useState('Main card and envelope');

  // Category Management State
  const [newCategoryName, setNewCategoryName] = useState('');
  const [isManagingCategories, setIsManagingCategories] = useState(false);

  const openEditModal = (product: Product) => {
    setEditingProductId(product.id);
    setTitle(product.title);
    setCategory(product.category);
    setPrice(product.price.toString());
    setDescription(product.description);
    setImage(product.image);
    setGallery(product.gallery || (product.image ? [product.image] : []));
    setSize(product.details.size);
    setMaterial(product.details.material);
    setIncludes(product.details.includes);
    setIsAdding(true);
  };

  const closeForm = () => {
    setIsAdding(false);
    setEditingProductId(null);
    setTitle('');
    setPrice('');
    setDescription('');
    setImage('');
    setGallery([]);
    setUploadError(null);
    setCategory(categories[0] || 'Wedding');
  };

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    setUploadError(null);
    const file = e.target.files?.[0];
    if (file) {
      if (file.size > 5 * 1024 * 1024) { // 5MB limit
        setUploadError("Primary image is too large. Please upload an image smaller than 5MB.");
        return;
      }
      try {
        const compressedDataUrl = await compressImage(file, 1200, 1200, 0.8);
        setImage(compressedDataUrl);
        if (gallery.length === 0) {
          setGallery([compressedDataUrl]);
        }
      } catch (error) {
        console.error("Failed to compress primary image:", error);
        setUploadError("Failed to process the primary image. Please try a different file.");
      }
    }
  };

  const handleGalleryUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    setUploadError(null);
    const files = e.target.files;
    if (files) {
      const validFiles = Array.from(files).filter(f => f.size <= 5 * 1024 * 1024);
      if (validFiles.length < files.length) {
        setUploadError("Some images were skipped because they exceed the 5MB size limit.");
      }

      const compressedImages = await Promise.all(
        validFiles.map(file => compressImage(file, 1200, 1200, 0.8).catch(err => {
          console.error("Failed to compress gallery image:", err);
          return null;
        }))
      );
      
      const validImages = compressedImages.filter(img => img !== null) as string[];
      if (validImages.length < validFiles.length) {
        setUploadError(prev => prev ? prev + " Additionally, some images failed to process." : "Some images failed to process. Please try different files.");
      }

      if (validImages.length > 0) {
        setGallery(prev => [...prev, ...validImages]);
      }
    }
  };

  const removeGalleryImage = (index: number) => {
    setGallery(prev => prev.filter((_, i) => i !== index));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (editingProductId) {
      updateProduct(editingProductId, {
        title,
        category,
        price: parseInt(price) || 0,
        image,
        gallery: gallery.length > 0 ? gallery : (image ? [image] : []),
        description,
        details: { size, material, includes }
      });
    } else {
      const newProduct: Product = {
        id: title.toLowerCase().replace(/[^a-z0-9]+/g, '-') + '-' + Date.now(),
        title,
        category,
        price: parseInt(price) || 0,
        image: image || 'https://images.unsplash.com/photo-1596443686812-2f45229eebc3?q=80&w=600&auto=format&fit=crop',
        gallery: gallery.length > 0 ? gallery : (image ? [image] : ['https://images.unsplash.com/photo-1596443686812-2f45229eebc3?q=80&w=600&auto=format&fit=crop']),
        description,
        details: { size, material, includes }
      };
      addProduct(newProduct);
    }
    closeForm();
  };

  const handleAddCategory = (e: React.FormEvent) => {
    e.preventDefault();
    if (newCategoryName.trim()) {
      addCategory(newCategoryName.trim());
      setNewCategoryName('');
    }
  };

  const filteredProducts = productsList.filter(p => p.title.toLowerCase().includes(searchQuery.toLowerCase()));

  return (
    <div className="space-y-8">
      {/* Header Actions */}
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4 bg-white p-6 rounded-xl shadow-sm border border-gray-100">
        <div className="relative flex-1 w-full max-w-xl">
          <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
          <input 
            type="text" 
            placeholder="Search products..." 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-dark/20 focus:border-brand-dark transition-all"
          />
        </div>
        <div className="flex flex-wrap gap-3 w-full lg:w-auto">
          <button 
            onClick={() => setIsManagingCategories(!isManagingCategories)}
            className="flex-1 lg:flex-none flex items-center justify-center gap-2 font-bold text-xs px-6 py-3 uppercase tracking-widest rounded-lg transition-colors shadow-sm bg-gray-100 text-gray-700 hover:bg-gray-200"
          >
            <Layers size={16} /> Categories
          </button>
          <button 
            onClick={() => {
              if (isAdding) closeForm();
              else { setIsAdding(true); setEditingProductId(null); }
            }}
            className={`flex-1 lg:flex-none flex items-center justify-center gap-2 font-bold text-xs px-6 py-3 uppercase tracking-widest rounded-lg transition-colors shadow-sm ${
              isAdding && !editingProductId ? 'bg-red-50 text-red-600 hover:bg-red-100' : 'bg-brand-dark text-white hover:bg-black'
            }`}
          >
            {isAdding && !editingProductId ? <><X size={16} /> Cancel</> : <><Plus size={16} /> Add Product</>}
          </button>
        </div>
      </div>

      {/* Category Management Area */}
      {isManagingCategories && (
        <div className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden animate-fade-in-up p-6">
          <h4 className="font-bold text-gray-800 uppercase tracking-wider text-sm flex items-center gap-2 mb-6">
            <Layers size={18} className="text-brand-dark" /> Manage Categories
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <form onSubmit={handleAddCategory} className="flex gap-3">
                <input 
                  type="text" 
                  value={newCategoryName}
                  onChange={e => setNewCategoryName(e.target.value)}
                  placeholder="New category name..."
                  className="flex-1 p-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-dark/20"
                />
                <button type="submit" className="bg-brand-dark text-white font-bold text-xs px-6 py-3 uppercase rounded-lg hover:bg-black transition-colors">
                  Add
                </button>
              </form>
            </div>
            <div>
              <ul className="space-y-2 max-h-[200px] overflow-y-auto pr-2">
                {categories.map(c => (
                  <li key={c} className="flex justify-between items-center p-3 bg-gray-50 border border-gray-100 rounded-lg">
                    <span className="font-medium text-sm text-gray-800">{c}</span>
                    <button onClick={() => removeCategory(c)} className="text-gray-400 hover:text-red-500 transition-colors p-1">
                      <Trash2 size={16} />
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}

      {/* Product Form Modal (Add/Edit) */}
      {isAdding && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-white w-full max-w-4xl rounded-2xl shadow-2xl overflow-hidden my-8 relative animate-fade-in-up">
            <div className="bg-gray-50 px-8 py-5 border-b border-gray-100 flex justify-between items-center sticky top-0 z-10">
              <h4 className="font-bold text-gray-800 uppercase tracking-wider text-sm flex items-center gap-2">
                {editingProductId ? <Edit size={18} className="text-brand-dark"/> : <Box size={18} className="text-brand-dark" />} 
                {editingProductId ? 'Edit Product' : 'Create New Product'}
              </h4>
              <button onClick={closeForm} className="text-gray-400 hover:text-red-500 bg-white p-2 rounded-full shadow-sm">
                <X size={20} />
              </button>
            </div>
            
            <form onSubmit={handleSubmit} className="flex flex-col max-h-[70vh]">
              <div className="p-8 overflow-y-auto flex-1">
                {uploadError && (
                  <div className="mb-6 bg-red-50 text-red-600 p-4 rounded-lg text-sm font-bold border border-red-100 flex items-center gap-3 animate-fade-in-up">
                    <AlertCircle size={20} className="shrink-0" /> 
                    <p>{uploadError}</p>
                  </div>
                )}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  {/* Image Upload Area */}
                <div className="lg:col-span-1 space-y-4">
                  <div>
                    <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Primary Image</label>
                    <div className="border-2 border-dashed border-gray-300 rounded-xl bg-gray-50 flex flex-col items-center justify-center p-6 text-center cursor-pointer hover:bg-gray-100 hover:border-gray-400 transition-all relative overflow-hidden group aspect-[3/4]">
                      <input type="file" accept="image/*" onChange={handleImageUpload} className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10" />
                      {image ? (
                        <img src={image} alt="Preview" className="absolute inset-0 w-full h-full object-cover" />
                      ) : (
                        <>
                          <Upload size={32} className="text-gray-400 mb-3 group-hover:text-brand-dark transition-colors" />
                          <p className="text-sm font-medium text-gray-600">Primary Image</p>
                        </>
                      )}
                      {image && (
                        <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                          <p className="text-white font-bold text-sm tracking-wider uppercase flex items-center gap-2"><Upload size={16} /> Change</p>
                        </div>
                      )}
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Gallery Images</label>
                    <div className="grid grid-cols-3 gap-2">
                      {gallery.map((img, idx) => (
                        <div key={idx} className="aspect-square relative rounded-lg overflow-hidden border border-gray-200 group">
                          <img src={img} alt={`Gallery ${idx}`} className="w-full h-full object-cover" />
                          <button 
                            type="button" 
                            onClick={() => removeGalleryImage(idx)}
                            className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity text-white"
                          >
                            <Trash2 size={16} />
                          </button>
                        </div>
                      ))}
                      <div className="aspect-square rounded-lg border-2 border-dashed border-gray-300 bg-gray-50 flex items-center justify-center relative hover:bg-gray-100 transition-colors cursor-pointer">
                        <input type="file" accept="image/*" multiple onChange={handleGalleryUpload} className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10" />
                        <Plus size={20} className="text-gray-400" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Form Fields */}
                <div className="lg:col-span-2 space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2 flex items-center gap-1"><Tag size={14} /> Title</label>
                      <input required type="text" value={title} onChange={e => setTitle(e.target.value)} placeholder="e.g. Royal Emerald Suite" className="w-full p-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-dark/20 focus:border-brand-dark transition-all" />
                    </div>
                    
                    <div>
                      <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2 flex items-center gap-1"><DollarSign size={14} /> Price (₹)</label>
                      <input required type="number" value={price} onChange={e => setPrice(e.target.value)} placeholder="0.00" className="w-full p-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-dark/20 focus:border-brand-dark transition-all" />
                    </div>

                    <div className="md:col-span-2">
                      <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2 flex items-center gap-1"><Box size={14} /> Category</label>
                      <select value={category} onChange={e => setCategory(e.target.value)} className="w-full p-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-dark/20 focus:border-brand-dark transition-all appearance-none cursor-pointer">
                        {categories.map(c => (
                          <option key={c} value={c}>{c}</option>
                        ))}
                      </select>
                    </div>

                    <div className="md:col-span-2">
                      <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2 flex items-center gap-1"><FileText size={14} /> Description</label>
                      <textarea required value={description} onChange={e => setDescription(e.target.value)} placeholder="Describe the product details..." className="w-full p-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-dark/20 focus:border-brand-dark transition-all resize-none" rows={3}></textarea>
                    </div>

                    <div className="md:col-span-2 grid grid-cols-1 md:grid-cols-3 gap-6 pt-4 border-t border-gray-100">
                      <div>
                        <label className="block text-[10px] font-bold text-gray-500 uppercase tracking-wider mb-2">Dimensions (Size)</label>
                        <input required type="text" value={size} onChange={e => setSize(e.target.value)} placeholder="e.g. Standard" className="w-full p-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-dark/20 focus:border-brand-dark transition-all text-sm" />
                      </div>
                      <div>
                        <label className="block text-[10px] font-bold text-gray-500 uppercase tracking-wider mb-2">Paper & Material</label>
                        <input required type="text" value={material} onChange={e => setMaterial(e.target.value)} placeholder="e.g. Premium Cardstock" className="w-full p-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-dark/20 focus:border-brand-dark transition-all text-sm" />
                      </div>
                      <div>
                        <label className="block text-[10px] font-bold text-gray-500 uppercase tracking-wider mb-2">What's Included</label>
                        <input required type="text" value={includes} onChange={e => setIncludes(e.target.value)} placeholder="e.g. Main card and envelope" className="w-full p-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-dark/20 focus:border-brand-dark transition-all text-sm" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              </div>
              <div className="bg-gray-50 px-8 py-5 border-t border-gray-100 flex justify-end gap-4 sticky bottom-0 z-10">
                <button type="button" onClick={closeForm} className="px-6 py-3 font-bold text-xs uppercase tracking-widest text-gray-500 hover:text-gray-800 transition-colors">
                  Cancel
                </button>
                <button type="submit" className="bg-brand-dark text-white font-bold text-xs px-8 py-3 uppercase tracking-widest hover:bg-black transition-colors rounded-lg shadow-md flex items-center gap-2">
                  {editingProductId ? <><Edit size={16}/> Save Changes</> : <><Plus size={16} /> Save Product</>}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 lg:p-8">
        <div className="flex justify-between items-center mb-6">
          <h4 className="font-bold uppercase tracking-wider text-gray-800">Inventory Directory <span className="text-gray-400 font-normal ml-2">({filteredProducts.length} Items)</span></h4>
        </div>
        
        {filteredProducts.length === 0 ? (
          <div className="text-center py-12 text-gray-500">
            <Package size={48} className="mx-auto text-gray-300 mb-4" />
            <p className="text-lg">No products found matching your search.</p>
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 lg:gap-6">
            {filteredProducts.map(product => (
              <div key={product.id} className={`group flex flex-col bg-white border rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300 relative ${product.hidden ? 'border-dashed border-gray-300 opacity-60 grayscale' : 'border-gray-100'}`}>
                
                {/* Actions overlay */}
                <div className="absolute top-2 right-2 flex flex-col gap-2 z-10">
                  <button 
                    onClick={(e) => { e.stopPropagation(); toggleVisibility(product.id); }}
                    className={`p-2 rounded-full shadow-md backdrop-blur-sm transition-all ${product.hidden ? 'bg-red-500 text-white' : 'bg-white/90 text-gray-600 hover:text-brand-dark hover:bg-white'}`}
                    title={product.hidden ? "Unhide Product" : "Hide Product"}
                  >
                    {product.hidden ? <EyeOff size={14} /> : <Eye size={14} />}
                  </button>
                </div>

                {/* Edit Click Target */}
                <div 
                  className="cursor-pointer flex-1 flex flex-col"
                  onClick={() => openEditModal(product)}
                >
                  <div className="aspect-[3/4] bg-gray-100 overflow-hidden relative">
                    <img src={product.image} alt={product.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    {product.hidden && (
                      <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                        <span className="bg-red-500 text-white text-xs font-bold px-3 py-1 uppercase tracking-widest rounded-full shadow-lg">Hidden</span>
                      </div>
                    )}
                    {!product.hidden && (
                      <div className="absolute top-2 left-2 bg-white/90 backdrop-blur-sm px-2 py-1 rounded text-[10px] font-bold uppercase tracking-wider text-brand-dark shadow-sm">
                        {product.category}
                      </div>
                    )}
                  </div>
                  <div className="p-4 flex flex-col flex-1">
                    <p className="font-bold text-gray-800 text-sm mb-1 line-clamp-1 group-hover:text-brand-dark transition-colors" title={product.title}>{product.title}</p>
                    <p className="text-brand-gold font-bold mt-auto">₹{product.price.toLocaleString()}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ManageProducts;
