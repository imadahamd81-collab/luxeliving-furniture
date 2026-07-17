import { Category, Product } from './types';

export const STORE_PHONE = "+923143912774";
export const WHATSAPP_NUMBER = "923143912774"; // without '+'

// Verified, working Unsplash furniture photo IDs (4K). Each category banner is
// name-matching; each product gets a distinct furniture image.
const u = (id: string) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&q=80&w=2400`;

export const CATEGORIES: Category[] = [
  {
    id: '1',
    name: 'Bedroom',
    slug: 'bedroom',
    image: u('1505693416388-ac5ce068fe85')
  },
  {
    id: '2',
    name: 'Chairs',
    slug: 'chairs',
    image: u('1722603037473-22866cddade7')
  },
  {
    id: '3',
    name: 'Sofa',
    slug: 'sofa',
    image: u('1554995207-c18c203602cb')
  },
  {
    id: '4',
    name: 'Dining',
    slug: 'dining',
    image: u('1727706981185-6fb205173958')
  },
  {
    id: '5',
    name: 'Office',
    slug: 'office',
    image: u('1765371512336-99c2b1c6975f')
  },
  {
    id: '6',
    name: 'Storage',
    slug: 'storage',
    image: u('1769690398735-88d840c9228c')
  }
];

export const PRODUCTS: Product[] = [
  /* ---------- BEDROOM (banner: 1616594039964) ---------- */
  {
    id: 'p4',
    name: 'Minimalist Bed Frame',
    categorySlug: 'bedroom',
    price: 900,
    discountPrice: 750,
    isPromo: true,
    isFeatured: true,
    description: 'Sleek bed frame made from premium ash wood with a low profile.',
    images: ['https://images.unsplash.com/photo-1560185893-a55cbc8c57e8?auto=format&fit=crop&q=80&w=800']
  },
  {
    id: 'p17',
    name: 'Upholstered Platform Bed',
    categorySlug: 'bedroom',
    price: 1100,
    isFeatured: true,
    description: 'Tufted linen platform bed with built‑in under‑bed storage.',
    images: ['https://images.unsplash.com/photo-1560184897-502a475f7a0d?auto=format&fit=crop&q=80&w=800']
  },
  {
    id: 'p18',
    name: 'Oak Slat Bed',
    categorySlug: 'bedroom',
    price: 780,
    discountPrice: 650,
    isPromo: true,
    description: 'Solid oak slatted bed frame with a warm natural finish.',
    images: ['https://images.unsplash.com/photo-1585145868143-c282f6f79eb4?auto=format&fit=crop&q=80&w=800']
  },
  {
    id: 'p19',
    name: 'Nightstand Duo',
    categorySlug: 'bedroom',
    price: 240,
    isFeatured: true,
    description: 'Set of two matching walnut nightstands with soft‑close drawers.',
    images: ['https://images.unsplash.com/photo-1648949416036-cf80a1335cce?auto=format&fit=crop&q=80&w=800']
  },
  {
    id: 'p20',
    name: 'Wardrobe Armoire',
    categorySlug: 'bedroom',
    price: 1300,
    discountPrice: 1090,
    isPromo: true,
    description: 'Spacious freestanding wardrobe with mirrored sliding doors.',
    images: ['https://images.unsplash.com/photo-1767800765630-f5603a47df68?auto=format&fit=crop&q=80&w=800']
  },
  {
    id: 'p21',
    name: 'Linen Bedding Set',
    categorySlug: 'bedroom',
    price: 180,
    isFeatured: true,
    description: 'Breathable stonewashed linen duvet and pillow set.',
    images: ['https://images.unsplash.com/photo-1759264244726-adde4e4318fc?auto=format&fit=crop&q=80&w=800']
  },

  /* ---------- CHAIRS (banner: 1592078615290) ---------- */
  {
    id: 'p5',
    name: 'Eames Style Lounge Chair',
    categorySlug: 'chairs',
    price: 600,
    isFeatured: true,
    description: 'Iconic mid‑century modern lounge chair for ultimate comfort.',
    images: ['https://images.unsplash.com/photo-1774927475366-7c4d31588d98?auto=format&fit=crop&q=80&w=800']
  },
  {
    id: 'p8',
    name: 'Rattan Accent Chair',
    categorySlug: 'chairs',
    price: 220,
    discountPrice: 180,
    isPromo: true,
    description: 'Handwoven rattan chair that brings a bohemian vibe.',
    images: ['https://images.unsplash.com/photo-1763265165715-27b5fbd6454f?auto=format&fit=crop&q=80&w=800']
  },
  {
    id: 'p13',
    name: 'Velvet Wingback Chair',
    categorySlug: 'chairs',
    price: 480,
    isFeatured: true,
    description: 'Plush velvet wingback chair that anchors any reading nook.',
    images: ['https://images.unsplash.com/photo-1754037783933-c25ff9f68f87?auto=format&fit=crop&q=80&w=800']
  },
  {
    id: 'p14',
    name: 'Scandinavian Dining Chair',
    categorySlug: 'chairs',
    price: 150,
    discountPrice: 120,
    isPromo: true,
    description: 'Light oak dining chair with a minimalist silhouette.',
    images: ['https://images.unsplash.com/photo-1770646403987-64cf5c08c870?auto=format&fit=crop&q=80&w=800']
  },
  {
    id: 'p15',
    name: 'Accent Armchair',
    categorySlug: 'chairs',
    price: 340,
    isFeatured: true,
    description: 'Cozy accent armchair with a gently reclined backrest.',
    images: ['https://images.unsplash.com/photo-1758915753395-a5dddea1d813?auto=format&fit=crop&q=80&w=800']
  },
  {
    id: 'p16',
    name: 'Swivel Lounge Chair',
    categorySlug: 'chairs',
    price: 520,
    discountPrice: 440,
    isPromo: true,
    description: '360° swivel lounge chair wrapped in textured chenille.',
    images: ['https://images.unsplash.com/photo-1496180470114-6ef490f3ff22?auto=format&fit=crop&q=80&w=800']
  },

  /* ---------- SOFA (banner: 1555041469) ---------- */
  {
    id: 'p1',
    name: 'Nordic Velvet Sofa',
    categorySlug: 'sofa',
    price: 1200,
    discountPrice: 899,
    isPromo: true,
    isFeatured: true,
    description: 'Luxurious velvet sofa with a minimalistic Nordic design.',
    images: ['https://images.unsplash.com/photo-1771876499965-72f0a702c45a?auto=format&fit=crop&q=80&w=800']
  },
  {
    id: 'p7',
    name: 'Cloud Modular Sofa',
    categorySlug: 'sofa',
    price: 2500,
    discountPrice: 2100,
    isPromo: true,
    isFeatured: true,
    description: 'The softest sofa you will ever sit on. Fully modular and configurable.',
    images: ['https://images.unsplash.com/photo-1772475385289-17fbb414ed74?auto=format&fit=crop&q=80&w=800']
  },
  {
    id: 'p10',
    name: 'Mid‑Century Leather Sofa',
    categorySlug: 'sofa',
    price: 2100,
    isFeatured: true,
    description: 'Hand‑stitched tan leather sofa with tapered wooden legs.',
    images: ['https://images.unsplash.com/photo-1569025672606-4fdc72fe3849?auto=format&fit=crop&q=80&w=800']
  },
  {
    id: 'p11',
    name: 'Bouclé Curved Sofa',
    categorySlug: 'sofa',
    price: 1650,
    discountPrice: 1390,
    isPromo: true,
    description: 'Sculptural curved sofa upholstered in soft bouclé fabric.',
    images: ['https://images.unsplash.com/photo-1776186243326-1d467b258232?auto=format&fit=crop&q=80&w=800']
  },
  {
    id: 'p9',
    name: 'Linen Sectional Sofa',
    categorySlug: 'sofa',
    price: 1800,
    discountPrice: 1540,
    isPromo: true,
    description: 'Spacious L‑shaped linen sectional perfect for family lounging.',
    images: ['https://images.unsplash.com/photo-1759722668253-1767030ad9b2?auto=format&fit=crop&q=80&w=800']
  },
  {
    id: 'p12',
    name: 'Compact Loveseat',
    categorySlug: 'sofa',
    price: 690,
    isFeatured: true,
    description: 'Space‑saving two‑seater loveseat for apartments and studios.',
    images: ['https://images.unsplash.com/photo-1771039753524-d0f963ab5c1e?auto=format&fit=crop&q=80&w=800']
  },

  /* ---------- DINING (banner: 1617806118233) ---------- */
  {
    id: 'p3',
    name: 'Oakwood Dining Table',
    categorySlug: 'dining',
    price: 1500,
    isFeatured: true,
    description: 'Solid oak dining table that seats up to 8 people comfortably.',
    images: ['https://images.unsplash.com/photo-1764076327046-fe35f955cba1?auto=format&fit=crop&q=80&w=800']
  },
  {
    id: 'p22',
    name: 'Marble Top Table',
    categorySlug: 'dining',
    price: 1900,
    discountPrice: 1620,
    isPromo: true,
    description: 'Elegant white marble dining table on a brushed brass base.',
    images: ['https://images.unsplash.com/photo-1644395128654-17d8644cd48b?auto=format&fit=crop&q=80&w=800']
  },
  {
    id: 'p23',
    name: 'Extendable Dining Set',
    categorySlug: 'dining',
    price: 1250,
    isFeatured: true,
    description: 'Extendable walnut table with six upholstered chairs.',
    images: ['https://images.unsplash.com/photo-1758977404096-20d813c73329?auto=format&fit=crop&q=80&w=800']
  },
  {
    id: 'p24',
    name: 'Round Bistro Table',
    categorySlug: 'dining',
    price: 420,
    discountPrice: 360,
    isPromo: true,
    description: 'Compact round bistro table ideal for breakfast corners.',
    images: ['https://images.unsplash.com/photo-1759393443772-23f534329593?auto=format&fit=crop&q=80&w=800']
  },
  {
    id: 'p25',
    name: 'Bench Seating',
    categorySlug: 'dining',
    price: 290,
    isFeatured: true,
    description: 'Cushioned wooden bench that pairs with any dining table.',
    images: ['https://images.unsplash.com/photo-1498503182468-3b51cbb6cb24?auto=format&fit=crop&q=80&w=800']
  },
  {
    id: 'p26',
    name: 'Glass Dining Table',
    categorySlug: 'dining',
    price: 980,
    discountPrice: 820,
    isPromo: true,
    description: 'Tempered glass top table with a sculptural steel frame.',
    images: ['https://images.unsplash.com/photo-1606744824163-985d376605aa?auto=format&fit=crop&q=80&w=800']
  },

  /* ---------- OFFICE (banner: 1524758631624) ---------- */
  {
    id: 'p2',
    name: 'Ergonomic Office Chair',
    categorySlug: 'office',
    price: 450,
    discountPrice: 380,
    isPromo: true,
    isFeatured: true,
    description: 'Designed for long working hours with lumbar support.',
    images: ['https://images.unsplash.com/photo-1758607010203-d6b7f6ec9262?auto=format&fit=crop&q=80&w=800']
  },
  {
    id: 'p27',
    name: 'Standing Desk',
    categorySlug: 'office',
    price: 640,
    isFeatured: true,
    description: 'Electric height‑adjustable standing desk with memory presets.',
    images: ['https://images.unsplash.com/photo-1678733404598-d56e3d232483?auto=format&fit=crop&q=80&w=800']
  },
  {
    id: 'p28',
    name: 'Executive Leather Chair',
    categorySlug: 'office',
    price: 720,
    discountPrice: 600,
    isPromo: true,
    description: 'High‑back executive chair in full‑grain black leather.',
    images: ['https://images.unsplash.com/photo-1605635543237-e9c8c472d09a?auto=format&fit=crop&q=80&w=800']
  },
  {
    id: 'p29',
    name: 'Writing Desk',
    categorySlug: 'office',
    price: 390,
    isFeatured: true,
    description: 'Slim oak writing desk with a hidden cable management tray.',
    images: ['https://images.unsplash.com/photo-1702561667986-113f3a9e06bc?auto=format&fit=crop&q=80&w=800']
  },
  {
    id: 'p30',
    name: 'Bookshelf Divider',
    categorySlug: 'office',
    price: 460,
    discountPrice: 390,
    isPromo: true,
    description: 'Open‑back bookshelf that doubles as a room divider.',
    images: ['https://images.unsplash.com/photo-1779978073465-31dc91eeb9b0?auto=format&fit=crop&q=80&w=800']
  },
  {
    id: 'p31',
    name: 'Task Lamp',
    categorySlug: 'office',
    price: 90,
    isFeatured: true,
    description: 'Adjustable LED task lamp with a warm dimmable glow.',
    images: ['https://images.unsplash.com/photo-1774647002345-5301814a66bb?auto=format&fit=crop&q=80&w=800']
  },

  /* ---------- STORAGE (banner: 1595428774223) ---------- */
  {
    id: 'p6',
    name: 'Industrial Bookcase',
    categorySlug: 'storage',
    price: 350,
    isFeatured: true,
    description: 'Sturdy industrial‑style bookcase with metal frames and wood shelves.',
    images: ['https://images.unsplash.com/photo-1724526788521-b1da0cfc1aea?auto=format&fit=crop&q=80&w=800']
  },
  {
    id: 'p32',
    name: 'Rattan Storage Cabinet',
    categorySlug: 'storage',
    price: 410,
    discountPrice: 350,
    isPromo: true,
    description: 'Woven rattan cabinet with rattan‑front sliding doors.',
    images: ['https://images.unsplash.com/photo-1757087824089-bdb33ecc3439?auto=format&fit=crop&q=80&w=800']
  },
  {
    id: 'p33',
    name: 'Modular Shelving',
    categorySlug: 'storage',
    price: 540,
    isFeatured: true,
    description: 'Stackable modular cube shelving for any room layout.',
    images: ['https://images.unsplash.com/photo-1752061143360-623e42941ab4?auto=format&fit=crop&q=80&w=800']
  },
  {
    id: 'p34',
    name: 'Sideboard Buffet',
    categorySlug: 'storage',
    price: 880,
    discountPrice: 740,
    isPromo: true,
    description: 'Mid‑century sideboard with cane‑detailed cabinet doors.',
    images: ['https://images.unsplash.com/photo-1721385675060-9982ec72385e?auto=format&fit=crop&q=80&w=800']
  },
  {
    id: 'p35',
    name: 'Wall Grid Shelf',
    categorySlug: 'storage',
    price: 160,
    isFeatured: true,
    description: 'Minimal wall‑mounted grid shelf for plants and books.',
    images: ['https://images.unsplash.com/photo-1683861761877-93fd0ca01709?auto=format&fit=crop&q=80&w=800']
  },
  {
    id: 'p36',
    name: 'Linen Storage Ottoman',
    categorySlug: 'storage',
    price: 220,
    discountPrice: 185,
    isPromo: true,
    description: 'Padded linen ottoman with hidden storage for throws.',
    images: ['https://images.unsplash.com/photo-1593195150503-8e2a51338ff2?auto=format&fit=crop&q=80&w=800']
  }
];
