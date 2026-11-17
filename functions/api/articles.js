/**
 * Cloudflare Pages Function for GET /api/articles.
 *
 * In Cloudflare Pages, bind the D1 database named "garden_db" to this project
 * with the variable name "GARDEN_DB".
 */
export async function onRequestGet({ env }) {
  const { results } = await env.GARDEN_DB
    .prepare(
      `SELECT id, slug, title, excerpt, category, image,
              read_time AS readTime, published_at AS publishedAt
       FROM articles
       WHERE featured = 1
       ORDER BY published_at DESC, id DESC
       LIMIT 4`
    )
    .all();

  return Response.json(results, {
    headers: {
      'Cache-Control': 'public, max-age=300',
    },
  });
}
