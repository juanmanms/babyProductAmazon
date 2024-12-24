export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  publishDate: string;
  author: string;
  category: string;
  imageUrl: string;
  metaDescription: string;
  keywords: string[];
  draft: boolean;
}
