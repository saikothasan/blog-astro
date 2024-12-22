import { getCollection } from 'astro:content';

export async function GET({ site }) {
  const posts = await getCollection('posts');
  
  return new Response(
    `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${posts
        .map(
          (post) => `
        <url>
          <loc>${new URL(`/blog/${post.slug}`, site).href}</loc>
          <lastmod>${post.data.updatedDate || post.data.pubDate}</lastmod>
        </url>
      `
        )
        .join('')}
    </urlset>`,
    {
      headers: {
        'Content-Type': 'application/xml',
      },
    }
  );
}