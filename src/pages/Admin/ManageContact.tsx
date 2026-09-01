import { useState, useEffect } from 'react';
import { useCMS } from '../../context/CMSContext';
import { Phone } from 'lucide-react';

const ManageContact = () => {
  const { whatsappNumber, setWhatsappNumber } = useCMS();
  
  const [localNumber, setLocalNumber] = useState(whatsappNumber);
  const [isSaving, setIsSaving] = useState(false);

  useEffect(() => {
    setLocalNumber(whatsappNumber);
  }, [whatsappNumber]);

  const handleSave = async () => {
    setIsSaving(true);
    await setWhatsappNumber(localNumber);
    setIsSaving(false);
  };

  return (
    <div className="space-y-8 animate-fade-in-up">
      {/* General Settings */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="bg-gray-50 px-8 py-5 border-b border-gray-100">
          <h4 className="font-bold text-gray-800 uppercase tracking-wider text-sm flex items-center gap-2">
            <Phone size={18} className="text-brand-dark" /> Contact Settings
          </h4>
        </div>
        <div className="p-8 space-y-6">
          <div>
            <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">WhatsApp Enquiry Number (10 digits)</label>
            <div className="flex items-center">
              <span className="p-4 bg-gray-100 border border-r-0 border-gray-200 rounded-l-lg text-gray-500 font-sans text-lg select-none">
                +91
              </span>
              <input 
                type="text" 
                value={localNumber.startsWith('91') ? localNumber.slice(2) : localNumber}
                onChange={(e) => setLocalNumber('91' + e.target.value.replace(/\D/g, ''))}
                className="w-full p-4 bg-gray-50 border border-gray-200 rounded-r-lg focus:outline-none focus:ring-2 focus:ring-brand-dark/20 focus:border-brand-dark transition-all font-sans text-lg"
                placeholder="9037061189"
                maxLength={10}
              />
            </div>
            <p className="text-[10px] text-gray-400 mt-3 font-medium uppercase tracking-widest leading-relaxed">
              Updating this number will change it across the website, including:
              <br />• "Enquire on WhatsApp" button on product pages
              <br />• The Contact Us page
              <br />• The website footer
            </p>
          </div>
          <div className="flex justify-end mt-6">
            <button 
              onClick={handleSave}
              disabled={isSaving}
              className="bg-brand-dark text-white font-bold text-xs px-8 py-3 uppercase tracking-widest hover:bg-black transition-colors disabled:opacity-50 rounded-lg shadow-sm"
            >
              {isSaving ? 'Saving...' : 'Save Contact Number'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManageContact;
