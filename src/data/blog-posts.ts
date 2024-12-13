import type { BlogPost } from '../types/blog';

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'Guía Completa para Elegir el Mejor Portabebés',
    slug: 'guia-elegir-portabebes',
    excerpt: 'Descubre los factores más importantes a considerar al elegir un portabebés para tu bebé.',
    content: `
# Guía Completa para Elegir el Mejor Portabebés

Elegir el portabebés adecuado es una decisión importante para el confort de tu bebé y tu propia comodidad...

## Tipos de Portabebés

1. Fulares elásticos
2. Mochilas ergonómicas
3. Bandoleras

## Factores a Considerar

- Edad y peso del bebé
- Comodidad para los padres
- Clima y estación del año
- Facilidad de uso

## Recomendaciones

[Continúa con el contenido detallado del artículo...]
    `,
    publishDate: '2024-01-15',
    author: 'María García',
    category: 'carriers',
    imageUrl: '/images/blog/portabebes-guide.jpg',
    metaDescription: 'Guía completa sobre cómo elegir el mejor portabebés para tu bebé. Tipos, factores a considerar y recomendaciones.',
    keywords: ['portabebés', 'guía portabebés', 'elegir portabebés', 'tipos portabebés', 'mochila portabebé']
  }
];