import { useState } from 'react';
import { useCMS } from '../context/CMSContext';
import { Copy, Check } from 'lucide-react';

const Contact = () => {
  const { whatsappNumber } = useCMS();
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [copiedField, setCopiedField] = useState<string | null>(null);

  const handleCopy = (text: string, field: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2000);
  };

  const handleWhatsAppSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const { name, email, message } = formData;
    const text = `Hi, I am ${name}${email ? ` (${email})` : ''}.\n\n${message}`;
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`;
    window.open(whatsappUrl, '_blank');
  };

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
              <div className="flex items-center gap-3">
                <a href="mailto:rahulauh@outlook.com" className="font-light hover:text-brand-gold transition-colors">rahulauh@outlook.com</a>
                <button onClick={() => handleCopy('rahulauh@outlook.com', 'email')} className="text-brand-dark/50 hover:text-brand-dark transition-colors" title="Copy Email">
                  {copiedField === 'email' ? <Check size={14} className="text-green-500" /> : <Copy size={14} />}
                </button>
              </div>
            </div>
            <div>
              <h3 className="text-[10px] tracking-[0.2em] uppercase font-semibold mb-2">Phone</h3>
              <div className="flex items-center gap-3">
                <a href={`tel:+${whatsappNumber}`} className="font-light hover:text-brand-gold transition-colors">+{whatsappNumber}</a>
                <button onClick={() => handleCopy(`+${whatsappNumber}`, 'phone')} className="text-brand-dark/50 hover:text-brand-dark transition-colors" title="Copy Phone">
                  {copiedField === 'phone' ? <Check size={14} className="text-green-500" /> : <Copy size={14} />}
                </button>
              </div>
            </div>
          </div>
        </div>
        
        <div>
          <form className="space-y-8" onSubmit={handleWhatsAppSubmit}>
            <div>
              <label className="block text-[10px] tracking-[0.2em] uppercase font-semibold mb-2">Name</label>
              <input 
                type="text" 
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                required
                className="w-full border-b border-brand-dark/20 bg-transparent py-2 focus:outline-none focus:border-brand-gold transition-colors" 
                placeholder="Your Name" 
              />
            </div>
            <div>
              <label className="block text-[10px] tracking-[0.2em] uppercase font-semibold mb-2">Email</label>
              <input 
                type="email" 
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                className="w-full border-b border-brand-dark/20 bg-transparent py-2 focus:outline-none focus:border-brand-gold transition-colors" 
                placeholder="Your Email" 
              />
            </div>
            <div>
              <label className="block text-[10px] tracking-[0.2em] uppercase font-semibold mb-2">Message</label>
              <textarea 
                rows={4} 
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
                required
                className="w-full border-b border-brand-dark/20 bg-transparent py-2 focus:outline-none focus:border-brand-gold transition-colors resize-none" 
                placeholder="How can we help you?"
              ></textarea>
            </div>
            <button type="submit" className="bg-brand-dark text-white px-8 py-4 text-[10px] tracking-[0.2em] uppercase hover:bg-brand-gold transition-colors w-full mt-4">
              Send Message on WhatsApp
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
