import type { Product } from '../types/product';

export const products: Product[] = [
  {
    id: '1',
    title: 'Baby Carrier',
    description: 'Ergonomic baby carrier with multiple carrying positions',
    price: 49.99,
    imageUrl: 'https://placehold.co/400x300',
    amazonUrl: 'https://amazon.com/your-affiliate-link',
    category: 'carriers'
  },
  {
    id: '2',
    title: 'Baby Monitor',
    description: 'Digital baby monitor with night vision and two-way audio',
    price: 79.99,
    imageUrl: 'https://placehold.co/400x300',
    amazonUrl: 'https://amazon.com/your-affiliate-link',
    category: 'safety'
  }
];

export const categories = ['carriers', 'safety', 'feeding', 'clothing', 'toys'];