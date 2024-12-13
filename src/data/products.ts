import type { Product } from '../types/product';

export const products: Product[] = [
  {
    id: '1',
    title: 'KESSER® Loops 3 in 1 Stroller',
    description: '𝐉𝐔𝐄𝐆𝐎 𝐂𝐎𝐌𝐏𝐋𝐄𝐓𝐎 𝟑 𝐄𝐍 𝟏: Todo desde el nacimiento hasta la edad infantil. El cochecito 3 en 1 con una amplia gama de accesorios te ofrece la movilidad ideal desde el nacimiento de tu hijo.',
    price: 257.80,
    imageUrl: 'https://m.media-amazon.com/images/I/91WSH9DWxDL._AC_SX569_.jpg',
    amazonUrl: 'https://amzn.to/4ff6eG0',
    category: 'carriers'
  },
  {
    id: '2',
    title: 'Tope Puerta Protector Puertas',
    description: 'Piezas tope espuma que evita que las puertas cierren o den portazos',
    price: 6.99,
    imageUrl: 'https://m.media-amazon.com/images/I/51JZ3iJQPZL._AC_SX425_.jpg',
    amazonUrl: 'https://amzn.to/3ZAtIPX',
    category: 'safety'
  },
  {
    id: '3',
    title: 'Eco-Baby Cerraduras de armario para bebés',
    description: '20 pestillos de seguridad a prueba de niños, 3 llaves, cierre magnético a prueba de bebés para armarios, puertas, cajones',
    price: 25.99,
    imageUrl: 'https://m.media-amazon.com/images/I/81oW1F4SNHL._AC_SX679_PIbundle-20,TopRight,0,0_SH20_.jpg',
    amazonUrl: 'https://amzn.to/3ZwAbLP',
    category: 'safety'
  }
];

export const categories = ['carriers', 'safety', 'feeding', 'clothing', 'toys'];