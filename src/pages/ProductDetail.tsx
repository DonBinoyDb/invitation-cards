import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { products } from '../data/products';
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
  const product = products.find(p => p.id === id);
  const [activeImage, setActiveImage] = useState(0);
  
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

  const similarProducts = products.filter(p => p.category === product.category && p.id !== product.id).slice(0, 4);
  const whatsappMessage = `Hi Vedha Cards. I am interested in the "${product.title}".`;

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
                  ₹{product.price}
                </p>
                <span className="text-[10px] font-sans uppercase tracking-[0.2em] text-brand-dark/50 border border-brand-dark/20 px-3 py-1 rounded-full">Base Package</span>
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
              <WhatsAppButton 
                phoneNumber={"919876543210"} 
                message={whatsappMessage}
                className="w-full py-5 rounded-sm"
              />
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
