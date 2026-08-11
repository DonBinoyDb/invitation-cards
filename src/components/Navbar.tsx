import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user, signOut } = useAuth();
  const location = useLocation();

  if (location.pathname.startsWith('/admin')) {
    return null;
  }

  return (
    <nav className="absolute top-0 w-full z-50 py-5 md:py-0 md:pt-10 px-6 md:px-16 flex justify-between items-center bg-white md:bg-transparent mix-blend-normal md:mix-blend-difference text-brand-dark md:text-white shadow-sm md:shadow-none">
      <Link to="/" className="text-3xl md:text-4xl hover:opacity-70 transition-opacity relative z-50" style={{ fontFamily: "'Great Vibes', cursive" }}>
        Ivory Script Estate
      </Link>
      
      {/* Desktop Menu */}
      <div className="hidden md:flex gap-12 text-[10px] tracking-[0.3em] uppercase font-light items-center">
        <Link to="/" className="hover:opacity-70 transition-opacity">Home</Link>
        <Link to="/collections" className="hover:opacity-70 transition-opacity">Collections</Link>
        <Link to="/contact" className="hover:opacity-70 transition-opacity">Contact</Link>
        {user && (
          <>
            {user.role === 'admin' && (
              <Link to="/admin" className="hover:opacity-70 transition-opacity text-brand-gold font-bold">Admin Portal</Link>
            )}
            <button onClick={signOut} className="hover:opacity-70 transition-opacity uppercase">Sign Out</button>
          </>
        )}
      </div>

      {/* Mobile Menu Toggle */}
      <button 
        className="md:hidden relative z-50 p-2"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile Menu Dropdown */}
      <div 
        className={`fixed top-0 right-0 w-full sm:w-80 h-screen bg-brand-dark/95 backdrop-blur-md flex flex-col items-center justify-center gap-8 text-sm tracking-[0.3em] uppercase font-light md:hidden transform transition-transform duration-500 ease-in-out z-40 ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <Link to="/" onClick={() => setIsOpen(false)} className="hover:opacity-70 transition-opacity text-white">Home</Link>
        <Link to="/collections" onClick={() => setIsOpen(false)} className="hover:opacity-70 transition-opacity text-white">Collections</Link>
        <Link to="/contact" onClick={() => setIsOpen(false)} className="hover:opacity-70 transition-opacity text-white">Contact</Link>
        {user && (
          <>
            {user.role === 'admin' && (
              <Link to="/admin" onClick={() => setIsOpen(false)} className="hover:opacity-70 transition-opacity text-brand-gold font-bold">Admin Portal</Link>
            )}
            <button onClick={() => { signOut(); setIsOpen(false); }} className="hover:opacity-70 transition-opacity text-white uppercase">Sign Out</button>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
