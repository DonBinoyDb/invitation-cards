export interface Product {
  id: string;
  title: string;
  category: string;
  price: number;
  image: string;
  gallery: string[];
  description: string;
  details: {
    size: string;
    material: string;
    includes: string;
    tags?: string[];
  };
  featured?: boolean;
  hidden?: boolean;
}

export const products: Product[] = [
  {
    "id": "antique-gold",
    "title": "Antique Gold",
    "category": "Wedding",
    "price": 3500,
    "image": "/images/Antique Gold/1.1.jpg",
    "gallery": [
      "/images/Antique Gold/1.1.jpg",
      "/images/Antique Gold/1.jpg",
      "/images/Antique Gold/2.jpg",
      "/images/Antique Gold/3.jpg"
    ],
    "description": "A beautiful Antique Gold invitation card.",
    "details": {
      "size": "Standard",
      "material": "Premium Cardstock",
      "includes": "Main card and envelope"
    }
  },
  {
    "id": "arch",
    "title": "Arch",
    "category": "Wedding",
    "price": 2750,
    "image": "/images/Arch/1.jpg",
    "gallery": [
      "/images/Arch/1.jpg",
      "/images/Arch/2.2.jpg",
      "/images/Arch/2.jpg"
    ],
    "description": "A beautiful Arch invitation card.",
    "details": {
      "size": "Standard",
      "material": "Premium Cardstock",
      "includes": "Main card and envelope"
    }
  },
  {
    "id": "beige-and-cream",
    "title": "Beige and Cream",
    "category": "Wedding",
    "price": 2750,
    "image": "/images/BEIGE AND CREAM/1.jpg",
    "gallery": [
      "/images/BEIGE AND CREAM/1.jpg",
      "/images/BEIGE AND CREAM/2.0.jpg",
      "/images/BEIGE AND CREAM/2.1.jpg",
      "/images/BEIGE AND CREAM/2.jpg"
    ],
    "description": "A beautiful Beige and Cream invitation card.",
    "details": {
      "size": "Standard",
      "material": "Premium Cardstock",
      "includes": "Main card and envelope"
    }
  },
  {
    "id": "beige-elegance",
    "title": "Beige Elegance",
    "category": "Wedding",
    "price": 3250,
    "image": "/images/BEIGE ELEGANCE/1.jpg",
    "gallery": [
      "/images/BEIGE ELEGANCE/1.jpg",
      "/images/BEIGE ELEGANCE/2.jpg",
      "/images/BEIGE ELEGANCE/3.jpg"
    ],
    "description": "A beautiful Beige Elegance invitation card.",
    "details": {
      "size": "Standard",
      "material": "Premium Cardstock",
      "includes": "Main card and envelope"
    }
  },
  {
    "id": "beige-tassel",
    "title": "Beige Tassel",
    "category": "Wedding",
    "price": 3500,
    "image": "/images/BEIGE TASSEL/1.jpg",
    "gallery": [
      "/images/BEIGE TASSEL/1.jpg",
      "/images/BEIGE TASSEL/2.jpg",
      "/images/BEIGE TASSEL/3.jpg"
    ],
    "description": "A beautiful Beige Tassel invitation card.",
    "details": {
      "size": "Standard",
      "material": "Premium Cardstock",
      "includes": "Main card and envelope"
    }
  },
  {
    "id": "black-and-gold",
    "title": "Black and Gold",
    "category": "Wedding",
    "price": 5000,
    "image": "/images/BLACK and GOLD/1.jpg",
    "gallery": [
      "/images/BLACK and GOLD/1.jpg",
      "/images/BLACK and GOLD/2.jpg",
      "/images/BLACK and GOLD/3.jpg"
    ],
    "description": "A beautiful Black and Gold invitation card.",
    "details": {
      "size": "Standard",
      "material": "Premium Cardstock",
      "includes": "Main card and envelope"
    }
  },
  {
    "id": "blooming-union",
    "title": "Blooming Union",
    "category": "Wedding",
    "price": 2850,
    "image": "/images/BLOOMING UNION/1.jpg",
    "gallery": [
      "/images/BLOOMING UNION/1.jpg",
      "/images/BLOOMING UNION/2.jpg",
      "/images/BLOOMING UNION/3.jpg"
    ],
    "description": "A beautiful Blooming Union invitation card.",
    "details": {
      "size": "Standard",
      "material": "Premium Cardstock",
      "includes": "Main card and envelope"
    }
  },
  {
    "id": "blooming-vows",
    "title": "Blooming Vows",
    "category": "Wedding",
    "price": 2100,
    "image": "/images/BLOOMING VOW/1.jpg",
    "gallery": [
      "/images/BLOOMING VOW/1.jpg",
      "/images/BLOOMING VOW/3.jpg"
    ],
    "description": "A beautiful Blooming Vows invitation card.",
    "details": {
      "size": "Standard",
      "material": "Premium Cardstock",
      "includes": "Main card and envelope"
    }
  },
  {
    "id": "blossom-bond",
    "title": "Blossom & Bond",
    "category": "Wedding",
    "price": 2650,
    "image": "/images/BLOSSOM & BOND/1.jpg",
    "gallery": [
      "/images/BLOSSOM & BOND/1.jpg",
      "/images/BLOSSOM & BOND/2.jpg",
      "/images/BLOSSOM & BOND/3.jpg"
    ],
    "description": "A beautiful Blossom & Bond invitation card.",
    "details": {
      "size": "Standard",
      "material": "Premium Cardstock",
      "includes": "Main card and envelope"
    }
  },
  {
    "id": "blossom-grace",
    "title": "Blossom Grace",
    "category": "Wedding",
    "price": 2350,
    "image": "/images/BLOSSOM GRACE/1.jpg",
    "gallery": [
      "/images/BLOSSOM GRACE/1.jpg",
      "/images/BLOSSOM GRACE/2.jpg"
    ],
    "description": "A beautiful Blossom Grace invitation card.",
    "details": {
      "size": "Standard",
      "material": "Premium Cardstock",
      "includes": "Main card and envelope"
    }
  },
  {
    "id": "blossom-romance",
    "title": "Blossom Romance",
    "category": "Wedding",
    "price": 2650,
    "image": "/images/BLOSSOM ROMANCE/1.jpg",
    "gallery": [
      "/images/BLOSSOM ROMANCE/1.jpg",
      "/images/BLOSSOM ROMANCE/2.jpg"
    ],
    "description": "A beautiful Blossom Romance invitation card.",
    "details": {
      "size": "Standard",
      "material": "Premium Cardstock",
      "includes": "Main card and envelope"
    }
  },
  {
    "id": "blossom-romance-1",
    "title": "Blossom Romance",
    "category": "Wedding",
    "price": 2650,
    "image": "/images/BLOSSOM ROMANCE/1.jpg",
    "gallery": [
      "/images/BLOSSOM ROMANCE/1.jpg",
      "/images/BLOSSOM ROMANCE/2.jpg"
    ],
    "description": "A beautiful Blossom Romance invitation card.",
    "details": {
      "size": "Standard",
      "material": "Premium Cardstock",
      "includes": "Main card and envelope"
    }
  },
  {
    "id": "blossom-romance-2",
    "title": "Blossom Romance",
    "category": "Wedding",
    "price": 2650,
    "image": "/images/BLOSSOM ROMANCE/1.jpg",
    "gallery": [
      "/images/BLOSSOM ROMANCE/1.jpg",
      "/images/BLOSSOM ROMANCE/2.jpg"
    ],
    "description": "A beautiful Blossom Romance invitation card.",
    "details": {
      "size": "Standard",
      "material": "Premium Cardstock",
      "includes": "Main card and envelope"
    }
  },
  {
    "id": "blue-blossom",
    "title": "Blue Blossom",
    "category": "Wedding",
    "price": 2450,
    "image": "/images/BLUE BLOSSOM/1.jpeg",
    "gallery": [
      "/images/BLUE BLOSSOM/1.jpeg",
      "/images/BLUE BLOSSOM/2.jpg",
      "/images/BLUE BLOSSOM/3.jpg"
    ],
    "description": "A beautiful Blue Blossom invitation card.",
    "details": {
      "size": "Standard",
      "material": "Premium Cardstock",
      "includes": "Main card and envelope"
    }
  },
  {
    "id": "blue-mosaic",
    "title": "Blue Mosaic",
    "category": "Wedding",
    "price": 2350,
    "image": "/images/BLUE MOSAIC/1.jpg",
    "gallery": [
      "/images/BLUE MOSAIC/1.jpg",
      "/images/BLUE MOSAIC/2.jpg",
      "/images/BLUE MOSAIC/3.jpg"
    ],
    "description": "A beautiful Blue Mosaic invitation card.",
    "details": {
      "size": "Standard",
      "material": "Premium Cardstock",
      "includes": "Main card and envelope"
    }
  },
  {
    "id": "blush-and-blue",
    "title": "Blush and Blue",
    "category": "Wedding",
    "price": 2850,
    "image": "/images/Blush and Blue/1.jpg",
    "gallery": [
      "/images/Blush and Blue/1.jpg",
      "/images/Blush and Blue/2.jpg",
      "/images/Blush and Blue/3.jpg"
    ],
    "description": "A beautiful Blush and Blue invitation card.",
    "details": {
      "size": "Standard",
      "material": "Premium Cardstock",
      "includes": "Main card and envelope"
    }
  },
  {
    "id": "blush-and-lilac",
    "title": "Blush and Lilac",
    "category": "Wedding",
    "price": 2850,
    "image": "/images/Blush and Lilac/1.jpg",
    "gallery": [
      "/images/Blush and Lilac/1.jpg",
      "/images/Blush and Lilac/2.jpeg",
      "/images/Blush and Lilac/3.jpg",
      "/images/Blush and Lilac/4.jpg"
    ],
    "description": "A beautiful Blush and Lilac invitation card.",
    "details": {
      "size": "Standard",
      "material": "Premium Cardstock",
      "includes": "Main card and envelope"
    }
  },
  {
    "id": "blush-arch",
    "title": "Blush Arch",
    "category": "Wedding",
    "price": 3000,
    "image": "/images/BLUSH ARCH/1.jpg",
    "gallery": [
      "/images/BLUSH ARCH/1.jpg",
      "/images/BLUSH ARCH/2.jpg",
      "/images/BLUSH ARCH/3.jpg"
    ],
    "description": "A beautiful Blush Arch invitation card.",
    "details": {
      "size": "Standard",
      "material": "Premium Cardstock",
      "includes": "Main card and envelope"
    }
  },
  {
    "id": "blush-garden",
    "title": "Blush Garden",
    "category": "Wedding",
    "price": 2650,
    "image": "/images/BLUSH GARDEN/1.jpg",
    "gallery": [
      "/images/BLUSH GARDEN/1.jpg",
      "/images/BLUSH GARDEN/2.jpg",
      "/images/BLUSH GARDEN/3.jpg"
    ],
    "description": "A beautiful Blush Garden invitation card.",
    "details": {
      "size": "Standard",
      "material": "Premium Cardstock",
      "includes": "Main card and envelope"
    }
  },
  {
    "id": "blush-garden-1",
    "title": "Blush Garden",
    "category": "Wedding",
    "price": 2350,
    "image": "/images/BLUSH GARDEN/1.jpg",
    "gallery": [
      "/images/BLUSH GARDEN/1.jpg",
      "/images/BLUSH GARDEN/2.jpg",
      "/images/BLUSH GARDEN/3.jpg"
    ],
    "description": "A beautiful Blush Garden invitation card.",
    "details": {
      "size": "Standard",
      "material": "Premium Cardstock",
      "includes": "Main card and envelope"
    }
  },
  {
    "id": "blush-garden-2",
    "title": "Blush Garden",
    "category": "Wedding",
    "price": 2350,
    "image": "/images/BLUSH GARDEN/1.jpg",
    "gallery": [
      "/images/BLUSH GARDEN/1.jpg",
      "/images/BLUSH GARDEN/2.jpg",
      "/images/BLUSH GARDEN/3.jpg"
    ],
    "description": "A beautiful Blush Garden invitation card.",
    "details": {
      "size": "Standard",
      "material": "Premium Cardstock",
      "includes": "Main card and envelope"
    }
  },
  {
    "id": "blush-serenity",
    "title": "Blush Serenity",
    "category": "Wedding",
    "price": 2350,
    "image": "/images/BLUSH SERENITY/1.jpeg",
    "gallery": [
      "/images/BLUSH SERENITY/1.jpeg",
      "/images/BLUSH SERENITY/2.jpeg",
      "/images/BLUSH SERENITY/3.jpeg"
    ],
    "description": "A beautiful Blush Serenity invitation card.",
    "details": {
      "size": "Standard",
      "material": "Premium Cardstock",
      "includes": "Main card and envelope"
    }
  },
  {
    "id": "blushing-vows",
    "title": "Blushing Vows",
    "category": "Wedding",
    "price": 3800,
    "image": "/images/BLUSHING VOWS/1.jpg",
    "gallery": [
      "/images/BLUSHING VOWS/1.jpg",
      "/images/BLUSHING VOWS/2.jpg",
      "/images/BLUSHING VOWS/3.jpg"
    ],
    "description": "A beautiful Blushing Vows invitation card.",
    "details": {
      "size": "Standard",
      "material": "Premium Cardstock",
      "includes": "Main card and envelope"
    }
  },
  {
    "id": "classic-magnolia",
    "title": "Classic Magnolia",
    "category": "Wedding",
    "price": 2750,
    "image": "/images/CLASSIC MAGNOLIA/1.jpg",
    "gallery": [
      "/images/CLASSIC MAGNOLIA/1.jpg",
      "/images/CLASSIC MAGNOLIA/2.jpg",
      "/images/CLASSIC MAGNOLIA/3.jpg"
    ],
    "description": "A beautiful Classic Magnolia invitation card.",
    "details": {
      "size": "Standard",
      "material": "Premium Cardstock",
      "includes": "Main card and envelope"
    }
  },
  {
    "id": "customised",
    "title": "Customised",
    "category": "Wedding",
    "price": 2500,
    "image": "/images/customised/1.jpg",
    "gallery": [
      "/images/customised/1.jpg",
      "/images/customised/2.jpeg",
      "/images/customised/3.jpeg"
    ],
    "description": "A beautiful Customised invitation card.",
    "details": {
      "size": "Standard",
      "material": "Premium Cardstock",
      "includes": "Main card and envelope"
    }
  },
  {
    "id": "divine-union",
    "title": "Divine Union",
    "category": "Wedding",
    "price": 2500,
    "image": "/images/DIVINE UNION/1.jpeg",
    "gallery": [
      "/images/DIVINE UNION/1.jpeg",
      "/images/DIVINE UNION/2.jpeg",
      "/images/DIVINE UNION/3.jpeg"
    ],
    "description": "A beautiful Divine Union invitation card.",
    "details": {
      "size": "Standard",
      "material": "Premium Cardstock",
      "includes": "Main card and envelope"
    }
  },
  {
    "id": "elana-vows",
    "title": "Elora Vows",
    "category": "Wedding",
    "price": 2550,
    "image": "/images/ELORA VOWS/1.jpg",
    "gallery": [
      "/images/ELORA VOWS/1.jpg",
      "/images/ELORA VOWS/2.jpg",
      "/images/ELORA VOWS/3.jpg",
      "/images/ELORA VOWS/4.jpg"
    ],
    "description": "A beautiful Elana Vows invitation card.",
    "details": {
      "size": "Standard",
      "material": "Premium Cardstock",
      "includes": "Main card and envelope"
    }
  },
  {
    "id": "emerald",
    "title": "Emerald",
    "category": "Wedding",
    "price": 3000,
    "image": "/images/EMERALD/1.jpg",
    "gallery": [
      "/images/EMERALD/1.jpg",
      "/images/EMERALD/2.jpg",
      "/images/EMERALD/3.jpg",
      "/images/EMERALD/4.jpg"
    ],
    "description": "A beautiful Emerald invitation card.",
    "details": {
      "size": "Standard",
      "material": "Premium Cardstock",
      "includes": "Main card and envelope"
    }
  },
  {
    "id": "emerald-cream",
    "title": "Emerald & Cream",
    "category": "Wedding",
    "price": 2750,
    "image": "/images/EMARALD AND CREAM/1.jpg",
    "gallery": [
      "/images/EMARALD AND CREAM/1.jpg",
      "/images/EMARALD AND CREAM/2.jpg",
      "/images/EMARALD AND CREAM/3.jpg"
    ],
    "description": "A beautiful Emerald & Cream invitation card.",
    "details": {
      "size": "Standard",
      "material": "Premium Cardstock",
      "includes": "Main card and envelope"
    }
  },
  {
    "id": "emerald-and-gold",
    "title": "Emerald and Gold",
    "category": "Wedding",
    "price": 3000,
    "image": "/images/EMERALD AND GOLD/1.jpg",
    "gallery": [
      "/images/EMERALD AND GOLD/1.jpg",
      "/images/EMERALD AND GOLD/2.jpg",
      "/images/EMERALD AND GOLD/3.jpg"
    ],
    "description": "A beautiful Emerald and Gold invitation card.",
    "details": {
      "size": "Standard",
      "material": "Premium Cardstock",
      "includes": "Main card and envelope"
    }
  },
  {
    "id": "emerald-tassel",
    "title": "Emerald Tassel",
    "category": "Wedding",
    "price": 3500,
    "image": "/images/EMERALD TASSEL/1.jpeg",
    "gallery": [
      "/images/EMERALD TASSEL/1.jpeg",
      "/images/EMERALD TASSEL/2.jpeg",
      "/images/EMERALD TASSEL/3.jpeg"
    ],
    "description": "A beautiful Emerald Tassel invitation card.",
    "details": {
      "size": "Standard",
      "material": "Premium Cardstock",
      "includes": "Main card and envelope"
    }
  },
  {
    "id": "eternal-garden",
    "title": "Eternal Garden",
    "category": "Wedding",
    "price": 2550,
    "image": "/images/ETERNAL GARDEN/1.jpg",
    "gallery": [
      "/images/ETERNAL GARDEN/1.jpg",
      "/images/ETERNAL GARDEN/2.jpg",
      "/images/ETERNAL GARDEN/3.jpg"
    ],
    "description": "A beautiful Eternal Garden invitation card.",
    "details": {
      "size": "Standard",
      "material": "Premium Cardstock",
      "includes": "Main card and envelope"
    }
  },
  {
    "id": "floral-and-mandap",
    "title": "Floral and Mandap",
    "category": "Wedding",
    "price": 2650,
    "image": "/images/Floral and Mandap/1.jpg",
    "gallery": [
      "/images/Floral and Mandap/1.jpg",
      "/images/Floral and Mandap/2.jpg",
      "/images/Floral and Mandap/3.jpg",
      "/images/Floral and Mandap/4.jpg"
    ],
    "description": "A beautiful Floral and Mandap invitation card.",
    "details": {
      "size": "Standard",
      "material": "Premium Cardstock",
      "includes": "Main card and envelope"
    }
  },
  {
    "id": "floral-forever",
    "title": "Floral Forever",
    "category": "Wedding",
    "price": 2750,
    "image": "/images/FLORAL FOREVER/1.jpg",
    "gallery": [
      "/images/FLORAL FOREVER/1.jpg",
      "/images/FLORAL FOREVER/2.jpg",
      "/images/FLORAL FOREVER/3.jpg",
      "/images/FLORAL FOREVER/4.jpg",
      "/images/FLORAL FOREVER/5.jpg"
    ],
    "description": "A beautiful Floral Forever invitation card.",
    "details": {
      "size": "Standard",
      "material": "Premium Cardstock",
      "includes": "Main card and envelope"
    }
  },
  {
    "id": "floral-noir",
    "title": "Floral Noir",
    "category": "Wedding",
    "price": 2650,
    "image": "/images/FLORAL NOIR/1.jpg",
    "gallery": [
      "/images/FLORAL NOIR/1.jpg",
      "/images/FLORAL NOIR/2.jpg"
    ],
    "description": "A beautiful Floral Noir invitation card.",
    "details": {
      "size": "Standard",
      "material": "Premium Cardstock",
      "includes": "Main card and envelope"
    }
  },
  {
    "id": "floral-sapphire",
    "title": "Floral Sapphire",
    "category": "Wedding",
    "price": 1500,
    "image": "/images/FLORAL SAPPHIRE/1.jpg",
    "gallery": [
      "/images/FLORAL SAPPHIRE/1.jpg",
      "/images/FLORAL SAPPHIRE/2.jpg",
      "/images/FLORAL SAPPHIRE/3.jpg",
      "/images/FLORAL SAPPHIRE/4.jpg"
    ],
    "description": "A beautiful Floral Sapphire invitation card.",
    "details": {
      "size": "Standard",
      "material": "Premium Cardstock",
      "includes": "Main card and envelope"
    }
  },
  {
    "id": "florals",
    "title": "Florals",
    "category": "Wedding",
    "price": 3100,
    "image": "/images/FLORALS/1.jpg",
    "gallery": [
      "/images/FLORALS/1.jpg",
      "/images/FLORALS/2.jpg",
      "/images/FLORALS/3.jpg"
    ],
    "description": "A beautiful Florals invitation card.",
    "details": {
      "size": "Standard",
      "material": "Premium Cardstock",
      "includes": "Main card and envelope"
    }
  },
  {
    "id": "florals-and-green",
    "title": "Florals and Green",
    "category": "Wedding",
    "price": 2650,
    "image": "/images/Florals and green/1.jpg",
    "gallery": [
      "/images/Florals and green/1.jpg",
      "/images/Florals and green/2.jpg"
    ],
    "description": "A beautiful Florals and Green invitation card.",
    "details": {
      "size": "Standard",
      "material": "Premium Cardstock",
      "includes": "Main card and envelope"
    }
  },
  {
    "id": "florals-and-pink",
    "title": "Florals and Pink",
    "category": "Wedding",
    "price": 3500,
    "image": "/images/Florals and Pink/1.jpg",
    "gallery": [
      "/images/Florals and Pink/1.jpg",
      "/images/Florals and Pink/2.jpg",
      "/images/Florals and Pink/3.jpg"
    ],
    "description": "A beautiful Florals and Pink invitation card.",
    "details": {
      "size": "Standard",
      "material": "Premium Cardstock",
      "includes": "Main card and envelope"
    }
  },
  {
    "id": "florals-and-vellum",
    "title": "Florals and Vellum",
    "category": "Wedding",
    "price": 2200,
    "image": "/images/Florals and Vellum/1.jpg",
    "gallery": [
      "/images/Florals and Vellum/1.jpg",
      "/images/Florals and Vellum/2.jpg",
      "/images/Florals and Vellum/3.jpg",
      "/images/Florals and Vellum/4.jpg",
      "/images/Florals and Vellum/5.jpg",
      "/images/Florals and Vellum/6.jpg"
    ],
    "description": "A beautiful Florals and Vellum invitation card.",
    "details": {
      "size": "Standard",
      "material": "Premium Cardstock",
      "includes": "Main card and envelope"
    }
  },
  {
    "id": "florence-bliss",
    "title": "Florence Bliss",
    "category": "Wedding",
    "price": 2650,
    "image": "/images/FLORENCE BLISS/1.jpg",
    "gallery": [
      "/images/FLORENCE BLISS/1.jpg",
      "/images/FLORENCE BLISS/2.jpg",
      "/images/FLORENCE BLISS/3.jpg"
    ],
    "description": "A beautiful Florence Bliss invitation card.",
    "details": {
      "size": "Standard",
      "material": "Premium Cardstock",
      "includes": "Main card and envelope"
    }
  },
  {
    "id": "folding",
    "title": "Folding",
    "category": "Wedding",
    "price": 3500,
    "image": "/images/Folding/1.jpg",
    "gallery": [
      "/images/Folding/1.jpg",
      "/images/Folding/2.jpg"
    ],
    "description": "A beautiful Folding invitation card.",
    "details": {
      "size": "Standard",
      "material": "Premium Cardstock",
      "includes": "Main card and envelope"
    }
  },
  {
    "id": "golden-wreath-collection",
    "title": "Golden Wreath Collection",
    "category": "Wedding",
    "price": 2350,
    "image": "/images/GOLDEN WREATH COLLECTION/1.jpg",
    "gallery": [
      "/images/GOLDEN WREATH COLLECTION/1.jpg",
      "/images/GOLDEN WREATH COLLECTION/2.jpg"
    ],
    "description": "A beautiful Golden Wreath Collection invitation card.",
    "details": {
      "size": "Standard",
      "material": "Premium Cardstock",
      "includes": "Main card and envelope"
    }
  },
  {
    "id": "grace-green",
    "title": "Grace & Green",
    "category": "Wedding",
    "price": 3800,
    "image": "/images/GRACE & GREEN/1.jpg",
    "gallery": [
      "/images/GRACE & GREEN/1.jpg",
      "/images/GRACE & GREEN/2.jpg",
      "/images/GRACE & GREEN/3.jpg",
      "/images/GRACE & GREEN/4.jpg"
    ],
    "description": "A beautiful Grace & Green invitation card.",
    "details": {
      "size": "Standard",
      "material": "Premium Cardstock",
      "includes": "Main card and envelope"
    }
  },
  {
    "id": "hydrangea-bliss",
    "title": "Hydrangea Bliss",
    "category": "Wedding",
    "price": 2550,
    "image": "https://picsum.photos/seed/hydrangea-bliss/600/600",
    "gallery": [
      "https://picsum.photos/seed/hydrangea-bliss/600/600",
      "https://picsum.photos/seed/hydrangea-bliss-1/600/600"
    ],
    "description": "A beautiful Hydrangea Bliss invitation card.",
    "details": {
      "size": "Standard",
      "material": "Premium Cardstock",
      "includes": "Main card and envelope"
    }
  },
  {
    "id": "ivory-crest",
    "title": "Ivory Crest",
    "category": "Wedding",
    "price": 2100,
    "image": "/images/IVORY CREST/1.jpg",
    "gallery": [
      "/images/IVORY CREST/1.jpg",
      "/images/IVORY CREST/2.jpg",
      "/images/IVORY CREST/3.jpg"
    ],
    "description": "A beautiful Ivory Crest invitation card.",
    "details": {
      "size": "Standard",
      "material": "Premium Cardstock",
      "includes": "Main card and envelope"
    }
  },
  {
    "id": "ivory-whisper",
    "title": "Ivory Whisper",
    "category": "Wedding",
    "price": 5000,
    "image": "/images/ivory/1.jpg",
    "gallery": [
      "/images/ivory/1.jpg",
      "/images/ivory/2.jpg",
      "/images/ivory/3.jpg"
    ],
    "description": "A beautiful Ivory Whisper invitation card.",
    "details": {
      "size": "Standard",
      "material": "Premium Cardstock",
      "includes": "Main card and envelope"
    }
  },
  {
    "id": "kasavu-grace",
    "title": "Kasavu Grace",
    "category": "Wedding",
    "price": 2650,
    "image": "/images/KASAVU GRACE/1.jpg",
    "gallery": [
      "/images/KASAVU GRACE/1.jpg",
      "/images/KASAVU GRACE/2.jpg",
      "/images/KASAVU GRACE/4.jpg",
      "/images/KASAVU GRACE/5.jpg",
      "/images/KASAVU GRACE/6.jpg"
    ],
    "description": "A beautiful Kasavu Grace invitation card.",
    "details": {
      "size": "Standard",
      "material": "Premium Cardstock",
      "includes": "Main card and envelope"
    }
  },
  {
    "id": "kraft-and-cream",
    "title": "Kraft and Cream",
    "category": "Wedding",
    "price": 1000,
    "image": "/images/Kraft and cream/1.jpg",
    "gallery": [
      "/images/Kraft and cream/1.jpg",
      "/images/Kraft and cream/2.jpg"
    ],
    "description": "A beautiful Kraft and Cream invitation card.",
    "details": {
      "size": "Standard",
      "material": "Premium Cardstock",
      "includes": "Main card and envelope"
    }
  },
  {
    "id": "kraft-and-cream-1",
    "title": "Kraft and Cream",
    "category": "Wedding",
    "price": 2200,
    "image": "/images/Kraft and cream/1.jpg",
    "gallery": [
      "/images/Kraft and cream/1.jpg",
      "/images/Kraft and cream/2.jpg"
    ],
    "description": "A beautiful Kraft and Cream invitation card.",
    "details": {
      "size": "Standard",
      "material": "Premium Cardstock",
      "includes": "Main card and envelope"
    }
  },
  {
    "id": "kraft-and-cream-2",
    "title": "Kraft and Cream",
    "category": "Wedding",
    "price": 2300,
    "image": "/images/Kraft and cream/1.jpg",
    "gallery": [
      "/images/Kraft and cream/1.jpg",
      "/images/Kraft and cream/2.jpg"
    ],
    "description": "A beautiful Kraft and Cream invitation card.",
    "details": {
      "size": "Standard",
      "material": "Premium Cardstock",
      "includes": "Main card and envelope"
    }
  },
  {
    "id": "kraft-n-white",
    "title": "Kraft n White",
    "category": "Wedding",
    "price": 1500,
    "image": "/images/Kraft n White/14.jpg",
    "gallery": [
      "/images/Kraft n White/14.jpg",
      "/images/Kraft n White/15.jpg",
      "/images/Kraft n White/16.jpg"
    ],
    "description": "A beautiful Kraft n White invitation card.",
    "details": {
      "size": "Standard",
      "material": "Premium Cardstock",
      "includes": "Main card and envelope"
    }
  },
  {
    "id": "kraft-n-texture",
    "title": "Kraft n Texture",
    "category": "Wedding",
    "price": 2750,
    "image": "/images/KRAKT n TEXTURE/17.jpg",
    "gallery": [
      "/images/KRAKT n TEXTURE/17.jpg",
      "/images/KRAKT n TEXTURE/18.jpg",
      "/images/KRAKT n TEXTURE/19.jpg"
    ],
    "description": "A beautiful Kraft n Texture invitation card.",
    "details": {
      "size": "Standard",
      "material": "Premium Cardstock",
      "includes": "Main card and envelope"
    }
  },
  {
    "id": "l-k",
    "title": "L&K",
    "category": "Wedding",
    "price": 13500,
    "image": "/images/L&R/20.jpg",
    "gallery": [
      "/images/L&R/20.jpg",
      "/images/L&R/21.jpg",
      "/images/L&R/22.jpg"
    ],
    "description": "A beautiful L&K invitation card.",
    "details": {
      "size": "Standard",
      "material": "Premium Cardstock",
      "includes": "Main card and envelope"
    }
  },
  {
    "id": "lavender-love",
    "title": "Lavender Love",
    "category": "Wedding",
    "price": 2650,
    "image": "/images/LAVENDER LOVE/23.jpg",
    "gallery": [
      "/images/LAVENDER LOVE/23.jpg",
      "/images/LAVENDER LOVE/24.jpg",
      "/images/LAVENDER LOVE/25.jpg"
    ],
    "description": "A beautiful Lavender Love invitation card.",
    "details": {
      "size": "Standard",
      "material": "Premium Cardstock",
      "includes": "Main card and envelope"
    }
  },
  {
    "id": "lotus-lantern",
    "title": "Lotus Lantern",
    "category": "Wedding",
    "price": 7000,
    "image": "/images/LOTUS LANTERN/26.jpg",
    "gallery": [
      "/images/LOTUS LANTERN/26.jpg",
      "/images/LOTUS LANTERN/27.jpg",
      "/images/LOTUS LANTERN/28.jpg"
    ],
    "description": "A beautiful Lotus Lantern invitation card.",
    "details": {
      "size": "Standard",
      "material": "Premium Cardstock",
      "includes": "Main card and envelope"
    }
  },
  {
    "id": "lotus-mist",
    "title": "Lotus Mist",
    "category": "Wedding",
    "price": 2350,
    "image": "/images/LOTUS MIST/29.jpg",
    "gallery": [
      "/images/LOTUS MIST/29.jpg",
      "/images/LOTUS MIST/30.jpg",
      "/images/LOTUS MIST/31.jpg"
    ],
    "description": "A beautiful Lotus Mist invitation card.",
    "details": {
      "size": "Standard",
      "material": "Premium Cardstock",
      "includes": "Main card and envelope"
    }
  },
  {
    "id": "mangalya-yatra",
    "title": "Mangalya Yatra",
    "category": "Wedding",
    "price": 2750,
    "image": "/images/MANGALYA YATRA/32.jpg",
    "gallery": [
      "/images/MANGALYA YATRA/32.jpg",
      "/images/MANGALYA YATRA/33.jpg",
      "/images/MANGALYA YATRA/34.jpg"
    ],
    "description": "A beautiful Mangalya Yatra invitation card.",
    "details": {
      "size": "Standard",
      "material": "Premium Cardstock",
      "includes": "Main card and envelope"
    }
  },
  {
    "id": "mangalya-yatra-1",
    "title": "Mangalya Yatra",
    "category": "Wedding",
    "price": 2350,
    "image": "/images/MANGALYA YATRA/32.jpg",
    "gallery": [
      "/images/MANGALYA YATRA/32.jpg",
      "/images/MANGALYA YATRA/33.jpg",
      "/images/MANGALYA YATRA/34.jpg"
    ],
    "description": "A beautiful Mangalya Yatra invitation card.",
    "details": {
      "size": "Standard",
      "material": "Premium Cardstock",
      "includes": "Main card and envelope"
    }
  },
  {
    "id": "mangalyam",
    "title": "Mangalyam",
    "category": "Wedding",
    "price": 2550,
    "image": "/images/mangalyam/1.jpg",
    "gallery": [
      "/images/mangalyam/1.jpg",
      "/images/mangalyam/2.jpg",
      "/images/mangalyam/Untitled.jpg"
    ],
    "description": "A beautiful Mangalyam invitation card.",
    "details": {
      "size": "Standard",
      "material": "Premium Cardstock",
      "includes": "Main card and envelope"
    }
  },
  {
    "id": "mangalyam-1",
    "title": "Mangalyam",
    "category": "Wedding",
    "price": 2550,
    "image": "/images/mangalyam/1.jpg",
    "gallery": [
      "/images/mangalyam/1.jpg",
      "/images/mangalyam/2.jpg",
      "/images/mangalyam/Untitled.jpg"
    ],
    "description": "A beautiful Mangalyam invitation card.",
    "details": {
      "size": "Standard",
      "material": "Premium Cardstock",
      "includes": "Main card and envelope"
    }
  },
  {
    "id": "mangalyam-2",
    "title": "Mangalyam",
    "category": "Wedding",
    "price": 2550,
    "image": "/images/mangalyam/1.jpg",
    "gallery": [
      "/images/mangalyam/1.jpg",
      "/images/mangalyam/2.jpg",
      "/images/mangalyam/Untitled.jpg"
    ],
    "description": "A beautiful Mangalyam invitation card.",
    "details": {
      "size": "Standard",
      "material": "Premium Cardstock",
      "includes": "Main card and envelope"
    }
  },
  {
    "id": "mangalyam-square",
    "title": "Mangalyam Square",
    "category": "Wedding",
    "price": 2850,
    "image": "/images/mangalyam square/1.jpg",
    "gallery": [
      "/images/mangalyam square/1.jpg",
      "/images/mangalyam square/2.jpg",
      "/images/mangalyam square/Untitled.jpg"
    ],
    "description": "A beautiful Mangalyam Square invitation card.",
    "details": {
      "size": "Standard",
      "material": "Premium Cardstock",
      "includes": "Main card and envelope"
    }
  },
  {
    "id": "matt-and-gold",
    "title": "Matt and Gold",
    "category": "Wedding",
    "price": 3500,
    "image": "https://picsum.photos/seed/matt-and-gold/600/600",
    "gallery": [
      "https://picsum.photos/seed/matt-and-gold/600/600",
      "https://picsum.photos/seed/matt-and-gold-1/600/600"
    ],
    "description": "A beautiful Matt and Gold invitation card.",
    "details": {
      "size": "Standard",
      "material": "Premium Cardstock",
      "includes": "Main card and envelope"
    }
  },
  {
    "id": "matt-textured",
    "title": "Matt Textured",
    "category": "Wedding",
    "price": 2650,
    "image": "/images/matt textured/1.jpg",
    "gallery": [
      "/images/matt textured/1.jpg",
      "/images/matt textured/Untitled.jpg"
    ],
    "description": "A beautiful Matt Textured invitation card.",
    "details": {
      "size": "Standard",
      "material": "Premium Cardstock",
      "includes": "Main card and envelope"
    }
  },
  {
    "id": "mint-grace",
    "title": "Mint Grace",
    "category": "Wedding",
    "price": 3000,
    "image": "/images/mint grace/1.jpg",
    "gallery": [
      "/images/mint grace/1.jpg",
      "/images/mint grace/2.jpg",
      "/images/mint grace/3.jpg",
      "/images/mint grace/4.jpg",
      "/images/mint grace/5.jpg"
    ],
    "description": "A beautiful Mint Grace invitation card.",
    "details": {
      "size": "Standard",
      "material": "Premium Cardstock",
      "includes": "Main card and envelope"
    }
  },
  {
    "id": "moorthi-emerald",
    "title": "Moorthi & Emerald",
    "category": "Wedding",
    "price": 1000,
    "image": "https://picsum.photos/seed/moorthi-emerald/600/600",
    "gallery": [
      "https://picsum.photos/seed/moorthi-emerald/600/600",
      "https://picsum.photos/seed/moorthi-emerald-1/600/600"
    ],
    "description": "A beautiful Moorthi & Emerald invitation card.",
    "details": {
      "size": "Standard",
      "material": "Premium Cardstock",
      "includes": "Main card and envelope"
    }
  },
  {
    "id": "moorthi-ruby",
    "title": "Moorthi & Ruby",
    "category": "Wedding",
    "price": 3800,
    "image": "/images/moorthi-ruby/1.jpg",
    "gallery": [
      "/images/moorthi-ruby/1.jpg",
      "/images/moorthi-ruby/2.jpg"
    ],
    "description": "A beautiful Moorthi & Ruby invitation card.",
    "details": {
      "size": "Standard",
      "material": "Premium Cardstock",
      "includes": "Main card and envelope"
    }
  },
  {
    "id": "mural",
    "title": "Mural",
    "category": "Wedding",
    "price": 2650,
    "image": "https://picsum.photos/seed/mural/600/600",
    "gallery": [
      "https://picsum.photos/seed/mural/600/600",
      "https://picsum.photos/seed/mural-1/600/600"
    ],
    "description": "A beautiful Mural invitation card.",
    "details": {
      "size": "Standard",
      "material": "Premium Cardstock",
      "includes": "Main card and envelope"
    }
  },
  {
    "id": "mural-1",
    "title": "Mural",
    "category": "Wedding",
    "price": 2100,
    "image": "/images/mural1/1.jpg",
    "gallery": [
      "/images/mural1/1.jpg",
      "/images/mural1/2.jpg"
    ],
    "description": "A beautiful Mural invitation card.",
    "details": {
      "size": "Standard",
      "material": "Premium Cardstock",
      "includes": "Main card and envelope"
    }
  },
  {
    "id": "muted-meadow",
    "title": "Muted Meadow",
    "category": "Wedding",
    "price": 2300,
    "image": "/images/MUTED MEADOW/1.png",
    "gallery": [
      "/images/MUTED MEADOW/1.png",
      "/images/MUTED MEADOW/2.png",
      "/images/MUTED MEADOW/3.png",
      "/images/MUTED MEADOW/4.png"
    ],
    "description": "A beautiful Muted Meadow invitation card.",
    "details": {
      "size": "Standard",
      "material": "Premium Cardstock",
      "includes": "Main card and envelope"
    }
  },
  {
    "id": "noir-elegance",
    "title": "Noir Elegance",
    "category": "Wedding",
    "price": 2850,
    "image": "/images/NOIR ELEGANCE/1.png",
    "gallery": [
      "/images/NOIR ELEGANCE/1.png",
      "/images/NOIR ELEGANCE/2.png",
      "/images/NOIR ELEGANCE/3.png"
    ],
    "description": "A beautiful Noir Elegance invitation card.",
    "details": {
      "size": "Standard",
      "material": "Premium Cardstock",
      "includes": "Main card and envelope"
    }
  },
  {
    "id": "noor-mahal",
    "title": "Noor Mahal",
    "category": "Wedding",
    "price": 2850,
    "image": "/images/NOOR MAHAL/1.png",
    "gallery": [
      "/images/NOOR MAHAL/1.png",
      "/images/NOOR MAHAL/2.png"
    ],
    "description": "A beautiful Noor Mahal invitation card.",
    "details": {
      "size": "Standard",
      "material": "Premium Cardstock",
      "includes": "Main card and envelope"
    }
  },
  {
    "id": "noor-mahal-1",
    "title": "Noor Mahal",
    "category": "Wedding",
    "price": 2850,
    "image": "/images/NOOR MAHAL/1.png",
    "gallery": [
      "/images/NOOR MAHAL/1.png",
      "/images/NOOR MAHAL/2.png"
    ],
    "description": "A beautiful Noor Mahal invitation card.",
    "details": {
      "size": "Standard",
      "material": "Premium Cardstock",
      "includes": "Main card and envelope"
    }
  },
  {
    "id": "olive-bloom",
    "title": "Olive Bloom",
    "category": "Wedding",
    "price": 2350,
    "image": "/images/OLIVE BLOOM/1.png",
    "gallery": [
      "/images/OLIVE BLOOM/1.png",
      "/images/OLIVE BLOOM/2.png",
      "/images/OLIVE BLOOM/3.png"
    ],
    "description": "A beautiful Olive Bloom invitation card.",
    "details": {
      "size": "Standard",
      "material": "Premium Cardstock",
      "includes": "Main card and envelope"
    }
  },
  {
    "id": "olive-meadow",
    "title": "Olive Meadow",
    "category": "Wedding",
    "price": 2550,
    "image": "/images/OLIVE MEADOW/1.png",
    "gallery": [
      "/images/OLIVE MEADOW/1.png",
      "/images/OLIVE MEADOW/2.png",
      "/images/OLIVE MEADOW/3.png"
    ],
    "description": "A beautiful Olive Meadow invitation card.",
    "details": {
      "size": "Standard",
      "material": "Premium Cardstock",
      "includes": "Main card and envelope"
    }
  },
  {
    "id": "orchid-charm",
    "title": "Orchid Charm",
    "category": "Wedding",
    "price": 2550,
    "image": "/images/ORCHID CHARM/1.png",
    "gallery": [
      "/images/ORCHID CHARM/1.png",
      "/images/ORCHID CHARM/2.jpg",
      "/images/ORCHID CHARM/3.jpeg"
    ],
    "description": "A beautiful Orchid Charm invitation card.",
    "details": {
      "size": "Standard",
      "material": "Premium Cardstock",
      "includes": "Main card and envelope"
    }
  },
  {
    "id": "padma-milan",
    "title": "Padma Milan",
    "category": "Wedding",
    "price": 2350,
    "image": "/images/PADMA MILAN/1.png",
    "gallery": [
      "/images/PADMA MILAN/1.png",
      "/images/PADMA MILAN/2.png",
      "/images/PADMA MILAN/3.png"
    ],
    "description": "A beautiful Padma Milan invitation card.",
    "details": {
      "size": "Standard",
      "material": "Premium Cardstock",
      "includes": "Main card and envelope"
    }
  },
  {
    "id": "padma-vaibhavam",
    "title": "Padma Vaibhavam",
    "category": "Wedding",
    "price": 3500,
    "image": "/images/PADMA VAIBHAVAM/1.png",
    "gallery": [
      "/images/PADMA VAIBHAVAM/1.png",
      "/images/PADMA VAIBHAVAM/2.png",
      "/images/PADMA VAIBHAVAM/3.png"
    ],
    "description": "A beautiful Padma Vaibhavam invitation card.",
    "details": {
      "size": "Standard",
      "material": "Premium Cardstock",
      "includes": "Main card and envelope"
    }
  },
  {
    "id": "pearl-shimmer",
    "title": "Pearl Shimmer",
    "category": "Wedding",
    "price": 3100,
    "image": "/images/Pearl Shimmer/1.png",
    "gallery": [
      "/images/Pearl Shimmer/1.png",
      "/images/Pearl Shimmer/2.png"
    ],
    "description": "A beautiful Pearl Shimmer invitation card.",
    "details": {
      "size": "Standard",
      "material": "Premium Cardstock",
      "includes": "Main card and envelope"
    }
  },
  {
    "id": "pink-serenade",
    "title": "Pink Serenade",
    "category": "Wedding",
    "price": 6500,
    "image": "/images/PINK SERENADE/1.png",
    "gallery": [
      "/images/PINK SERENADE/1.png",
      "/images/PINK SERENADE/2.png",
      "/images/PINK SERENADE/3.png",
      "/images/PINK SERENADE/4.png",
      "/images/PINK SERENADE/5.png"
    ],
    "description": "A beautiful Pink Serenade invitation card.",
    "details": {
      "size": "Standard",
      "material": "Premium Cardstock",
      "includes": "Main card and envelope"
    }
  },
  {
    "id": "powder-blue",
    "title": "Powder Blue",
    "category": "Wedding",
    "price": 6500,
    "image": "/images/POWDER BLUE/1.jpeg",
    "gallery": [
      "/images/POWDER BLUE/1.jpeg",
      "/images/POWDER BLUE/2.jpeg",
      "/images/POWDER BLUE/3.jpeg",
      "/images/POWDER BLUE/4.jpeg"
    ],
    "description": "A beautiful Powder Blue invitation card.",
    "details": {
      "size": "Standard",
      "material": "Premium Cardstock",
      "includes": "Main card and envelope"
    }
  },
  {
    "id": "pure-elegance",
    "title": "Pure Elegance",
    "category": "Wedding",
    "price": 2450,
    "image": "https://picsum.photos/seed/pure-elegance/600/600",
    "gallery": [
      "https://picsum.photos/seed/pure-elegance/600/600",
      "https://picsum.photos/seed/pure-elegance-1/600/600"
    ],
    "description": "A beautiful Pure Elegance invitation card.",
    "details": {
      "size": "Standard",
      "material": "Premium Cardstock",
      "includes": "Main card and envelope"
    }
  },
  {
    "id": "rustic-reverie",
    "title": "Rustic Reverie",
    "category": "Wedding",
    "price": 2350,
    "image": "https://picsum.photos/seed/rustic-reverie/600/600",
    "gallery": [
      "https://picsum.photos/seed/rustic-reverie/600/600",
      "https://picsum.photos/seed/rustic-reverie-1/600/600"
    ],
    "description": "A beautiful Rustic Reverie invitation card.",
    "details": {
      "size": "Standard",
      "material": "Premium Cardstock",
      "includes": "Main card and envelope"
    }
  },
  {
    "id": "sacred-petals",
    "title": "Sacred Petals",
    "category": "Wedding",
    "price": 2750,
    "image": "https://picsum.photos/seed/sacred-petals/600/600",
    "gallery": [
      "https://picsum.photos/seed/sacred-petals/600/600",
      "https://picsum.photos/seed/sacred-petals-1/600/600"
    ],
    "description": "A beautiful Sacred Petals invitation card.",
    "details": {
      "size": "Standard",
      "material": "Premium Cardstock",
      "includes": "Main card and envelope"
    }
  },
  {
    "id": "sacred-petals-matt-finish",
    "title": "Sacred Petals - Matt Finish",
    "category": "Wedding",
    "price": 2650,
    "image": "https://picsum.photos/seed/sacred-petals-matt-finish/600/600",
    "gallery": [
      "https://picsum.photos/seed/sacred-petals-matt-finish/600/600",
      "https://picsum.photos/seed/sacred-petals-matt-finish-1/600/600"
    ],
    "description": "A beautiful Sacred Petals - Matt Finish invitation card.",
    "details": {
      "size": "Standard",
      "material": "Premium Cardstock",
      "includes": "Main card and envelope"
    }
  },
  {
    "id": "sacred-petals-textured",
    "title": "Sacred Petals - Textured",
    "category": "Wedding",
    "price": 2750,
    "image": "https://picsum.photos/seed/sacred-petals-textured/600/600",
    "gallery": [
      "https://picsum.photos/seed/sacred-petals-textured/600/600",
      "https://picsum.photos/seed/sacred-petals-textured-1/600/600"
    ],
    "description": "A beautiful Sacred Petals - Textured invitation card.",
    "details": {
      "size": "Standard",
      "material": "Premium Cardstock",
      "includes": "Main card and envelope"
    }
  },
  {
    "id": "sacred-steps",
    "title": "Sacred Steps",
    "category": "Wedding",
    "price": 2650,
    "image": "https://picsum.photos/seed/sacred-steps/600/600",
    "gallery": [
      "https://picsum.photos/seed/sacred-steps/600/600",
      "https://picsum.photos/seed/sacred-steps-1/600/600"
    ],
    "description": "A beautiful Sacred Steps invitation card.",
    "details": {
      "size": "Standard",
      "material": "Premium Cardstock",
      "includes": "Main card and envelope"
    }
  },
  {
    "id": "sacred-vows",
    "title": "Sacred Vows",
    "category": "Wedding",
    "price": 2550,
    "image": "https://picsum.photos/seed/sacred-vows/600/600",
    "gallery": [
      "https://picsum.photos/seed/sacred-vows/600/600",
      "https://picsum.photos/seed/sacred-vows-1/600/600"
    ],
    "description": "A beautiful Sacred Vows invitation card.",
    "details": {
      "size": "Standard",
      "material": "Premium Cardstock",
      "includes": "Main card and envelope"
    }
  },
  {
    "id": "sage-gold",
    "title": "Sage & Gold",
    "category": "Wedding",
    "price": 10700,
    "image": "/images/SAGE AND GOLD/SAGE & GOLD 1.png",
    "gallery": [
      "/images/SAGE AND GOLD/SAGE & GOLD 1.png",
      "/images/SAGE AND GOLD/SAGE & GOLD 2.png",
      "/images/SAGE AND GOLD/SAGE & GOLD 3.png",
      "/images/SAGE AND GOLD/SAGE & GOLD 4.png"
    ],
    "description": "A beautiful Sage & Gold invitation card.",
    "details": {
      "size": "Standard",
      "material": "Premium Cardstock",
      "includes": "Main card and envelope"
    },
    "featured": true
  },
  {
    "id": "sage-blossom",
    "title": "Sage Blossom",
    "category": "Wedding",
    "price": 2050,
    "image": "/images/SAGE BLOSSOM/SAGE BLOSSOM 1.png",
    "gallery": [
      "/images/SAGE BLOSSOM/SAGE BLOSSOM 1.png",
      "/images/SAGE BLOSSOM/SAGE BLOSSOM 2.png",
      "/images/SAGE BLOSSOM/SAGE BLOSSOM 3.png"
    ],
    "description": "A beautiful Sage Blossom invitation card.",
    "details": {
      "size": "Standard",
      "material": "Premium Cardstock",
      "includes": "Main card and envelope"
    }
  },
  {
    "id": "scarlet-garden",
    "title": "Scarlet Garden",
    "category": "Wedding",
    "price": 2450,
    "image": "/images/Scarlet Garden/Scarlet Garden 1.png",
    "gallery": [
      "/images/Scarlet Garden/Scarlet Garden 1.png",
      "/images/Scarlet Garden/Scarlet Garden 2.png",
      "/images/Scarlet Garden/Scarlet Garden 3.png"
    ],
    "description": "A beautiful Scarlet Garden invitation card.",
    "details": {
      "size": "Standard",
      "material": "Premium Cardstock",
      "includes": "Main card and envelope"
    }
  },
  {
    "id": "scarlet-grace",
    "title": "Scarlet Grace",
    "category": "Wedding",
    "price": 2000,
    "image": "/images/SCARLET GRACE/SCARLET GRACE 1.png",
    "gallery": [
      "/images/SCARLET GRACE/SCARLET GRACE 1.png",
      "/images/SCARLET GRACE/SCARLET GRACE 2.png"
    ],
    "description": "A beautiful Scarlet Grace invitation card.",
    "details": {
      "size": "Standard",
      "material": "Premium Cardstock",
      "includes": "Main card and envelope"
    }
  },
  {
    "id": "serene-marble",
    "title": "Serene Marble",
    "category": "Wedding",
    "price": 2850,
    "image": "/images/SERENE MARBLE/SERENE MARBLE 1.png",
    "gallery": [
      "/images/SERENE MARBLE/SERENE MARBLE 1.png",
      "/images/SERENE MARBLE/SERENE MARBLE 2.png",
      "/images/SERENE MARBLE/SERENE MARBLE 3.png"
    ],
    "description": "A beautiful Serene Marble invitation card.",
    "details": {
      "size": "Standard",
      "material": "Premium Cardstock",
      "includes": "Main card and envelope"
    }
  },
  {
    "id": "shubhamangalya",
    "title": "Shubhamangalya",
    "category": "Wedding",
    "price": 2850,
    "image": "/images/SHUBHAMANGALYA/SHUBHAMANGALYA 1.jpg",
    "gallery": [
      "/images/SHUBHAMANGALYA/SHUBHAMANGALYA 1.jpg",
      "/images/SHUBHAMANGALYA/SHUBHAMANGALYA 2.jpg",
      "/images/SHUBHAMANGALYA/SHUBHAMANGALYA 3.jpg",
      "/images/SHUBHAMANGALYA/SHUBHAMANGALYA 4.jpg",
      "/images/SHUBHAMANGALYA/SHUBHAMANGALYA 5.jpg"
    ],
    "description": "A beautiful Shubhamangalya invitation card.",
    "details": {
      "size": "Standard",
      "material": "Premium Cardstock",
      "includes": "Main card and envelope"
    }
  },
  {
    "id": "shubhamangalya-1",
    "title": "Shubhamangalya",
    "category": "Wedding",
    "price": 11000,
    "image": "/images/SHUBHAMANGALYA/SHUBHAMANGALYA 1.jpg",
    "gallery": [
      "/images/SHUBHAMANGALYA/SHUBHAMANGALYA 1.jpg",
      "/images/SHUBHAMANGALYA/SHUBHAMANGALYA 2.jpg",
      "/images/SHUBHAMANGALYA/SHUBHAMANGALYA 3.jpg",
      "/images/SHUBHAMANGALYA/SHUBHAMANGALYA 4.jpg",
      "/images/SHUBHAMANGALYA/SHUBHAMANGALYA 5.jpg"
    ],
    "description": "A beautiful Shubhamangalya invitation card.",
    "details": {
      "size": "Standard",
      "material": "Premium Cardstock",
      "includes": "Main card and envelope"
    }
  },
  {
    "id": "shubhamangalya-2",
    "title": "Shubhamangalya",
    "category": "Wedding",
    "price": 2850,
    "image": "/images/SHUBHAMANGALYA/SHUBHAMANGALYA 1.jpg",
    "gallery": [
      "/images/SHUBHAMANGALYA/SHUBHAMANGALYA 1.jpg",
      "/images/SHUBHAMANGALYA/SHUBHAMANGALYA 2.jpg",
      "/images/SHUBHAMANGALYA/SHUBHAMANGALYA 3.jpg",
      "/images/SHUBHAMANGALYA/SHUBHAMANGALYA 4.jpg",
      "/images/SHUBHAMANGALYA/SHUBHAMANGALYA 5.jpg"
    ],
    "description": "A beautiful Shubhamangalya invitation card.",
    "details": {
      "size": "Standard",
      "material": "Premium Cardstock",
      "includes": "Main card and envelope"
    }
  },
  {
    "id": "shubhamangalya-textured",
    "title": "Shubhamangalya - Textured",
    "category": "Wedding",
    "price": 2750,
    "image": "/images/SHUBHAMANGALYA-textured/SHUBHAMANGALYA - textured 1.png",
    "gallery": [
      "/images/SHUBHAMANGALYA-textured/SHUBHAMANGALYA - textured 1.png",
      "/images/SHUBHAMANGALYA-textured/SHUBHAMANGALYA - textured 2.png",
      "/images/SHUBHAMANGALYA-textured/SHUBHAMANGALYA - textured 3.png",
      "/images/SHUBHAMANGALYA-textured/SHUBHAMANGALYA - textured 4.png"
    ],
    "description": "A beautiful Shubhamangalya - Textured invitation card.",
    "details": {
      "size": "Standard",
      "material": "Premium Cardstock",
      "includes": "Main card and envelope"
    }
  },
  {
    "id": "shubhamangalya-collections",
    "title": "Shubhamangalya Collections",
    "category": "Wedding",
    "price": 2750,
    "image": "/images/SHUBHAMANGALYA COLLECTIONS2.png",
    "gallery": [
      "/images/SHUBHAMANGALYA COLLECTIONS2.png"
    ],
    "description": "A beautiful Shubhamangalya Collections invitation card.",
    "details": {
      "size": "Standard",
      "material": "Premium Cardstock",
      "includes": "Main card and envelope"
    }
  },
  {
    "id": "shubhamangalya-collections-1",
    "title": "Shubhamangalya Collections",
    "category": "Wedding",
    "price": 2850,
    "image": "/images/SHUBHAMANGALYA COLLECTIONS2.png",
    "gallery": [
      "/images/SHUBHAMANGALYA COLLECTIONS2.png"
    ],
    "description": "A beautiful Shubhamangalya Collections invitation card.",
    "details": {
      "size": "Standard",
      "material": "Premium Cardstock",
      "includes": "Main card and envelope"
    }
  },
  {
    "id": "shubhamangalya-collections-2",
    "title": "Shubhamangalya Collections",
    "category": "Wedding",
    "price": 2100,
    "image": "/images/SHUBHAMANGALYA COLLECTIONS2.png",
    "gallery": [
      "/images/SHUBHAMANGALYA COLLECTIONS2.png"
    ],
    "description": "A beautiful Shubhamangalya Collections invitation card.",
    "details": {
      "size": "Standard",
      "material": "Premium Cardstock",
      "includes": "Main card and envelope"
    }
  },
  {
    "id": "shubhamangalya-collections-3",
    "title": "Shubhamangalya Collections",
    "category": "Wedding",
    "price": 2750,
    "image": "/images/SHUBHAMANGALYA COLLECTIONS2.png",
    "gallery": [
      "/images/SHUBHAMANGALYA COLLECTIONS2.png"
    ],
    "description": "A beautiful Shubhamangalya Collections invitation card.",
    "details": {
      "size": "Standard",
      "material": "Premium Cardstock",
      "includes": "Main card and envelope"
    }
  },
  {
    "id": "subha-vivaha",
    "title": "Subha Vivaha",
    "category": "Wedding",
    "price": 3950,
    "image": "https://picsum.photos/seed/subha-vivaha/600/600",
    "gallery": [
      "https://picsum.photos/seed/subha-vivaha/600/600",
      "https://picsum.photos/seed/subha-vivaha-1/600/600"
    ],
    "description": "A beautiful Subha Vivaha invitation card.",
    "details": {
      "size": "Standard",
      "material": "Premium Cardstock",
      "includes": "Main card and envelope"
    }
  },
  {
    "id": "temple-border",
    "title": "Temple Border",
    "category": "Wedding",
    "price": 2650,
    "image": "/images/TEMPLE BORDER/TEMPLE BORDER 1.png",
    "gallery": [
      "/images/TEMPLE BORDER/TEMPLE BORDER 1.png",
      "/images/TEMPLE BORDER/TEMPLE BORDER 2.png"
    ],
    "description": "A beautiful Temple Border invitation card.",
    "details": {
      "size": "Standard",
      "material": "Premium Cardstock",
      "includes": "Main card and envelope"
    }
  },
  {
    "id": "temple-border-1",
    "title": "Temple Border",
    "category": "Wedding",
    "price": 2350,
    "image": "/images/TEMPLE BORDER/TEMPLE BORDER 1.png",
    "gallery": [
      "/images/TEMPLE BORDER/TEMPLE BORDER 1.png",
      "/images/TEMPLE BORDER/TEMPLE BORDER 2.png"
    ],
    "description": "A beautiful Temple Border invitation card.",
    "details": {
      "size": "Standard",
      "material": "Premium Cardstock",
      "includes": "Main card and envelope"
    }
  },
  {
    "id": "temple-borders",
    "title": "Temple Borders",
    "category": "Wedding",
    "price": 2650,
    "image": "/images/Temple Borders 1.png",
    "gallery": [
      "/images/Temple Borders 1.png",
      "/images/Temple Borders 2.png",
      "/images/Temple Borders 3.png"
    ],
    "description": "A beautiful Temple Borders invitation card.",
    "details": {
      "size": "Standard",
      "material": "Premium Cardstock",
      "includes": "Main card and envelope"
    }
  },
  {
    "id": "temple-grace",
    "title": "Temple Grace",
    "category": "Wedding",
    "price": 2750,
    "image": "/images/TEMPLE GRACE 1.png",
    "gallery": [
      "/images/TEMPLE GRACE 1.png",
      "/images/TEMPLE GRACE 2.png"
    ],
    "description": "A beautiful Temple Grace invitation card.",
    "details": {
      "size": "Standard",
      "material": "Premium Cardstock",
      "includes": "Main card and envelope"
    }
  },
  {
    "id": "temple-trails",
    "title": "Temple Trails",
    "category": "Wedding",
    "price": 5500,
    "image": "/images/TEMPLE TRAILS 1.png",
    "gallery": [
      "/images/TEMPLE TRAILS 1.png",
      "/images/TEMPLE TRAILS 2.png",
      "/images/TEMPLE TRAILS 3.png"
    ],
    "description": "A beautiful Temple Trails invitation card.",
    "details": {
      "size": "Standard",
      "material": "Premium Cardstock",
      "includes": "Main card and envelope"
    }
  },
  {
    "id": "timeless-elegance",
    "title": "Timeless Elegance",
    "category": "Wedding",
    "price": 2750,
    "image": "/images/TIMELESS ELEGANCE 1.png",
    "gallery": [
      "/images/TIMELESS ELEGANCE 1.png",
      "/images/TIMELESS ELEGANCE 2.png",
      "/images/TIMELESS ELEGANCE 3.png"
    ],
    "description": "A beautiful Timeless Elegance invitation card.",
    "details": {
      "size": "Standard",
      "material": "Premium Cardstock",
      "includes": "Main card and envelope"
    }
  },
  {
    "id": "translucent",
    "title": "Translucent",
    "category": "Wedding",
    "price": 8500,
    "image": "/images/TRANSLUCENT 1.png",
    "gallery": [
      "/images/TRANSLUCENT 1.png",
      "/images/TRANSLUCENT 3.png",
      "/images/TRANSLUCENT 4.png",
      "/images/TRANSLUCENT 5.png"
    ],
    "description": "A beautiful Translucent invitation card.",
    "details": {
      "size": "Standard",
      "material": "Premium Cardstock",
      "includes": "Main card and envelope"
    }
  },
  {
    "id": "tropical-vows",
    "title": "Tropical Vows",
    "category": "Wedding",
    "price": 2650,
    "image": "/images/TROPICAL VOWS 1.png",
    "gallery": [
      "/images/TROPICAL VOWS 1.png",
      "/images/TROPICAL VOWS 2.png",
      "/images/TROPICAL VOWS 3.png"
    ],
    "description": "A beautiful Tropical Vows invitation card.",
    "details": {
      "size": "Standard",
      "material": "Premium Cardstock",
      "includes": "Main card and envelope"
    }
  },
  {
    "id": "vaishnava-vivaha",
    "title": "Vaishnava Vivaha",
    "category": "Wedding",
    "price": 2750,
    "image": "/images/VAISHNAVA VIVAHA 2.png",
    "gallery": [
      "/images/VAISHNAVA VIVAHA 2.png",
      "/images/VAISHNAVA VIVAHA 3.png",
      "/images/VAISHNAVA VIVAHA 4.png"
    ],
    "description": "A beautiful Vaishnava Vivaha invitation card.",
    "details": {
      "size": "Standard",
      "material": "Premium Cardstock",
      "includes": "Main card and envelope"
    }
  },
  {
    "id": "vamant-sutra",
    "title": "Vamant Sutra",
    "category": "Wedding",
    "price": 10950,
    "image": "/images/VARNAM SUTRA1.png",
    "gallery": [
      "/images/VARNAM SUTRA1.png",
      "/images/VARNAM SUTRA2.png"
    ],
    "description": "A beautiful Vamant Sutra invitation card.",
    "details": {
      "size": "Standard",
      "material": "Premium Cardstock",
      "includes": "Main card and envelope"
    }
  },
  {
    "id": "vamant-sutra-green",
    "title": "Vamant Sutra Green",
    "category": "Wedding",
    "price": 10950,
    "image": "/images/VARNAM SUTRA GREEN1.png",
    "gallery": [
      "/images/VARNAM SUTRA GREEN1.png",
      "/images/VARNAM SUTRA GREEN2.png",
      "/images/VARNAM SUTRA GREEN3.png"
    ],
    "description": "A beautiful Vamant Sutra Green invitation card.",
    "details": {
      "size": "Standard",
      "material": "Premium Cardstock",
      "includes": "Main card and envelope"
    }
  },
  {
    "id": "vamant-sutra-maroon",
    "title": "Vamant Sutra Maroon",
    "category": "Wedding",
    "price": 10950,
    "image": "/images/VARNAM SUTRA MAROON1.png",
    "gallery": [
      "/images/VARNAM SUTRA MAROON1.png",
      "/images/VARNAM SUTRA MAROON2.png"
    ],
    "description": "A beautiful Vamant Sutra Maroon invitation card.",
    "details": {
      "size": "Standard",
      "material": "Premium Cardstock",
      "includes": "Main card and envelope"
    }
  },
  {
    "id": "vedic-vivaha",
    "title": "Vedic Vivaha",
    "category": "Wedding",
    "price": 2450,
    "image": "/images/VEDIC VIVAHA1.png",
    "gallery": [
      "/images/VEDIC VIVAHA1.png",
      "/images/VEDIC VIVAHA2.png",
      "/images/VEDIC VIVAHA3.png"
    ],
    "description": "A beautiful Vedic Vivaha invitation card.",
    "details": {
      "size": "Standard",
      "material": "Premium Cardstock",
      "includes": "Main card and envelope"
    }
  },
  {
    "id": "verdant-vows",
    "title": "Verdant Vows",
    "category": "Wedding",
    "price": 2550,
    "image": "/images/VERDANT VOWS1.png",
    "gallery": [
      "/images/VERDANT VOWS1.png",
      "/images/VERDANT VOWS2.png",
      "/images/VERDANT VOWS3.png"
    ],
    "description": "A beautiful Verdant Vows invitation card.",
    "details": {
      "size": "Standard",
      "material": "Premium Cardstock",
      "includes": "Main card and envelope"
    }
  },
  {
    "id": "vintage-roses",
    "title": "Vintage Roses",
    "category": "Wedding",
    "price": 2650,
    "image": "/images/Vintage Roses1.png",
    "gallery": [
      "/images/Vintage Roses1.png",
      "/images/Vintage Roses2.png"
    ],
    "description": "A beautiful Vintage Roses invitation card.",
    "details": {
      "size": "Standard",
      "material": "Premium Cardstock",
      "includes": "Main card and envelope"
    }
  },
  {
    "id": "vrindavan-vows",
    "title": "Vrindavan Vows",
    "category": "Wedding",
    "price": 2650,
    "image": "/images/VRINDAVAN VOWS1.png",
    "gallery": [
      "/images/VRINDAVAN VOWS1.png",
      "/images/VRINDAVAN VOWS3.png"
    ],
    "description": "A beautiful Vrindavan Vows invitation card.",
    "details": {
      "size": "Standard",
      "material": "Premium Cardstock",
      "includes": "Main card and envelope"
    }
  },
  {
    "id": "whispers-of-kerala",
    "title": "Whispers of Kerala",
    "category": "Wedding",
    "price": 2350,
    "image": "/images/Whispers of Kerala1.png",
    "gallery": [
      "/images/Whispers of Kerala1.png",
      "/images/Whispers of Kerala2.png"
    ],
    "description": "A beautiful Whispers of Kerala invitation card.",
    "details": {
      "size": "Standard",
      "material": "Premium Cardstock",
      "includes": "Main card and envelope"
    }
  },
  {
    "id": "willow",
    "title": "Willow",
    "category": "Wedding",
    "price": 2350,
    "image": "/images/WILLOW1.png",
    "gallery": [
      "/images/WILLOW1.png",
      "/images/WILLOW2.jpg",
      "/images/WILLOW3.jpg"
    ],
    "description": "A beautiful Willow invitation card.",
    "details": {
      "size": "Standard",
      "material": "Premium Cardstock",
      "includes": "Main card and envelope"
    }
  },
  {
    "id": "yellow-mellow",
    "title": "Yellow Mellow",
    "category": "Wedding",
    "price": 2200,
    "image": "/images/YELLOW MELLOW/YELLOW MELLOW1.png",
    "gallery": [
      "/images/YELLOW MELLOW/YELLOW MELLOW1.png",
      "/images/YELLOW MELLOW/YELLOW MELLOW2.png"
    ],
    "description": "A beautiful Yellow Mellow invitation card.",
    "details": {
      "size": "Standard",
      "material": "Premium Cardstock",
      "includes": "Main card and envelope"
    }
  }
];
