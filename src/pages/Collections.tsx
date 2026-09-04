import { useState, useMemo, useEffect } from 'react';
import ProductCard from '../components/ProductCard';
import { useProducts } from '../context/ProductContext';
import { ChevronLeft, ChevronRight, Search } from 'lucide-react';

const ITEMS_PER_PAGE = 12;

const Collections = () => {
  const { productsList, categories } = useProducts();
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All Categories');
  
  // Filter products based on search, category, and visibility
  const filteredProducts = useMemo(() => {
    return productsList.filter((product) => {
      if (product.hidden) return false;
      
      const matchesSearch = product.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                            product.description.toLowerCase().includes(searchQuery.toLowerCase());
      
      const matchesCategory = selectedCategory === 'All Categories' || product.category === selectedCategory;
      
      return matchesSearch && matchesCategory;
    });
  }, [productsList, searchQuery, selectedCategory]);

  const totalPages = Math.max(1, Math.ceil(filteredProducts.length / ITEMS_PER_PAGE));
  
  const currentProducts = useMemo(() => {
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    return filteredProducts.slice(startIndex, startIndex + ITEMS_PER_PAGE);
  }, [filteredProducts, currentPage]);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Reset page when filters change
  useEffect(() => {
    setCurrentPage(1);
  }, [searchQuery, selectedCategory]);

  // Ensure page always starts at top when loaded
  useEffect(() => {
    window.scrollTo(0, 0);
    // Safari/Mobile fallback
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 50);
  }, []);

  const activeCategories = categories.filter(c => productsList.some(p => p.category === c && !p.hidden));
  const displayCategories = ['All Categories', ...activeCategories];

  return (
    <div className="bg-white min-h-screen pt-32 pb-32 px-6 md:px-12 font-sans text-brand-dark">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Area */}
        <div className="mb-12 border-b-2 border-brand-dark pb-6">
          <h1 className="font-sans font-black text-5xl md:text-6xl text-brand-dark tracking-tighter uppercase mb-2">
            Collections
          </h1>
          <p className="text-gray-500 font-medium">
            Showing {filteredProducts.length} items
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-12">
          
          {/* Sidebar */}
          <div className="w-full md:w-1/4 flex-shrink-0 md:sticky md:top-32 h-fit">
            {/* Search Bar */}
            <div className="relative mb-8">
              <input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full border-2 border-gray-200 p-4 pl-12 rounded-sm focus:border-brand-dark focus:outline-none transition-colors font-semibold"
              />
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
            </div>
            
            {/* Categories */}
            <div>
              <h3 className="font-bold text-lg uppercase tracking-wide mb-4">Categories</h3>
              <ul className="space-y-3">
                {displayCategories.map(category => (
                  <li key={category}>
                    <button 
                      onClick={() => setSelectedCategory(category)}
                      className={`text-left w-full text-sm font-medium transition-colors ${
                        selectedCategory === category 
                          ? 'text-brand-dark font-bold' 
                          : 'text-gray-500 hover:text-brand-dark'
                      }`}
                    >
                      {category}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          {/* Main Content Area */}
          <div className="w-full md:w-3/4">
            
            {filteredProducts.length === 0 ? (
              <div className="text-center py-20">
                <h3 className="text-2xl font-bold text-gray-400">No products found.</h3>
                <p className="text-gray-500 mt-2">Try adjusting your filters or search query.</p>
              </div>
            ) : (
              <>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-x-3 gap-y-8 md:gap-x-6 md:gap-y-12 mb-16">
                  {currentProducts.map((product) => (
                    <ProductCard key={product.id} {...product} />
                  ))}
                </div>

                {/* Pagination */}
                {totalPages > 1 && (
                  <div className="flex justify-center items-center gap-4 text-sm font-bold">
                    <button 
                      onClick={() => handlePageChange(currentPage - 1)}
                      disabled={currentPage === 1}
                      className="p-3 disabled:opacity-30 hover:bg-gray-100 transition-colors flex items-center rounded-sm border border-gray-200"
                    >
                      <ChevronLeft size={18} />
                    </button>
                    
                    <div className="flex gap-2">
                      {Array.from({ length: totalPages }).map((_, idx) => {
                        const pageNumber = idx + 1;
                        if (
                          pageNumber === 1 ||
                          pageNumber === totalPages ||
                          (pageNumber >= currentPage - 2 && pageNumber <= currentPage + 2)
                        ) {
                          return (
                            <button
                              key={idx}
                              onClick={() => handlePageChange(pageNumber)}
                              className={`w-10 h-10 flex items-center justify-center transition-colors rounded-sm ${
                                currentPage === pageNumber 
                                  ? 'bg-brand-dark text-white' 
                                  : 'bg-white border border-gray-200 hover:border-brand-dark text-brand-dark'
                              }`}
                            >
                              {pageNumber}
                            </button>
                          );
                        } else if (
                          pageNumber === currentPage - 3 ||
                          pageNumber === currentPage + 3
                        ) {
                          return <span key={idx} className="w-10 h-10 flex items-center justify-center text-gray-400">...</span>;
                        }
                        return null;
                      })}
                    </div>

                    <button 
                      onClick={() => handlePageChange(currentPage + 1)}
                      disabled={currentPage === totalPages}
                      className="p-3 disabled:opacity-30 hover:bg-gray-100 transition-colors flex items-center rounded-sm border border-gray-200"
                    >
                      <ChevronRight size={18} />
                    </button>
                  </div>
                )}
              </>
            )}
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Collections;
