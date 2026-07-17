export interface Category {
  id: string;
  name: string;
  slug: string;
  image: string;
}

export interface Product {
  id: string;
  name: string;
  categorySlug: string;
  price: number;
  discountPrice?: number;
  description: string;
  images: string[];
  isFeatured?: boolean;
  isPromo?: boolean;
}

export interface CustomOrderForm {
  name: string;
  phone: string;
  email: string;
  message: string;
  images: FileList | null;
}