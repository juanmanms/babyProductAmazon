export interface Product {
  id: string;
  title: string;
  description: string;
  price: number;
  imageUrl: string;
  amazonUrl: string;
  category: string;
  metaDescription?: string;
  keywords?: string[];
}

export interface CategoryMeta {
  id: string;
  name: string;
  title: string;
  description: string;
  keywords: string[];
  imageUrl: string;
}