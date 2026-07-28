const Footer = () => {
  return (
    <footer className="bg-brand-dark text-white pt-32 pb-12 px-8 md:px-16" id="contact">
      <div className="max-w-6xl mx-auto">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 mb-32">
          <div className="md:col-span-5">
            <h3 className="font-serif text-3xl mb-8 font-light tracking-wide">
              Vedha <span className="text-brand-gold italic">Cards</span>
            </h3>
            <p className="text-sm font-light text-white/50 leading-relaxed max-w-sm mb-12">
              Elevating the art of the invitation. We craft bespoke stationery that tells your unique story with uncompromising elegance.
            </p>
            <div className="flex gap-6">
              <span className="text-[10px] tracking-[0.2em] uppercase text-white/70 hover:text-brand-gold cursor-pointer transition-colors">Instagram</span>
              <span className="text-[10px] tracking-[0.2em] uppercase text-white/70 hover:text-brand-gold cursor-pointer transition-colors">Pinterest</span>
            </div>
          </div>
          
          <div className="md:col-span-2 md:col-start-8 space-y-4">
            <h4 className="text-[10px] tracking-[0.3em] uppercase text-brand-gold mb-8 font-medium">Collections</h4>
            <ul className="space-y-4 text-[11px] tracking-[0.2em] uppercase text-white/50 font-light">
              <li><a href="/collections" className="hover:text-white transition-colors">Wedding</a></li>
              <li><a href="/collections" className="hover:text-white transition-colors">Corporate</a></li>
              <li><a href="/collections" className="hover:text-white transition-colors">Birthday</a></li>
            </ul>
          </div>
          
          <div className="md:col-span-3 space-y-4">
            <h4 className="text-[10px] tracking-[0.3em] uppercase text-brand-gold mb-8 font-medium">Inquiries</h4>
            <address className="not-italic space-y-4 text-[11px] tracking-[0.2em] uppercase text-white/50 font-light">
              <p><a href="mailto:info@vedhacards.com" className="hover:text-white transition-colors border-b border-transparent hover:border-white pb-1">info@vedhacards.com</a></p>
              <p><a href="tel:+919876543210" className="hover:text-white transition-colors">+91 98765 43210</a></p>
              <p className="pt-4">Design District, City</p>
            </address>
          </div>
        </div>
        
        <div className="w-full h-[1px] bg-white/10 mb-8"></div>
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-[9px] tracking-[0.3em] uppercase text-white/30">
          <p>&copy; {new Date().getFullYear()} Vedha Cards.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
