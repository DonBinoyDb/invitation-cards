import { useState } from 'react';
import { useCMS } from '../../context/CMSContext';
import { useProducts } from '../../context/ProductContext';
import { LayoutTemplate, Type, Plus, Trash2, Library, Sparkles } from 'lucide-react';

const ManageLandingPage = () => {
  const { 
    heroHeading, 
    setHeroHeading, 
    heroSubtext, 
    setHeroSubtext,
    ourCollectionIds,
    newArrivalIds,
    addToCollection,
    removeFromCollection
  } = useCMS();
  
  const { productsList } = useProducts();
  const [selectedProduct, setSelectedProduct] = useState('');
  const [targetSection, setTargetSection] = useState<'ourCollection'|'newArrivals'>('ourCollection');

  const handleAddProduct = () => {
    if (selectedProduct) {
      addToCollection(targetSection, selectedProduct);
      setSelectedProduct('');
    }
  };

  const getProductInfo = (id: string) => {
    return productsList.find(p => p.id === id);
  };

  return (
    <div className="space-y-8 animate-fade-in-up">
      {/* Hero Section Texts */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="bg-gray-50 px-8 py-5 border-b border-gray-100">
          <h4 className="font-bold text-gray-800 uppercase tracking-wider text-sm flex items-center gap-2">
            <Type size={18} className="text-brand-dark" /> Hero Section Content
          </h4>
        </div>
        <div className="p-8 space-y-6">
          <div>
            <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Main Heading (Use \n for new line)</label>
            <input 
              type="text" 
              value={heroHeading}
              onChange={(e) => setHeroHeading(e.target.value)}
              className="w-full p-4 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-dark/20 focus:border-brand-dark transition-all font-sans text-lg"
            />
          </div>
          <div>
            <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Subtext</label>
            <textarea 
              value={heroSubtext}
              onChange={(e) => setHeroSubtext(e.target.value)}
              className="w-full p-4 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-dark/20 focus:border-brand-dark transition-all font-sans resize-none"
              rows={3}
            />
          </div>
        </div>
      </div>

      {/* Feature Products to Sections */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="bg-gray-50 px-8 py-5 border-b border-gray-100">
          <h4 className="font-bold text-gray-800 uppercase tracking-wider text-sm flex items-center gap-2">
            <LayoutTemplate size={18} className="text-brand-dark" /> Featured Sections
          </h4>
        </div>
        
        <div className="p-8">
          {/* Add to section controls */}
          <div className="flex flex-col md:flex-row gap-4 items-end mb-10 bg-gray-50 p-6 border border-gray-100 rounded-xl">
            <div className="flex-1 w-full">
              <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Select Product to Feature</label>
              <select 
                value={selectedProduct} 
                onChange={e => setSelectedProduct(e.target.value)}
                className="w-full p-3 border border-gray-200 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-brand-dark/20 focus:border-brand-dark transition-all appearance-none cursor-pointer"
              >
                <option value="">-- Choose a product --</option>
                {productsList.map(p => (
                  <option key={p.id} value={p.id}>{p.title}</option>
                ))}
              </select>
            </div>
            <div className="flex-1 w-full">
              <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Target Section</label>
              <select 
                value={targetSection} 
                onChange={e => setTargetSection(e.target.value as any)}
                className="w-full p-3 border border-gray-200 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-brand-dark/20 focus:border-brand-dark transition-all appearance-none cursor-pointer"
              >
                <option value="ourCollection">Our Collection</option>
                <option value="newArrivals">New Arrivals</option>
              </select>
            </div>
            <button 
              onClick={handleAddProduct}
              disabled={!selectedProduct}
              className="w-full md:w-auto bg-brand-dark text-white font-bold text-xs px-8 py-3 uppercase tracking-widest hover:bg-black transition-colors disabled:opacity-50 h-[50px] rounded-lg shadow-sm flex items-center justify-center gap-2"
            >
              <Plus size={16} /> Add to Section
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Our Collection List */}
            <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
              <h5 className="font-bold mb-6 uppercase text-sm tracking-wide flex items-center gap-2 text-brand-dark">
                <Library size={18} /> Our Collection <span className="bg-brand-dark/10 text-brand-dark px-2 py-0.5 rounded-full text-xs">{ourCollectionIds.length}</span>
              </h5>
              <ul className="space-y-3">
                {ourCollectionIds.map(id => {
                  const p = getProductInfo(id);
                  if (!p) return null;
                  return (
                    <li key={id} className="flex justify-between items-center p-3 bg-white border border-gray-100 rounded-lg shadow-sm group">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-md overflow-hidden bg-gray-100 shrink-0">
                          <img src={p.image} className="w-full h-full object-cover" alt={p.title} />
                        </div>
                        <span className="text-sm font-bold text-gray-800 line-clamp-1">{p.title}</span>
                      </div>
                      <button 
                        onClick={() => removeFromCollection('ourCollection', id)}
                        className="text-gray-400 hover:text-red-500 p-2 rounded-md hover:bg-red-50 transition-colors opacity-0 group-hover:opacity-100"
                        title="Remove from section"
                      >
                        <Trash2 size={18} />
                      </button>
                    </li>
                  );
                })}
                {ourCollectionIds.length === 0 && (
                  <div className="text-center py-8 text-gray-400">
                    <Library size={32} className="mx-auto mb-3 opacity-50" />
                    <p className="text-sm">No custom products added.<br/>Default filtering logic will be used.</p>
                  </div>
                )}
              </ul>
            </div>

            {/* New Arrivals List */}
            <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
              <h5 className="font-bold mb-6 uppercase text-sm tracking-wide flex items-center gap-2 text-brand-dark">
                <Sparkles size={18} /> New Arrivals <span className="bg-brand-dark/10 text-brand-dark px-2 py-0.5 rounded-full text-xs">{newArrivalIds.length}</span>
              </h5>
              <ul className="space-y-3">
                {newArrivalIds.map(id => {
                  const p = getProductInfo(id);
                  if (!p) return null;
                  return (
                    <li key={id} className="flex justify-between items-center p-3 bg-white border border-gray-100 rounded-lg shadow-sm group">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-md overflow-hidden bg-gray-100 shrink-0">
                          <img src={p.image} className="w-full h-full object-cover" alt={p.title} />
                        </div>
                        <span className="text-sm font-bold text-gray-800 line-clamp-1">{p.title}</span>
                      </div>
                      <button 
                        onClick={() => removeFromCollection('newArrivals', id)}
                        className="text-gray-400 hover:text-red-500 p-2 rounded-md hover:bg-red-50 transition-colors opacity-0 group-hover:opacity-100"
                        title="Remove from section"
                      >
                        <Trash2 size={18} />
                      </button>
                    </li>
                  );
                })}
                {newArrivalIds.length === 0 && (
                  <div className="text-center py-8 text-gray-400">
                    <Sparkles size={32} className="mx-auto mb-3 opacity-50" />
                    <p className="text-sm">No custom products added.<br/>Default filtering logic will be used.</p>
                  </div>
                )}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManageLandingPage;
