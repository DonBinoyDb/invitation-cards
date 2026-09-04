import { Link } from 'react-router-dom';
import { ChevronLeft } from 'lucide-react';

const NotFound = () => {
  return (
    <div className="min-h-screen bg-[#faf9f8] flex flex-col items-center justify-center p-6 text-center relative overflow-hidden">
      {/* Decorative background text */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[30vw] font-serif text-brand-dark/5 select-none pointer-events-none tracking-tighter leading-none animate-pulse">
        404
      </div>
      
      <div className="relative z-10 max-w-2xl w-full flex flex-col items-center animate-fade-in-up">
        {/* Elegant top accent line */}
        <div className="w-px h-24 bg-brand-gold mb-10"></div>
        
        <h1 className="text-5xl md:text-7xl font-serif text-brand-dark mb-6 tracking-tight">
          Page Not Found
        </h1>
        
        <p className="text-base md:text-lg font-light tracking-wide text-brand-dark/60 mb-12 max-w-md leading-relaxed mx-auto">
          The page you are looking for has vanished, much like a fleeting beautiful moment. Let's get you back on track.
        </p>
        
        <Link 
          to="/collections" 
          className="group relative inline-flex items-center justify-center bg-brand-dark text-white px-10 py-5 text-[11px] tracking-[0.3em] uppercase font-medium overflow-hidden transition-colors duration-500 rounded-sm hover:text-brand-dark hover:bg-transparent border border-brand-dark"
        >
          <span className="absolute inset-0 w-full h-full bg-brand-gold transition-transform duration-500 -translate-x-full group-hover:translate-x-0 ease-out"></span>
          <ChevronLeft size={16} className="mr-3 relative z-10 group-hover:-translate-x-1 transition-transform" />
          <span className="relative z-10 transition-colors duration-300">Return to Collections</span>
        </Link>
        
        {/* Elegant bottom accent line */}
        <div className="w-px h-24 bg-brand-dark/10 mt-12"></div>
      </div>
    </div>
  );
};

export default NotFound;
