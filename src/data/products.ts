export interface Product {
  id: string;
  title: string;
  category: 'Wedding' | 'Birthday' | 'Corporate' | 'Baby Shower' | 'Anniversary';
  price: number;
  image: string;
  gallery: string[];
  description: string;
  details: {
    size: string;
    material: string;
    includes: string;
  };
  featured?: boolean;
}

export const products: Product[] = [
  {
    id: "sage-gold",
    title: "SAGE & GOLD",
    category: "Wedding",
    price: 10700,
    image: "/images/wedding_card.png",
    gallery: ["/images/wedding_card.png", "/images/wedding_card.png", "/images/wedding_card.png", "/images/wedding_card.png"],
    description: "Our most popular option, this heavier cardstock is expertly crafted for exceptional design and print quality.",
    details: {
      size: "210×155 mm",
      material: "Signature Smooth Cardstock, matt finish green envelop with gold embossing.",
      includes: "Card with couple name and logo fold foiling and embossing."
    },
    featured: true
  },
  {
    id: "antique-gold",
    title: "Antique Gold",
    category: "Wedding",
    price: 3500,
    image: "/images/wedding_card.png",
    gallery: ["/images/wedding_card.png", "/images/wedding_card.png", "/images/wedding_card.png", "/images/wedding_card.png"],
    description: "A stunning and divine design featuring intricate details.",
    details: {
      size: "8×8 inch",
      material: "Shimmer gold metallic.",
      includes: "Main card and envelope with Ganesha Moorthi."
    }
  },
  {
    id: "arch",
    title: "Arch",
    category: "Wedding",
    price: 2750,
    image: "/images/wedding_card.png",
    gallery: ["/images/wedding_card.png", "/images/wedding_card.png", "/images/wedding_card.png", "/images/wedding_card.png"],
    description: "An elegant arch-shaped invitation design.",
    details: {
      size: "Standard",
      material: "Premium Smooth Cardstock",
      includes: "Main card and envelope."
    }
  },
  {
    id: "barakah",
    title: "BARAKAH",
    category: "Wedding",
    price: 2650,
    image: "/images/wedding_card.png",
    gallery: ["/images/wedding_card.png", "/images/wedding_card.png", "/images/wedding_card.png", "/images/wedding_card.png"],
    description: "A beautiful invitation radiating grace and blessings.",
    details: {
      size: "210×155 mm",
      material: "Pearl Metallic finish card and envelop",
      includes: "Main card and envelope."
    }
  },
  {
    id: "beige-cream",
    title: "BEIGE AND CREAM",
    category: "Wedding",
    price: 2750,
    image: "/images/wedding_card.png",
    gallery: ["/images/wedding_card.png", "/images/wedding_card.png", "/images/wedding_card.png", "/images/wedding_card.png"],
    description: "A soft, romantic suite in perfectly balanced neutral tones.",
    details: {
      size: "210×155 mm",
      material: "Fine texture card and envelop, beige color textured envelop, off white textured card.",
      includes: "Main card and envelope."
    },
    featured: true
  },
  {
    id: "beige-elegance",
    title: "BEIGE ELEGANCE",
    category: "Wedding",
    price: 3250,
    image: "/images/wedding_card.png",
    gallery: ["/images/wedding_card.png", "/images/wedding_card.png", "/images/wedding_card.png", "/images/wedding_card.png"],
    description: "True elegance captured in warm beige tones and fine borders.",
    details: {
      size: "7×7 inch",
      material: "Beige color envelop and textured card with beige card border.",
      includes: "Main card and envelope."
    }
  },
  {
    id: "beige-tassel",
    title: "BEIGE TASSEL",
    category: "Wedding",
    price: 3500,
    image: "/images/wedding_card.png",
    gallery: ["/images/wedding_card.png", "/images/wedding_card.png", "/images/wedding_card.png", "/images/wedding_card.png"],
    description: "A premium suite adorned with delicate tassel details.",
    details: {
      size: "8×6 inch",
      material: "Smooth matt finish material",
      includes: "Main card, envelope, and tassel."
    }
  },
  {
    id: "black-gold",
    title: "BLACK and GOLD",
    category: "Wedding",
    price: 2500,
    image: "/images/wedding_card.png",
    gallery: ["/images/wedding_card.png", "/images/wedding_card.png", "/images/wedding_card.png", "/images/wedding_card.png"],
    description: "A bold, sophisticated, and incredibly striking color combination.",
    details: {
      size: "200×200 mm",
      material: "Thick matt black card and envelop with metallic gold print.",
      includes: "Main card and envelope."
    },
    featured: true
  },
  {
    id: "blooming-union",
    title: "BLOOMING UNION",
    category: "Wedding",
    price: 2850,
    image: "/images/wedding_card.png",
    gallery: ["/images/wedding_card.png", "/images/wedding_card.png", "/images/wedding_card.png", "/images/wedding_card.png"],
    description: "Floral elegance meets heavy-weight premium shimmer.",
    details: {
      size: "8X8 INCH",
      material: "Shimmer Metallic finish heavyweight card and envelop",
      includes: "Main card and envelope."
    }
  },
  {
    id: "blooming-vows",
    title: "BLOOMING VOWS",
    category: "Wedding",
    price: 2100,
    image: "/images/wedding_card.png",
    gallery: ["/images/wedding_card.png", "/images/wedding_card.png", "/images/wedding_card.png", "/images/wedding_card.png"],
    description: "Our most popular option, this heavier cardstock is expertly crafted for exceptional design and print quality.",
    details: {
      size: "210×155 mm",
      material: "Signature Smooth Cardstock",
      includes: "Main card and envelope."
    }
  },
  {
    id: "blossom-bond",
    title: "BLOSSOM & BOND",
    category: "Wedding",
    price: 2650,
    image: "/images/wedding_card.png",
    gallery: ["/images/wedding_card.png", "/images/wedding_card.png", "/images/wedding_card.png", "/images/wedding_card.png"],
    description: "A seamless bond celebrated through a flawlessly smooth finish.",
    details: {
      size: "200×200 mm",
      material: "Signature Smooth Matt finish card and envelop",
      includes: "Main card and envelope."
    }
  },
  {
    id: "blossom-grace",
    title: "BLOSSOM GRACE",
    category: "Wedding",
    price: 2250,
    image: "/images/wedding_card.png",
    gallery: ["/images/wedding_card.png", "/images/wedding_card.png", "/images/wedding_card.png", "/images/wedding_card.png"],
    description: "Lightweight, ethereal, and beautifully textured.",
    details: {
      size: "210×155 mm",
      material: "Lightweight textured card stock",
      includes: "Main card and envelope."
    }
  },
  {
    id: "blossom-romance",
    title: "BLOSSOM ROMANCE",
    category: "Wedding",
    price: 2650,
    image: "/images/wedding_card.png",
    gallery: ["/images/wedding_card.png", "/images/wedding_card.png", "/images/wedding_card.png", "/images/wedding_card.png"],
    description: "A deeply romantic design with a pristine smooth surface.",
    details: {
      size: "200×200 mm",
      material: "Signature Smooth Matt finish card and envelop",
      includes: "Main card and envelope."
    }
  }
];
