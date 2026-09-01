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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-8 mb-24 border-y border-white/10 py-16 text-center md:text-left">
          
          {/* Links Grid */}
          <div className="flex flex-col items-center md:items-start md:pl-24">
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
              <li><a href="mailto:rahulauh@outlook.com" className="hover:text-brand-gold transition-colors duration-300">rahulauh@outlook.com</a></li>
              <li><a href="tel:+919037061189" className="hover:text-brand-gold transition-colors duration-300">+91 90370 61189</a></li>
            </ul>
          </div>
        </div>
        
        {/* Bottom */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-[9px] tracking-[0.3em] uppercase text-white/30 pt-4 w-full">
          <p>&copy; {new Date().getFullYear()} KALYANAKATH. ALL RIGHTS RESERVED.</p>
          <p>DEVELOPED BY <a href="https://www.asimovx.se/" target="_blank" rel="noopener noreferrer" className="text-brand-gold hover:text-white transition-colors duration-300">ASIMOVX TECHNOLOGIES AB</a></p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
