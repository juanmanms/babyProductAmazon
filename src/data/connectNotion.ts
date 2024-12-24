import { Client } from "@notionhq/client";
import type { BlogPost } from "../types/blog";

const notion = new Client({ auth: import.meta.env.NOTION_API_KEY });

async function getDatabase(databaseId: string) {
  console.log("Getting database...", databaseId);

  try {
    const response = await notion.databases.query({
      database_id: databaseId,
    });
    return response.results;
  } catch (error) {
    console.error("Error al obtener datos de Notion:", error);
    throw error;
  }
}

function transformResultsToPosts(results: any[]): BlogPost[] {
  return results.map((result) => ({
    id: result.id || "",
    title:
      result.properties.title?.title.map((item) => item.plain_text).join("") ||
      "",
    slug:
      result.properties.slug?.rich_text
        .map((item) => item.plain_text)
        .join("") || "",
    excerpt:
      result.properties.excerpt?.rich_text
        .map((item) => item.plain_text)
        .join("") || "",
    content:
      result.properties.content?.rich_text
        .map((item) => item.plain_text)
        .join("") || "",
    publishDate: result.properties.publish_date?.date.start || "",
    author:
      result.properties.author?.people.map((item) => item.name).join("") || "",
    category: result.properties.category?.select?.name || "",
    imageUrl: result.properties.image_url?.url || "",
    metaDescription:
      result.properties.meta_description?.rich_text
        .map((item) => item.plain_text)
        .join("") || "",
    keywords:
      result.properties.tags?.multi_select.map((item) => item.name) || [],
    draft: result.properties.draft?.checkbox || false,
  }));
}

export async function getPosts(): Promise<BlogPost[]> {
  const results = await getDatabase(import.meta.env.NOTION_DATABASE_ID);
  return transformResultsToPosts(results);
}

export async function getPostBySlug(
  slug: string
): Promise<BlogPost | undefined> {
  const posts = await getPosts();
  return posts.find((post) => post.slug === slug);
}

//parte nueva

export async function getCategories(): Promise<string[]> {
  const posts = await getPosts();
  const categories = posts
    .map((post) => post.category)
    .filter(
      (category, index, self) => category && self.indexOf(category) === index
    );
  return categories;
}

export async function getTags(): Promise<string[]> {
  const posts = await getPosts();
  const tags = posts
    .flatMap((post) => post.keywords)
    .filter((tag, index, self) => tag && self.indexOf(tag) === index);
  return tags;
}
