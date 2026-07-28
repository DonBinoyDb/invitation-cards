import { useState, useMemo, useEffect } from 'react';
import ProductCard from '../components/ProductCard';
import { products } from '../data/products';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const ITEMS_PER_PAGE = 8;

const Collections = () => {
  const [currentPage, setCurrentPage] = useState(1);
  
  const totalPages = Math.ceil(products.length / ITEMS_PER_PAGE);
  
  const currentProducts = useMemo(() => {
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    return products.slice(startIndex, startIndex + ITEMS_PER_PAGE);
  }, [currentPage]);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentPage]);

  return (
    <div className="bg-brand-light min-h-screen pt-40 pb-32 px-6 md:px-12 animate-fade-in">
      <div className="max-w-6xl mx-auto">
        
        <div className="mb-24 text-center border-b border-brand-dark/10 pb-16">
          <h1 className="font-serif text-5xl md:text-7xl text-brand-dark font-light tracking-tight mb-6">
            The Archive
          </h1>
          <p className="text-[10px] tracking-[0.3em] uppercase text-brand-dark/50">
            Page {currentPage} of {totalPages}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16 mb-32">
          {currentProducts.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center items-center gap-6 text-[10px] tracking-[0.2em]">
            <button 
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className="p-2 disabled:opacity-30 hover:opacity-70 transition-opacity flex items-center"
            >
              <ChevronLeft size={16} /> <span className="uppercase ml-2">Prev</span>
            </button>
            
            <div className="flex gap-4">
              {Array.from({ length: totalPages }).map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => handlePageChange(idx + 1)}
                  className={`w-8 h-8 flex items-center justify-center border transition-colors ${
                    currentPage === idx + 1 
                      ? 'border-brand-dark bg-brand-dark text-white' 
                      : 'border-transparent hover:border-brand-dark/20 text-brand-dark/60'
                  }`}
                >
                  {idx + 1}
                </button>
              ))}
            </div>

            <button 
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="p-2 disabled:opacity-30 hover:opacity-70 transition-opacity flex items-center"
            >
              <span className="uppercase mr-2">Next</span> <ChevronRight size={16} />
            </button>
          </div>
        )}
        
      </div>
    </div>
  );
};

export default Collections;
