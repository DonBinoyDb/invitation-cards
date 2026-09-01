import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import { useProducts } from '../context/ProductContext';
import { useCMS } from '../context/CMSContext';

const SkeletonProductCard = () => (
  <div className="w-full relative animate-pulse">
    <div className="bg-gray-200 rounded-md aspect-[4/5] mb-4 w-full"></div>
    <div className="text-left">
      <div className="h-3 bg-gray-200 rounded w-1/3 mb-2"></div>
      <div className="h-4 bg-gray-200 rounded w-2/3 mb-2"></div>
      <div className="h-4 bg-gray-200 rounded w-1/4"></div>
    </div>
  </div>
);

const Home = () => {
  const { productsList, isLoading } = useProducts();
  const products = productsList.filter(p => !p.hidden);
  const { heroHeading, heroSubtext, ourCollectionIds, newArrivalIds } = useCMS();
  const [collectionFilter, setCollectionFilter] = useState('Featured');
  const [arrivalsFilter, setArrivalsFilter] = useState('All');
  const [heroImage, setHeroImage] = useState('/images/VEDIC VIVAHA1.png');
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    const images = products.map(p => p.image).filter(Boolean);
    if (images.length > 0) {
      const pickRandom = () => images[Math.floor(Math.random() * images.length)];
      setHeroImage(pickRandom());
      
      const interval = setInterval(() => {
        setIsFading(true);
        setTimeout(() => {
          setHeroImage(pickRandom());
          setIsFading(false);
        }, 500); // 500ms fade duration
      }, 5000); // Change image every 5 seconds
      return () => clearInterval(interval);
    }
  }, []);

  // Logic for Our Collection
  let displayedCollection: any[] = [];
  if (collectionFilter === 'Featured') {
    displayedCollection = ourCollectionIds.map(id => products.find(p => p.id === id)).filter(Boolean);
  } else {
    displayedCollection = products.filter(p => p.details?.tags?.includes(collectionFilter)).slice(0, 4);
  }
  
  // Fallback if filters return empty
  if (displayedCollection.length === 0) displayedCollection = products.slice(10, 14);

  // Logic for New Arrivals
  let displayedArrivals: any[] = [];
  if (arrivalsFilter === 'All') {
    displayedArrivals = newArrivalIds.map(id => products.find(p => p.id === id)).filter(Boolean);
  } else {
    displayedArrivals = products.filter(p => p.details?.tags?.includes(arrivalsFilter)).slice(0, 8);
  }
  
  // Fallback if filters return empty
  if (displayedArrivals.length === 0) displayedArrivals = products.slice(15, 23);

  return (
    <div className="w-full bg-white font-sans text-brand-dark overflow-x-hidden">
      
      {/* Clean Bold Hero (Reflect Style) */}
      <section className="relative w-full px-4 sm:px-6 md:px-12 pt-28 pb-10 md:pt-32 md:pb-24 max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-8 md:gap-12 bg-white">
        <div className="w-full md:w-1/2 flex flex-col items-start z-10 text-center md:text-left">
          <h1 className="font-sans font-black text-5xl sm:text-6xl md:text-8xl leading-[0.9] tracking-tighter uppercase mb-4 md:mb-6 text-brand-dark w-full whitespace-pre-line">
            {heroHeading}
          </h1>
          <p className="text-gray-600 max-w-md mx-auto md:mx-0 mb-8 text-sm md:text-base leading-relaxed">
            {heroSubtext}
          </p>
          <div className="flex flex-col sm:flex-row w-full sm:w-auto gap-3 sm:gap-4">
            <Link to="/collections" className="w-full sm:w-auto bg-brand-dark text-white font-bold text-xs px-8 py-4 uppercase tracking-widest hover:bg-black transition-colors text-center">
              View Collections
            </Link>
            <Link to="/contact" className="w-full sm:w-auto bg-white text-brand-dark border border-brand-dark font-bold text-xs px-8 py-4 uppercase tracking-widest hover:bg-gray-50 transition-colors text-center">
              Contact Us
            </Link>
          </div>
        </div>
        
        <div className="w-full md:w-1/2 relative mt-4 md:mt-0">
          <div className="bg-[#f0f0f0] rounded-tr-[60px] rounded-bl-[60px] md:rounded-tr-[80px] md:rounded-bl-[80px] overflow-hidden aspect-[4/3] md:aspect-square w-full shadow-lg">
            <img 
              src={heroImage} 
              alt="Luxury Background" 
              className={`w-full h-full object-cover transform transition-all duration-700 ease-in-out hover:scale-105 ${isFading ? 'opacity-0 scale-95' : 'opacity-100 scale-100'}`} 
            />
          </div>
        </div>
      </section>

      {/* Marquee Banner */}
      <div className="w-full bg-brand-dark text-white py-3 md:py-4 overflow-hidden border-y-4 border-brand-dark">
        <div className="animate-marquee flex items-center space-x-6 md:space-x-8 text-[11px] md:text-[13px] tracking-widest uppercase font-bold whitespace-nowrap">
          <span>✦ NEW ARRIVALS</span>
          <span>✦ BESPOKE INVITATIONS</span>
          <span>✦ LUXURY STATIONERY</span>
          <span>✦ FINE TYPOGRAPHY</span>
          <span>✦ NEW ARRIVALS</span>
          <span>✦ BESPOKE INVITATIONS</span>
          <span>✦ LUXURY STATIONERY</span>
          <span>✦ FINE TYPOGRAPHY</span>
          <span>✦ NEW ARRIVALS</span>
          <span>✦ BESPOKE INVITATIONS</span>
          <span>✦ LUXURY STATIONERY</span>
          <span>✦ FINE TYPOGRAPHY</span>
          <span>✦ NEW ARRIVALS</span>
          <span>✦ BESPOKE INVITATIONS</span>
          <span>✦ LUXURY STATIONERY</span>
          <span>✦ FINE TYPOGRAPHY</span>
        </div>
      </div>

      {/* Featured Section */}
      <section className="py-16 md:py-20 pl-4 md:px-12 max-w-7xl mx-auto bg-white">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8 md:mb-12 border-b-2 border-brand-dark pb-4 pr-4 md:pr-0">
          <div>
            <h2 className="font-sans font-black text-3xl sm:text-4xl md:text-5xl uppercase tracking-tight text-brand-dark">Our Collection</h2>
          </div>
          <p className="text-gray-500 text-xs max-w-xs text-left md:text-right mt-2 md:mt-0 hidden md:block">
            Find your perfect suite, where each collection speaks your story.
          </p>
        </div>
        
        <div 
          className="flex overflow-x-auto snap-x gap-2 md:gap-3 mb-8 md:mb-10 pb-2 pr-4 md:pr-0 md:flex-wrap"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {['Featured', 'Classic', 'Modern', 'Minimal'].map(filter => (
            <button 
              key={filter}
              onClick={() => setCollectionFilter(filter)}
              className={`flex-none px-5 py-2 text-[10px] sm:text-xs font-bold rounded-sm border ${
                collectionFilter === filter 
                  ? 'bg-brand-dark text-white border-brand-dark' 
                  : 'bg-white text-gray-600 border-gray-300 hover:border-brand-dark'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>
        
        <div 
            className="flex overflow-x-auto snap-x snap-mandatory gap-4 pb-6 md:grid md:grid-cols-4 md:gap-6"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {isLoading ? (
              Array.from({ length: 4 }).map((_, idx) => (
                <div key={`skel-col-${idx}`} className="w-[140px] min-w-[140px] sm:w-[180px] sm:min-w-[180px] md:w-auto md:min-w-0 snap-start flex-none">
                  <SkeletonProductCard />
                </div>
              ))
            ) : (
              displayedCollection.map((product) => (
                <div key={`col-${product.id}`} className="w-[140px] min-w-[140px] sm:w-[180px] sm:min-w-[180px] md:w-auto md:min-w-0 snap-start flex-none">
                  <ProductCard {...product} />
                </div>
              ))
            )}
          </div>
      </section>

      {/* All Section (Latest Arrivals) */}
      <section id="collections" className="py-20 px-6 bg-[#f7f7f7]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h3 className="font-sans font-medium text-3xl text-brand-dark">New Arrivals</h3>
            <div className="flex justify-center gap-6 mt-6 text-xs font-semibold text-gray-400 uppercase tracking-wider">
              {['All', 'Floral', 'Geometric'].map(filter => (
                <span 
                  key={filter}
                  onClick={() => setArrivalsFilter(filter)}
                  className={`cursor-pointer pb-1 ${
                    arrivalsFilter === filter 
                      ? 'text-brand-dark border-b-2 border-brand-dark' 
                      : 'hover:text-brand-dark'
                  }`}
                >
                  {filter}
                </span>
              ))}
            </div>
          </div>
        
          <div 
            className="flex overflow-x-auto snap-x snap-mandatory gap-4 pb-6 mb-10 md:grid md:grid-cols-4 md:gap-6 md:pb-0 md:mb-16"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {isLoading ? (
              Array.from({ length: 8 }).map((_, idx) => (
                <div key={`skel-arr-${idx}`} className="w-[140px] min-w-[140px] sm:w-[180px] sm:min-w-[180px] md:w-auto md:min-w-0 snap-start flex-none">
                  <SkeletonProductCard />
                </div>
              ))
            ) : (
              displayedArrivals.map((product) => (
                <div key={`arr-${product.id}`} className="w-[140px] min-w-[140px] sm:w-[180px] sm:min-w-[180px] md:w-auto md:min-w-0 snap-start flex-none">
                  <ProductCard {...product} />
                </div>
              ))
            )}
          </div>
          
          <div className="text-center">
            <Link to="/collections" className="inline-block bg-white border border-gray-300 text-brand-dark text-xs font-bold px-10 py-4 uppercase tracking-widest hover:bg-gray-50 transition-colors rounded-sm shadow-sm">
              View All Collections
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
