import { Client } from "@notionhq/client";
import type { BlogPost } from "../types/blog";

const notion = new Client({ auth: import.meta.env.NOTION_API_KEY });

async function getDatabase(databaseId) {
  console.log("Getting database...", databaseId);

  try {
    const response = await notion.databases.query({
      database_id: databaseId,
    });
    return response.results;
  } catch (error) {
    console.error("Error al obtener datos de Notion:", error);
    console.error("Error message:", error.message);
    console.error("Error code:", error.code);
    throw error;
  }
}

function transformResultsToPosts(results) {
  return results.map((result) => ({
    id: result.id,
    title: result.properties.title.title
      .map((item) => item.plain_text)
      .join(""),
    slug: result.properties.slug.rich_text
      .map((item) => item.plain_text)
      .join(""),
    excerpt: result.properties.excerpt.rich_text
      .map((item) => item.plain_text)
      .join(""),
    content: result.properties.content.rich_text
      .map((item) => item.plain_text)
      .join(""),
    publishDate: result.properties.publish_date.date.start,
    author: result.properties.author.people.map((item) => item.name).join(""),
    category: result.properties.category.select.name,
    imageUrl: result.properties.image_url.url || "",
    metaDescription: result.properties.meta_description.rich_text
      .map((item) => item.plain_text)
      .join(""),
    keywords: result.properties.tags.multi_select.map((item) => item.name),
  }));
}

async function fetchAndTransformPosts(databaseId) {
  const results = await getDatabase(databaseId);
  if (results.length > 0) {
    return transformResultsToPosts(results);
  } else {
    console.log("No results found.");
    return [];
  }
}

const posts: BlogPost = await fetchAndTransformPosts(
  import.meta.env.NOTION_DATABASE_ID
);
export default posts;
