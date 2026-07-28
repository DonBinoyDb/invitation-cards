import { Link } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import { products } from '../data/products';

const Home = () => {
  const featuredProducts = products.filter(p => p.featured).slice(0, 3);
  const allProducts = products.slice(0, 8); // Just show 8

  return (
    <div className="w-full bg-brand-light">
      {/* Hyper-Minimalist Hero */}
      <section className="relative w-full h-[80vh] flex flex-col px-6 overflow-hidden pt-32 pb-8">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img src="/images/wedding_card.png" alt="Luxury Background" className="w-full h-full object-cover filter brightness-[0.3] grayscale-[30%] animate-fade-in" />
        </div>
        
        {/* Content */}
        <div className="relative z-10 flex flex-col items-center justify-center w-full flex-grow">
          <h1 className="font-serif text-[12vw] leading-none text-white font-light animate-fade-in delay-100 tracking-tighter">
            Elegance
          </h1>
          <h1 className="font-serif text-[12vw] leading-none text-brand-gold font-light animate-fade-in delay-300 tracking-tighter italic mix-blend-screen">
            Refined
          </h1>
          <p className="mt-12 text-[10px] md:text-xs tracking-[0.4em] uppercase text-white/70 animate-fade-in delay-500 font-light max-w-lg border-b border-white/20 pb-4">
            Bespoke invitation suites crafted for the discerning eye.
          </p>
        </div>
        
        <div className="relative z-10 animate-fade-in delay-700 flex flex-col items-center">
          <span className="text-[9px] tracking-[0.3em] text-white/40 uppercase mb-4">Discover</span>
          <div className="w-[1px] h-12 bg-white/30"></div>
        </div>
      </section>

      {/* Featured Section */}
      <section className="py-20 px-6 md:px-12 max-w-6xl mx-auto">
        <div className="w-full h-[1px] bg-brand-dark/10 mb-16"></div>
        <div className="text-center mb-16">
          <h2 className="text-[10px] tracking-[0.4em] uppercase text-brand-dark/50 font-medium mb-6">Signature Pieces</h2>
          <h3 className="font-serif text-4xl md:text-5xl text-brand-dark font-light tracking-tight">Featured Collections</h3>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-12 gap-y-12">
          {featuredProducts.map((product) => (
            <ProductCard key={`feat-${product.id}`} {...product} />
          ))}
        </div>
      </section>

      {/* All Section (8 items) */}
      <section id="collections" className="py-20 px-6 md:px-12 max-w-6xl mx-auto border-t border-brand-dark/5">
        <div className="flex justify-between items-end mb-16">
          <h2 className="font-serif text-4xl md:text-5xl text-brand-dark font-light tracking-tight">
            Latest Arrivals
          </h2>
          <p className="hidden md:block text-[10px] tracking-[0.3em] uppercase text-brand-dark/40 max-w-xs text-right">
            Explore our diverse range of handcrafted invitations.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12 mb-16">
          {allProducts.map((product) => (
            <ProductCard key={`all-${product.id}`} {...product} />
          ))}
        </div>
        
        <div className="text-center">
          <Link to="/collections" className="inline-block border border-brand-dark px-12 py-4 text-[10px] tracking-[0.3em] uppercase hover:bg-brand-dark hover:text-white transition-colors duration-500">
            Show All Collections
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
