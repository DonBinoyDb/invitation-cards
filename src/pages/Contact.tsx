

const Contact = () => {
  return (
    <div className="min-h-screen pt-32 pb-24 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-serif font-light mb-6">Contact Us</h1>
        <p className="text-sm font-light tracking-wide text-brand-dark/70 uppercase">We would love to hear from you</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24">
        <div>
          <h2 className="text-2xl font-serif mb-8 font-light">Get In Touch</h2>
          <p className="font-light leading-relaxed mb-12 text-brand-dark/70">
            Whether you have a question about our collections, need assistance with a bespoke order, or simply want to say hello, our dedicated team is here to assist you.
          </p>
          
          <div className="space-y-8">
            <div>
              <h3 className="text-[10px] tracking-[0.2em] uppercase font-semibold mb-2">Email</h3>
              <a href="mailto:info@ivoryscriptestate.com" className="font-light hover:text-brand-gold transition-colors">info@ivoryscriptestate.com</a>
            </div>
            <div>
              <h3 className="text-[10px] tracking-[0.2em] uppercase font-semibold mb-2">Phone</h3>
              <a href="tel:+919876543210" className="font-light hover:text-brand-gold transition-colors">+91 98765 43210</a>
            </div>
            <div>
              <h3 className="text-[10px] tracking-[0.2em] uppercase font-semibold mb-2">Studio</h3>
              <p className="font-light text-brand-dark/70">123 Design District<br/>Creative City, 10012</p>
            </div>
          </div>
        </div>
        
        <div>
          <form className="space-y-8">
            <div>
              <label className="block text-[10px] tracking-[0.2em] uppercase font-semibold mb-2">Name</label>
              <input type="text" className="w-full border-b border-brand-dark/20 bg-transparent py-2 focus:outline-none focus:border-brand-gold transition-colors" placeholder="Your Name" />
            </div>
            <div>
              <label className="block text-[10px] tracking-[0.2em] uppercase font-semibold mb-2">Email</label>
              <input type="email" className="w-full border-b border-brand-dark/20 bg-transparent py-2 focus:outline-none focus:border-brand-gold transition-colors" placeholder="Your Email" />
            </div>
            <div>
              <label className="block text-[10px] tracking-[0.2em] uppercase font-semibold mb-2">Message</label>
              <textarea rows={4} className="w-full border-b border-brand-dark/20 bg-transparent py-2 focus:outline-none focus:border-brand-gold transition-colors resize-none" placeholder="How can we help you?"></textarea>
            </div>
            <button type="submit" className="bg-brand-dark text-white px-8 py-4 text-[10px] tracking-[0.2em] uppercase hover:bg-brand-gold transition-colors w-full mt-4">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
