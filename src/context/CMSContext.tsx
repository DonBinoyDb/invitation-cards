import React, { createContext, useContext, useState, useEffect } from 'react';
import { products as initialProducts } from '../data/products';

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
    // Load from local storage
    const storedHeading = localStorage.getItem('cms_hero_heading');
    if (storedHeading) setHeroHeadingState(storedHeading);

    const storedSubtext = localStorage.getItem('cms_hero_subtext');
    if (storedSubtext) setHeroSubtextState(storedSubtext);

    const storedNumber = localStorage.getItem('cms_whatsapp_number');
    if (storedNumber) setWhatsappNumberState(storedNumber);

    const storedCollection = localStorage.getItem('cms_our_collection');
    if (storedCollection) {
      setOurCollectionIds(JSON.parse(storedCollection));
    } else {
      // Default to the first 4 featured products
      setOurCollectionIds(initialProducts.filter(p => p.featured).slice(0, 4).map(p => p.id));
    }

    const storedArrivals = localStorage.getItem('cms_new_arrivals');
    if (storedArrivals) {
      setNewArrivalIds(JSON.parse(storedArrivals));
    } else {
      // Default to the first 8 products
      setNewArrivalIds(initialProducts.slice(0, 8).map(p => p.id));
    }
  }, []);

  const setHeroHeading = (text: string) => {
    setHeroHeadingState(text);
    localStorage.setItem('cms_hero_heading', text);
  };

  const setHeroSubtext = (text: string) => {
    setHeroSubtextState(text);
    localStorage.setItem('cms_hero_subtext', text);
  };

  const setWhatsappNumber = (num: string) => {
    setWhatsappNumberState(num);
    localStorage.setItem('cms_whatsapp_number', num);
  };

  const addToCollection = (section: 'ourCollection' | 'newArrivals', productId: string) => {
    if (section === 'ourCollection') {
      const updated = [...ourCollectionIds, productId];
      // Keep only unique
      const unique = Array.from(new Set(updated));
      setOurCollectionIds(unique);
      localStorage.setItem('cms_our_collection', JSON.stringify(unique));
    } else {
      const updated = [...newArrivalIds, productId];
      const unique = Array.from(new Set(updated));
      setNewArrivalIds(unique);
      localStorage.setItem('cms_new_arrivals', JSON.stringify(unique));
    }
  };

  const removeFromCollection = (section: 'ourCollection' | 'newArrivals', productId: string) => {
    if (section === 'ourCollection') {
      const updated = ourCollectionIds.filter(id => id !== productId);
      setOurCollectionIds(updated);
      localStorage.setItem('cms_our_collection', JSON.stringify(updated));
    } else {
      const updated = newArrivalIds.filter(id => id !== productId);
      setNewArrivalIds(updated);
      localStorage.setItem('cms_new_arrivals', JSON.stringify(updated));
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
