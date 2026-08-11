import { Link, useLocation } from 'react-router-dom';

const Footer = () => {
  const location = useLocation();

  if (location.pathname.startsWith('/admin')) {
    return null;
  }
  return (
    <footer className="bg-brand-dark text-white relative overflow-hidden font-sans" id="contact">
      
      <div className="relative z-10 px-6 md:px-12 lg:px-24 pt-24 pb-12 max-w-[1400px] mx-auto text-center">
        
        {/* Emblem / Top */}
        <div className="mb-20">
          <h2 
            className="text-6xl md:text-7xl lg:text-[7rem] text-brand-gold mb-6 leading-none font-light"
            style={{ fontFamily: "'Great Vibes', cursive" }}
          >
            Kalyanakath
          </h2>
          <p className="text-[9px] md:text-[11px] tracking-[0.4em] uppercase text-white/50 font-medium">
            Bespoke Invitations & Fine Stationery
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-8 mb-24 border-y border-white/10 py-16 text-center md:text-left">
          
          {/* Links Grid */}
          <div className="flex flex-col items-center md:items-start">
            <h4 className="text-[9px] tracking-[0.3em] uppercase text-brand-gold mb-8 font-medium">Explore</h4>
            <ul className="space-y-6 text-[10px] tracking-[0.2em] uppercase text-white/60 font-light">
              <li><Link to="/" className="hover:text-brand-gold transition-colors duration-300">Home</Link></li>
              <li><Link to="/collections" className="hover:text-brand-gold transition-colors duration-300">Collections</Link></li>
              <li><Link to="/contact" className="hover:text-brand-gold transition-colors duration-300">Contact</Link></li>
            </ul>
          </div>
          
          <div className="flex flex-col items-center md:items-start">
            <h4 className="text-[9px] tracking-[0.3em] uppercase text-brand-gold mb-8 font-medium">Connect</h4>
            <ul className="space-y-6 text-[10px] tracking-[0.2em] uppercase text-white/60 font-light">
              <li><a href="mailto:info@ivoryscriptestate.com" className="hover:text-brand-gold transition-colors duration-300">info@ivoryscriptestate.com</a></li>
              <li><a href="tel:+919876543210" className="hover:text-brand-gold transition-colors duration-300">+91 98765 43210</a></li>
              <li><Link to="/contact" className="hover:text-brand-gold transition-colors duration-300">Consultation</Link></li>
            </ul>
          </div>

          <div className="flex flex-col items-center md:items-start">
            <h4 className="text-[9px] tracking-[0.3em] uppercase text-brand-gold mb-8 font-medium">Follow</h4>
            <ul className="space-y-6 text-[10px] tracking-[0.2em] uppercase text-white/60 font-light">
              <li><a href="#" className="hover:text-brand-gold transition-colors duration-300">Instagram</a></li>
              <li><a href="#" className="hover:text-brand-gold transition-colors duration-300">Pinterest</a></li>
              <li><a href="#" className="hover:text-brand-gold transition-colors duration-300">Journal</a></li>
            </ul>
          </div>
        </div>
        
        {/* Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-[9px] tracking-[0.3em] uppercase text-white/30 pt-4">
          <p>&copy; {new Date().getFullYear()} KALYANAKATH. ALL RIGHTS RESERVED.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-brand-gold transition-colors duration-300">Privacy Policy</a>
            <a href="#" className="hover:text-brand-gold transition-colors duration-300">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
