import React, { createContext, useContext, useState, useEffect } from 'react';
import { products as initialProducts } from '../data/products';
import { supabase } from '../lib/supabaseClient';

interface CMSContextType {
  heroHeading: string;
  heroSubtext: string;
  setHeroHeading: (text: string) => void;
  setHeroSubtext: (text: string) => void;
  ourCollectionIds: string[];
  newArrivalIds: string[];
  addToCollection: (section: 'ourCollection' | 'newArrivals', productId: string) => void;
  removeFromCollection: (section: 'ourCollection' | 'newArrivals', productId: string) => void;
  whatsappNumber: string;
  setWhatsappNumber: (num: string) => void;
}

const defaultHeading = "INVITATIONS\nCRAFTED";
const defaultSubtext = "Discover bespoke invitation suites that perfectly mirror your unique personality and style. We deliver confidence and elegance to your special day effortlessly.";

const CMSContext = createContext<CMSContextType | undefined>(undefined);

export const CMSProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [heroHeading, setHeroHeadingState] = useState(defaultHeading);
  const [heroSubtext, setHeroSubtextState] = useState(defaultSubtext);
  const [ourCollectionIds, setOurCollectionIds] = useState<string[]>([]);
  const [newArrivalIds, setNewArrivalIds] = useState<string[]>([]);
  const [whatsappNumber, setWhatsappNumberState] = useState("919037061189");

  useEffect(() => {
    const loadSettings = async () => {
      // First, try loading from localStorage for immediate render
      const storedHeading = localStorage.getItem('cms_hero_heading');
      if (storedHeading) setHeroHeadingState(storedHeading);
      const storedSubtext = localStorage.getItem('cms_hero_subtext');
      if (storedSubtext) setHeroSubtextState(storedSubtext);
      const storedNumber = localStorage.getItem('cms_whatsapp_number');
      if (storedNumber) setWhatsappNumberState(storedNumber);
      
      const storedCollection = localStorage.getItem('cms_our_collection');
      if (storedCollection) setOurCollectionIds(JSON.parse(storedCollection));
      else setOurCollectionIds(initialProducts.filter(p => p.featured).slice(0, 4).map(p => p.id));
      
      const storedArrivals = localStorage.getItem('cms_new_arrivals');
      if (storedArrivals) setNewArrivalIds(JSON.parse(storedArrivals));
      else setNewArrivalIds(initialProducts.slice(0, 8).map(p => p.id));

      // Then fetch from Supabase to get latest
      const { data, error } = await supabase.from('cms_settings').select('*');
      if (!error && data) {
        data.forEach(item => {
          if (item.key === 'cms_hero_heading') {
            setHeroHeadingState(item.value);
            localStorage.setItem('cms_hero_heading', item.value);
          } else if (item.key === 'cms_hero_subtext') {
            setHeroSubtextState(item.value);
            localStorage.setItem('cms_hero_subtext', item.value);
          } else if (item.key === 'cms_whatsapp_number') {
            setWhatsappNumberState(item.value);
            localStorage.setItem('cms_whatsapp_number', item.value);
          } else if (item.key === 'cms_our_collection') {
            setOurCollectionIds(item.value);
            localStorage.setItem('cms_our_collection', JSON.stringify(item.value));
          } else if (item.key === 'cms_new_arrivals') {
            setNewArrivalIds(item.value);
            localStorage.setItem('cms_new_arrivals', JSON.stringify(item.value));
          }
        });
      }
    };
    loadSettings();
  }, []);

  const setHeroHeading = async (text: string) => {
    setHeroHeadingState(text);
    localStorage.setItem('cms_hero_heading', text);
    await supabase.from('cms_settings').upsert({ key: 'cms_hero_heading', value: text });
  };

  const setHeroSubtext = async (text: string) => {
    setHeroSubtextState(text);
    localStorage.setItem('cms_hero_subtext', text);
    await supabase.from('cms_settings').upsert({ key: 'cms_hero_subtext', value: text });
  };

  const setWhatsappNumber = async (num: string) => {
    setWhatsappNumberState(num);
    localStorage.setItem('cms_whatsapp_number', num);
    await supabase.from('cms_settings').upsert({ key: 'cms_whatsapp_number', value: num });
  };

  const addToCollection = async (section: 'ourCollection' | 'newArrivals', productId: string) => {
    if (section === 'ourCollection') {
      const updated = [...ourCollectionIds, productId];
      // Keep only unique
      const unique = Array.from(new Set(updated));
      setOurCollectionIds(unique);
      localStorage.setItem('cms_our_collection', JSON.stringify(unique));
      await supabase.from('cms_settings').upsert({ key: 'cms_our_collection', value: unique });
    } else {
      const updated = [...newArrivalIds, productId];
      const unique = Array.from(new Set(updated));
      setNewArrivalIds(unique);
      localStorage.setItem('cms_new_arrivals', JSON.stringify(unique));
      await supabase.from('cms_settings').upsert({ key: 'cms_new_arrivals', value: unique });
    }
  };

  const removeFromCollection = async (section: 'ourCollection' | 'newArrivals', productId: string) => {
    if (section === 'ourCollection') {
      const updated = ourCollectionIds.filter(id => id !== productId);
      setOurCollectionIds(updated);
      localStorage.setItem('cms_our_collection', JSON.stringify(updated));
      await supabase.from('cms_settings').upsert({ key: 'cms_our_collection', value: updated });
    } else {
      const updated = newArrivalIds.filter(id => id !== productId);
      setNewArrivalIds(updated);
      localStorage.setItem('cms_new_arrivals', JSON.stringify(updated));
      await supabase.from('cms_settings').upsert({ key: 'cms_new_arrivals', value: updated });
    }
  };

  return (
    <CMSContext.Provider value={{
      heroHeading,
      heroSubtext,
      setHeroHeading,
      setHeroSubtext,
      ourCollectionIds,
      newArrivalIds,
      addToCollection,
      removeFromCollection,
      whatsappNumber,
      setWhatsappNumber
    }}>
      {children}
    </CMSContext.Provider>
  );
};

export const useCMS = () => {
  const context = useContext(CMSContext);
  if (context === undefined) {
    throw new Error('useCMS must be used within a CMSProvider');
  }
  return context;
};
