import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="absolute top-0 w-full z-50 pt-10 px-8 md:px-16 flex justify-between items-center bg-transparent mix-blend-difference text-white">
      <Link to="/" className="text-2xl font-serif tracking-[0.2em] uppercase hover:opacity-70 transition-opacity">
        Vedha Cards
      </Link>
      
      <div className="hidden md:flex gap-12 text-[10px] tracking-[0.3em] uppercase font-light">
        <Link to="/" className="hover:opacity-70 transition-opacity">Home</Link>
        <a href="/#collections" className="hover:opacity-70 transition-opacity">Collections</a>
        <a href="#contact" className="hover:opacity-70 transition-opacity">Contact</a>
      </div>
    </nav>
  );
};

export default Navbar;
