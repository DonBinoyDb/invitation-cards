import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useProducts } from '../context/ProductContext';
import WhatsAppButton from '../components/WhatsAppButton';
import ProductCard from '../components/ProductCard';
import { Plus, Minus, ChevronLeft } from 'lucide-react';

const Accordion = ({ title, content }: { title: string, content: string }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-brand-dark/10 py-6">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="flex justify-between items-center w-full text-left"
      >
        <span className="text-xs uppercase tracking-[0.2em] text-brand-dark font-medium">{title}</span>
        {isOpen ? <Minus size={16} className="text-brand-dark/60" /> : <Plus size={16} className="text-brand-dark/60" />}
      </button>
      <div className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-40 mt-4 opacity-100' : 'max-h-0 opacity-0'}`}>
        <p className="text-sm font-light text-brand-dark/70 leading-relaxed">{content}</p>
      </div>
    </div>
  );
};

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const { productsList } = useProducts();
  const product = productsList.find(p => p.id === id);
  const [activeImage, setActiveImage] = useState(0);
  const [quantity, setQuantity] = useState<number | ''>(50);
  const [showError, setShowError] = useState(false);
  
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [id]);

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-brand-light">
        <h2 className="text-4xl font-serif text-brand-dark mb-6">Not Found</h2>
        <Link to="/collections" className="border-b border-brand-dark pb-1 text-[10px] tracking-[0.2em] uppercase">
          Return to Collections
        </Link>
      </div>
    );
  }

  const similarProducts = productsList.filter(p => p.category === product.category && p.id !== product.id && !p.hidden).slice(0, 4);
  const whatsappMessage = `Hi Kalyanakath. I am interested in the "${product.title}" (Quantity: ${quantity}).`;

  return (
    <div className="bg-brand-light min-h-screen animate-fade-in pt-32 pb-24 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        
        <Link to="/collections" className="inline-flex items-center text-brand-dark/40 hover:text-brand-dark transition-colors mb-12 group text-[10px] uppercase tracking-[0.3em] font-medium">
          <ChevronLeft className="group-hover:-translate-x-1 transition-transform mr-2" size={14} />
          Back to Collections
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20 items-start mb-32">
          
          {/* Left: Image Gallery */}
          <div className="lg:col-span-7 space-y-4">
            <div className="aspect-[4/5] w-full bg-[#f5f5f5] rounded-sm overflow-hidden border border-brand-dark/5">
              <img 
                src={product.gallery[activeImage]} 
                alt={product.title} 
                className="w-full h-full object-cover animate-fade-in"
                key={activeImage}
              />
            </div>
            <div className="grid grid-cols-4 gap-4">
              {product.gallery.map((img, idx) => (
                <button 
                  key={idx}
                  onClick={() => setActiveImage(idx)}
                  className={`aspect-[4/5] bg-[#f5f5f5] rounded-sm overflow-hidden transition-all duration-300 ${activeImage === idx ? 'opacity-100 ring-1 ring-brand-dark ring-offset-2 ring-offset-brand-light' : 'opacity-40 hover:opacity-100'}`}
                >
                  <img src={img} alt={`Gallery ${idx}`} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Right: Info */}
          <div className="lg:col-span-5 lg:sticky lg:top-32">
            <div className="mb-10">
              <p className="text-[10px] tracking-[0.4em] uppercase text-brand-dark/50 mb-4 font-medium">
                {product.category} Collection
              </p>
              <h1 className="text-4xl md:text-5xl font-serif text-brand-dark leading-[1.1] mb-6 tracking-tight">
                {product.title}
              </h1>
              
              <div className="flex items-center gap-4 border-b border-brand-dark/10 pb-8">
                <p className="text-2xl text-brand-dark font-sans font-medium tracking-wide">
                  {quantity ? `₹${(product.price / 50) * Number(quantity)}` : '₹--'}
                </p>
                <span className="text-[10px] font-sans uppercase tracking-[0.2em] text-brand-dark/50 border border-brand-dark/20 px-3 py-1 rounded-full">Total Price</span>
              </div>
            </div>

            <div className="mb-8">
              <div className="flex justify-between items-center mb-3">
                <label htmlFor="quantity" className="block text-[10px] uppercase tracking-[0.2em] text-brand-dark/70 font-medium">
                  Select Quantity
                </label>
                {quantity !== '' && (
                  <button 
                    onClick={() => { setQuantity(''); setShowError(false); }} 
                    className="text-[10px] uppercase tracking-[0.1em] text-red-500 hover:text-red-700 transition-colors font-medium"
                  >
                    Clear
                  </button>
                )}
              </div>
              <div className="relative">
                <select 
                  id="quantity" 
                  value={quantity} 
                  onChange={(e) => {
                    setQuantity(e.target.value === '' ? '' : Number(e.target.value));
                    setShowError(false);
                  }}
                  className="w-full bg-transparent border border-brand-dark/20 text-brand-dark text-sm py-4 px-4 rounded-sm appearance-none focus:outline-none focus:border-brand-dark transition-colors"
                >
                  <option value="" disabled>Select Quantity</option>
                  {Array.from({ length: 20 }, (_, i) => (i + 1) * 50).map(q => (
                    <option key={q} value={q}>{q} pieces</option>
                  ))}
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-brand-dark/50">
                  <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                </div>
              </div>
            </div>

            <div className="prose prose-sm md:prose-base text-brand-dark/70 font-light leading-relaxed mb-12">
              <p>{product.description}</p>
            </div>

            <div className="mb-12 border-t border-brand-dark/10">
              <Accordion title="Dimensions & Specifications" content={`The standard dimensions are ${product.details.size}. Custom sizing is available upon request.`} />
              <Accordion title="Paper & Material" content={product.details.material} />
              <Accordion title="What's Included" content={product.details.includes} />
            </div>

            <div className="pt-2">
              {!quantity ? (
                <button 
                  onClick={() => setShowError(true)}
                  className="w-full py-5 rounded-sm inline-flex items-center justify-center bg-brand-dark/20 text-brand-dark/40 text-[11px] tracking-[0.3em] uppercase font-medium cursor-not-allowed transition-colors"
                >
                  Enquire on WhatsApp
                </button>
              ) : (
                <WhatsAppButton 
                  phoneNumber={"919037061189"} 
                  message={whatsappMessage}
                  className="w-full py-5 rounded-sm"
                />
              )}
              {showError && !quantity && (
                <p className="text-red-500 text-[10px] mt-4 tracking-widest uppercase text-center font-medium animate-fade-in">
                  Please select a quantity
                </p>
              )}
              <p className="text-[10px] text-brand-dark/40 mt-6 tracking-widest uppercase text-center font-medium">
                No payment required at this stage
              </p>
            </div>
          </div>
        </div>

        {/* Similar Products Section */}
        {similarProducts.length > 0 && (
          <div className="border-t border-brand-dark/10 pt-24">
            <div className="text-center mb-16">
              <h2 className="font-serif text-3xl text-brand-dark tracking-tight">
                You Might Also Like
              </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16">
              {similarProducts.map((p) => (
                <ProductCard key={p.id} {...p} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductDetail;
